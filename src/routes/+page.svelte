<script>
	import Navigator from '$lib/components/header/Navigator.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<Navigator />
<main class="content-grid">
	<section class="grid place-content-center full-width h-dvh bg-secondary-200">
		<div class="hero bg-center bg-cover bg-secondary-200 bg-blend-lighten max-w-full"></div>
		<h3 class="text-neutral-200 text-center tracking-wider">who ya gonna call?</h3>
	</section>
	<section class="full-width content-grid bg-prime-200 py-16">
		<div class="breakout flex flex-col gap-12">
			<div class="flex flex-col [&>p]:m-0 text-8xl font-primary items-center">
				<p class="">Making real world</p>
				<p>physical games</p>
				<p class="text-4xl font-secondary font-light capitalize">with additional digital powers</p>
			</div>
			<div class="flex flex-col text-xl">
				<p class="">We believe in the power of social gaming, and leaving the metaverse at home.</p>
				<p>
					<span class="font-tertiary">Koleider</span> is proudly our first game, and it will be of many
					as we begin on our quest to fill up our own arcade.
				</p>
			</div>
			<p class="italic text-3xl self-center">
				All it takes is a <strong>button</strong> and some imagination.
			</p>
			<div class="flex flex-col text-xl gap-2">
				<p>So please! help us … Join us! on our quest to get people gaming in public spaces.</p>
				<p>
					Games are for all of us. We want to put shade on gambling and touch screens. Getting out
					there and playing together whatever your age, can be where we relax and make friends, and
					most importantly have fun.
				</p>
				<p class="self-end">Power in simplicity.</p>
			</div>
		</div>
	</section>
	<section class="full-width bg-secondary-200 py-16 text-prime-200">
		<h3 class="text-center text-8xl">BOOST YOUR BUSINESS</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 px-8 gap-x-8 py-16 gap-y-16 md:gap-y-0">
			<div class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center">
				<!-- <h2 class="">BOOST</h2> -->
				<!-- <p class="tagline">MAKING GAMES SOCIAL</p> -->
				<p>MAKING YOUR VENUE MORE SOCIAL</p>
			</div>
			<div class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center">
				<!-- <h2 class="">YOUR</h2> -->
				<p>FUN FUN FUN</p>
				<!-- <p class="tagline">NOT YOUR ORDINARY COMPANY</p> -->
			</div>
			<div class="text-2xl grid place-content-center [&>p]:font-secondary font-light *:text-center">
				<p>CREATING SHARABLE EXPERIENCES</p>
				<!-- <h2 class="">BUSINESS</h2> -->
				<!-- <p class="tagline">A LOT OF BUTTON MASHING</p> -->
			</div>
		</div>
	</section>
	<section class="full-width bg-prime-200 py-16 flex flex-col gap-12">
		<div class="flex flex-col items-center">
			<div class="flex text-8xl">
				<Icon ctx="zap" />
				<h3 class="font-tertiary text-6xl md:text-8xl">LEADERBOARD IN THE SKY</h3>
			</div>
			<p class="text-2xl">ENHANCING WITH METRICS AND GAME APP</p>
			<p class="text-center">
				By connecting to our Cloud API, we can bring a tonne of advancements, namely:
			</p>
		</div>
		<div class="content-grid">
			<div class="breakout flex flex-col">
				<div class="flex flex-col md:flex-row justify-center mt-0 my-8 md:gap-12 [&>h4]:text-4xl">
					<h4>Payment Gateway</h4>
					<h4>Game App</h4>
					<h4>Play Metrics</h4>
					<h4>Tournaments</h4>
				</div>
				<p>
					From playtime metrics, to tournament organisation, specific game settings, there is both a
					client Dashboard and player App, curteously of our propietry LeaderCloud tech.
				</p>
				<span class="self-end rotate-45">
					<Icon ctx="plug" size="3" />
				</span>
			</div>
		</div>
	</section>
</main>

<style>
	.hero {
		max-height: 70dvh;
		aspect-ratio: 5/3;
		width: 100vw;
		background-image: url('/techsup.jpg');
		background-repeat: no-repeat;
		@media (min-width: 768px) {
			aspect-ratio: 4/3;
		}
	}
</style>
