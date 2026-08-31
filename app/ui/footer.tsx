import { css } from 'remix/ui'

import { Logo } from './logo.tsx'
import { FONT_MONO, container, surfaceContrast } from './tokens.ts'

const NAV = [
  {
    title: 'Produto',
    links: [
      ['Plataforma', '/#plataforma'],
      ['Recursos', '/recursos'],
      ['Reforma Tributária', '/#reforma'],
      ['Resultados', '/#resultados'],
    ],
  },
  {
    title: 'Empresa',
    links: [['Sobre nós', '/sobre']],
  },
  {
    title: 'Acesso',
    links: [
      ['Entrar', 'https://app.laratax.com.br'],
      ['Agendar apresentação', '#contato'],
    ],
  },
] as const

const link = css({
  fontSize: '14px',
  color: 'var(--muted)',
  textDecoration: 'none',
  transition: 'color 150ms ease',
  '&:hover': { color: 'var(--text)' },
  '&:focus-visible': {
    color: 'var(--text)',
    outline: '2px solid var(--accent)',
    outlineOffset: '2px',
  },
})

const colTitle = css({
  margin: '0 0 16px',
  fontFamily: FONT_MONO,
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
})

export function Footer() {
  return () => (
    <footer
      mix={[
        surfaceContrast,
        css({
          borderTop: '1px solid var(--line)',
          padding: '64px 0 32px',
        }),
      ]}
    >
      <div mix={container}>
        <p
          mix={css({
            margin: '0 0 40px',
            fontFamily: FONT_MONO,
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--muted)',
          })}
        >
          Hiperautomação tributária
        </p>
        <div
          mix={css({
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '40px',
            '@media (max-width: 720px)': { gridTemplateColumns: '1fr' },
          })}
        >
          <div>
            <Logo height={24} />
          </div>
          {NAV.map((col) => (
            <nav aria-label={col.title}>
              <h2 mix={colTitle}>{col.title}</h2>
              {/* role=list: Safari/VoiceOver perde a semântica com listStyle none */}
              <ul
                role="list"
                mix={css({
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                })}
              >
                {col.links.map(([label, href]) => (
                  <li>
                    <a href={href} mix={link}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div
          mix={css({
            marginTop: '56px',
            paddingTop: '24px',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            '@media (max-width: 720px)': { flexDirection: 'column', alignItems: 'flex-start' },
          })}
        >
          <div
            mix={css({
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              flexWrap: 'wrap',
            })}
          >
            <p mix={css({ margin: 0, fontSize: '13px', color: 'var(--muted)' })}>
              © 2026 LaraTAX. Todos os direitos reservados.
            </p>
            <p mix={css({ margin: 0, fontSize: '12px', color: 'var(--muted)' })}>
              Av. Rocha Pombo, 1977 — São José dos Pinhais/PR
            </p>
          </div>
          <div mix={css({ display: 'flex', gap: '24px' })}>
            <a href="https://laratax.com.br" mix={link}>
              Termos de Uso
            </a>
            <a href="https://laratax.com.br" mix={link}>
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
