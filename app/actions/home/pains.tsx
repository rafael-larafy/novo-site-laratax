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
const amarelo = 'oklch(0.8 0.11 90)'
const laranja = 'oklch(0.75 0.13 55)'
const vermelho = 'oklch(0.66 0.16 30)'

type Pain = { tag: string; title:string; text:string; cor:string, selo?:string}

const PAINS = [
  {
    tag:'Fricção',
    cor:ciano,
    title: 'Coleta braçal, portal por portal',
    text: 'Alguém do time passa dias baixando arquivo por arquivo: e-CAC, SPED, e-Social, cada um com seu certificado e sua fila.',
  },
  {
    tag:'Gargalo',
    cor:amarelo,
    title: 'A planilha não dá conta',
    text: 'São milhões de registros por empresa. Nenhum Excel aguenta, e ninguém cruza isso na mão sem deixar coisa para trás.',
  },
  {
    tag:'Custo',
    cor:laranja,
    title: 'Tempo caro em tarefa repetitiva',
    text: 'Enquanto a equipe copia, cola e confere, a análise que realmente gera receita fica esperando na fila.',
  },
  {
    tag:'Perda',
    cor:vermelho,
    title: 'Crédito que prescreve em silêncio',
    text: 'Crédito tributário tem prazo. O que ninguém encontra a tempo prescreve, e prescrito não volta.',
    selo:'Irreversível - janela de prescrição'
  },
]

const sintomas = [
  'Dias perdidos em portais',
  'Erro manual vira passivo',
  'Planilha trava no volume',
  'Equipe presa no repetitivo',
  'Cada mês sai de um jeito',
]


export function Pains() {
  return () => (
    <section id="problema" mix={css({padding:'12px 0', scrollMarginTop:'84px'})}>
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
        <div mix={[container, css({
          display:'grid',
          gridTemplateColumns:'1fr 1.1fr',
          gap:'64px',
          alignItems:'start',
          '@media (max-width: 960px)' : {gridTemplateColumns:'1fr',gap:'48px'},
        })
       ]}
       >
        <div data-reveal-left="">
          <p mix={eyebrow}>01 / O problema</p>
          <h2 mix={heading2}>
            A rotina fiscal manual não escala
          </h2>
          <p mix={[lead,css({marginBottom:0})]}>
            Quem fecha apuração conhece o ciclo: a coleta engole os dias, a análise prende a equipe
            e, quando sobra fôlego para caçar crédito, parte dele já prescreveu.
          </p>
          <p mix={css({
            margin:'48px 0 0',
            fontFamily:FONT_MONO,
            fontSize: '11px',
            letterSpacing:'0.25em',
            color:'var(--muted)',
            textTransform:'uppercase',
          })}>
            - sintomas
          </p>
          <ul role='list'
          data-stagger=""
          mix={css({
            margin:'8px 0 0',
            padding:'0',
            listStyle:'none',
            display:'flex ',
            flexDirection:'column',
          })}>
            {sintomas.map ((s) => (
              <li mix={css({display:'flex', alignItems:'center', gap:'14px', padding:'13px 0', borderTop:'1px solid var(--line)', '&:last-child': {borderBottom:'1px solid var(--line)'},
              })}>
                <span aria-hidden='true' mix={css({fontFamily: FONT_MONO, color: vermelho,})}>
                 ×
                </span>
                <span mix={css({fontFamily:FONT_MONO,fontSize:'12px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--muted)',})}>
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>


        <div mix={css({position:'relative'})}>
          <div aria-hidden='true' mix={css({ position:'absolute', left:'23px',top:'16px',bottom:'16px',width:'1px',
          background:`linear-gradient(180deg, ${ciano} 0%, ${amarelo} 42%, ${laranja} 72%, ${vermelho} 100%)`,
          })}/>
        <div data-stagger="" mix={css({display:'flex', flexDirection:'column',gap:'18px'})}>
          {PAINS.map((pain, i) => (
          <article mix={css({position:'relative',paddingLeft:'68px',
            '@media (max-width:560px)': {paddingLeft:'52px'},
          })}>
            <span aria-hidden="true" mix={css({position:'absolute',left:'11px',top:'22px',width:'25px',height:'25px',borderRadius:'50%',background:COLORS.ink, border:`1px solid ${pain.cor}`,
              display:'flex',alignItems:'center',justifyContent:'center',fontFamily:FONT_MONO,fontSize:'11px',color:pain.cor,
              '@media (max-width:560px)' : {left:'3px'},
            })}>
              {i+1}
            </span>
              <div mix={[css({background:'var(--surface-2)',border:('1px solid var(--line)'),borderRadius:'16px',padding:'26px 30px',display:'flex',flexDirection:'column',gap:'8px',
                '@media (max-width:560px)': {padding:'20px 18px'}
              }),
              pain.selo!== undefined && css ({borderColor:'rgba(232, 96, 76, 0.25)'})]}>
                <div mix={css({display:'flex', alignItems:'baseline',justifyContent:'space-between',gap:'20px'})}>
                  <h3 mix={css({margin:'0', fontSize:'21px',fontWeight:'700',color:'var(--text)'})}>
                    {pain.title}
                  </h3>
                    <span mix={css({fontFamily:FONT_MONO,fontSize:'11px',letterSpacing:'0.2em',textTransform:'uppercase',color:pain.cor})}>
                      {pain.tag}
                    </span>
                </div>
                <p mix={css({margin:'0',fontSize:'15px',lineHeight:'1.6',color:'var(--muted)'})}>
                  {pain.text}
                </p>
                {pain.selo !== undefined ?(
                  <span mix={css({alignSelf:'flex-start',marginTop:'2px',fontFamily:FONT_MONO,letterSpacing:'0.15em',textTransform:'uppercase',color:'oklch(0.72 0.14 30)',border:'1px solid rgba(232, 96, 76, 0.4)',background:'rgba(232, 96, 76, 0.08)',borderRadius:'6px',padding:'5px 10px',})}>
                    {pain.selo}
                  </span>
                ): null}
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </div>
      </section>
  )
}
