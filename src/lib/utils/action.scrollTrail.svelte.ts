export function scrollTrail(node: HTMLElement, options: { spacing?: number; scrollFactor?: number; pool?: number } = {}) {
	const { spacing = 10, scrollFactor = 1, pool = 60 } = options;

	const svg = node.querySelector('svg');
	if (!svg) return;

	const origin = node.getBoundingClientRect().top + window.scrollY;
	let clones: SVGElement[] = [];
	let ticking = false;

	function update() {
		const dist = Math.max(0, window.scrollY - origin) * scrollFactor;
		const numClones = Math.min(Math.floor(dist / spacing), pool);

		while (clones.length < numClones) {
			const clone = svg.cloneNode(true) as SVGElement;
			clone.removeAttribute('id');
			clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
			clone.style.position = 'absolute';
			clone.style.top = '0';
			clone.style.left = '0';
			clone.style.width = '100%';
			clone.style.height = '100%';
			clone.style.pointerEvents = 'none';
			clone.style.zIndex = String(-clones.length - 1);
			node.appendChild(clone);
			clones.push(clone);
		}

		while (clones.length > numClones) {
			clones.pop()?.remove();
		}

		clones.forEach((clone, i) => {
			clone.style.transform = `translateY(${(i + 1) * spacing}px)`;
		});

		ticking = false;
	}

	function onScroll() {
		if (!ticking) {
			requestAnimationFrame(update);
			ticking = true;
		}
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	update();

	return {
		update(newOptions: { spacing?: number; scrollFactor?: number; pool?: number }) {
			Object.assign(options, newOptions);
		},
		destroy() {
			window.removeEventListener('scroll', onScroll);
			clones.forEach(c => c.remove());
		}
	};
}
