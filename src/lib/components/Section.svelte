<script lang="ts">
	import InterSection from './InterSection.svelte';
	import type { Snippet } from 'svelte';
	let {
		bg = 'dark',
		img,
		paddingTop = true,
		children,
		style
	}: {
		img?: string;
		paddingTop?: boolean;
		style?: string;
		bg: 'dark' | 'light';
		children: Snippet;
	} = $props();
</script>

<InterSection {bg} {style} {paddingTop} {img}>
	{@render children()}
</InterSection>
