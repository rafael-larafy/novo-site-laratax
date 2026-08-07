import { css } from 'remix/ui'

import {
  COLORS,
  FONT_MONO,
  btnGhost,
  btnPrimary,
  container,
  surfaceContrast,
} from '../../ui/tokens.ts'
import { CLIENTES } from '../home/logos.tsx'

// Hero-carrossel (port do hero React/framer-motion do v3-site-larafy):
// fundo em crossfade + card-destaque + timeline de tabs com barra de
// progresso. Slides = áreas da plataforma. Todo o estado vive em
// landing.ts ([data-hero-slides]); sem JS o primeiro slide fica estático.
type Area = {
  category: string
  title: string
  fact: string
  paths: string[]
  video?: string
}

const AREAS: Area[] = [
  {
    category: 'Baixas automáticas',
    title: 'SPED, e-CAC e e-Social sem intervenção manual',
    fact: '1.380 DARFs, 60 DCTFs e 240 SPEDs Fiscais baixados em um único caso real.',
    paths: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  },
  {
    category: 'Motor de regras',
    title: '2,1 bi de cenários tributários processados',
    fact: 'Diagnóstico de oportunidades dos últimos 5 anos em menos de 40 minutos.',
    paths: [
      'M5 5h14v14H5z',
      'M9.5 9.5h5v5h-5z',
      'M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3',
    ],
  },
  {
    category: '74 painéis',
    title: 'Dashboards para cada área tributária',
    fact: 'ICMS, IPI, PIS/COFINS, IRPJ/CSLL, Previdenciário, Teses e Reforma.',
    paths: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  },
  {
    category: 'Retificação',
    title: 'Obrigações retificadas direto pelo sistema',
    fact: 'Da oportunidade encontrada à retificação, sem trocar de ferramenta.',
    paths: ['M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z'],
  },
  {
    category: 'Multi-CNPJ',
    title: 'Matriz e filiais em uma única execução',
    fact: 'Trilha de auditoria de ponta a ponta, pronta para o fisco.',
    paths: ['M3 21h18', 'M6 21V6l6-3v18', 'M14 21V10l4 2v9', 'M9 8v.01M9 12v.01M9 16v.01'],
  },
  {
    category: 'Segurança',
    title: 'Nuvem com autorizações formais',
    fact: 'Procuração eletrônica e trilha de auditoria completa.',
    paths: ['M5 11h14v10H5z', 'M8 11V7a4 4 0 0 1 8 0v4', 'M12 15v3'],
  },
  {
    category: 'Reforma IBS/CBS',
    title: 'Sua operação pronta para o IVA Dual',
    fact: 'A transição começa em 2026 — chegue preparado.',
    paths: ['M12 3v18', 'M5 8h14', 'M7 8v4a5 5 0 0 0 10 0V8'],
  },
]

// Placeholder: um único vídeo (era "Composição 1_1.mp4"; renomeado — nome
// com acento/espaço 404 no static middleware), cada área entrando numa
// minutagem diferente (media fragment #t= funciona sem JS). Vídeo próprio
// por área: preencha `video` no item acima. Duração do arquivo: ~26s.
const PLACEHOLDER_VIDEO = '/hero-bg.mp4'
const VIDEO_STARTS = [0, 4, 8, 11, 14, 18, 21]

// Cena de gradiente por slide: fica atrás do vídeo enquanto ele carrega.
const FOCI = ['70% 18%', '22% 28%', '78% 68%', '28% 74%', '60% 42%', '38% 14%', '74% 48%']

function scene(i: number) {
  const focus = FOCI[i % FOCI.length]
  return [
    `radial-gradient(ellipse 46% 38% at ${focus}, rgba(0, 194, 239, 0.16), transparent 70%)`,
    `radial-gradient(1100px 720px at ${focus}, #06222F 0%, ${COLORS.ink} 68%)`,
  ].join(', ')
}

const glassCard = css({
  position: 'absolute',
  insetInline: 0,
  bottom: 0,
  padding: '16px',
  borderRadius: '14px',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  background: 'rgba(255, 255, 255, 0.06)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
})

