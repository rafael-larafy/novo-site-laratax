import { css } from 'remix/ui'

import {
  FONT_MONO,
  card,
  container,
  eyebrow,
  heading2,
  section,
  stage,
  surfaceContrast,
} from '../../ui/tokens.ts'

const PAINS = [
  {
    title: 'Baixa manual e dispersa',
    text: 'e-CAC, SPED e e-Social exigem dias de coleta manual em portais diferentes.',
  },
  {
    title: 'Limitações humanas',
    text: 'Planilhas não sustentam análises profundas de milhões de registros.',
  },
  {
    title: 'Custo de oportunidade',
    text: 'Semanas de trabalho imobilizam a equipe fiscal em tarefas repetitivas.',
  },
  {
    title: 'Perda de créditos',
    text: 'Oportunidades expiram nas janelas de prescrição antes de serem identificadas.',
  },
]

export function Pains() {
  return () => (
    <section id="problema" mix={css({padding:'12px 0', scrollMarginTop:'84px'})}>
        <div
          mix={[
            surfaceContrast,
            stage,
            css({
              backgroundImage:
                'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(7,224,255,0.07), transparent 70%)',
            }),
          ]}
        >
        <div mix={container}>
          <p mix={eyebrow}>01 / O problema</p>
          <h2 data-reveal="" mix={heading2}>
            A rotina fiscal manual não escala
          </h2>
          <div
            data-stagger=""
            mix={css({
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              '@media (max-width: 960px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
              '@media (max-width: 560px)': { gridTemplateColumns: '1fr' },
            })}
          >
            {PAINS.map((pain, i) => (
              <article
                mix={[
                  card,
                  css({
                    transition: 'border-color 200ms ease',
                    '&:hover': { borderColor: 'var(--accent)' },
                  }),
                  // Tinta radial de canto em 2 dos 4 cards, cantos opostos.
                  i === 0 &&
                    css({
                      backgroundImage:
                        'radial-gradient(circle at 90% 12%, color-mix(in srgb, var(--accent) 7%, transparent), transparent 46%)',
                    }),
                  i === 2 &&
                    css({
                      backgroundImage:
                        'radial-gradient(circle at 10% 88%, color-mix(in srgb, var(--accent) 7%, transparent), transparent 46%)',
                    }),
                ]}
              >
                <span
                  mix={css({
                    display: 'block',
                    marginBottom: '20px',
                    fontFamily: FONT_MONO,
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    color: 'var(--accent)',
                  })}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  mix={css({
                    margin: '0 0 10px',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text)',
                  })}
                >
                  {pain.title}
                </h3>
                <p
                  mix={css({
                    margin: 0,
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    color: 'var(--muted)',
                  })}
                >
                  {pain.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      </section>
  )
}
