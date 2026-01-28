<script lang="ts">
	import Icon from '../Icon.svelte';
	// import global from '$lib/stores/global.svelte';
	import Dialog from './Dialog.svelte';
	let modal = $state<HTMLDialogElement>();
</script>

<!-- class:lighten={global.ambience === 'lighten'}
class:darken={global.ambience === 'darken'} -->

<header
	class="flex items-center fixed top-0 w-full p-8 text-2xl md:text-4xl backdrop-blur-2xl z-10 text-prime-200"
>
	<aside class="shrink-0"></aside>
	<nav class="grow">
		<div class="flex gap-2 justify-center">
			<div class="flex justify-center">TABLE TOP GAMES MAKERS</div>
			<!-- <Icon ctx="lazer" weight=".75em" /> -->
		</div>
	</nav>
	<aside class="shrink-0 flex items-center">
		<button onclick={() => modal?.showModal()}><Icon ctx="menu"></Icon></button>
	</aside>
</header>

<Dialog bind:modalRef={modal} />

<style>
	header {
		transition: color 0.3s;
	}
	.lighten {
		color: var(--color-text-200);
	}
	.darken {
		color: var(--color-text-300);
	}
</style>