export function HeroSlides() {
  return () => (
    <section
      id="inicio"
      data-hero-slides=""
      mix={[
        surfaceContrast,
        css({
          position: 'relative',
          minHeight: '100vh',
          '@supports (min-height: 100svh)': { minHeight: '100svh' },
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor: COLORS.ink,
        }),
      ]}
    >
      <style>{`
        [data-hero-bg] { opacity: 0; transition: opacity 0.8s ease; }
        [data-hero-bg][data-on='true'] { opacity: 1; }
        [data-hero-card] { opacity: 0; transform: translateY(16px); pointer-events: none;
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1); }
        [data-hero-card][data-on='true'] { opacity: 1; transform: none; }
        [data-hero-cat] { color: rgba(255, 255, 255, 0.45); transition: color 160ms ease; }
        [data-hero-title] { color: rgba(255, 255, 255, 0.55); transition: color 160ms ease; }
        [data-hero-tab]:hover [data-hero-cat] { color: rgba(255, 255, 255, 0.7); }
        [data-hero-tab]:hover [data-hero-title] { color: rgba(255, 255, 255, 0.8); }
        [data-hero-tab][data-on='true'] [data-hero-cat] { color: ${COLORS.cyanBright}; }
        [data-hero-tab][data-on='true'] [data-hero-title] { color: #ffffff; }
        @keyframes hero-logos-scroll { to { transform: translateX(-50%); } }
        [data-hero-logos] { animation: hero-logos-scroll 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          [data-hero-bg], [data-hero-card] { transition: none; }
          [data-hero-logos] { animation: none; }
        }
      `}</style>

      {/* fundos por slide, em crossfade */}
      <div aria-hidden="true" mix={css({ position: 'absolute', inset: 0 })}>
        {AREAS.map((a, i) => (
          <div
            data-hero-bg=""
            data-on={i === 0 ? 'true' : 'false'}
            mix={css({
              position: 'absolute',
              inset: 0,
              // scrim: o screencast é claro; sem isso o texto lava
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'rgba(2, 17, 24, 0.6)',
              },
            })}
            style={{ backgroundImage: scene(i) }}
          >
            {/* só o slide inicial tem autoplay (funciona sem JS); os demais
                são tocados/pausados pelo landing.ts ao trocar de slide */}
            <video
              src={a.video ?? `${PLACEHOLDER_VIDEO}#t=${VIDEO_STARTS[i % VIDEO_STARTS.length]}`}
              autoplay={i === 0}
              muted
              loop
              playsinline
              preload={i === 0 ? 'auto' : 'metadata'}
              mix={css({ width: '100%', height: '100%', objectFit: 'cover' })}
            />
          </div>
        ))}
      </div>

      {/* grade de pontos + véus de legibilidade (esquerda e base) */}
      <div
        aria-hidden="true"
        mix={css({
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black, transparent 75%)',
        })}
      />
      <div
        aria-hidden="true"
        mix={css({
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(90deg, rgba(2, 17, 24, 0.92) 0%, rgba(2, 17, 24, 0.6) 42%, rgba(2, 17, 24, 0.12) 100%)',
        })}
      />
      <div
        aria-hidden="true"
        mix={css({
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(to top, rgba(2, 17, 24, 0.9) 0%, rgba(2, 17, 24, 0) 36%)',
        })}
      />

      {/* conteúdo */}
      <div
        mix={[
          container,
          css({
            position: 'relative',
            zIndex: 2,
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '140px',
            paddingBottom: '40px',
          }),
        ]}
      >
        <div mix={css({ maxWidth: '48rem' })}>
          <p
            data-scramble="LaraTAX — Inteligência Artificial Tributária"
            mix={css({
              margin: '0 0 24px',
              fontFamily: FONT_MONO,
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.143em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            })}
          >
            LaraTAX — Inteligência Artificial Tributária
          </p>
          <h1
            mix={css({
              margin: '0 0 24px',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: '-0.05em',
              color: 'var(--text)',
            })}
          >
            Automatize a recuperação{' '}
            <span mix={css({ color: 'var(--accent)' })}>de tributos</span>
          </h1>
          <p
            mix={css({
              margin: '0 0 40px',
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--muted)',
              maxWidth: '32em',
            })}
          >
            A LaraTAX cruza milhões de dados fiscais e entrega um diagnóstico de
            oportunidades dos últimos 5 anos em menos de 40 minutos — da baixa
            automática à retificação.
          </p>
          <div mix={css({ display: 'flex', gap: '16px', flexWrap: 'wrap' })}>
            <a href="#contato" mix={btnPrimary}>
              Agendar apresentação
            </a>
            <a href="#plataforma" mix={btnGhost}>
              Conhecer a plataforma
            </a>
          </div>
        </div>

        {/* destaque da área ativa (era o popup de depoimento no original) */}
        <div
          mix={css({
            position: 'relative',
            marginTop: '40px',
            width: '100%',
            maxWidth: '21rem',
            minHeight: '132px',
            '@media (min-width: 960px)': {
              position: 'absolute',
              right: '24px',
              bottom: '12px',
              margin: 0,
            },
          })}
        >
          {AREAS.map((a, i) => (
            <div data-hero-card="" data-on={i === 0 ? 'true' : 'false'} mix={glassCard}>
              <div mix={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <span
                  mix={css({
                    display: 'grid',
                    placeItems: 'center',
                    width: '36px',
                    height: '36px',
                    flexShrink: 0,
                    borderRadius: '10px',
                    background: 'rgba(7, 224, 255, 0.15)',
                    border: '1px solid rgba(7, 224, 255, 0.3)',
                  })}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    fill="none"
                    stroke={COLORS.cyanBright}
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {a.paths.map((d) => (
                      <path d={d} />
                    ))}
                  </svg>
                </span>
                <span mix={css({ minWidth: 0 })}>
                  <span
                    mix={css({
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#ffffff',
                    })}
                  >
                    {a.category}
                  </span>
                  <span
                    mix={css({
                      display: 'block',
                      fontFamily: FONT_MONO,
                      fontSize: '10.5px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.4)',
                    })}
                  >
                    Área da plataforma
                  </span>
                </span>
              </div>
              <p
                mix={css({
                  margin: '12px 0 0',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.7)',
                })}
              >
                {a.fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* dica de swipe (mobile) */}
      <div
        data-hero-hint=""
        aria-hidden="true"
        mix={css({
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 24px 6px',
          fontFamily: FONT_MONO,
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.4)',
          transition: 'opacity 0.5s ease',
          '@media (min-width: 960px)': { display: 'none' },
        })}
      >
        Deslize para ver as áreas
        <span mix={css({ color: COLORS.cyanBright })}>→</span>
      </div>

      {/* timeline de áreas */}
      <nav
        data-hero-nav=""
        aria-label="Áreas da plataforma"
        mix={[
          container,
          css({
            position: 'relative',
            zIndex: 2,
            width: '100%',
            display: 'flex',
            gap: '1px',
            overflowX: 'auto',
            paddingBottom: '24px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }),
        ]}
      >
        {AREAS.map((a, i) => (
          <button
            type="button"
            data-hero-tab=""
            data-on={i === 0 ? 'true' : 'false'}
            aria-current={i === 0 ? 'true' : undefined}
            mix={css({
              flex: '1 0 58%',
              // button centraliza conteúdo na vertical por padrão; com títulos
              // de 2-3 linhas as barras desalinhavam entre abas
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              paddingTop: '16px',
              paddingRight: '16px',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              '@media (min-width: 640px)': { flex: '1 0 33%' },
              '@media (min-width: 960px)': { flex: '1 1 0%', minWidth: 0 },
              '&:focus-visible': {
                outline: `2px solid ${COLORS.cyanBright}`,
                outlineOffset: '3px',
              },
            })}
          >
            <span
              mix={css({
                display: 'block',
                position: 'relative',
                height: '3px',
                borderRadius: '999px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.16)',
              })}
            >
              <span
                data-hero-bar=""
                mix={css({
                  display: 'block',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '999px',
                  background: COLORS.cyanBright,
                  boxShadow: '0 0 10px rgba(7, 224, 255, 0.6)',
                  transformOrigin: 'left center',
                  transform: 'scaleX(0)',
                  willChange: 'transform',
                })}
              />
            </span>
            <span
              data-hero-cat=""
              mix={css({
                display: 'block',
                marginTop: '14px',
                fontFamily: FONT_MONO,
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              })}
            >
              {a.category}
            </span>
            <span
              data-hero-title=""
              mix={css({
                display: 'block',
                marginTop: '6px',
                fontSize: '13.5px',
                fontWeight: 600,
                lineHeight: 1.35,
              })}
            >
              {a.title}
            </span>
          </button>
        ))}
      </nav>

      {/* faixa de clientes embutida na base do hero — segue o tema da página
          (vars de nível de TEMA, não as locais do surfaceContrast do hero) */}
      <div
        mix={css({
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid var(--t-base-line)',
          // opaco: no claro fica branco de verdade (o vidro translúcido
          // acinzentava sobre o vídeo escuro)
          background: 'var(--t-base-bg)',
        })}
      >
        <div
          mix={css({
            overflow: 'hidden',
            maskImage:
              'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          })}
        >
          <div
            data-hero-logos=""
            mix={css({
              display: 'flex',
              width: 'max-content',
              '& > div': {
                display: 'flex',
                alignItems: 'center',
                gap: '56px',
                padding: '18px 56px 18px 0',
              },
            })}
          >
            <div>
              {CLIENTES.map((c) => (
                <img
                  src={c.src}
                  alt={c.alt}
                  style={{ height: `${Math.round(c.h * 0.85)}px` }}
                  mix={css({
                    display: 'block',
                    width: 'auto',
                    filter: 'var(--logo-filter)',
                  })}
                />
              ))}
            </div>
            <div aria-hidden="true">
              {CLIENTES.map((c) => (
                <img
                  src={c.src}
                  alt=""
                  style={{ height: `${Math.round(c.h * 0.85)}px` }}
                  mix={css({
                    display: 'block',
                    width: 'auto',
                    filter: 'var(--logo-filter)',
                  })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
