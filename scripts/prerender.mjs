// Injects the server-rendered app into dist/index.html so content paints before JS loads.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)

const file = resolve(root, 'dist/index.html')
const html = await readFile(file, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('prerender: placeholder not found in dist/index.html')
await writeFile(file, html.replace('<!--app-html-->', render()))
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('prerender: wrote dist/index.html')
