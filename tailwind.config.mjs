/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Geist Sans"', 'sans-serif'],
				mono: ['"Geist Mono"', 'monospace'],
			},
			colors: {
				bgMain: '#F2F2F2',
				surface: '#FFFFFF',
				surfaceMuted: '#E5E7EB',
				textPrimary: '#000000',
				textSecondary: '#404040',
				textMuted: '#6B7280',
				borderStrong: '#000000',
				primary: '#2563EB',
				primaryHover: '#1D4ED8',
				primarySoft: 'rgba(37, 99, 235, 0.12)',
				success: '#16A34A',
				warning: '#F59E0B',
				dark: '#0F172A',
			},
			boxShadow: {
				'brutal-sm': '3px 3px 0px #000000',
				brutal: '6px 6px 0px #000000',
				'brutal-hover': '2px 2px 0px #000000',
				'brutal-primary': '6px 6px 0px #2563EB',
				'brutal-white-sm': '5px 5px 0px #FFFFFF',
				'brutal-white': '6px 6px 0px #FFFFFF',
			},
		},
	},
	plugins: [],
};
