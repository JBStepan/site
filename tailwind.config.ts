import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      typography: () => ({
        base: {
          css: {
            '--tw-prose-links': 'var(--color-blue-400)',
          }
        }
      })
    }
  },

  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
