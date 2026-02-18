// src/lib/actions/inView.svelte.js
export function inView(node, { className = 'in-view', threshold = 0.1 } = {}) {
	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.classList.add(className);
				} else {
					node.classList.remove(className);
				}
			},
			{ threshold }
		);

		observer.observe(node);

		return () => observer.disconnect();
	});
}
