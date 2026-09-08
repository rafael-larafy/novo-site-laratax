import { css } from 'remix/ui'

import { FONT_MONO, btnGhost, btnPrimary, container, surfaceContrast } from '../../ui/tokens.ts'
import { CSS_CARD_SOLTO, CardSolto } from '../home/hero.tsx'
import { DIAGS, TelaDiagnosticoVisao } from '../home/plataforma-app.tsx'

// Hero centrado ("stacked narrative"): tudo no eixo central e o produto
// entrando por baixo, cortado pela borda da seção. Contraponto ao split da
// home e ao carrossel de vídeo da v2.

const METRICAS = [
  ['2,1 bi', 'cenários processados'],
  ['40 min', 'por diagnóstico'],
  ['5 anos', 'de dados fiscais'],
]

export function HeroCentro() {
  return () => (
    <section
      id="inicio"
      mix={[
        surfaceContrast,
        css({
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '148px',
          // sem padding embaixo: a tela do produto encosta na borda
          backgroundImage:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(7, 224, 255, 0.16), transparent 70%)',
          '@media (max-width: 720px)': { paddingTop: '112px' },
        }),
      ]}
    >
      {/* fundo em vídeo com scrim: o screencast é claro e lavaria o texto */}
      <div
        aria-hidden="true"
        mix={css({
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            // o wash ciano volta por cima do vídeo, senão o fundo da seção
            // fica escondido embaixo dele
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(7, 224, 255, 0.16), transparent 70%), linear-gradient(180deg, rgba(2, 17, 24, 0.88) 0%, rgba(2, 17, 24, 0.93) 55%, rgba(2, 17, 24, 0.98) 100%)',
          },
        })}
      >
        <video
          src="/hero-bg.mp4"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          // desfocado e ampliado: entra como textura, não como conteúdo que
          // disputa a atenção com o título (a escala esconde a borda do blur)
          mix={css({
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(3px) saturate(0.85)',
            transform: 'scale(1.05)',
          })}
        />
      </div>

      {/* a réplica esconde as telas por padrão; aqui uma delas precisa aparecer */}
      <style>{`[data-hero-app] [data-app-screen] { display: flex; }
        ${CSS_CARD_SOLTO}`}</style>

      <div mix={[container, css({ position: 'relative', zIndex: 1, textAlign: 'center' })]}>
        <p
          data-scramble="Hiperautomação tributária"
          mix={css({
            margin: '0 0 24px',
            fontFamily: FONT_MONO,
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          })}
        >
          Hiperautomação tributária
        </p>

        <div data-reveal="">
          <h1
            mix={css({
              margin: '0 auto 24px',
              maxWidth: '15em',
              fontSize: 'clamp(38px, 6vw, 76px)',
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: '-0.05em',
              color: 'var(--text)',
            })}
          >
            Todo o crédito que a sua{' '}
            <span mix={css({ color: 'var(--accent)' })}>apuração deixou passar</span>
          </h1>
          <p
            mix={css({
              margin: '0 auto 40px',
              maxWidth: '34em',
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--muted)',
            })}
          >
            A LaraTAX baixa as obrigações, cruza cinco anos de dados fiscais e devolve um
            diagnóstico de oportunidades pronto para virar retificação e PER/DCOMP.
          </p>
          <div
            mix={css({
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            })}
          >
            <a href="#contato" mix={btnPrimary}>
              Agendar apresentação
            </a>
            <a href="#plataforma" mix={btnGhost}>
              Ver a plataforma
            </a>
          </div>
        </div>

        <ul
          role="list"
          data-stagger=""
          mix={css({
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px 48px',
            margin: '56px 0 0',
            padding: 0,
            listStyle: 'none',
          })}
        >
          {METRICAS.map(([valor, rotulo]) => (
            <li>
              <strong
                mix={css({
                  display: 'block',
                  fontFamily: FONT_MONO,
                  fontSize: '26px',
                  fontWeight: 600,
                  color: 'var(--text)',
                })}
              >
                {valor}
              </strong>
              <span
                mix={css({
                  fontFamily: FONT_MONO,
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                })}
              >
                {rotulo}
              </span>
            </li>
          ))}
        </ul>

      </div>

      {/* produto entrando por baixo: cortado pela borda, com os KPIs soltos
          quebrando a borda de cima (a moldura recorta, então eles ficam fora) */}
      <div
        data-parallax="-5"
        mix={css({
          position: 'relative',
          zIndex: 1,
          margin: '112px auto 0',
          width: 'min(1160px, calc(100% - 48px))',
        })}
      >
        {CardSolto('Possíveis Oportunidades', DIAGS[0].posOp, 'posOp', css({ top: '-64px', left: '28px' }))}
        {CardSolto('Possibilidades a Explorar', DIAGS[0].posExp, 'posExp', css({ top: '-64px', right: '28px' }))}
        {CardSolto("DARF's Recolhidos", DIAGS[0].kpiDarfs, 'kpiDarfs', css({ top: '196px', left: '-46px' }), true)}
      <div
        mix={css({
          position: 'relative',
          height: '420px',
          overflow: 'hidden',
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px',
          border: '1px solid var(--line)',
          borderBottom: 'none',
          background: '#f8fbfc',
          boxShadow: '0 -8px 80px rgba(7, 224, 255, 0.18)',
          maskImage: 'linear-gradient(180deg, black 62%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, black 62%, transparent)',
          '@media (max-width: 720px)': { display: 'none' },
        })}
      >
        <div
          data-hero-app=""
          aria-hidden="true"
          style={{ zoom: '0.8' }}
          mix={css({ width: '1440px', pointerEvents: 'none', userSelect: 'none' })}
        >
          {TelaDiagnosticoVisao(false)}
        </div>
      </div>
      </div>
    </section>
  )
}
