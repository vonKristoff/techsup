<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		bg,
		color,
		tileSize = '250px 150px',
		paddingTop = true,
		style,
		children
	}: {
		bg?: string;
		color?: string;
		tileSize?: string;
		paddingTop?: boolean;
		style?: string;
		children: Snippet;
	} = $props();
</script>

<section
	class={`content-grid full-width flex flex-col gap-12 ${bg} ${style} ${paddingTop ? 'py-16' : 'pb-16'}`}
	style={`${color ? `--tile-color: ${color};` : ''}--tile-size: ${tileSize}`}
>
	{@render children()}
</section>

<style>
	section {
		position: relative;
		isolation: isolate;
		background-position: center;
		background-size: contain;
	}

	section::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: var(--tile-color);
		mask-image: url('/ts-bg-tile.svg');
		mask-repeat: repeat;
		mask-size: var(--tile-size);
		-webkit-mask-image: url('/ts-bg-tile.svg');
		-webkit-mask-repeat: repeat;
		-webkit-mask-size: var(--tile-size);
		pointer-events: none;
		z-index: -1;
	}
</style>
