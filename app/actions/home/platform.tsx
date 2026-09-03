import { css } from 'remix/ui'

import { card, container, eyebrow, heading2, lead, section } from '../../ui/tokens.ts'
import { PlataformaApp } from './plataforma-app.tsx'

export function Platform() {
  return () => (
    <section id="plataforma" mix={section}>
      <div mix={container}>
        <p mix={eyebrow}>02 / A plataforma</p>
        <h2 data-reveal="" mix={heading2}>
          Sua consultoria com superpoderes
        </h2>
        <p data-reveal="" mix={lead}>
          Navegue pela plataforma como ela é: da visão geral aos projetos, do início de um
          diagnóstico ao módulo da Reforma Tributária.
        </p>
        {/* a réplica é desktop-only: no celular vira o aviso abaixo */}
        <div mix={css({ '@media (max-width: 720px)': { display: 'none' } })}>
          <PlataformaApp />
        </div>
        <div
          mix={[
            card,
            css({
              display: 'none',
              textAlign: 'center',
              padding: '40px 24px',
              '@media (max-width: 720px)': { display: 'block' },
            }),
          ]}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
            <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H3V4h18v12Z" />
          </svg>
          <p mix={css({ margin: '12px 0 4px', fontSize: '16px', fontWeight: 700, color: 'var(--text)' })}>
            Demonstração disponível no computador
          </p>
          <p mix={css({ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--muted)' })}>
            A plataforma foi feita para telas grandes. Acesse este site pelo desktop para navegar pela
            demonstração interativa.
          </p>
        </div>
      </div>
    </section>
  )
}
