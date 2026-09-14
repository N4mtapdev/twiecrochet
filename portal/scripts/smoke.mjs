// Smoke test: chạy bundle trong jsdom để phát hiện crash runtime (vd: sau obfuscation)
import { JSDOM } from 'jsdom'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const file = resolve(process.argv[2] || 'dist/assets/index.js')
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost:3000/portal/',
  pretendToBeVisual: true
})
const w = dom.window
for (const k of ['window', 'document', 'history', 'HTMLElement', 'Element', 'Node', 'CustomEvent', 'Event', 'MutationObserver', 'getComputedStyle', 'sessionStorage', 'localStorage']) {
  if (w[k] !== undefined) global[k] = typeof w[k] === 'function' && !/^[A-Z]/.test(k) ? w[k].bind(w) : w[k]
}
Object.defineProperty(global, 'navigator', { value: w.navigator, configurable: true })
Object.defineProperty(global, 'location', { value: w.location, configurable: true })
global.requestAnimationFrame = cb => setTimeout(cb, 16)
global.cancelAnimationFrame = id => clearTimeout(id)
global.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} })
global.IntersectionObserver = global.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} }

try {
  await import(pathToFileURL(file).href)
  await new Promise(r => setTimeout(r, 1500))
  const html = w.document.getElementById('root').innerHTML
  console.log(html ? 'RENDER OK: ' + html.slice(0, 130).replace(/\n/g, ' ') : 'ROOT RONG — crash im lang')
} catch (e) {
  console.log('CRASH:', (e.message || '').slice(0, 300))
  console.log((e.stack || '').split('\n').slice(1, 4).join('\n').slice(0, 500))
  process.exit(1)
}
