import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import JavaScriptObfuscator from 'javascript-obfuscator'

const ASSETS = fileURLToPath(new URL('../dist/assets', import.meta.url))

function walk(dir) {
  let out = []
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) out = out.concat(walk(p))
    else if (f.endsWith('.js')) out.push(p)
  }
  return out
}

const files = walk(ASSETS)
console.log(`[obfuscate] ${files.length} chunk JS...`)

let done = 0
for (const file of files) {
  const code = readFileSync(file, 'utf8')
  const obfuscated = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    simplify: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.65,
    deadCodeInjection: false,
    identifierNamesGenerator: 'hexadecimal',
    renameGlobals: false,
    selfDefending: false,
    splitStrings: true,
    splitStringsChunkLength: 8,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 1.0,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
  }).getObfuscatedCode()
  writeFileSync(file, obfuscated)
  done++
  process.stdout.write(`\r[obfuscate] ${done}/${files.length}`)
}
console.log('\n[obfuscate] Hoàn tất — bundle đã được xáo trộn toàn bộ.')
