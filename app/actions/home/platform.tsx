import { css } from 'remix/ui'

import {
  FONT_MONO,
  card,
  container,
  eyebrow,
  heading2,
  lead,
  section,
} from '../../ui/tokens.ts'

const SPED_DOCS = [
  'EFD ICMS/IPI',
  'EFD Contribuições',
  'ECF',
  'ECD',
  'DCTF',
  'DCTFWEB',
  'PER/DCOMP',
  'MIT',
  'e-Social',
]

type Item = {
  title: string
  text: string
  // Cada ícone: paths 24x24 stroke ciano.
  paths: string[]
  span?: 'wide' | 'tall'
  chips?: string[]
  stat?: { value: string; decimals: string; suffix: string; label: string }
  ink?: ReturnType<typeof css>
}

// Tinta radial de canto — cantos variados entre cards vizinhos.
const inkTopRight = css({
  backgroundImage:
    'radial-gradient(circle at 90% 12%, color-mix(in srgb, var(--accent) 7%, transparent), transparent 46%)',
})

const inkBottomLeft = css({
  backgroundImage:
    'radial-gradient(circle at 12% 88%, color-mix(in srgb, var(--accent) 7%, transparent), transparent 46%)',
})

const ITEMS: Item[] = [
  {
    title: 'Baixas automáticas',
    text: 'Todos os documentos do grupo SPED, e-CAC e e-Social baixados sem intervenção manual.',
    paths: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
    span: 'wide',
    chips: SPED_DOCS,
    ink: inkTopRight,
  },
  {
    title: 'Motor de regras',
    text: 'Cenários tributários processados em tempo humanamente impossível.',
    paths: [
      'M5 5h14v14H5z',
      'M9.5 9.5h5v5h-5z',
      'M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3',
    ],
    span: 'tall',
    stat: { value: '2.1', decimals: '1', suffix: ' bi', label: 'de cenários' },
  },
  {
    title: '74 painéis de análise',
    text: 'Dashboards por área: ICMS, IPI, PIS/COFINS, IRPJ/CSLL, Previdenciário, Teses e Reforma.',
    paths: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  },
  {
    title: 'Retificação integrada',
    text: 'Retificação de obrigações embarcada, direto pelo sistema.',
    paths: ['M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z'],
  },
  {
    title: 'Multi-CNPJ e escala',
    text: 'Matriz e filiais analisadas em uma única execução, com trilha de auditoria de ponta a ponta.',
    paths: ['M3 21h18', 'M6 21V6l6-3v18', 'M14 21V10l4 2v9', 'M9 8v.01M9 12v.01M9 16v.01'],
    span: 'wide',
    ink: inkBottomLeft,
  },
  {
    title: 'Segurança e conformidade',
    text: 'Roda em nuvem com autorizações formais (procuração eletrônica) e trilha de auditoria completa.',
    paths: ['M5 11h14v10H5z', 'M8 11V7a4 4 0 0 1 8 0v4', 'M12 15v3'],
  },
]

const cardBase = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})

const SPAN_MIX = {
  wide: css({
    gridColumn: 'span 2',
    '@media (max-width: 900px)': { gridColumn: 'auto' },
  }),
  tall: css({
    gridRow: 'span 2',
    justifyContent: 'space-between',
    '@media (max-width: 900px)': { gridRow: 'auto' },
  }),
}

// Card-herói: wrapper com padding 1px + filho absoluto maior girando um
// conic-gradient ciano. A borda estática vive no wrapper; o beam só soma o
// brilho — no escuro o card translúcido deixaria o conic vazar (efeito
// radar), então lá o beam é escondido via <style> abaixo.
const heroWrap = css({
  position: 'relative',
  padding: '1px',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: 'var(--line)',
})

const heroBeam = css({
  position: 'absolute',
  inset: '-200%',
  backgroundImage: 'conic-gradient(from 0deg, transparent 70%, var(--accent-graphic))',
})

const heroCard = css({
  position: 'relative',
  height: '100%',
  justifyContent: 'space-between',
  border: 'none',
  borderRadius: '15px',
})

const cardTitle = css({
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '17px',
  fontWeight: 600,
  letterSpacing: '-0.01em',
  color: 'var(--text)',
})

const cardText = css({
  margin: 0,
  fontSize: '14.5px',
  lineHeight: 1.6,
  color: 'var(--muted)',
})

const chip = css({
  fontFamily: FONT_MONO,
  fontSize: '11px',
  letterSpacing: '0.04em',
  color: 'var(--muted)',
  background: 'var(--surface-2)',
  border: '1px solid var(--line)',
  borderRadius: '999px',
  padding: '4px 10px',
  whiteSpace: 'nowrap',
})

export function Platform() {
  return () => (
    <section id="plataforma" mix={section}>
      <style>{`
        @keyframes platform-beam-spin { to { transform: rotate(360deg); } }
        [data-platform-beam] { animation: platform-beam-spin 6s linear infinite; }
        :root[data-theme='dark'] [data-platform-beam] { display: none; }
        @media (prefers-reduced-motion: reduce) {
          [data-platform-beam] { animation: none; }
        }
      `}</style>
      <div mix={container}>
        <p mix={eyebrow}>02 / A plataforma</p>
        <h2 data-reveal="" mix={heading2}>
          Sua consultoria com superpoderes
        </h2>
        <p data-reveal="" mix={lead}>
          Combinamos automação inteligente e profunda expertise fiscal para simplificar processos
          complexos.
        </p>
        <div
          data-stagger=""
          mix={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
          })}
        >
          {ITEMS.map((item) => {
            // Card-herói (stat): o span vai para o wrapper do beam.
            const mixes = item.stat
              ? [card, cardBase, heroCard]
              : [card, cardBase]
            if (!item.stat && item.span) mixes.push(SPAN_MIX[item.span])
            if (item.ink) mixes.push(item.ink)
            const article = (
            <article mix={mixes}>
              <h3 mix={cardTitle}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  fill="none"
                  stroke="var(--accent)"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  mix={css({ flexShrink: 0 })}
                >
                  {item.paths.map((d) => (
                    <path d={d} />
                  ))}
                </svg>
                {item.title}
              </h3>
              {item.stat ? (
                <p
                  mix={css({
                    margin: 0,
                    fontFamily: FONT_MONO,
                    color: 'var(--accent)',
                    fontSize: 'clamp(40px, 4.5vw, 56px)',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  })}
                >
                  <span
                    data-count={item.stat.value}
                    data-count-decimals={item.stat.decimals}
                    data-count-suffix={item.stat.suffix}
                  >
                    2,1 bi
                  </span>
                  <span
                    mix={css({
                      display: 'block',
                      marginTop: '8px',
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      color: 'var(--muted)',
                    })}
                  >
                    {item.stat.label}
                  </span>
                </p>
              ) : null}
              <p mix={cardText}>{item.text}</p>
              {item.chips ? (
                <div mix={css({ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' })}>
                  {item.chips.map((doc) => (
                    <span mix={chip}>{doc}</span>
                  ))}
                </div>
              ) : null}
            </article>
            )
            return item.stat ? (
              <div mix={item.span ? [heroWrap, SPAN_MIX[item.span]] : [heroWrap]}>
                <div data-platform-beam="" aria-hidden="true" mix={heroBeam} />
                {article}
              </div>
            ) : (
              article
            )
          })}
        </div>
      </div>
    </section>
  )
}
