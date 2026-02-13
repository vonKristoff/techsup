<script lang="ts">
	import Icon from '../Icon.svelte';
	import global from '$lib/components/global.svelte';
	import Hotline from './Hotline.svelte';
	import Dialog from './Dialog.svelte';
	let modal = $state<HTMLDialogElement>();
	$effect(() => global.setModal(modal));
</script>

<header
	class:lighten={global.ambience === 'lighten'}
	class:darken={global.ambience === 'darken'}
	class:sidebar={global.sidebar}
	class="flex items-center fixed top-0 w-full p-8 backdrop-blur-2xl z-10 text-prime-200"
>
	<aside class="shrink-0 text-lg md:text-xl lg:text-2xl relative z-10">
		<button
			class="hover:text-wash-200 transition-all hover:translate-x-1 border-2 px-4 rounded-lg py-1"
			onclick={() => global.toggleSidebar()}>KOLEIDAR</button
		>
		<!-- <Icon ctx="lazer" weight=".75em" /> -->
	</aside>
	<nav class="grow">
		<div
			class="absolute inset-0 items-center hidden text-xl lg:text-4xl md:flex gap-2 justify-center pointer-none"
		>
			<div class="flex justify-center">TABLE TOP GAMES MAKERS</div>
		</div>
	</nav>
	<aside class="shrink-0 flex items-center text-lg md:text-xl lg:text-2xl px-2 py-2">
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
		color: var(--hue-1);
	}
	.darken {
		color: var(--hue-2);
	}
	.sidebar {
		color: var(--color-wash-200);
	}
</style>
