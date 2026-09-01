import { css } from 'remix/ui'

import { Document } from '../../ui/document.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import {
  FONT_MONO,
  card,
  container,
  eyebrow,
  heading2,
  lead,
  section,
  stage,
  surfaceContrast,
} from '../../ui/tokens.ts'
import { FinalCta } from '../home/final-cta.tsx'

const ESSENCIA = [
  {
    titulo: 'Compromisso com a inovação e a excelência tributária',
    desc: 'Na LaraTAX, nossa missão é transformar a análise tributária por meio da tecnologia.',
    icone: 'M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21Z',
  },
  {
    titulo: 'Visão de futuro: simplificando a complexidade tributária',
    desc: 'Acreditamos que a tecnologia pode facilitar a vida dos profissionais tributários.',
    icone: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  },
  {
    titulo: 'Valores que nos definem: integridade e inovação',
    desc: 'Transparência com clientes e parceiros em cada análise, e tecnologia de ponta em cada entrega.',
    icone: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Z',
  },
]

// compartilhada com a página de Carreiras
export function CardsEssencia() {
  return (
    <div
      data-stagger=""
      mix={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        '@media (max-width: 860px)': { gridTemplateColumns: '1fr' },
      })}
    >
      {ESSENCIA.map((e) => (
        <div mix={card}>
          <span
            mix={css({
              display: 'grid',
              placeItems: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              marginBottom: '18px',
              background: 'rgba(7, 224, 255, 0.12)',
              color: 'var(--accent)',
            })}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={e.icone} />
            </svg>
          </span>
          <h3 mix={css({ margin: '0 0 10px', fontSize: '18px', lineHeight: 1.35, color: 'var(--text)' })}>{e.titulo}</h3>
          <p mix={css({ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: 'var(--muted)' })}>{e.desc}</p>
        </div>
      ))}
    </div>
  )
}

const HISTORIA = [
  'A LaraTAX foi fundada em 2019 com a missão de transformar a análise tributária por meio da tecnologia. Desde o início, nosso foco tem sido a inovação e a automação de processos complexos, permitindo que empresas e profissionais do setor tributário tenham acesso a soluções mais eficientes e precisas.',
  'Em 2020, desenvolvemos nosso primeiro algoritmo de análise fiscal, capaz de processar até 2,1 bilhões de cenários tributários. Essa tecnologia revolucionou a forma como os dados tributários são analisados, proporcionando insights valiosos em questão de minutos.',
  'Com a expansão nacional em 2021, conseguimos atrair investimentos significativos para aprimorar ainda mais nossas soluções. Essa fase foi crucial para consolidar nossa presença no mercado e para o desenvolvimento de novas funcionalidades que atendem às necessidades dos nossos clientes.',
  'No ano de 2022, lançamos uma solução integrada que permite análises completas em até 40 minutos, um marco que solidificou nossa posição como líderes em tecnologia tributária no Brasil.',
  'Em 2023, fomos reconhecidos como uma das startups mais inovadoras do setor, e em 2024, iniciamos nossa expansão internacional, com o compromisso de levar nossa expertise e soluções para novos mercados, sempre com a visão de simplificar a complexidade tributária.',
]

const LINHA_DO_TEMPO = [
  {
    ano: '2025 - Presente',
    titulo: 'Lançamento do produto',
    desc: 'Atualmente com 64 colaboradores e 108 clientes, seguimos em expansão, destacando o uso de robô fiscal e hiperautomação para ajudar nossos clientes a enfrentar mudanças tributárias com confiança.',
    icone:
      'M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12A2.996 2.996 0 0 1 9 18zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z',
  },
  {
    ano: '2024',
    titulo: 'Validando produto',
    desc: 'Início da expansão internacional, levando nossa expertise e soluções para novos mercados, sempre com a visão de simplificar a complexidade tributária.',
    icone:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  },
  {
    ano: '2023',
    titulo: 'Reestruturando produto',
    desc: 'Reconhecimento como uma das startups mais inovadoras do setor e consolidação das funcionalidades que atendem às necessidades dos nossos clientes.',
    icone:
      'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
  },
  {
    ano: '2022',
    titulo: 'Evolução',
    desc: 'Lançamento da solução integrada que permite análises completas em até 40 minutos — o marco que solidificou nossa posição como líderes em tecnologia tributária no Brasil.',
    icone: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
  },
  {
    ano: '2021',
    titulo: 'Expansão nacional',
    desc: 'Investimentos significativos para aprimorar as soluções e fortalecer a presença da LaraTAX em todo o país.',
    icone:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
  },
  {
    ano: '2019',
    titulo: 'Fundação',
    desc: 'A LaraTAX nasce com a missão de transformar a análise tributária por meio da tecnologia.',
    icone: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z',
  },
]

