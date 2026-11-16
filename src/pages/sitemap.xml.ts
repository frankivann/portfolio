import type { APIRoute } from 'astro'

// One page today, so the sitemap is written by hand instead of adding
// @astrojs/sitemap. When projects get their own routes, list them here (or
// switch to the integration).
const paths = ['/']

export const GET: APIRoute = ({ site }) => {
	const lastmod = new Date().toISOString().slice(0, 10)
	const urls = paths
		.map(
			(path) =>
				`  <url>\n    <loc>${new URL(path, site)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
		)
		.join('\n')

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
	)
}
