import { css } from 'remix/ui'

import { FONT_MONO, btnPrimary, card, container } from '../../ui/tokens.ts'
import { CLIENTES } from '../home/logos.tsx'
import { TelaDiagnosticoVisao } from '../home/plataforma-app.tsx'

// Hero em bento: a mensagem ocupa a célula grande e cada célula menor isola um
// fato do produto. Serve quando há várias frentes de valor com peso parecido
// (diagnóstico, PER/DCOMP, reforma) em vez de uma promessa única.

const rotulo = css({
  margin: 0,
  fontFamily: FONT_MONO,
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
})

const numero = css({
  display: 'block',
  fontFamily: FONT_MONO,
  fontSize: 'clamp(30px, 3.4vw, 42px)',
  fontWeight: 600,
  lineHeight: 1.1,
  color: 'var(--text)',
})

function Celula(valor: string, texto: string) {
  return (
    <div
      mix={[
        card,
        css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }),
      ]}
    >
      <strong mix={numero}>{valor}</strong>
      <p mix={rotulo}>{texto}</p>
    </div>
  )
}

export function HeroBento() {
  return () => (
    <section
      id="inicio"
      mix={css({
        position: 'relative',
        overflow: 'hidden',
        padding: '140px 0 64px',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0, 194, 239, 0.16), transparent 70%)',
        '@media (max-width: 720px)': { padding: '112px 0 48px' },
      })}
    >
      {/* a réplica esconde as telas por padrão; aqui uma delas precisa aparecer */}
      <style>{`[data-hero-app] [data-app-screen] { display: flex; }
        @keyframes bento-logos { to { transform: translateX(-50%); } }
        [data-bento-logos] { animation: bento-logos 26s linear infinite; }
        [data-bento-logos]:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { [data-bento-logos] { animation: none; } }`}</style>

      <div
        data-stagger=""
        mix={[
          container,
          css({
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 'minmax(148px, auto)',
            gap: '16px',
            '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
          }),
        ]}
      >
        {/* célula grande: a mensagem */}
        <div
          mix={[
            card,
            css({
              gridColumn: 'span 2',
              gridRow: 'span 2',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '48px',
              // no mobile o mosaico vira uma coluna só
              '@media (max-width: 900px)': { gridColumn: 'auto', gridRow: 'auto' },
              '@media (max-width: 720px)': { padding: '32px 24px' },
            }),
          ]}
        >
          <p
            data-scramble="A central de comando do tributarista"
            mix={css({
              margin: '0 0 20px',
              fontFamily: FONT_MONO,
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            })}
          >
            A central de comando do tributarista
          </p>
          <h1
            mix={css({
              margin: '0 0 20px',
              fontSize: 'clamp(34px, 4.4vw, 58px)',
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: '-0.05em',
              color: 'var(--text)',
            })}
          >
            Uma plataforma para toda a{' '}
            <span mix={css({ color: 'var(--accent)' })}>operação tributária</span>
          </h1>
          <p
            mix={css({
              margin: '0 0 32px',
              maxWidth: '34em',
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--muted)',
            })}
          >
            Diagnóstico de créditos, retificação, PER/DCOMP e reforma tributária no mesmo
            lugar, com a coleta das obrigações rodando sozinha por trás.
          </p>
          <a href="#contato" mix={[btnPrimary, css({ alignSelf: 'flex-start' })]}>
            Agendar apresentação
          </a>
        </div>

        {Celula('2,1 bi', 'cenários tributários processados')}
        {Celula('40 min', 'em média para um diagnóstico completo')}

        {/* célula larga: recorte da plataforma */}
        <div
          mix={[
            card,
            css({
              gridColumn: 'span 2',
              position: 'relative',
              overflow: 'hidden',
              height: '300px',
              padding: 0,
              '@media (max-width: 900px)': { gridColumn: 'auto' },
            }),
          ]}
        >
          <div
            data-hero-app=""
            aria-hidden="true"
            style={{ zoom: '0.6' }}
            mix={css({ width: '1440px', pointerEvents: 'none', userSelect: 'none' })}
          >
            {TelaDiagnosticoVisao(false)}
          </div>
          {/* o botão fica sobre o print, que é claro nos dois temas: cores do
              tema deixariam ele invisível no escuro (card-bg quase transparente) */}
          <a
            href="#plataforma"
            mix={[
              btnPrimary,
              css({
                // 40: acima da sidebar da réplica, que é sticky com z-index 30
                position: 'absolute',
                zIndex: 40,
                left: '20px',
                bottom: '20px',
                padding: '11px 18px',
                fontSize: '13.5px',
                whiteSpace: 'nowrap',
              }),
            ]}
          >
            Explorar a demonstração ↓
          </a>
        </div>

        {/* célula das fontes + prova social */}
        <div
          mix={[
            card,
            // minWidth 0: sem isso o item da grade cresce até o max-content do
            // marquee e estoura a coluna
            css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px', minWidth: 0 }),
          ]}
        >
          <p mix={rotulo}>Fontes conectadas</p>
          <p
            mix={css({
              margin: 0,
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--text)',
            })}
          >
            SPED · e-CAC · e-Social · NF-e baixados e cruzados automaticamente.
          </p>
          {/* marquee: duas cópias iguais e o loop fecha em translateX(-50%);
              a célula é estreita, então cada cópia já passa da largura dela */}
          <div
            mix={css({
              minWidth: 0,
              overflow: 'hidden',
              maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
            })}
          >
            <div
              data-bento-logos=""
              mix={css({
                display: 'flex',
                width: 'max-content',
                '& > div': { display: 'flex', alignItems: 'center', gap: '36px', paddingRight: '36px' },
              })}
            >
              <div>
                {CLIENTES.map((c) => (
                  <img
                    src={c.src}
                    alt={c.alt}
                    style={{ height: `${Math.round(c.h * 0.55)}px` }}
                    mix={css({ display: 'block', width: 'auto', filter: 'var(--logo-filter)' })}
                  />
                ))}
              </div>
              <div aria-hidden="true">
                {CLIENTES.map((c) => (
                  <img
                    src={c.src}
                    alt=""
                    style={{ height: `${Math.round(c.h * 0.55)}px` }}
                    mix={css({ display: 'block', width: 'auto', filter: 'var(--logo-filter)' })}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
