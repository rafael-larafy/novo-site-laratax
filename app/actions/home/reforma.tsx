import { css } from 'remix/ui'

import {
  COLORS,
  FONT_MONO,
  btnGhost,
  card,
  container,
  eyebrow,
  heading2,
  lead,
  stage,
  surfaceContrast,
} from '../../ui/tokens.ts'

const BULLETS = [
  'Alíquotas configuráveis de IBS, CBS e IS',
  'Apuração via SPED ou notas fiscais',
  'Relatórios de transição 2026–2033',
]

const OLD_LEFT = ['PIS', 'COFINS', 'IPI']
const OLD_RIGHT = ['ICMS', 'ISS', 'ICMS-ST']
const NEW_CENTER = ['CBS', 'IBS', 'Imposto Seletivo']

const ROW_Y = [40, 140, 240]

// PIS/COFINS → CBS, IPI → Imposto Seletivo.
const LEFT_FLOWS = [
  'M130,62 C165,62 180,62 215,62',
  'M130,162 C170,162 175,70 215,70',
  'M130,262 C165,262 180,262 215,262',
]

// ICMS/ISS/ICMS-ST → IBS.
const RIGHT_FLOWS = [
  'M430,62 C390,62 385,158 345,158',
  'M430,162 C395,162 380,162 345,162',
  'M430,262 C390,262 385,166 345,166',
]

export function Reforma() {
  return () => (
    <section id="reforma" mix={css({padding:'12px 0', scrollMarginTop:'84px'})}>
      <div
      mix={[
        surfaceContrast,
        stage,
        css({
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(7,224,255,0.07), transparent 70%), radial-gradient(ellipse 60% 50% at 75% 40%, rgba(0, 194, 239,0.08), transparent)',
        }),
      ]}
    >
      <style>{`
        @keyframes flow-travel { to { stroke-dashoffset: -100; } }
        [data-flow] {
          stroke-dasharray: 16 84;
          animation: flow-travel 3.2s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-flow] { animation: none; }
        }
      `}</style>
      <div
        mix={[
          container,
          css({
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '64px',
            alignItems: 'center',
            '@media (max-width: 960px)': { gridTemplateColumns: '1fr', gap: '48px' },
          }),
        ]}
      >
        <div data-reveal-left="">
          <p mix={eyebrow}>03 / Reforma Tributária</p>
          <h2 mix={heading2}>
            Simule hoje o impacto do IVA Dual na sua operação
          </h2>
          <p mix={[lead, css({ marginBottom: '32px' })]}>
            IBS, CBS e Imposto Seletivo: veja o efeito da reforma nas suas compras, vendas e carga
            tributária efetiva antes de 2026, com dados reais do seu SPED e das suas notas fiscais.
          </p>
          <ul
            role="list"
            mix={css({
              listStyle: 'none',
              margin: '0 0 40px',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            })}
          >
            {BULLETS.map((item) => (
              <li
                mix={css({
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  fontSize: '15px',
                  lineHeight: 1.5,
                  color: 'var(--muted)',
                })}
              >
                <span
                  aria-hidden="true"
                  mix={css({
                    fontFamily: FONT_MONO,
                    fontSize: '13px',
                    color: COLORS.cyanBright,
                  })}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            mix={[
              btnGhost,
              css({
                '& [data-arrow]': { display: 'inline-block', transition: 'transform 150ms ease' },
                '&:hover [data-arrow]': { transform: 'translateX(3px)' },
              }),
            ]}
          >
            Ver a simulação na prática <span data-arrow aria-hidden="true">→</span>
          </a>
        </div>
        <FlowPanel />
      </div>
    </div>
    </section>
  )
}

// Fluxo "Tributos atuais → Novos tributos" em SVG server-rendered,
// mesma técnica de cometa do hero (pathLength=100 + stroke-dasharray).
function FlowPanel() {
  return () => (
    <div
      data-reveal-right=""
      mix={[
        card,
        css({
          padding: '40px 32px',
          // no mobile o SVG rola horizontalmente em vez de encolher até ficar ilegível
          '@media (max-width: 720px)': { overflowX: 'auto', padding: '24px 16px' },
        }),
      ]}
    >
      <svg
        viewBox="0 0 560 300"
        role="img"
        aria-label="Diagrama: PIS, COFINS e IPI convergem para CBS e Imposto Seletivo; ICMS, ISS e ICMS-ST convergem para IBS"
        mix={css({ width: '100%', minWidth: '480px', height: 'auto', display: 'block' })}
      >
        {/* cabeçalhos */}
        <text
          x="70"
          y="16"
          text-anchor="middle"
          fill="var(--muted)"
          font-family={FONT_MONO}
          font-size="13"
          letter-spacing="0.1em"
        >
          TRIBUTOS ATUAIS
        </text>
        <text
          x="280"
          y="16"
          text-anchor="middle"
          fill="var(--accent)"
          font-family={FONT_MONO}
          font-size="13"
          letter-spacing="0.1em"
        >
          NOVOS TRIBUTOS
        </text>
        {/* trilhos */}
        {[...LEFT_FLOWS, ...RIGHT_FLOWS].map((d) => (
          <path d={d} fill="none" stroke="var(--line)" stroke-width="1.5" />
        ))}
        {/* cometas */}
        {[...LEFT_FLOWS, ...RIGHT_FLOWS].map((d, i) => (
          <path
            d={d}
            data-flow=""
            fill="none"
            stroke={COLORS.cyanBright}
            stroke-width="2"
            stroke-linecap="round"
            pathLength={100}
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        ))}
        {/* tributos atuais — esquerda */}
        {OLD_LEFT.map((label, i) => (
          <g>
            <rect
              x="10"
              y={ROW_Y[i]}
              width="120"
              height="44"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--line)"
            />
            <text
              x="70"
              y={ROW_Y[i]! + 27}
              text-anchor="middle"
              fill="var(--text)"
              font-family={FONT_MONO}
              font-size="14"
            >
              {label}
            </text>
          </g>
        ))}
        {/* tributos atuais — direita */}
        {OLD_RIGHT.map((label, i) => (
          <g>
            <rect
              x="430"
              y={ROW_Y[i]}
              width="120"
              height="44"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--line)"
            />
            <text
              x="490"
              y={ROW_Y[i]! + 27}
              text-anchor="middle"
              fill="var(--text)"
              font-family={FONT_MONO}
              font-size="14"
            >
              {label}
            </text>
          </g>
        ))}
        {/* novos tributos — centro, destacados */}
        {NEW_CENTER.map((label, i) => (
          <g>
            <rect
              x="215"
              y={ROW_Y[i]}
              width="130"
              height="44"
              rx="10"
              fill="var(--surface)"
              stroke={COLORS.cyan}
            />
            <text
              x="280"
              y={ROW_Y[i]! + 27}
              text-anchor="middle"
              fill={COLORS.cyanBright}
              font-family={FONT_MONO}
              // 12: "Imposto Seletivo" é o rótulo mais longo e encostava na borda da caixa
              font-size="12"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
