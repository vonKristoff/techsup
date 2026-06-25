import tailwindcss from '@tailwindcss/vite';
import seoFiles from 'vite-plugin-seo-files';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import meta from './src/meta.json';
const { url } = meta;

export default defineConfig(({ mode }) => ({
	plugins: [tailwindcss(), sveltekit(), seoFiles({ siteUrl: url })],
	build: {
		minify: mode === 'production',
		sourcemap: mode === 'development'
	}
}));
