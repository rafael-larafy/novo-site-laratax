import type { Handle, RemixNode } from 'remix/ui'
import { css } from 'remix/ui'

import { routes } from '../routes.ts'
import { THEME_BOOTSTRAP, THEME_CSS, TRANSITION } from './theme.ts'
import { FONT_SANS, surfaceBase } from './tokens.ts'

export interface DocumentProps {
  children?: RemixNode
  head?: RemixNode
  title?: string
  description?: string
}

const DEFAULT_TITLE = 'LaraTAX — A Central de comando do tributarista'
const DEFAULT_DESCRIPTION =
  'A central de comando do tributarista: a LaraTAX cruza os dados fiscais da sua empresa e entrega um diagnóstico de oportunidades dos últimos 5 anos em menos de 40 minutos.'

export function Document(handle: Handle<DocumentProps>) {
  return () => {
    let { children, head, title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION } = handle.props

    return (
      <html
        lang="pt-BR"
        mix={css({
          '@media (prefers-reduced-motion: no-preference)': { scrollBehavior: 'smooth' },
        })}
      >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="description" content={description} />
          <meta name="color-scheme" content="light dark" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#021118" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Kode+Mono:wght@400;500;600;700&display=swap"
          />
          <title>{title}</title>
          <script>{THEME_BOOTSTRAP}</script>
          <style>{THEME_CSS}</style>
          <style>{TRANSITION}</style>
          {head}
        </head>
        <body
          mix={[
            surfaceBase,
            css({
              margin: 0,
              fontFamily: FONT_SANS,
              fontSize: '16px',
              lineHeight: 1.6,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              overflowX: 'hidden',
              '& *, & *::before, & *::after': { boxSizing: 'border-box' },
            }),
          ]}
        >
          {children}
          <script type="module" src={routes.assets.href({ path: 'app/assets/entry.ts' })}></script>
          <script
            type="module"
            src={routes.assets.href({ path: 'app/assets/landing.ts' })}
          ></script>
        </body>
      </html>
    )
  }
}
