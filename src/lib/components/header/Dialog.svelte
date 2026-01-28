<script lang="ts">
	import Icon from '../Icon.svelte';
	let { modalRef = $bindable() } = $props();
</script>

<dialog bind:this={modalRef} class="shadow-xl rounded-2xl fixed">
	<div class="modal">
		<div class="flex justify-end">
			<button onclick={() => modalRef.close()} class="p-2 text-3xl">
				<Icon ctx="x" />
			</button>
		</div>
		<h2 class="text-6xl text-secondary-200 text-center">🎲 Your Go!</h2>
		<nav class="grid place-content-center font-secondary gap-y-4">
			<p class="text-2xl text-center">Have enquiries? Talk to us!</p>
			<div class="flex gap-4 items-center text-3xl">
				<Icon ctx="mail" />
				<a class="link" href="mailto:hello@techsup.uk">
					<span>Send an email</span>
				</a>
			</div>
		</nav>
		<div class="flex justify-center">
			<div class="rounded-lg fob bg-center bg-contain bg-blend-overlay max-w-full"></div>
		</div>
	</div>
</dialog>

<style>
	.fob {
		background-color: var(--hue-4);
		/* background-color: #003c2b; */
		width: 100%;
		height: 10em;
		background-image: url('/techsup.jpg');
		/* background-repeat: no-repeat; */
	}
	a:hover,
	a:focus {
		color: black;
	}
	dialog {
		inset: 0;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		opacity: 1;
		width: 90vw;
		height: 90dvh;
		transition: all 0.4s allow-discrete;
		background-color: #f0c2d4;
		backdrop-filter: blur(1em);
	}
	@starting-style {
		dialog[open] {
			opacity: 0;
			transform: translate(-50%, -25%);
			overflow: hidden;
		}
	}
	dialog:not([open]) {
		opacity: 0;
		transform: translate(-50%, -150%);
	}

	nav {
		height: inherit;
	}
	.modal {
		padding: 2em;
		height: inherit;
	}

	.modal {
		gap: 16px;
		display: flex;
		flex-direction: column;
	}

	dialog::backdrop {
		background-color: #5b786d93;
		backdrop-filter: blur(0.5em);
	}
</style>
