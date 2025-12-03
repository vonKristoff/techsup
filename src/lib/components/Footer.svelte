<footer
	class="w-screen grid grid-cols-1 gap-y-16 md:grid-cols-3 py-16 px-8 md:px-16 text-2xl text-primary"
>
	<aside class="flex flex-col text-sm justify-end">
		<span>other links</span>
	</aside>

	<div class="flex flex-col text-text-200 text-sm justify-end items-center">
		<div class="fob bg-center bg-cover bg-blend-difference max-w-full"></div>
		<span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
	</div>

	<aside class="flex flex-col text-right text-text-200 text-sm justify-end">
		<span>Built by</span>
		<h5 class="text-right text-text-200 text-xl md:text-3xl font-primary m-0">
			three<span class="text-secondary-200">jjj</span>s
			<br />
		</h5>
		<span class="text-secondary-200 text-xs">Interactive Tech</span>
	</aside>
</footer>

<style>
	footer {
		background-color: #f0c2d4;
	}
	.fob {
		background-color: #003c2b;
		width: 100%;
		height: 12em;
		aspect-ratio: 4/3;
		background-image: url('/fingers.webp');
		background-repeat: no-repeat;
	}
</style>
