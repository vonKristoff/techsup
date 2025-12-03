<script>
	import { dev } from '$app/environment';
	const SITE_URL = 'https://fingers.xyz';
	let { description, title } = $props();
</script>

{#if !dev}
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Open Graph for social media -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{SITE_URL}/meta.jpg" />
	<meta property="og:url" content={SITE_URL} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{SITE_URL}/meta.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href={SITE_URL} />
{/if}
