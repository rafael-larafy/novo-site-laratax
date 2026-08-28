import { css } from 'remix/ui'

import { Document } from '../../ui/document.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import {
  FONT_MONO,
  btnPrimary,
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
import { CardsEssencia } from '../sobre/page.tsx'

// selos GPTW recriados em texto (sem a arte oficial do certificado)
const SELOS = [
  { escopo: 'Brasil', ano: '2024' },
  { escopo: 'no Paraná', ano: '2025' },
  { escopo: 'Tecnologia da Informação', ano: '2024' },
]

export function CarreirasPage() {
  return () => (
    <Document>
      <Header />
      <main>
        <section mix={[section, css({ paddingBottom: '56px' })]}>
          <div mix={container}>
            <p mix={eyebrow}>Carreiras</p>
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
              Descubra oportunidades incríveis para crescer na LaraTAX
            </h1>
            <p mix={[lead, css({ maxWidth: '52em', marginBottom: 0 })]}>
              Junte-se a nós e faça parte da incrível transformação que está ocorrendo no vasto e dinâmico universo
              tributário, graças ao uso de tecnologia inovadora, ferramentas avançadas e soluções criativas que estão
              redefinindo o setor. Sua participação é absolutamente fundamental e imprescindível para moldar o futuro
              deste setor essencial, que desempenha um papel crucial na economia e na sociedade. Venha contribuir com
              suas ideias e energia para que juntos possamos construir um ambiente tributário mais eficiente, justo e
              sustentável!
            </p>
          </div>
        </section>

        <section mix={css({ padding: '12px 0' })}>
          <div mix={[surfaceContrast, stage]}>
            <div mix={container}>
              <p mix={eyebrow}>01 / A essência que nos guia</p>
              <h2 data-reveal="" mix={heading2}>O que você vai encontrar aqui</h2>
              <p mix={lead}>Missão, visão e valores que sustentam o nosso dia a dia.</p>
              {CardsEssencia()}
            </div>
          </div>
        </section>

        <section mix={section}>
          <div mix={[container, css({ textAlign: 'center' })]}>
            <p mix={[eyebrow, css({ justifyContent: 'center' })]}>02 / Inovação como modo de viver</p>
            <h2 data-reveal="" mix={[heading2, css({ margin: '0 auto 16px' })]}>Cultura de empoderamento e excelência</h2>
            <p mix={[lead, css({ margin: '0 auto 56px' })]}>
              Na LaraTAX, acreditamos profundamente no imenso potencial de cada profissional para impulsionar
              transformações significativas e duradouras no vasto universo tributário. Encaramos os desafios dessa área
              como oportunidades para o crescimento e aperfeiçoamento, promovendo um ambiente onde todos possam
              contribuir para um futuro mais eficiente e justo.
            </p>
            <div
              data-stagger=""
              mix={css({
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                marginBottom: '56px',
              })}
            >
              {SELOS.map((s) => (
                <div mix={[card, css({ width: '220px', textAlign: 'left' })]}>
                  <p mix={css({ margin: '0 0 14px', fontFamily: FONT_MONO, fontSize: '22px', fontWeight: 600, color: 'var(--accent)' })}>
                    GPTW™
                  </p>
                  <p mix={css({ margin: '0 0 4px', fontSize: '14.5px', fontWeight: 700, color: 'var(--text)' })}>
                    Melhores Empresas para Trabalhar
                  </p>
                  <p mix={css({ margin: 0, fontSize: '13.5px', color: 'var(--muted)' })}>
                    {s.escopo} · {s.ano}
                  </p>
                </div>
              ))}
            </div>
            <a href="/contato" mix={btnPrimary}>Verificar vagas disponíveis</a>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </Document>
  )
}
