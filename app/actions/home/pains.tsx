import type { RemixNode } from 'remix/ui'
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

const TRADICIONAL = [
  'Baixar arquivos manualmente',
  'Fazer upload em ferramentas',
  'Exportar para Excel',
  'Tratar e cruzar planilhas',
  'Identificar oportunidades',
  'Preparar bases para retificação',
  'Gerar novos arquivos',
  'Controlar PER/DCOMP em planilhas',
]

const LARATAX = [
  'Baixa automática das obrigações acessórias (SPED, e‑CAC, e‑Social)',
  'Extração de relatórios automáticos',
  'Diagnóstico tributário inteligente',
  'Retificação inteligente',
  'Controle de PER/DCOMP automático',
]

const colunaCss = css({
  padding: '36px 40px',
  borderRadius: '16px',
  border: '1px solid transparent',
  '@media (max-width: 560px)': { padding: '28px 24px' },
})

const cabecalhoCss = css({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: '16px',
  margin: '0 0 18px',
})

const rotuloColuna = css({
  margin: 0,
  fontFamily: FONT_MONO,
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.143em',
  textTransform: 'uppercase',
})

const chipCss = css({
  flexShrink: 0,
  padding: '4px 10px',
  borderRadius: '999px',
  border: '1px solid currentColor',
  fontFamily: FONT_MONO,
  fontSize: '10px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
})

const listaCss = css({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
})

const itemCss = css({
  position: 'relative',
  paddingLeft: '30px',
  fontSize: '16px',
  lineHeight: 1.5,
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.42em',
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    boxSizing: 'border-box',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '5px',
    top: 'calc(0.42em + 15px)',
    bottom: '-26px',
    width: '1px',
  },
  '&:last-child::after': { display: 'none' },
})

type Coluna = {
  rotulo: RemixNode
  cor: string
  linha: string
  no: string
  trilho: string
  itens: string[]
  corItem: string
  peso: number
}

function Coluna(c: Coluna) {
  return (
    <>
      <div mix={[cabecalhoCss, css({ color: c.cor })]}>
        <p mix={rotuloColuna}>{c.rotulo}</p>
        <span mix={chipCss}>{c.itens.length} etapas</span>
      </div>
      <div mix={css({ height: '1px', background: c.linha, margin: '0 0 30px' })} />
      <ul role="list" mix={listaCss}>
        {c.itens.map((texto) => (
          <li
            mix={[
              itemCss,
              css({
                color: c.corItem,
                fontWeight: c.peso,
                '&::before': { background: c.no },
                '&::after': { background: c.trilho },
              }),
            ]}
          >
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
            <p mix={[eyebrow, css({ justifyContent: 'center' })]}>
              02 / O problema
            </p>
            <h2 mix={[heading2, css({ margin: '0 auto 16px' })]}>
              A consultoria tradicional não escala
            </h2>
            <p mix={[lead, css({ margin: '0 auto', maxWidth: '46em' })]}>
              O mercado automatizou pedaços do trabalho e parou no relatório. A LaraTAX fecha o
              ciclo inteiro, da coleta das obrigações à compensação do crédito.
            </p>
          </div>

          <div
            data-stagger=""
            mix={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              alignItems: 'center',
              '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: '16px' },
            })}
          >
            <div mix={colunaCss}>
              {Coluna({
                rotulo: (
                  <>
                    Modelo tradicional{' '}
                    <span mix={css({ opacity: 0.7 })}>(outras plataformas)</span>
                  </>
                ),
                cor: 'var(--muted)',
                linha: 'var(--line)',
                no: 'color-mix(in srgb, var(--text) 26%, transparent)',
                trilho: 'var(--line)',
                itens: TRADICIONAL,
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
                no: ciano,
                trilho: 'rgba(7, 224, 255, 0.3)',
                itens: LARATAX,
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
