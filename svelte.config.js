import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
		}),
		vitePreprocess()
	]
};

export default config;
