<footer
	class="w-full grid grid-cols-1 gap-y-16 md:grid-cols-3 py-16 px-8 md:px-16 text-2xl text-primary"
>
	<aside class="flex flex-col text-sm justify-between">
		<div class="flex flex-col">
			<a class="link w-fit" href="https://feedback.techsup.uk">Feedback</a>
			<a class="link w-fit" href="https://privacy.techsup.uk">Privacy policy</a>
			<a class="link w-fit" href="https://unsubscribe.techsup.uk">Unsubscribe</a>
		</div>
		<span class="text-wash-300">Tech Support! Interactive Ltd.</span>
	</aside>

	<div class=" text-wash-300 flex flex-col text-text-200 text-sm justify-end items-center">
		<div
			class="fob pink bg-primary-200 bg-center bg-cover bg-blend-lighten max-w-full border-4 rounded-2xl border-white md:border-transparent md:my-0 my-4"
		></div>
		<span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
	</div>

	<aside class="flex flex-col text-right text-text-200 text-sm justify-end text-wash-300">
		<span>Built by humans</span>
		<a href="https://threejjjs.xyz">
			<h5 class="text-right text-text-200 text-xl md:text-3xl font-secondary m-0">
				three<span class="text-pop-200">jjj</span>s
				<br />
			</h5>
		</a>
		<span class="text-xs">Interactive Tech</span>
	</aside>
</footer>

<style>
	footer {
		color: var(--color-neutral-100);
		/* background-color: #f0c2d4; */
	}
	.fob {
		background-color: #003c2b;
		width: 100%;
		height: 12em;
		aspect-ratio: 4/3;
		background-image: url('/techsup.jpg');
		background-repeat: no-repeat;
	}
	.pink {
		background-color: var(--hue-4);
	}
</style>
