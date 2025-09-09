import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import rehypeHighlight from 'rehype-highlight';
import hljs from 'highlight.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			smartypants: {
				quotes: true,
				ellipsis: true,
				backticks: false,
				dashes: 'oldschool'
			},
			layout: {
				blog: './src/lib/components/MarkdownLayout.svelte'
			},
			rehypePlugins: [rehypeHighlight]
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
