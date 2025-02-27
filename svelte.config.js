import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['dark-plus'],
				langs: [
					'javascript', 
					'typescript', 
					'gdscript', 
					'shell',
					'python',
					'svelte',
					'css',
					'markdown',

				]
			})
			await highlighter.loadLanguage('javascript', 
				'typescript',
				'gdscript',
				'python',
				'css',
				'markdown',
				'svelte',
				'shell',
				'svelte'
			)
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'dark-plus' }))
			return `{@html \`${html}\` }`
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		csrf: {
            checkOrigin: false
        }
	}
};

export default config;