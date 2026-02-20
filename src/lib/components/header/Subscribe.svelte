<script>
	import { fade } from 'svelte/transition';
	import { subscribe } from '$lib/remote/register.remote';
	import Icon from '../Icon.svelte';
	let { children } = $props();
	let pending = $state(false);
	let message = $state('');
</script>

<div class="content-grid drop-shadow-xl">
	<article class="grid place-content-center">
		<div class="subscribe-card rounded-2xl border-2 bg-prime-100 p-6 md:p-12">
			<h2 class="text-3xl md:text-6xl">Register your interest</h2>
			<form
				id="subscribe"
				{...subscribe.enhance(async ({ form, data, submit }) => {
					if (!data.email || !data.username) return;
					pending = true;
					try {
						await submit();
						message = `Thanks, ${data.username}! You have signed up.`;
						pending = false;
						form.reset();
						setTimeout(() => (message = ''), 5000);
					} catch (error) {
						pending = false;
						message = `Eeeek - something went wrong, please try again later (i've let chat know about this.)`;
						// showToast('Oh no! Something went wrong');
					}
				})}
			>
				<div class="flex flex-col gap-4">
					<div class="">
						<label for="username" class="block text-sm/6 font-light">Nickname</label>

						<div
							class="flex items-center overflow-hidden rounded-md bg-pop-200 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
						>
							<input
								id="username"
								type="text"
								name="username"
								placeholder="violet67"
								class="block min-w-0 grow bg-pop-200 py-1.5 pr-3 pl-1 text-accent-100 md:text-2xl placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
							/>
						</div>
					</div>
					<div class="">
						<label for="username" class="block text-sm/6 font-light">Email</label>

						<div
							class="flex items-center overflow-hidden rounded-md bg-pop-200 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600"
						>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="lfg@friend.cool"
								class="block min-w-0 grow bg-pop-200 py-1.5 pr-3 pl-1 md:text-2xl text-accent-100 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
							/>
						</div>
					</div>
					{#if pending}
						<div transition:fade class="flex justify-center text-4xl text-shadow-2xs">
							<!-- <div class="animate-spin">
								<Icon ctx="clock" colour="red" />
							</div> -->
							<div class="vibrating">
								<Icon ctx="phone" colour="red" />
							</div>
						</div>
					{/if}
					{#if !message}
						<button class="inline-button border-2 bg-wash-100 rounded-lg mt-4 py-4 px-8"
							>Sign me up!</button
						>
					{:else}
						<span transition:fade class="text-center p-4 mt-4 bg-emerald-300 text-accent rounded-lg"
							>{message}</span
						>
					{/if}
					<!-- <button class="rounded-md bg-wash-200 p-2" type="submit"> Sign me up </button> -->
				</div>
			</form>
			<div class="mt-6">
				{@render children()}
			</div>
		</div>
	</article>
</div>

<style>
	@keyframes vibrate {
		/* burst 1: 0–33% (0s–1s) */
		0% {
			transform: translate(0, 0);
		}
		2% {
			transform: translate(-2px, 1px);
		}
		4% {
			transform: translate(2px, -1px);
		}
		6% {
			transform: translate(-1px, 2px);
		}
		8% {
			transform: translate(2px, 1px);
		}
		10% {
			transform: translate(-2px, -1px);
		}
		12% {
			transform: translate(1px, 2px);
		}
		14% {
			transform: translate(-2px, 1px);
		}
		16% {
			transform: translate(2px, -1px);
		}
		18% {
			transform: translate(-1px, 2px);
		}
		20% {
			transform: translate(2px, 1px);
		}
		22% {
			transform: translate(-2px, -1px);
		}
		24% {
			transform: translate(1px, 2px);
		}
		26% {
			transform: translate(-2px, 1px);
		}
		28% {
			transform: translate(2px, -1px);
		}
		30% {
			transform: translate(-1px, 2px);
		}
		32% {
			transform: translate(2px, 1px);
		}

		/* pause: 33%–66% */
		33% {
			transform: translate(0, 0);
		}
		66% {
			transform: translate(0, 0);
		}

		/* burst 2: 66–100% */
		68% {
			transform: translate(-2px, 1px);
		}
		70% {
			transform: translate(2px, -1px);
		}
		72% {
			transform: translate(-1px, 2px);
		}
		74% {
			transform: translate(2px, 1px);
		}
		76% {
			transform: translate(-2px, -1px);
		}
		78% {
			transform: translate(1px, 2px);
		}
		80% {
			transform: translate(-2px, 1px);
		}
		82% {
			transform: translate(2px, -1px);
		}
		84% {
			transform: translate(-1px, 2px);
		}
		86% {
			transform: translate(2px, 1px);
		}
		88% {
			transform: translate(-2px, -1px);
		}
		90% {
			transform: translate(1px, 2px);
		}
		92% {
			transform: translate(-2px, 1px);
		}
		94% {
			transform: translate(2px, -1px);
		}
		96% {
			transform: translate(-1px, 2px);
		}
		98% {
			transform: translate(2px, 1px);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.vibrating {
		animation: vibrate 3s linear infinite;
	}
</style>
