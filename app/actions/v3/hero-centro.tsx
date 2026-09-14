import { css } from 'remix/ui'

import { FONT_MONO, btnGhost, btnPrimary, container, surfaceBase } from '../../ui/tokens.ts'
import { CSS_CARD_SOLTO, CardSolto } from '../home/hero.tsx'
import { DIAGS, TelaDiagnosticoVisao } from '../home/plataforma-app.tsx'

const METRICAS = [
  { valor: '2,1 bi', rotulo: 'cenários processados', n: '2.1', dec: '1', sufixo: ' bi' },
  { valor: '40 min', rotulo: ' em média por diagnóstico', n: '40', sufixo: ' min' },
  { valor: '5 anos', rotulo: 'de dados fiscais', n: '5', sufixo: ' anos' },
]

export function HeroCentro() {
  return () => (
    <section
      id="inicio"
      mix={[
        surfaceBase,
        css({
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '148px',
          backgroundImage:
            'radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, var(--accent-graphic) 18%, transparent), transparent 70%)',
          '@media (max-width: 720px)': { paddingTop: '112px' },
        }),
      ]}
    >
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
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, var(--accent-graphic) 16%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 92%, transparent) 0%, color-mix(in srgb, var(--surface) 95%, transparent) 55%, var(--surface) 100%)',
          },
        })}
      >
        <video
          data-video-src="/hero-bg.mp4"
          muted
          loop
          playsinline
          preload="none"
          mix={css({
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(3px) saturate(0.85)',
            transform: 'scale(1.05)',
          })}
        />
      </div>

      <style>{`[data-hero-app] [data-app-screen] { display: flex; }
        ${CSS_CARD_SOLTO}`}</style>

      <div mix={[container, css({ position: 'relative', zIndex: 1, textAlign: 'center' })]}>
        <p
          data-scramble="A central de comando do tributarista"
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
          A central de comando do tributarista
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
            A máquina de{' '}
            <span
              mix={css({
                backgroundImage:
                  'linear-gradient(100deg, var(--accent), var(--accent-graphic) 65%, var(--accent))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              })}
            >
              fazer dinheiro
            </span>{' '}
            do tributarista
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
            5 anos de dados fiscais, 2,1 bilhões de cenários processados. O crédito que ficou para trás aparece no primeiro diagnóstico.
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
          {METRICAS.map((m) => (
            <li>
              <strong
                data-count={m.n}
                data-count-decimals={m.dec}
                data-count-suffix={m.sufixo}
                mix={css({
                  display: 'block',
                  fontFamily: FONT_MONO,
                  fontSize: '26px',
                  fontWeight: 600,
                  color: 'var(--text)',
                })}
              >
                {m.valor}
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
                {m.rotulo}
              </span>
            </li>
          ))}
        </ul>

      </div>

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
          contain: 'content',
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px',
          border: '1px solid var(--line)',
          borderBottom: 'none',
          background: '#f8fbfc',
          boxShadow: '0 -10px 120px rgba(7, 224, 255, 0.28), 0 -2px 0 rgba(7, 224, 255, 0.35)',
          transform: 'perspective(1600px) rotateX(9deg)',
          transformOrigin: 'top center',
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
          {TelaDiagnosticoVisao()}
        </div>
      </div>
      </div>
    </section>
  )
}
