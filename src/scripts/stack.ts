// Shared geometry for the sheet stack. Sticky positioning distorts live rects
// (a stuck sheet reports where it is pinned, not where it lives), so positions
// are rebuilt from layout heights instead.

/** Breathing room between a pinned sheet and the viewport edge, in px. */
export const STICK_GAP = 32

export function getSheets() {
	return Array.from(document.querySelectorAll<HTMLElement>('[data-sheet]'))
}

/** Scroll position at which each sheet's top settles near the top of the viewport. */
export function getArrivals(sheets = getSheets()) {
	if (!sheets.length) return []

	const stack = sheets[0].parentElement!
	const maxScroll = document.documentElement.scrollHeight - innerHeight

	let y =
		stack.getBoundingClientRect().top +
		scrollY +
		parseFloat(getComputedStyle(stack).paddingTop)

	return sheets.map((sheet) => {
		y += parseFloat(getComputedStyle(sheet).marginTop)
		const arrival = Math.min(maxScroll, Math.max(0, y - STICK_GAP))
		y += sheet.offsetHeight
		return arrival
	})
}

export function goToSheet(id: string) {
	const sheets = getSheets()
	const index = sheets.findIndex((sheet) => sheet.id === id)
	if (index === -1) return

	const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
	scrollTo({
		top: getArrivals(sheets)[index],
		behavior: reduceMotion ? 'auto' : 'smooth'
	})
}
