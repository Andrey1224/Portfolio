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
				bgMain: '#FAFAF9',       // Warm off-white
				surface: '#FFFFFF',
				surfaceMuted: '#F5F5F4',
				surfaceWarm: '#FDFCFB',
				
				textPrimary: '#1C1917',  // Deep warm black
				textSecondary: '#57534E',
				textMuted: '#78716C',
				
				borderLight: '#E7E5E4',
				borderStrong: '#D6D3D1',
				
				primary: '#2563EB',      // Main CTA
				primaryHover: '#1D4ED8',
				primarySoft: '#EFF6FF',
				
				accent: '#14B8A6',       // Teal
				accentSoft: '#CCFBF1',
				
				success: '#16A34A',      // Positive metrics
				warning: '#F59E0B',      // Problem highlights
				
				dark: '#0F172A',
			},
			boxShadow: {
				'subtle': '0 1px 2px rgba(28, 25, 23, 0.04)',
				'card': '0 12px 40px rgba(28, 25, 23, 0.07)',
				'elevated': '0 24px 80px rgba(28, 25, 23, 0.10)',
				'mockup': '0 32px 100px rgba(15, 23, 42, 0.14)',
				'btn': '0 10px 24px rgba(37, 99, 235, 0.22)',
			},
			borderRadius: {
				'xs': '8px',
				'sm': '12px',
				'md': '16px',
				'lg': '24px',
				'xl': '32px',
				'2xl': '40px',
			}
		},
	},
	plugins: [],
}
