/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'MPLUSRounded1c': ['"M PLUS Rounded 1c"']
		},
		colors: {
			// Using modern `rgb`
			dark_playground: 'var(--set-base-dark-background-color)',
			dark_color: 'var(--set-base-dark-color)',
			light_playground: 'var(--set-base-light-background-color)',
			light_color: 'var(--set-base-light-color)',
		}
	},
	plugins: [],
}
