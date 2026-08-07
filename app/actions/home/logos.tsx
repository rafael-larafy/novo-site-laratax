import { css } from 'remix/ui'

import { FONT_MONO, container } from '../../ui/tokens.ts'

// Logos extraídos do laratax.com.br (faixa "As maiores do Brasil confiam"),
// na mesma ordem. Altura por logo: wordmarks largos pedem menos altura para
// o peso visual ficar uniforme.

type CLIENTES = {
  src : "string",
  alt: "string",
  h: "number",
}

export const CLIENTES = [
  { src: '/clientes/hedge-tax.png', alt: 'Hedge Tax', h: 30 },
  { src: '/clientes/ag-tax.webp', alt: 'AG Tax', h: 50 },
  { src: '/clientes/simoes-pires.svg', alt: 'Simões Pires', h: 17 },
  { src: '/clientes/evox-fiscal.png', alt: 'Evox Fiscal', h: 30 },
  { src: '/clientes/planning.png', alt: 'Planning', h: 28 },
  { src: '/clientes/marins-bertoldi.webp', alt: 'Marins Bertoldi', h: 40 },
  { src: '/clientes/crowe.png', alt: 'Crowe', h: 30 },  
]

// Monocromático via --logo-filter (tema decide: escuro no claro, branco no
// escuro) — os originais são brancos, feitos para o navy do site antigo.
const logoItem = css({
  display: 'block',
  width: 'auto',
  filter: 'var(--logo-filter)',
})

export function LogosMarquee() {
  return () => (
    <section
      mix={css({
        // topo curto: encosta a faixa no hero (o vão de baixo separa da Pains)
        padding: '8px 0 48px',
        overflow: 'hidden',
      })}
    >
      <style>{`
        @keyframes logos-scroll { to { transform: translateX(-50%); } }
        [data-logos-track] { animation: logos-scroll 32s linear infinite; }
        [data-logos-mask]:hover [data-logos-track],
        [data-logos-mask]:focus-within [data-logos-track] { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          [data-logos-track] { animation: none; }
        }
      `}</style>
      <div mix={container}>
        <p
          data-reveal=""
          mix={css({
            margin: '0 0 28px',
            fontFamily: FONT_MONO,
            fontSize: '12px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            textAlign: 'center',
            color: 'var(--muted)',
          })}
        >
          As maiores do Brasil confiam
        </p>
      </div>
      <div
        data-logos-mask=""
        mix={css({
          maskImage:
            'linear-gradient(90deg, transparent, var(--surface) 12%, var(--surface) 88%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, var(--surface) 12%, var(--surface) 88%, transparent)',
        })}
      >
        <div
          data-logos-track=""
          mix={css({
            display: 'flex',
            width: 'max-content',
            '& > div': {
              display: 'flex',
              alignItems: 'center',
              gap: '72px',
              paddingRight: '72px',
            },
          })}
        >
          {/* duas cópias da lista → translateX(-50%) fecha o loop sem emenda;
              a segunda é só visual, escondida de leitores de tela */}
          <div>
            {CLIENTES.map((c) => (
              <img src={c.src} alt={c.alt} style={{ height: `${c.h}px` }} mix={logoItem} />
            ))}
          </div>
          <div aria-hidden="true">
            {CLIENTES.map((c) => (
              <img src={c.src} alt="" style={{ height: `${c.h}px` }} mix={logoItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
