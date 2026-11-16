// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// The public URL: canonical, Open Graph and the sitemap need absolute links.
// Set SITE_URL where the site is deployed (e.g. https://franklinalvarado.dev);
// Vercel and Netlify are picked up on their own.
const site =
	process.env.SITE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL &&
		`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ??
	process.env.URL ??
	'http://localhost:4321'

// https://astro.build/config
export default defineConfig({
	site,
	// Fonts are downloaded at build time and served from this site, with
	// metric-matched fallbacks so text barely moves when they arrive. Each
	// cssVariable is mapped to a Tailwind token in global.css.
	fonts: [
		{
			name: 'Geist',
			cssVariable: '--font-geist',
			provider: fontProviders.fontsource(),
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif']
		},
		{
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			provider: fontProviders.fontsource(),
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'monospace']
		},
		{
			name: 'Kalam',
			cssVariable: '--font-hand',
			provider: fontProviders.fontsource(),
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['cursive']
		}
	],
	vite: {
		plugins: [tailwindcss()]
	}
})
