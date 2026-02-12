<script>
	let { modalRef = $bindable() } = $props();
</script>

<button
	tabindex="0"
	class="overflow-clip"
	title="hotline"
	aria-label="contact"
	onclick={() => modalRef?.showModal()}
>
	<div data-clipper class="flex gap-2 transition-all">
		<span class="gradient-text">CONNECT TO HOTLINE</span>
		<span>☎️</span>
	</div>
</button>

<style>
	[data-clipper] {
		transform: translateX(1em);
	}
	.gradient-text {
		position: relative;
		display: inline-block;
		color: inherit; /* Base text color */
		background: linear-gradient(
			to right,
			currentColor 50%,
			currentColor 0%,
			#ff6b6b 50%,
			#ff6b6b 60%,
			#4ecdc4 60%,
			#4ecdc4 70%,
			#45b7d1 70%,
			#45b7d1 80%,
			#96ceb4 80%,
			#96ceb4 90%,
			#ffeaa7 90%,
			#ffeaa7 100%
		);
		background-size: 200% 100%;
		background-position: 0% 0%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: background-position 0.3s ease;
	}

	button:hover {
		.gradient-text {
			background-position: 100% 0%;
		}
		[data-clipper] {
			transform: translateX(0em);
		}
	}
</style>