const jornadaCss = css({
  position: 'relative',
  paddingLeft: '28px',
  '@media (min-width: 1024px)': { paddingLeft: 0 },
})

const espinhaTracejada = css({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: '1px',
  transform: 'translateX(-50%)',
  backgroundImage: 'repeating-linear-gradient(to bottom, var(--muted) 0 2px, transparent 2px 9px)',
  pointerEvents: 'none',
  '@media (min-width: 1024px)': { left: '50%' },
})

const espinhaFio = css({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '1px',
  height: 0,
  transform: 'translateX(-50%)',
  background: 'var(--accent-graphic)',
  boxShadow: '0 0 8px rgba(7, 224, 255, 0.9)',
  pointerEvents: 'none',
  '@media (min-width: 1024px)': { left: '50%' },
})

const marcaJornada = css({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 10,
  width: '24px',
  height: '24px',
  transform: 'translate(-50%, -50%)',
  filter: 'drop-shadow(0 0 8px rgba(7, 224, 255, 0.9))',
  opacity: 0,
  pointerEvents: 'none',
  '@media (min-width: 1024px)': { left: '50%' },
})

const slotJornada = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '20px 0',
  '@media (min-width: 1024px)': { height: '54vh', padding: 0 },
})

const slotDireita = css({ '@media (min-width: 1024px)': { justifyContent: 'flex-end' } })
const slotEsquerda = css({ '@media (min-width: 1024px)': { justifyContent: 'flex-start' } })

const caixaJornada = css({
  position: 'relative',
  width: '100%',
  borderRadius: '16px',
  border: '1px solid rgba(7, 224, 255, 0.14)',
  background: 'var(--card-bg)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  '@media (min-width: 1024px)': { width: 'calc(50% - 70px)' },
})

const brilhoBaixo = css({
  pointerEvents: 'none',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '50%',
  borderRadius: '0 0 16px 16px',
  background: 'radial-gradient(ellipse at bottom, rgba(7, 224, 255, 0.1), transparent 72%)',
})

const conector = css({
  position: 'absolute',
  top: '27px',
  display: 'none',
  width: '70px',
  height: '1px',
  background: 'rgba(7, 224, 255, 0.6)',
  transform: 'scaleX(0)',
  pointerEvents: 'none',
  '@media (min-width: 1024px)': { display: 'block' },
})

const conectorEsq = css({ right: '100%', transformOrigin: 'right center' })
const conectorDir = css({ left: '100%', transformOrigin: 'left center' })

const cabecalhoJornada = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
  borderBottom: '1px solid var(--line)',
})

const celulaNumero = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '54px',
  flexShrink: 0,
  borderRight: '1px solid var(--line)',
  fontFamily: FONT_MONO,
  fontSize: '15px',
  color: 'var(--accent)',
  textShadow: '0 0 12px rgba(7, 224, 255, 0.5)',
})

const tituloJornada = css({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  padding: '16px 20px',
  fontFamily: FONT_MONO,
  fontSize: '13px',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: 'var(--text)',
})

const painelJornada = css({
  position: 'relative',
  overflow: 'hidden',
  borderBottom: '1px solid var(--line)',
})

const textoJornada = css({
  margin: 0,
  padding: '24px 20px',
  fontSize: '16px',
  lineHeight: 1.75,
  color: 'var(--muted)',
  '@media (min-width: 1024px)': { padding: '24px' },
})

const rodapeJornada = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '16px',
})

const quadroIcone = css({
  display: 'grid',
  placeItems: 'center',
  width: '44px',
  height: '44px',
  flexShrink: 0,
  borderRadius: '8px',
  border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)',
  color: 'var(--accent)',
  filter: 'drop-shadow(0 0 8px rgba(7, 224, 255, 0.35))',
})

const rotuloRodape = css({
  fontFamily: FONT_MONO,
  fontSize: '15px',
  color: 'var(--muted)',
})

