import { mdsvex } from 'mdsvex';
// import adapter from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const isStaging = process.argv.includes('staging');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: isStaging ? netlifyAdapter() : node(),
		experimental: {
			remoteFunctions: true
		},
		alias: {
			'$remote/*': './src/lib/remote/*'
		}
	},
	extensions: ['.svelte', '.svx'],
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

export default config;
