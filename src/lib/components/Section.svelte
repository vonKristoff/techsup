<script lang="ts">
	import InterSection from './InterSection.svelte';
	import type { Snippet } from 'svelte';
	let {
		bg = 'dark',
		img,
		paddingTop = true,
		children,
		style,
		tile = false
	}: {
		img?: string;
		paddingTop?: boolean;
		style?: string;
		bg: 'dark' | 'light';
		tile?: boolean;
		children: Snippet;
	} = $props();
</script>

<InterSection {bg} {style} {paddingTop} {img} {tile}>
	{@render children()}
</InterSection>
