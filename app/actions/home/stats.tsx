import { css } from 'remix/ui'

import { FONT_MONO, container, eyebrow, heading2 } from '../../ui/tokens.ts'

const STATS: Array<{
  value: string
  display: string
  label: string
  decimals?: string
  suffix?: string
  prefix?: string
}> = [
  {
    value: '2.1',
    decimals: '1',
    suffix: ' bi',
    display: '2,1 bi',
    label: 'cenários tributários processados',
  },
  { value: '74', display: '74', label: 'painéis de análise' },
  { value: '40', suffix: ' min', prefix: '< ', display: '40 min', label: 'diagnóstico completo' },
  { value: '5', suffix: ' anos', display: '5 anos', label: 'de dados fiscais analisados' },
]

const statItem = css({
  padding: '4px 0 4px 32px',
  borderLeft: '1px solid var(--line)',
  '&:first-child': { borderLeft: 'none', paddingLeft: '0' },
  '@media (max-width: 720px)': { borderLeft: 'none', padding: '0' },
})

const figure = css({
  margin: '0',
  fontFamily: FONT_MONO,
  fontSize: 'clamp(40px, 5vw, 64px)',
  fontWeight: 500,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  color: 'var(--text)',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
})

// Faixa compacta (ponte de prova quantitativa), não seção cheia.
const strip = css({
  position: 'relative',
  overflow: 'hidden',
  padding: '72px 0',
  scrollMarginTop: '84px',
  '@media (max-width: 720px)': { padding: '48px 0' },
})

const shimmerOverlay = css({
  position: 'absolute',
  inset: '0',
  pointerEvents: 'none',
  background:
    'linear-gradient(-70deg, transparent 20%, color-mix(in srgb, var(--accent) 5%, transparent) 50%, transparent 80%)',
})

// Seção de números soltos sobre o fundo, estilo Williams GP — sem cards.
export function Stats() {
  return () => (
    <section id="numeros" mix={strip}>
      <div data-shimmer="" aria-hidden="true" mix={shimmerOverlay} />
      <div mix={container}>
        <p mix={eyebrow}>05 / Resultados</p>
        <h2 data-reveal="" mix={[heading2, css({ fontSize: 'clamp(22px, 2.6vw, 28px)' })]}>
          Dados falam mais que palavras
        </h2>
        <div
          data-stagger=""
          mix={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px 0',
            marginTop: '72px',
            '@media (max-width: 720px)': {
              // auto-fit degrada sozinho para 1 coluna em telas estreitas (nowrap de "< 40 min" não corta)
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '40px 24px',
              marginTop: '48px',
            },
          })}
        >
          {STATS.map((s) => (
            <div mix={statItem}>
              <p mix={figure}>
                {/* prefixo fixo fora do span para o contador não sobrescrevê-lo */}
                {s.prefix ? <span mix={css({ color: 'var(--accent)' })}>{s.prefix}</span> : null}
                <span
                  data-count={s.value}
                  data-count-decimals={s.decimals}
                  data-count-suffix={s.suffix}
                >
                  {s.display}
                </span>
              </p>
              <p
                mix={css({
                  margin: '12px 0 0',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: 'var(--muted)',
                })}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
