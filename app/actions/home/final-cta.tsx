import { css } from 'remix/ui'

import {
  FONT_MONO,
  btnPrimary,
  card,
  container,
  eyebrow,
  heading2,
  lead,
  section,
  surfaceContrast,
} from '../../ui/tokens.ts'

export function FinalCta() {
  return () => (
    <section
      id="contato"
      mix={[
        section,
        surfaceContrast,
        css({
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(7,224,255,0.07), transparent 70%)',
          borderTop: '1px solid rgba(7,224,255,0.18)',
        }),
      ]}
    >
      <div mix={container}>
        <div
          data-reveal=""
          mix={css({
            maxWidth: '880px',
            margin: '0 auto',
          })}
        >
          <div
            mix={[
              card,
              css({
                position: 'relative',
                // um degrau acima do fundo da seção, para o card destacar nos dois temas
                background: 'var(--surface-2)',
                borderRadius: '16px',
                padding: '64px',
                textAlign: 'center',
                '@media (max-width: 720px)': { padding: '40px 24px' },
              }),
            ]}
          >
            <p
              mix={[
                eyebrow,
                css({ justifyContent: 'center', '&::before': { display: 'none' } }),
              ]}
            >
              Fale com a gente
            </p>
            <h2 mix={[heading2, css({ margin: '0 auto 16px' })]}>
              Veja o diagnóstico da sua empresa em 40 minutos
            </h2>
            <p mix={[lead, css({ margin: '0 auto 40px' })]}>
              Agende uma apresentação com nossos especialistas. Temos time disponível para atender
              o quanto antes.
            </p>
            <p
              mix={css({
                margin: '0 auto 32px',
                fontFamily: FONT_MONO,
                fontSize: '13px',
                color: 'var(--accent)',
                letterSpacing: '0.08em',
              })}
            >
              A transição para o IVA Dual começa em 2026 — chegue preparado.
            </p>
            <a
              href="mailto:comercial@laratax.com.br"
              mix={[btnPrimary, css({ padding: '18px 36px', fontSize: '16px' })]}
            >
              Agendar com especialista
            </a>
            <p
              mix={css({
                margin: '32px 0 0',
                fontFamily: FONT_MONO,
                fontSize: '13px',
                color: 'var(--muted)',
              })}
            >
              comercial@laratax.com.br · +55 (41) 3146-5868
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
