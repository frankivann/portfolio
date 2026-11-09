// The table of contents. Order here is order in the stack and on the ruler.
export interface Page {
	id: string
	title: string
	/** Name on the ruler, where space is tight. */
	short: string
	section?: string
	size?: 'page' | 'screen' | 'note'
}

export const pages: Page[] = [
	{ id: 'portada', title: 'Portada', short: 'Portada', size: 'screen' },
	{ id: 'multibrand', title: 'Multibrand', short: 'Multibrand', section: '01' },
	{
		id: 'pasarela',
		title: 'Pasarela de pagos',
		short: 'Pasarela',
		section: '02'
	}
]

export const folio = (id: string) =>
	String(pages.findIndex((page) => page.id === id) + 1).padStart(2, '0')
