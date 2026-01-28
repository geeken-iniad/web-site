import daisyui from 'daisyui';
// サイバーパンク風
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				makinas: ['Makinas', 'sans-serif'],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["cyberpunk"],
	},
}