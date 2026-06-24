<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/SUP_favicon_spaced.svg';
	import Meta from '$lib/layout/meta.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />“
	<Meta />
</svelte:head>

{@render children()}
<Footer />
