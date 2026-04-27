<script lang="ts">
	import type { Snippet } from 'svelte';
	import global from '$lib/components/global.svelte';

	interface Props {
		tile?: boolean;
		children: Snippet;
		bg: 'dark' | 'light';
		paddingTop: boolean;
		style?: string;
		img?: string;
		margin?: { top: number; bottom: string; left: number; right: number };
	}
	let {
		children,
		paddingTop = true,
		bg,
		style,
		img,
		tile = false,
		margin = { top: 0, bottom: '-99%', left: 0, right: 0 }
	}: Props = $props();
	let layout = $state<string>('bg-prime-100');
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
		if (bg === 'light') layout = 'bg-secondary-200';
		const options = {
			rootMargin: `${margin.top}px ${margin.right}px ${margin.bottom} ${margin.left}px`,
			threshold: stepsToThreshold(steps)
		};
		observer = new IntersectionObserver(intersectPercent, options);
		observer.observe(el);
	});
	$effect(() => {
		if (img) {
			el.style.backgroundImage = `url(${img})`;
		}
	});
</script>

<section
	data-tile={tile}
	bind:this={el}
	class={`content-grid full-width flex flex-col gap-12 ${layout} ${style} ${paddingTop ? 'py-16' : 'pb-16'}`}
>
	{@render children()}
</section>

<style>
	[data-tile='true'] {
		background-color: var(--new-0);
		mask-image: url('/ts-bg-tile.svg');
		mask-repeat: repeat;
		/* mask-size: 40px 40px; */
		width: 100%;
		height: 100%;
	}
	section {
		isolation: isolate;
		background-position: center;
		background-size: contain;
		/* background-blend-mode: lighten; */
	}
</style>
