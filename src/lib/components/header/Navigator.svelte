<script lang="ts">
	import Icon from '../Icon.svelte';
	// import global from '$lib/stores/global.svelte';
	import Hotline from './Hotline.svelte';
	import Dialog from './Dialog.svelte';
	let modal = $state<HTMLDialogElement>();
</script>

<!-- class:lighten={global.ambience === 'lighten'}
class:darken={global.ambience === 'darken'} -->

<header
	class="flex items-center fixed top-0 w-full p-8 text-2xl md:text-4xl backdrop-blur-2xl z-10 text-prime-200"
>
	<aside class="shrink-0 text-2xl relative z-10">
		KOLEIDAR
		<!-- <Icon ctx="lazer" weight=".75em" /> -->
	</aside>
	<nav class="grow">
		<div class="absolute inset-0 items-center flex gap-2 justify-center pointer-none">
			<div class="flex justify-center">TABLE TOP GAMES MAKERS</div>
		</div>
	</nav>
	<aside class="shrink-0 flex items-center text-2xl">
		<Hotline modalRef={modal} />
		<!-- <button onclick={() => modal?.showModal()}><Icon ctx="menu"></Icon></button> -->
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
