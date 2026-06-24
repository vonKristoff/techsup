<script>
	import Navigator from '$lib/components/header/Navigator.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Section from '$lib/components/Section.svelte';
	import global from '$lib/components/global.svelte';
	import { Sidebar } from '$lib/components/Sidebar';
	import { inView } from '$lib/utils/action.InterTranslate.svelte';
	import { spiralise } from '$lib/utils/action.spiral.svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import TiledSection from '$lib/components/TiledSection.svelte';
	import TU from '$lib/assets/TechSup-Logo-Full-3D.svg?raw';
	let isMobile = new MediaQuery('max-width: 768px');
	let hasLoaded = $state(false);
	// $effect(() => {
	// 	const hero = new Image();
	// 	hero.onload = () => (hasLoaded = true);
	// 	hero.src = '/techsup.jpg';
	// });
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
	<TiledSection bg="bg-secondary-200" color="var(--color-wash-100)" tileSize="40vw">
		<div class="full-width grid place-content-center h-[80vh]">
			<div class="hero z-10 inset-0">
				{@html TU}
			</div>
		</div>
	</TiledSection>

	<Section bg="dark">
		<div class="flex justify-center w-full wide">
			<h2 class="text-3xl md:text-4xl text-white breakout uppercase">
				A HYBRID GAMES STUDIO CRAFTING CONNECTED PLAY
			</h2>
		</div>
	</Section>
	<TiledSection bg="bg-secondary-200" color="var(--color-wash-100)" tileSize="40vw">
		<div class="grid place-content-center">
			<div
				class="flex flex-col gap-8 [&>p]:bg-white [&>p]:p-8 [&>p]:text-center [&>p]:text-2xl [&>p]:font-bold"
			>
				<p class="">IN A WORLD OBSESSED WITH ALGORITHMS AND INTERFACES...</p>
				<p class="">...WE'RE DOUBLING DOWN ON THE PHYSICAL.</p>
			</div>
		</div>
	</TiledSection>
	<Section bg="dark">
		<div class="breakout flex justify-center w-full wide">
			<h3 class="text-white breakout">
				Tech Support! is a pre-launch studio with three games currently in active development. Our
				mission is simple: create fun that's shared, physical, human.
			</h3>
		</div>
	</Section>
	<TiledSection bg="bg-secondary-200" color="var(--color-wash-100)" tileSize="40vw">
		<div class="grid place-content-center">
			<div
				class="flex flex-col gap-8 [&>p]:bg-white [&>p]:p-8 [&>p]:text-center [&>p]:text-2xl [&>p]:font-bold"
			>
				<p class="">FROM ELECTRONIC GAMES MADE WITH NATURAL MATERIALS...</p>
				<p class="">TO CARD GAMES ENHANCED BY DIGITAL COMPANIONS.</p>
			</div>
		</div>
	</TiledSection>
	<Section bg="dark">
		<div class="breakout flex justify-center w-full wide">
			<h3 class="text-white breakout">
				We're not quite ready to reveal our hand yet, but why not subscribe to follow our journey
				and stay dialled-in to updates!
			</h3>
		</div>
	</Section>
	<TiledSection bg="bg-secondary-200" color="var(--color-wash-100)" tileSize="40vw">
		<div class="full-width">
			<div class="flex justify-center gap-16 py-16 text-2xl">
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
	</TiledSection>
</main>

<!-- <button
	data-action="close-chat"
	onclick={() => global.toggleSidebar()}
	class="fixed bg-black z-1 border-2 border-white drop-shadow-2xl"
>
	<Icon ctx="x" colour="white" />
</button> -->

<style>
	.btn-primary {
		background-color: var(--white);
		&:hover {
			background-color: var(--color-wash-200);
			border-color: var(--color-wash-300);
			color: var(--color-white);
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
		/* background-image: url('/TU.png'); */
		background-size: 80%;
		background-position-y: 70%;
		opacity: 1;
		filter: blur(0);
		transform: rotate(0deg) scale(1);
	}
	.hero {
		transform-origin: center;
		max-height: 80dvh;
		aspect-ratio: 9/3;
		width: 80vw;
		@media (min-width: 768px) {
			aspect-ratio: 4/3;
		}
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
