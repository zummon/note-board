import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';
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
		// vitePreprocess()
	]
};

export default config;
