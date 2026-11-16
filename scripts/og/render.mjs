// Renders scripts/og/og.html to public/og.png (1200×630) with headless Chrome,
// plus the touch icon and favicons from the same mark. Run from the project
// root: node scripts/og/render.mjs [path-to-chrome]
import { spawn } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const chrome =
	process.argv[2] ??
	(process.platform === 'win32'
		? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
		: process.platform === 'darwin'
			? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
			: 'google-chrome')

const port = 9399
const profile = mkdtempSync(join(tmpdir(), 'og-'))
const browser = spawn(chrome, [
	'--headless=new',
	'--disable-gpu',
	'--hide-scrollbars',
	`--remote-debugging-port=${port}`,
	`--user-data-dir=${profile}`,
	'about:blank'
])

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let list
for (let i = 0; i < 50 && !list; i++) {
	await sleep(200)
	list = await fetch(`http://127.0.0.1:${port}/json/list`)
		.then((r) => r.json())
		.catch(() => null)
}

const ws = new WebSocket(
	list.find((t) => t.type === 'page').webSocketDebuggerUrl
)
await new Promise((r) => (ws.onopen = r))
let id = 0
const pending = new Map()
ws.onmessage = ({ data }) => {
	const msg = JSON.parse(data)
	if (msg.id && pending.has(msg.id)) pending.get(msg.id)(msg.result)
}
const send = (method, params = {}) =>
	new Promise((r) => {
		pending.set(++id, r)
		ws.send(JSON.stringify({ id, method, params }))
	})

const shot = async (url, width, height, out) => {
	await send('Emulation.setDeviceMetricsOverride', {
		width,
		height,
		deviceScaleFactor: 1,
		mobile: false
	})
	await send('Page.navigate', { url })
	await sleep(2500) // web fonts
	const { data } = await send('Page.captureScreenshot', { format: 'png' })
	writeFileSync(out, Buffer.from(data, 'base64'))
	console.log('wrote', out)
}

await shot(
	pathToFileURL(resolve('scripts/og/og.html')).href,
	1200,
	630,
	'public/og.png'
)

// The mark on the page colour, for iOS home screens (180×180) and as a PNG
// inside favicon.ico (32×32).
const mark = (size, dot) =>
	`data:text/html,<body style="margin:0;width:${size}px;height:${size}px;display:grid;place-items:center;background:oklch(96.3%25 0.002 197.1)"><span style="width:${dot}px;height:${dot}px;border-radius:50%25;background:%23ff6a00"></span></body>`
await shot(mark(180, 96), 180, 180, 'public/apple-touch-icon.png')
await shot(mark(32, 32), 32, 32, join(profile, 'favicon-32.png'))

// favicon.ico: one 32×32 PNG wrapped in an ICO header.
const png = readFileSync(join(profile, 'favicon-32.png'))
const header = Buffer.alloc(22)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(1, 4) // count
header.writeUInt8(32, 6) // width
header.writeUInt8(32, 7) // height
header.writeUInt16LE(1, 10) // planes
header.writeUInt16LE(32, 12) // bits per pixel
header.writeUInt32LE(png.length, 14) // size
header.writeUInt32LE(22, 18) // offset
writeFileSync('public/favicon.ico', Buffer.concat([header, png]))
console.log('wrote public/favicon.ico')

await send('Browser.close')
browser.kill()
