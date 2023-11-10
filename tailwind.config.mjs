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
			dark_playground: 'rgb(var(--set-base-dark-background-color) / 1)',
			dark_color: 'rgb(var(--set-base-dark-color) / 1)',
			light_playground: 'rgb(var(--set-base-light-background-color) / 1)',
			light_color: 'rgb(var(--set-base-light-color) / 1)',
		}
	},
	plugins: [],
}
