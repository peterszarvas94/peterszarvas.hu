/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      },

		  fontFamily: {
			  'firasans': ['"Fira Sans"', 'sans'],
        'firamono': ['"Fira Mono"', 'monospace'],
	  	},

      keyframes: {
        fill: {
          '0%': { 'clip-path': 'inset(0 0 0 0)' },
          '10%': { 'clip-path': 'inset(0 0 0 100%)' },
          '15%': { 'clip-path': 'inset(0 0 0 100%)' },
          '50%': { 'clip-path': 'inset(0 0 0 0)' },
          '70%': { 'clip-path': 'inset(0 0 0 100%)' },
          '100%': { 'clip-path': 'inset(0 0 0 0)' },
        }
      },

      animation: {
        fill: 'fill 6s ease infinite',
      },

    }
	},

	plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.writing-v': {
          'writing-mode': 'vertical-rl'
        },
        '.grayscale-60': {
          filter: 'grayscale(60%)'
        },
        '.stroke-2-transparent': {
          '-webkit-text-stroke': '0.1rem transparent'
        },
        '.animation-stop': {
          'animation-play-state': 'paused'
        },
      })
    }),
  ],
}
