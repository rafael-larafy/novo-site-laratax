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
  'Arquivo retificador gerado pelo sistema',
  'Memória de cálculo e lastro de cada ajuste',
  'PER/DCOMP na sequência, sem sair da plataforma',
]

const ENTRADAS = ['EFD ICMS/IPI', 'EFD Contribuições', 'DCTF']
const SAIDAS = ['EFD retificada', 'DCTF retificadora', 'PER/DCOMP']

const ROW_Y = [40, 140, 240]

const ENTRADA_FLOWS = [
  'M150,62 C190,62 180,152 210,152',
  'M150,162 C180,162 185,152 210,152',
  'M150,262 C190,262 180,152 210,152',
]

const SAIDA_FLOWS = [
  'M350,152 C380,152 375,62 410,62',
  'M350,152 C380,152 380,162 410,162',
  'M350,152 C380,152 375,262 410,262',
]

export function Retificacao() {
  return () => (
    <section id="retificacao" mix={css({padding:'12px 0', scrollMarginTop:'84px'})}>
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
          <p mix={eyebrow}>03 / Retificação automática</p>
          <h2 mix={heading2}>
            A retificação sai pronta da própria apuração
          </h2>
          <p mix={[lead, css({ marginBottom: '32px' })]}>
            A LaraTAX compara o que foi entregue com o que os seus documentos mostram e gera o
            arquivo retificador de EFD, EFD Contribuições e DCTF, com a memória de cálculo do
            ajuste e o PER/DCOMP logo na sequência.
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
            Ver a retificação na prática <span data-arrow aria-hidden="true">→</span>
          </a>
        </div>
        <FlowPanel />
      </div>
    </div>
    </section>
  )
}

function FlowPanel() {
  return () => (
    <div
      data-reveal-right=""
      mix={[
        card,
        css({
          padding: '40px 32px',
          '@media (max-width: 720px)': {
            overflowX: 'auto',
            padding: '24px 16px',
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorX: 'contain',
            maskImage: 'linear-gradient(90deg, black 82%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, black 82%, transparent)',
          },
        }),
      ]}
    >
      <svg
        viewBox="0 0 560 300"
        role="img"
        aria-label="Diagrama: EFD ICMS/IPI, EFD Contribuições e DCTF entram na retificação automática, que devolve arquivo retificador, DCTF retificadora e PER/DCOMP"
        mix={css({ width: '100%', minWidth: '480px', height: 'auto', display: 'block' })}
      >
        <text
          x="80"
          y="16"
          text-anchor="middle"
          fill="var(--muted)"
          font-family={FONT_MONO}
          font-size="12"
          letter-spacing="0.1em"
        >
          O QUE FOI ENTREGUE
        </text>
        <text
          x="480"
          y="16"
          text-anchor="middle"
          fill="var(--accent)"
          font-family={FONT_MONO}
          font-size="12"
          letter-spacing="0.1em"
        >
          GERADO PELA LARATAX
        </text>
        {[...ENTRADA_FLOWS, ...SAIDA_FLOWS].map((d) => (
          <path d={d} fill="none" stroke="var(--line)" stroke-width="1.5" />
        ))}
        {[...ENTRADA_FLOWS, ...SAIDA_FLOWS].map((d, i) => (
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
        {ENTRADAS.map((label, i) => (
          <g>
            <rect
              x="10"
              y={ROW_Y[i]}
              width="140"
              height="44"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--line)"
            />
            <text
              x="80"
              y={ROW_Y[i]! + 27}
              text-anchor="middle"
              fill="var(--text)"
              font-family={FONT_MONO}
              font-size="11"
            >
              {label}
            </text>
          </g>
        ))}
        {SAIDAS.map((label, i) => (
          <g>
            <rect
              x="410"
              y={ROW_Y[i]}
              width="140"
              height="44"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--line)"
            />
            <text
              x="480"
              y={ROW_Y[i]! + 27}
              text-anchor="middle"
              fill="var(--text)"
              font-family={FONT_MONO}
              font-size="11"
            >
              {label}
            </text>
          </g>
        ))}
        <rect
          x="210"
          y="120"
          width="140"
          height="64"
          rx="12"
          fill="var(--surface)"
          stroke={COLORS.cyan}
        />
        <text
          x="280"
          y="147"
          text-anchor="middle"
          fill={COLORS.cyanBright}
          font-family={FONT_MONO}
          font-size="12"
        >
          Retificação
        </text>
        <text
          x="280"
          y="165"
          text-anchor="middle"
          fill={COLORS.cyanBright}
          font-family={FONT_MONO}
          font-size="12"
        >
          automática
        </text>
      </svg>
      <p
        aria-hidden="true"
        mix={css({
          display: 'none',
          margin: '12px 0 0',
          fontFamily: FONT_MONO,
          fontSize: '11px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          '@media (max-width: 720px)': { display: 'block' },
        })}
      >
        Arraste para ver o fluxo →
      </p>
    </div>
  )
}
