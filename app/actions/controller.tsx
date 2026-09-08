import { createController } from 'remix/router'

import { assetServer } from '../assets.ts'
import { routes } from '../routes.ts'
import { CarreirasPage } from './carreiras/page.tsx'
import { ContatoPage } from './contato/page.tsx'
import { HomePage } from './home/page.tsx'
import { RecursosPage } from './recursos/page.tsx'
import { SobrePage } from './sobre/page.tsx'
import { V2Page } from './v2/page.tsx'
import { V3Page } from './v3/page.tsx'
import { V4Page } from './v4/page.tsx'

export default createController(routes, {
  actions: {
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
      )
    },
    home(context) {
      return context.render(<HomePage />)
    },
    v2(context) {
      return context.render(<V2Page />)
    },
    v3(context) {
      return context.render(<V3Page />)
    },
    v4(context) {
      return context.render(<V4Page />)
    },
    recursos(context) {
      return context.render(<RecursosPage />)
    },
    sobre(context) {
      return context.render(<SobrePage />)
    },
    carreiras(context) {
      return context.render(<CarreirasPage />)
    },
    contato(context) {
      return context.render(<ContatoPage />)
    },
  },
})
