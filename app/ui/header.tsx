import { css } from 'remix/ui'

import { Logo } from './logo.tsx'
import { ThemeToggle } from './theme-toggle.tsx'
import { btnPrimary, container } from './tokens.ts'

// Seções ficam no FloatingDock (rodapé); o header guarda marca + CTA.
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            height: '68px',
            '@media (max-width: 560px)': { gap: '12px' },
          }),
        ]}
      >
        <a href="#inicio" mix={css({ textDecoration: 'none', display: 'inline-flex' })}>
          <Logo height="clamp(15px, 4.4vw, 26px)" />
        </a>
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
