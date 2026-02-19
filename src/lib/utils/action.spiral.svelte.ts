const NORMAL = 0.36;

export function spiralise(
	node: SVGElement,
	{ numRings = 134, numWaves = 8 }: { numRings?: number; numWaves?: number } = {}
) {
	const NS = 'http://www.w3.org/2000/svg';

	let time = 1000;
	let cx = 0;
	let cy = 0;
	let rects: any[] = [];
	let rafId: number;
	let destroyed = false;
	let customScaler = 1.5;

	function updateCenter() {
		// setAttribute dimensions take priority, fall back to bounding rect
		cx = node.getBoundingClientRect().width / 2;
		cy = node.getBoundingClientRect().height / 2;
	}

	function hsl(h: number, s: number, l: number, a = 1) {
		return `hsla(${h},${s}%,${l}%,${a})`;
	}
	function getStrokeScale(): number {
		const w = node.getBoundingClientRect().width;
		if (w <= 300) return 0.25;
		if (w >= 1280) return 1.5;
		// lerp between 0.25 and 1.5 across the 300–1280 range
		return 0.25 + ((w - 300) / (1280 - 300)) * (1.5 - 0.25);
	}

	function buildScene() {
		node.innerHTML = '';
		rects = [];
		updateCenter();

		// Glow filter
		const defs = document.createElementNS(NS, 'defs');
		const filter = document.createElementNS(NS, 'filter');
		filter.setAttribute('id', 'glow');
		filter.setAttribute('x', '-50%');
		filter.setAttribute('y', '-50%');
		filter.setAttribute('width', '200%');
		filter.setAttribute('height', '200%');
		const blur = document.createElementNS(NS, 'feGaussianBlur');
		blur.setAttribute('stdDeviation', '2.5');
		blur.setAttribute('result', 'coloredBlur');
		const merge = document.createElementNS(NS, 'feMerge');
		['coloredBlur', 'SourceGraphic'].forEach((n) => {
			const node = document.createElementNS(NS, 'feMergeNode');
			if (n !== 'SourceGraphic') node.setAttribute('in', n);
			merge.appendChild(node);
		});
		// filter.appendChild(blur);
		// filter.appendChild(merge);
		// defs.appendChild(filter);
		node.appendChild(defs);

		let skipRings = 1;

		for (let w = 0; w < numWaves; w++) {
			const SPIRAL_OFFSET = 3; // 2 (normal spiral)
			const waveAngleOffset = (w / numWaves) * Math.PI * SPIRAL_OFFSET;
			const hue = (w / numWaves) * 360;

			for (let r = skipRings; r < numRings; r++) {
				const t = r / numRings;
				// Scale radius to SVG size so it fills whatever dimensions are given
				const maxRadius = Math.min(cx) * 0.9;
				const radius = (8 / 300) * maxRadius + t * maxRadius;
				const size = 6 + t * 22;
				const spiralAngle = waveAngleOffset + t * Math.PI * 6;

				const opacity = 0.15 + 0.75 * Math.sin(t * Math.PI);
				const saturation = 70 + 20 * t;

				const rect = document.createElementNS(NS, 'rect');
				rect.setAttribute('fill', 'none');
				rect.setAttribute(
					'stroke-width',
					String(Math.max(0.5, 1.5 * (2 - t * 0.5) * getStrokeScale()))
				);
				node.appendChild(rect);

				rects.push({
					el: rect,
					size,
					t,
					hue,
					saturation,
					opacity,
					waveIndex: w,
					spiralAngle,
					radius // computed fresh from current cx/cy
				});
			}
		}
	}

	function animate(ts: number) {
		if (destroyed) return;
		time = ts * 0.001 * NORMAL;

		for (const d of rects) {
			const { el, waveIndex, t, hue, saturation, spiralAngle, radius } = d;

			const animatedSpiralAngle = spiralAngle + time * 0.7 * (1 - t * 0.3);
			const x = Math.cos(animatedSpiralAngle) * radius;
			const y = Math.sin(animatedSpiralAngle) * radius;
			const rotDeg = (animatedSpiralAngle * 180) / Math.PI + time * 20 * (t + 0.2);

			const scalePulse = 1 + 0.15 * Math.sin(time * 2 - t * Math.PI * 4);
			const s = d.size * scalePulse * customScaler;

			el.setAttribute('x', String(-s / 2));
			el.setAttribute('y', String(-s / 2));
			el.setAttribute('width', String(s));
			el.setAttribute('height', String(s));

			const lightness = 30 * (0.5 + 0.5 * Math.cos(animatedSpiralAngle + time));
			const alpha = d.opacity * (0.6 + 0.4 * Math.sin(time * 1.5 + t * 5 + waveIndex));

			el.setAttribute('stroke', hsl(hue + t * 40, saturation, lightness, alpha));
			el.setAttribute('transform', `translate(${cx + x},${cy + y}) rotate(${rotDeg})`);
		}

		rafId = requestAnimationFrame(animate);
	}

	const observer: ResizeObserver = new ResizeObserver(onResize);
	observer.observe(node);

	function onResize() {
		updateCenter();
		buildScene();
	}
	// use: fires synchronously during mount — defer one tick so the SVG
	// has been inserted into the DOM and has its layout dimensions

	buildScene();
	rafId = requestAnimationFrame(animate);

	return {
		destroy() {
			destroyed = true;
			cancelAnimationFrame(rafId);
			observer.disconnect();
			node.innerHTML = '';
			console.log('GOODBY');
		}
		// update(params: { numRings?: number; numWaves?: number }) {
		// 	numRings = params.numRings ?? numRings;
		// 	numWaves = params.numWaves ?? numWaves;
		// 	buildScene();
		// }
	};
}
