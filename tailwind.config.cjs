/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'reactblue': '#61dafb',
        'gitred': '#e34f26',
        'astrored': '#FF5D01',
      },
      filter: {
        'grayscale-80': 'grayscale(80%)',
      },
      flex: {
        '100': '1 0 100%',
      }
    },

		fontFamily: {
			'firasans': ['"Fira Sans"', 'sans'],
      'firamono': ['"Fira Mono"', 'monospace'],
		}
	},
	plugins: [],
}
