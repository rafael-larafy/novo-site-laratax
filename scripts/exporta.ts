// Export estático: crawleia o router em processo e grava dist/ pronto para
// hospedagem estática (Vercel/CDN). O site não tem backend real — formulário é
// decorativo e os dados são procedurais no render — então o server só existe
// em dev.
import * as fs from 'node:fs'
import * as path from 'node:path'

import { router } from '../app/router.ts'

const DIST = path.resolve('dist')
const ORIGEM = 'http://localhost'

const PAGINAS = ['/', '/v2', '/recursos', '/sobre', '/carreiras', '/contato']

const buscar = (rota: string) => router.fetch(new Request(ORIGEM + rota))

function salvar(arquivo: string, corpo: Buffer | string) {
  const destino = path.join(DIST, arquivo)
  fs.mkdirSync(path.dirname(destino), { recursive: true })
  fs.writeFileSync(destino, corpo)
}

// URLs /assets/... citadas em HTML (src/href) e em JS compilado (import "...")
function acharAssets(texto: string): string[] {
  return [...texto.matchAll(/["'(](\/assets\/[^"'()\s\\]+)["')]/g)].map((m) => m[1])
}

// host estático serve .ts com MIME errado (browser bloqueia o módulo):
// os arquivos compilados viram .js e as referências acompanham
const comoJs = (url: string) => url.replace(/\.tsx?(?=$|[?#])/, '.js')
const reescrever = (texto: string) =>
  texto.replaceAll(/(\/assets\/[^"'()\s\\]+?)\.tsx?(?=["')])/g, '$1.js')

fs.rmSync(DIST, { recursive: true, force: true })

// public/ vai inteiro, como o staticFiles serviria
fs.cpSync('public', DIST, { recursive: true })

const fila: string[] = []
const vistos = new Set<string>()

for (const rota of PAGINAS) {
  const res = await buscar(rota)
  if (res.status !== 200) throw new Error(`${rota} respondeu ${res.status}`)
  const html = await res.text()
  salvar(rota === '/' ? 'index.html' : `${rota.slice(1)}/index.html`, reescrever(html))
  fila.push(...acharAssets(html))
}

while (fila.length > 0) {
  const url = fila.pop()!
  if (vistos.has(url)) continue
  vistos.add(url)

  const res = await buscar(url)
  if (res.status !== 200) throw new Error(`${url} respondeu ${res.status}`)
  const corpo = Buffer.from(await res.arrayBuffer())

  const tipo = res.headers.get('content-type') ?? ''
  if (tipo.includes('javascript') || tipo.includes('css')) {
    const texto = corpo.toString('utf8')
    salvar(decodeURIComponent(comoJs(url)), reescrever(texto))
    fila.push(...acharAssets(texto))
  } else {
    salvar(decodeURIComponent(url), corpo)
  }
}

console.log(`dist/ pronto: ${PAGINAS.length} páginas + ${vistos.size} assets`)
process.exit(0)
