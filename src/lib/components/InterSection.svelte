<script lang="ts">
	import type { Snippet } from 'svelte';
	import global from '$lib/components/global.svelte';

	interface Props {
		children: Snippet;
		bg: 'dark' | 'light';
		style?: string;
		margin?: { top: number; bottom: string; left: number; right: number };
	}
	let {
		children,
		bg,
		style,
		margin = { top: 0, bottom: '-99%', left: 0, right: 0 }
	}: Props = $props();
	let layout = $state<string>('bg-prime-200 text-secondary-200');
	let el: HTMLElement;
	let steps = 100;
	let percent = $state(0);
	let observer = null;

	function intersectPercent(entries) {
		entries.forEach((entry) => {
			percent = entry.intersectionRatio; //Math.round(Math.ceil(entry.intersectionRatio * 100));
			if (entry.isIntersecting) global.setAmbience(bg);
		});
	}

	function stepsToThreshold(steps) {
		return [...Array(steps).keys()].map((n) => n / 100);
	}
	$effect(() => {
		if (bg === 'light') layout = 'bg-secondary-200 text-prime-200';
		const options = {
			rootMargin: `${margin.top}px ${margin.right}px ${margin.bottom} ${margin.left}px`,
			threshold: stepsToThreshold(steps)
		};
		observer = new IntersectionObserver(intersectPercent, options);
		observer.observe(el);
	});
</script>

<section
	bind:this={el}
	class={`content-grid full-width py-16 flex flex-col gap-12 ${layout} ${style}`}
>
	{@render children()}
</section>
