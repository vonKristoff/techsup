export function parallax(node: HTMLElement, speed = 0.3) {
	const origin = node.getBoundingClientRect().top + window.scrollY;
	let ticking = false;

	function update() {
		const offset = (origin - window.scrollY) * speed;
		node.style.setProperty('--parallax-y', `${offset}px`);
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
		destroy() {
			window.removeEventListener('scroll', onScroll);
		}
	};
}
