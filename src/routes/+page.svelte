<script>
	import Navigator from '$lib/components/header/Navigator.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navigator />
<main class="content-grid">
	<section class="grid place-content-center w-full h-dvh full-width bg-secondary-200">
		<div class="hero bg-center bg-cover bg-prime-200 bg-blend-difference max-w-full"></div>
	</section>
	<section class="full-width bg-prime-200 py-16">
		<div class="grid grid-cols-1 md:grid-cols-3 px-8 gap-x-8 py-16 gap-y-16 md:gap-y-0">
			<div class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center">
				<h2 class="">What?</h2>
				<p class="tagline">MAKING GAMES SOCIAL</p>
			</div>
			<div class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center">
				<h2 class="">Whom?</h2>
				<p class="tagline">NOT YOUR ORDINARY COMPANY</p>
			</div>
			<div class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center">
				<h2 class="">How?</h2>
				<p class="tagline">BUTTON MASHING</p>
			</div>
		</div>
	</section>
</main>

<style>
	.hero {
		max-height: 70dvh;
		aspect-ratio: 4/3;
		width: 100vw;
		background-image: url('/fingers.webp');
		background-repeat: no-repeat;
	}
</style>
