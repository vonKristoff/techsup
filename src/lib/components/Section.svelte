<script lang="ts">
	import InterSection from './InterSection.svelte';
	import type { Snippet } from 'svelte';
	let {
		bg = 'dark',
		children,
		style
	}: { style?: string; bg: 'dark' | 'light'; children: Snippet } = $props();
</script>

<InterSection {bg} {style}>
	{@render children()}
</InterSection>
