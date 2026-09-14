import { css } from 'remix/ui'

import {
  COLORS,
  FONT_MONO,
  container,
  eyebrow,
  heading2,
  lead,
  stage,
  surfaceContrast,
} from '../../ui/tokens.ts'

const ciano = COLORS.cyanBright
const vermelho = 'oklch(0.66 0.16 30)'

const COMPARATIVO = [
  { mercado: 'Upload manual de SPED, XML e guias', laratax: 'Baixa automática no e-CAC, SPED e NF-e' },
  { mercado: 'Cada ferramenta lê só um pedaço', laratax: '5 anos cruzados, 2,1 bi de cenários' },
  { mercado: '1 a 4 meses até o primeiro número', laratax: 'Primeiro número em média 40 minutos' },
  { mercado: 'Termina em relatório', laratax: 'Retificação e PER/DCOMP no sistema' },
  { mercado: 'IVA Dual ainda no roteiro', laratax: 'Pronto para o IVA Dual' },
]

const colunaCss = css({
  padding: '36px 40px',
  borderRadius: '16px',
  border: '1px solid transparent',
  '@media (max-width: 560px)': { padding: '28px 24px' },
})

const rotuloColuna = css({
  margin: '0 0 18px',
  fontFamily: FONT_MONO,
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.143em',
  textTransform: 'uppercase',
})

const listaCss = css({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

const itemCss = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '14px',
  minHeight: '24px',
  fontSize: '16px',
  lineHeight: 1.5,
})

const marcaCss = css({
  flexShrink: 0,
  width: '18px',
  fontSize: '15px',
  fontWeight: 700,
  lineHeight: 1.5,
  textAlign: 'center',
})

type Coluna = {
  rotulo: string
  cor: string
  linha: string
  marca: string
  corMarca: string
  itens: string[]
  corItem: string
  peso: number
}

function Coluna(c: Coluna) {
  return (
    <>
      <p mix={[rotuloColuna, css({ color: c.cor })]}>{c.rotulo}</p>
      <div mix={css({ height: '1px', background: c.linha, margin: '0 0 28px' })} />
      <ul role="list" mix={listaCss}>
        {c.itens.map((texto) => (
          <li mix={[itemCss, css({ color: c.corItem, fontWeight: c.peso })]}>
            <span aria-hidden="true" mix={[marcaCss, css({ color: c.corMarca })]}>
              {c.marca}
            </span>
            {texto}
          </li>
        ))}
      </ul>
    </>
  )
}

export function Pains() {
  return () => (
    <section id="problema" mix={css({ padding: '12px 0', scrollMarginTop: '84px' })}>
      <div
        mix={[
          surfaceContrast,
          stage,
          css({
            backgroundImage:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(7,224,255,0.07), transparent 70%)',
          }),
        ]}
      >
        <div mix={container}>
          <div data-reveal="" mix={css({ textAlign: 'center', marginBottom: '56px' })}>
            <p mix={[eyebrow, css({ justifyContent: 'center', '&::before': { display: 'none' } })]}>
              01 / O problema
            </p>
            <h2 mix={[heading2, css({ margin: '0 auto 16px' })]}>
              A rotina fiscal manual não escala
            </h2>
            <p mix={[lead, css({ margin: '0 auto', maxWidth: '46em' })]}>
              O mercado automatizou pedaços do trabalho e parou no relatório. A LaraTAX fecha o
              ciclo inteiro, da coleta das obrigações ao PER/DCOMP.
            </p>
          </div>

          <div
            data-stagger=""
            mix={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              alignItems: 'stretch',
              '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: '16px' },
            })}
          >
            <div mix={colunaCss}>
              {Coluna({
                rotulo: 'Outras plataformas',
                cor: 'var(--muted)',
                linha: 'var(--line)',
                marca: '✗',
                corMarca: vermelho,
                itens: COMPARATIVO.map((i) => i.mercado),
                corItem: 'var(--muted)',
                peso: 400,
              })}
            </div>

            <div
              mix={[
                colunaCss,
                css({
                  borderColor: 'rgba(7, 224, 255, 0.22)',
                  backgroundImage:
                    'linear-gradient(155deg, rgba(7, 224, 255, 0.07), transparent 55%)',
                  boxShadow: '0 24px 60px rgba(2, 17, 24, 0.35)',
                }),
              ]}
            >
              {Coluna({
                rotulo: 'LaraTAX',
                cor: ciano,
                linha: 'rgba(7, 224, 255, 0.22)',
                marca: '✓',
                corMarca: ciano,
                itens: COMPARATIVO.map((i) => i.laratax),
                corItem: 'var(--text)',
                peso: 600,
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
