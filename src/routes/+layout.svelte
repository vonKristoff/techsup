<script lang="ts">
	import '../styles/index.css';
	import favicon from '$lib/assets/favicon.svg';
	import Meta from '$lib/layout/meta.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<Meta
		title="FOB"
		description="Loving story driven content, and new ways to explore data... @threejjjs Interactive Tech - Amazing UX/UI experiences"
	/>
</svelte:head>

{@render children()}
<Footer />
