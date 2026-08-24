import { css } from 'remix/ui'

import {
  COLORS,
  FONT_MONO,
  card,
  container,
  eyebrow,
  heading2,
  lead,
  section,
  surfaceContrast,
} from '../../ui/tokens.ts'

type Row = { label: string; value: string; cyan?: boolean }

const TRADITIONAL: Row[] = [
  { label: 'Oportunidades', value: 'R$ 11,87 mi' },
  { label: 'Custo', value: 'R$ 37.060' },
  { label: 'Prazo', value: '30 dias' },
  { label: 'Equipe', value: '88h' },
  { label: 'Perdidos por prescrição', value: 'R$ 2,97 mi' },
]

const LARATAX: Row[] = [
  { label: 'Oportunidades', value: 'R$ 14,84 mi', cyan: true },
  { label: 'Custo', value: 'R$ 11.056' },
  { label: 'Prazo', value: '26 minutos', cyan: true },
  { label: 'Equipe', value: '44h' },
  { label: 'Perdidos por prescrição', value: 'R$ 0', cyan: true },
]

const cardTitle = css({
  margin: '0 0 20px',
  fontFamily: FONT_MONO,
  fontSize: '13px',
  fontWeight: 400,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
})

const rowItem = css({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '14px 0',
  borderTop: '1px solid var(--line)',
})

const rowLabel = css({
  margin: 0,
  fontFamily: FONT_MONO,
  fontSize: '12px',
  letterSpacing: '0.06em',
  color: 'var(--muted)',
})

const rowValue = css({
  margin: 0,
  fontFamily: FONT_MONO,
  fontSize: '20px',
  fontVariantNumeric: 'tabular-nums',
  color: 'var(--text)',
})

export function CaseStudy() {
  return () => (
    <section id="resultados" mix={section}>
      <div mix={container}>
        <p mix={eyebrow}>06 / Caso real</p>
        <h2 data-reveal="" mix={heading2}>
          De 30 dias para 26 minutos
        </h2>
        <p data-reveal="" mix={lead}>
          Indústria metalúrgica, faturamento de R$ 750 mi em 5 anos, matriz + 4 filiais, 21,6 GB de
          dados fiscais (1.380 DARFs, 60 DCTFs, 60 EFD Contribuições, 240 SPEDs).
        </p>
        <div
          mix={css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            alignItems: 'start',
            '@media (max-width: 720px)': { gridTemplateColumns: '1fr' },
          })}
        >
          <article data-reveal-left="" mix={card}>
            <h3 mix={[cardTitle, css({ color: 'var(--muted)' })]}>Análise tradicional</h3>
            <dl data-stagger="" mix={css({ margin: 0 })}>
              {TRADITIONAL.map((row) => (
                <div mix={rowItem}>
                  <dt mix={rowLabel}>{row.label}</dt>
                  <dd mix={rowValue}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </article>
          <article
            data-reveal-right=""
            mix={[
              surfaceContrast,
              card,
              css({
                position: 'relative',
                // este card É a superfície de contraste (ilha escura sobre a
                // página clara), não um card apoiado numa. Sem isto, o --card-bg
                // translúcido do mixin `card` venceria e o card sumiria no branco.
                backgroundColor: 'var(--surface)',
                backgroundImage:
                  'radial-gradient(circle at 90% 8%, rgba(7, 224, 255, 0.1), transparent 46%)',
                border: `1px solid ${COLORS.cyan}`,
                boxShadow: '0 0 40px rgba(0, 194, 239, 0.18)',
              }),
            ]}
          >
            <span
              mix={css({
                position: 'absolute',
                top: '-14px',
                right: '20px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: COLORS.cyanBright,
                color: COLORS.navy,
                fontFamily: FONT_MONO,
                fontSize: '12px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              })}
            >
              + R$ 2,97 mi identificados a mais
            </span>
            <h3 mix={[cardTitle, css({ color: 'var(--accent)' })]}>Com a LaraTAX</h3>
            <dl mix={css({ margin: 0 })}>
              {LARATAX.map((row) => (
                <div mix={rowItem}>
                  <dt mix={rowLabel}>{row.label}</dt>
                  <dd mix={row.cyan ? [rowValue, css({ color: COLORS.cyanBright })] : rowValue}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}
