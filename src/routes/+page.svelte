<script>
	import Navigator from '$lib/components/header/Navigator.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Section from '$lib/components/Section.svelte';
	import global from '$lib/components/global.svelte';
	import { Sidebar } from '$lib/components/Sidebar';
	import { inView } from '$lib/utils/action.InterTranslate.svelte';
	import { spiralise } from '$lib/utils/action.spiral.svelte';
	import { MediaQuery } from 'svelte/reactivity';

	let isMobile = new MediaQuery('max-width: 768px');
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
<!-- <Sidebar /> -->
<main>
	<Section img="ts-bg-tile.svg" bg="light" style="h-dvh relative">
		<div class="full-width grid place-content-center h-[80vh]">
			<!-- overflow-clip -->
			<!-- bg-secondary-200 bg-blend-lighten -->
			<div use:intersection class:show={hasLoaded} class="hero bg-center bg-cover max-w-full"></div>
		</div>
	</Section>
	<Section bg="dark">
		<div class="flex justify-center w-full wide">
			<h2 class="text-3xl md:text-6xl text-prime-300 breakout font-tertiary uppercase font-thin">
				A hybrid games studio crafting the future of physical and digital play
			</h2>
		</div>
		<!-- <div class="breakout text-2xl font-light">
			<p>
				The only thing to rival our devotion to fun is a lifelong passion for games; video games,
				arcade games, tabletop games, carnival games...
			</p>
		</div>
		<div
			use:intersection
			data-slam
			class="font-primary text-4xl md:text-8xl breakout text-center overflow-clip"
		>
			IF IT ENDS IN 'GAME'<span>WE'RE IN!</span>
		</div>
		<div class="breakout text-2xl font-light">
			<p>
				Lucky for us, it's a rivalry straining with explosive potential. What does that mean? It
				means we're priming <span class="inline-block"
					><Icon ctx="ts-kaboom" colour="transparent" /></span
				> <strong>ka-booms:</strong> games that fuse the best use of what we love in ways that bring us
				together.
			</p>
		</div> -->
	</Section>
	<Section bg="light">
		<div class="breakout text-xl">
			<h3 class="font-primary text-3xl mb-12">
				In a world obsessed with digital-only experiences, we’re doubling down on the physical and
				building connected play experiences.
			</h3>
			<p>
				From electronic games that hum with life, and strategic card games you can feel in your
				hands, to digital companions designed to enhance them.
			</p>
			<p>
				We’re a pre-launch studio with three games currently in active development. Follow our
				journey by joining our Discord for all the latest news and updates.
			</p>
			<div class="flex justify-between mt-12">
				<a
					href="https://subscribe.techsup.uk"
					class="justify-center border-b-4 flex items-center gap-4 btn-primary border-2 bg-secondary-100"
					><Icon ctx="mail" /> Subscribe for more info</a
				>
				<a
					href="https://discord.gg/c3ZBmZpGs3"
					class="flex justify-center items-center gap-4 btn-primary border-2 border-b-4 bg-secondary-100"
					><Icon ctx="discord" /> Say hi in our Discord</a
				>
			</div>
		</div>
	</Section>

	<Section img="ts-bg-tile.svg" bg="dark" paddingTop={true}>
		<div class="breakout w-full text-secondary relative overflow-hidden">
			<h2 class="text-6xl">Keep an eye out</h2>
			<p class="font-light font-tertiary text-4xl text-center">Something is coming...</p>
			<h3 class="text-right text-6xl">SOOOOOOOOON</h3>
		</div>
	</Section>

	<Section bg="light">
		<div class="breakout">
			<p class="text-xl">
				Our guiding light is fun that's social: shared, physical, human. It should all bring us
				together, help us connect, and amplify the things we all have in common, however unique.
			</p>
		</div>
	</Section>
</main>

<!-- <button
	data-action="close-chat"
	onclick={() => global.toggleSidebar()}
	class="fixed bg-black z-1 border-2 border-white drop-shadow-2xl"
>
	<Icon ctx="x" colour="white" />
</button> -->

<style>
	.bg-secondary-wash {
		/* background-color: #01372796; */
		p {
			background-color: var(--hue-5);
		}
	}
	button[data-hover='Coming soon'] {
		&::before {
			transition: all 0.3s;
			position: absolute;
			content: 'Coming soon!';
			visibility: hidden;
			transform: translateY(-170%);
		}
	}
	button[data-hover='Coming soon']:hover {
		&::before {
			visibility: visible;
			transform: translateY(0%);
		}
		span {
			transform: translateY(150%);
		}
	}
	[data-action='close-chat'] {
		transition: all 0.125s ease-in;
		bottom: -2em;
		font-size: 2em;
		border-radius: 50%;
		padding: 0.25em;
		transform: translateX(-50%);
		left: 50%;
		opacity: 0;
		@media (min-width: 768px) {
			left: calc(768px / 2);
		}
	}

	[data-slam] {
		transform: translateX(-25%);
		transition: all 0.2s ease-out;
		opacity: 0;
	}
	:global([data-slam].show) {
		opacity: 1;
		transform: translateX(0%);
	}
	[data-slam] > span {
		display: inline-block;
		transition: all 0.2s ease-out;
		transition-delay: 0.6s;
		opacity: 0;
		transform: translateX(50%);
	}
	:global([data-slam].show > span) {
		opacity: 1;
		transform: translateX(0%);
	}

	[data-effect] {
		overflow: hidden;
		& > span {
			transition: all 0.2s ease-out;
		}
		span:nth-child(1) {
			transform: translateY(-100%);
		}
		span:nth-child(2) {
			transition-delay: 0.3s;
			transform: translateX(-100%);
		}
		span:nth-child(3) {
			transition-delay: 0.6s;
			transform: translateY(150%);
		}
	}
	:global([data-effect].show) {
		& > span {
			transform: translate(0, 0);
		}
	}

	.hero.show {
		background-image: url('/TU.png');
		background-size: 80%;
		background-position-y: 70%;
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
		max-height: 80dvh;
		aspect-ratio: 9/3;
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
		overflow-x: hidden;
		position: relative;
		&::after {
			transition: transform 0.2s ease-in;
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: var(--color-wash-200);
			inset: 0;
			transform: translateX(100%);
		}
	}
</style>
