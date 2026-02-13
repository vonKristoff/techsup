<script>
	import Navigator from '$lib/components/header/Navigator.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Section from '$lib/components/Section.svelte';
	import global from '$lib/components/global.svelte';
	import { Sidebar } from '$lib/components/Sidebar';

	let hasLoaded = $state(false);
	$effect(() => {
		const hero = new Image();
		hero.onload = () => (hasLoaded = true);
		hero.src = '/techsup.jpg';
	});
	function intersection(el) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio >= 0.5) el.classList.add('show');
					if (entry.intersectionRatio === 0) el.classList.remove('show');
				});
			},
			{ threshold: [0, 0.5, 1] }
		);
		observer.observe(el);
	}
	$effect(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				if (global.sidebar) global.toggleSidebar();
			}
		});
	});
</script>

<Navigator />
<Sidebar />
<main>
	<Section bg="light" style="h-dvh relative">
		<div class="full-width overflow-clip grid place-content-center">
			<div
				use:intersection
				class:show={hasLoaded}
				class="hero bg-center bg-cover bg-secondary-200 bg-blend-lighten max-w-full"
			></div>
			<div class="flex justify-end content-grid absolute bottom-24 w-full">
				<h3
					class="text-6xl breakout text-right font-tertiary text-prime-200 inline-block tracking-wider"
				>
					making fun. irl.
				</h3>
			</div>
		</div>
	</Section>
	<Section bg="dark">
		<div class="breakout text-xl font-light">
			<p>
				The only thing to rival our devotion to fun is a lifelong passion for games; video games,
				arcade games, tabletop games, carnival games...
			</p>
		</div>
		<span class="font-primary text-6xl breakout text-center">IF IT ENDS IN 'GAME' WE'RE IN!</span>
		<div class="breakout text-xl font-light">
			<p>
				Lucky for us, it's a rivalry straining with explosive potential. What does that mean? It
				means we're priming <strong>ka-booms:</strong> games that fuse the best use of what we love in
				ways that bring us together. Accessible, tactile, and, most importantly, screen-less.
			</p>
		</div>
	</Section>
	<Section bg="light">
		<div class="flex flex-col text-8xl font-primary px-8">
			<span>IMMEDIATE.</span>
			<span>TACTILE.</span>
			<span>SCREEN-LESS.</span>
		</div>
	</Section>

	<Section bg="dark">
		<div class="breakout w-full">
			<p class="font-light text-4xl text-center">Proudly introducing late 2026</p>
			<p class="text-center font-light italic text-xl">Pong but with lazers.</p>
			<svg
				class="custom-drop"
				width="100%"
				height="50vh"
				fill="#003727"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<use href="sprites.svg#icon-koleider-logo-mono"></use>
			</svg>
		</div>
		<div class="flex flex-col gap-4 px-8">
			<p class="text-center font-bold text-3xl">Kickstarter launching April 30th</p>
			<div class="flex flex-row justify-between">
				<button class="bg-secondary-200 py-2 px-8 rounded-lg text-prime-200">Visit campaign</button>
				<div class="flex flex-row items-center gap-2">
					<svg width="2em" height="2em">
						<circle cx="1em" cy="1em" r="0.75em" fill="#003727" />
					</svg>
					<svg width="2em" height="2em">
						<circle cx="1em" cy="1em" r="0.75em" fill="#003727" />
					</svg>
					<svg width="2em" height="2em">
						<circle cx="1em" cy="1em" r="0.75em" fill="#003727" />
					</svg>
				</div>
				<button class="border-2 rounded-lg py-2 px-8">Connect to hotline</button>
			</div>
		</div>
	</Section>
	<Section bg="light">
		<div class="breakout text-xl font-light">
			<p class="text-xl font-light">
				Our guiding light is fun that's social: shared, physical, human. It should all bring us
				together, help us connect, and amplify the things we all have in common, however unique.
			</p>
		</div>
	</Section>
</main>

<style>
	.hero.show {
		background-image: url('/techsup.jpg');
		opacity: 1;
		filter: blur(0);
		transform: rotate(0deg) scale(1);
	}
	.hero {
		transition:
			opacity 0.3s ease 0s,
			filter 0.3s ease 0.2s,
			transform 0.3s ease 0.2s;
		transform: rotate(360deg) scale(0.25);
		transform-origin: center;
		opacity: 0;
		filter: blur(1em);
		max-height: 70dvh;
		aspect-ratio: 5/3;
		width: 100vw;
		background-repeat: no-repeat;
		@media (min-width: 768px) {
			aspect-ratio: 4/3;
		}
	}
	.rainbow {
		background: linear-gradient(to right, red, orange, yellow, green, rgb(93, 93, 242), violet);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		/* font-size: 2rem; */
		/* font-weight: bold; */
	}

	main {
		transition: transform 0.2s ease-in;
	}
</style>
