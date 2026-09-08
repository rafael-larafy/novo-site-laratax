import { css } from 'remix/ui'

import { Logo } from './logo.tsx'
import { ThemeToggle } from './theme-toggle.tsx'
import { FONT_MONO, btnPrimary, container } from './tokens.ts'


export function Header() {
  return () => (
    <header
      mix={css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--t-header-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
        '@media (max-width:860px)' : {position: 'absolute'}
      })}
    >
      <div
        mix={[
          container,
          css({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            height: '68px',
            '@media (max-width: 560px)': { gap: '12px' },
          }),
        ]}
      >
        <div mix={css({ display: 'flex', alignItems: 'center', gap: '28px', minWidth: 0 })}>
          <a href="/" mix={css({ textDecoration: 'none', display: 'inline-flex' })}>
            <Logo height="clamp(15px, 4.4vw, 26px)" />
          </a>
          <nav mix={css({ display: 'flex', alignItems: 'center', gap: '20px', '@media (max-width: 720px)': { display: 'none' } })}>
            {[
              ['Início', '/'],
              ['Recursos', '/recursos'],
              ['Sobre', '/sobre'],
            ].map(([rotulo, destino]) => (
              <a
                href={destino}
                mix={css({
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  '&:hover': { color: 'var(--accent)' },
                })}
              >
                {rotulo}
              </a>
            ))}
          </nav>
        </div>
        {SeletorVersao()}
        <div
          mix={css({
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            '@media (max-width: 560px)': { gap: '10px' },
          })}
        >
          <ThemeToggle />
          <a
            href="https://app.laratax.com.br"
            mix={css({
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              '@media (max-width: 560px)': { display: 'none' },
              '&:hover': { color: 'var(--accent)' },
            })}
          >
            Entrar
          </a>
          <a
            href="#contato"
            mix={[
              btnPrimary,
              css({
                padding: '10px 20px',
                fontSize: '14px',
                whiteSpace: 'nowrap',
                '@media (max-width: 560px)': { padding: '9px 14px', fontSize: '13px' },
              }),
            ]}
          >
            {/* rótulo curto no mobile: o wordmark é largo e os três itens não cabem */}
            <span mix={css({ '@media (max-width: 560px)': { display: 'none' } })}>
              Agendar apresentação
            </span>
            <span mix={css({ display: 'none', '@media (max-width: 560px)': { display: 'inline' } })}>
              Agendar
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

// Alternador entre as versões da home. O landing.ts marca [data-versao] com
// data-on conforme a URL; sem JS o seletor ainda navega, só não destaca.
function SeletorVersao() {
  const item = css({
    padding: '5px 12px',
    borderRadius: '999px',
    fontFamily: FONT_MONO,
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--muted)',
    textDecoration: 'none',
    '&:hover': { color: 'var(--text)' },
    '&[data-on="true"]': { background: 'var(--accent)', color: 'var(--surface)' },
  })
  return (
    <div
      aria-label="Versão da home"
      mix={css({
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '2px',
        padding: '3px',
        borderRadius: '999px',
        border: '1px solid var(--line)',
        background: 'var(--surface-2)',
        // abaixo disso o seletor centralizado passa por cima de "Sobre"
        '@media (max-width: 1150px)': { display: 'none' },
      })}
    >
      {[
        ['v1', '/'],
        ['v2', '/v2'],
        ['v3', '/v3'],
        ['v4', '/v4'],
      ].map(([rotulo, destino]) => (
        <a href={destino} data-versao="" mix={item}>
          {rotulo}
        </a>
      ))}
    </div>
  )
}
