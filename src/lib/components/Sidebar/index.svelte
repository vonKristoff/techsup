<script lang="ts">
	import global from '$lib/components/global.svelte';
	import Icon from '../Icon.svelte';
	import ChatWriter from './ChatWriter.svelte';
	let chatIndex = $state(-1);
	let chat = $state<string[]>([]);
	let isComplete = $state(false);
	let asideElement: HTMLElement;
	let chatElement: HTMLElement;
	let story = [
		'Kol-eye-what?',
		"Koleider! Think 'collider' and 'kaleidocope' chucked in a tombola.",
		'Um...',
		"Don't worry. As soon as you see it in action the first thing you'll say will be: 'Aaaaah! Clever.'",
		'Uh-hu. And what is Koleider?',
		'Our first game!',
		'Yeah, I get that. But what is it?',
		'All in good time ;]',
		"Good grief, you're insufferable.",
		'Thanks!',
		"That wasn't a compliment.",
		'Oh?',
		"Look, give me one solid detail or I'm never coming back here.",
		'Okay.',
		'Thank you.',
		'Most of it is wood.',
		'Argh! This chatbot sucks! Someone call-'
	];
	function beginChat() {
		chatIndex = 0;
		chat = [story[chatIndex]];
	}
	function next() {
		if (chat.length === story.length) {
			isComplete = true;
			asideElement.scrollTop = asideElement.scrollHeight;
			return;
		}
		chatIndex++;
		chat.push(story[chatIndex]);
		asideElement.scrollTop = chatElement.scrollHeight;
	}
	beginChat();
	$effect(() => {
		if (global.sidebar == true && chatIndex < 0) {
			beginChat();
		}
	});
	$effect(() => {
		if (global.sidebar == false) {
			chatIndex = -1;
			chat = [];
			isComplete = false;
			asideElement.scrollTop = 0;
		}
	});
</script>

<aside bind:this={asideElement} data-active={global.sidebar} class="element inset-0">
	<div class="koltop py-12 pt-24">
		<svg
			class="custom-drop"
			width="100%"
			height="20vh"
			fill="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<use href="sprites.svg#icon-koleider-logo-mono"></use>
		</svg>
	</div>
	<div
		bind:this={chatElement}
		class="chat flex flex-col gap-4 my-12 mx-auto max-w-sm [&>p]:max-w-xs"
	>
		{#if chat.length && global.sidebar}
			{#each chat as message, i}
				<p data-index={i}>
					<ChatWriter
						repeat={1}
						ontypeend={() => next()}
						endState={{ caret: 'hidden', text: 'typed' }}
						texts={[message]}
					/>
				</p>
			{/each}
		{/if}
	</div>
	<div class:show={isComplete} class="kolbot">
		<img src="techsup.jpg" alt="Tech Support!" />
	</div>
	<!-- <button class="fixed bottom-12 bg-black z-1">
		<Icon ctx="x" colour="white" />
	</button> -->
</aside>

<style>
	.kolbot img {
		transition: all 0.3s;
		transform: translateY(100%);
		opacity: 0;
	}
	.kolbot.show img {
		transform: translateY(0%);
		opacity: 1;
	}
	.koltop svg {
		transition: all 0.3s;
		transform: translateY(-100%);
		opacity: 0;
	}
	.koltop {
		background-color: var(--black);
		opacity: 0;
	}
	[data-active='true'] .koltop svg {
		transform: translateY(0%);
		opacity: 1;
	}
	[data-active='true'] .koltop {
		opacity: 1;
	}
	.chat p {
		background-color: whitesmoke;
		padding: 1em 2em;
		border-radius: 0.5em;
		box-shadow: 0 0 2em #ccc;
	}
	.chat p:nth-child(odd) {
		color: #999;
		border-color: #777;
		align-self: flex-start;
		background-color: var(--black);
	}
	.chat p:nth-child(even) {
		align-self: flex-end;
	}
	.element {
		scroll-behavior: smooth;
		font-family: monospace;
		position: fixed;
		max-width: 768px;
		min-height: 100dvh;
		width: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		z-index: -1;
	}

	aside[data-active='true']::before {
		transform: translateX(0%);
	}
	aside[data-active='true']::after {
		transform: translateX(0%) rotate(5deg) scale(1.2);
	}

	.element::before {
		transition: transform 0.2s ease-in;
		transform: translateX(-100%);
		content: '';
		position: fixed;
		overflow: hidden;
		inset: 0;
		height: 100%;
		width: 100%;
		background-color: whitesmoke;
		z-index: -1;
		@media (min-width: 768px) {
			width: 768px;
		}
	}
	.element::after {
		transition: transform 0.2s ease-in;
		content: '';
		position: fixed;
		overflow: hidden;
		inset: 0;
		width: 100%;
		height: 100%;
		background-image: url('koleider-logo-mono.svg');
		background-repeat: repeat;
		background-position: center;
		background-size: 8em;
		transform: translateX(-100%) rotate(5deg) scale(1.2);
		opacity: 0.05;
		z-index: -1;
		@media (min-width: 768px) {
			width: 768px;
		}
	}
</style>