export function SobrePage() {
  return () => (
    <Document>
      <Header />
      <main>
        <section mix={[section, css({ paddingBottom: '56px' })]}>
          <div mix={container}>
            <p mix={eyebrow}>A LaraTAX</p>
            <h1
              data-reveal=""
              mix={css({
                margin: '0 0 24px',
                maxWidth: '14em',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'var(--text)',
              })}
            >
              Transformando a gestão fiscal com inteligência
            </h1>
            <p mix={[lead, css({ maxWidth: '52em', marginBottom: 0 })]}>
              A LaraTAX revoluciona a análise tributária através de tecnologia de ponta, trazendo inovações que
              transformam a forma como empresas lidam com seus tributos. Combinamos automação inteligente e uma profunda
              expertise fiscal para simplificar processos complexos, permitindo que nossos clientes tenham uma visão
              clara e organizada de suas obrigações tributárias. Dessa maneira, garantimos eficiência e precisão na
              gestão fiscal, o que se traduz em economia de tempo, recursos e recuperação de tributos.
            </p>
          </div>
        </section>

        {/* essência */}
        <section mix={css({ padding: '12px 0' })}>
          <div mix={[surfaceContrast, stage]}>
            <div mix={container}>
              <p mix={eyebrow}>01 / A essência que nos guia</p>
              <h2 data-reveal="" mix={heading2}>O que nos move todos os dias</h2>
              <p mix={lead}>Missão, visão e valores que sustentam cada análise que entregamos.</p>
              {CardsEssencia()}
            </div>
          </div>
        </section>

        {/* história */}
        <section mix={section}>
          <div
            mix={[
              container,
              css({
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '56px',
                alignItems: 'start',
                '@media (max-width: 860px)': { gridTemplateColumns: '1fr', gap: '32px' },
              }),
            ]}
          >
            <div data-reveal-left="">
              <p mix={eyebrow}>02 / Nossa história</p>
              <h2 mix={heading2}>Da fundação à liderança em tecnologia tributária</h2>
              {HISTORIA.map((p) => (
                <p mix={css({ margin: '0 0 18px', fontSize: '15.5px', lineHeight: 1.7, color: 'var(--muted)' })}>{p}</p>
              ))}
            </div>
            <div
              data-reveal-right=""
              mix={css({
                position: 'sticky',
                top: '100px',
                display: 'grid',
                placeItems: 'center',
                minHeight: '360px',
                borderRadius: '20px',
                border: '1px solid rgba(7, 224, 255, 0.16)',
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(7, 224, 255, 0.1), transparent 70%), linear-gradient(227deg, #021118, #002e43)',
                textAlign: 'center',
                padding: '40px',
              })}
            >
              <div>
                <p mix={css({ margin: 0, fontFamily: FONT_MONO, fontSize: 'clamp(40px, 4.6vw, 56px)', lineHeight: 1.15, color: '#07E0FF', wordSpacing: '-0.3em' })}>
                  2019 → hoje
                </p>
                <p mix={css({ margin: '12px 0 0', fontSize: '14.5px', color: 'rgba(245, 255, 253, 0.7)' })}>
                  64 colaboradores · 108 clientes · expansão internacional
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* linha do tempo */}
        <section mix={css({ padding: '12px 0' })}>
          <div mix={[surfaceContrast, stage]}>
            <div mix={container}>
              <p mix={eyebrow}>03 / Nossa linha do tempo</p>
              <h2 data-reveal="" mix={heading2}>Trajetória de crescimento e inovação</h2>
              <p mix={lead}>
                Cada etapa da nossa história representa um salto significativo em tecnologia tributária. Conheça os
                momentos que nos definiram.
              </p>
              <div data-jornada="" mix={jornadaCss}>
                <div aria-hidden="true" mix={espinhaTracejada} />
                <div data-jornada-fio="" aria-hidden="true" mix={espinhaFio} />
                <div data-jornada-marca="" aria-hidden="true" mix={marcaJornada}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="12" cy="12" r="7" fill="var(--accent-graphic)" />
                  </svg>
                </div>
                {LINHA_DO_TEMPO.toReversed().map((etapa, i) => (
                  <div data-jornada-slot="" mix={[slotJornada, i % 2 === 0 ? slotDireita : slotEsquerda]}>
                    <div data-jornada-caixa="" mix={caixaJornada}>
                      <span aria-hidden="true" mix={brilhoBaixo} />
                      <span
                        data-jornada-conector=""
                        aria-hidden="true"
                        mix={[conector, i % 2 === 0 ? conectorEsq : conectorDir]}
                      />
                      <div mix={cabecalhoJornada}>
                        <span mix={celulaNumero}>{String(i + 1).padStart(2, '0')}</span>
                        <span mix={tituloJornada}>{etapa.titulo}</span>
                      </div>
                      <div data-jornada-painel="" mix={painelJornada}>
                        <p data-jornada-texto="" mix={textoJornada}>{etapa.desc}</p>
                      </div>
                      <div mix={rodapeJornada}>
                        <span mix={quadroIcone}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d={etapa.icone} />
                          </svg>
                        </span>
                        <span mix={rotuloRodape}>{etapa.ano}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </Document>
  )
}
