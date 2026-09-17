import { css } from 'remix/ui'

import { Document } from '../../ui/document.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { Logo } from '../../ui/logo.tsx'
import {
  COLORS,
  FONT_MONO,
  btnGhost,
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
import {
  CSS_TELA_ESTATICA,
  SpriteIcones,
  TelaDiagnosticoIcms,
  TelaDiagnosticoIpi,
  TelaDiagnosticoIrpj,
  TelaDiagnosticoPisCofins,
  TelaDiagnosticoPrev,
  TelaDiagnosticoTeaser,
  TelaDiagnosticoVisao,
  TelaReforma,
} from '../home/plataforma-app.tsx'
import { FinalCta } from '../home/final-cta.tsx'

const FONTES = [
  { nome: 'Grupo SPED', desc: 'Baixa de SPED Fiscal, SPED Contribuições, ECF e ECD.' },
  { nome: 'e-CAC', desc: 'Baixa de DCTF, DCTFWEB, compensações, MIT, pagamentos e fontes pagadoras.' },
  { nome: 'e-Social', desc: "Baixa de todos os xml's." },
]

const ORGAOS = ['Receita Federal', 'e-CAC', 'eSocial']

const ARQUIVOS = ['TXT', 'REC', 'DEC', 'XML', 'CSV', 'PDF']

const ESTRUTURACAO = [
  'Processamento de dados com validação integrada',
  'Cruzamento automático de dados',
  'Cálculos de materialidade e oportunidades precisos',
]

const AREAS = ['Visão Geral', 'ICMS', 'IPI', 'PIS/COFINS', 'IRPJ/CSLL', 'Previdenciária', 'Teses', 'Reforma Tributária']

const RETIFICACAO = [
  {
    titulo: 'Eficiência e precisão',
    desc: 'Elimine a burocracia excessiva que muitas vezes atrapalha o progresso e faça ajustes fiscais de forma rápida, prática e eficiente, garantindo que suas operações e processos se tornem mais ágeis e eficazes.',
  },
  {
    titulo: 'Simplicidade em cada passo',
    desc: 'O envio de informações fiscais é feito de maneira embarcada e eficiente, proporcionando uma experiência mais fluida e sem complicações. Garantindo que os dados sejam entregues de forma precisa e pontual.',
  },
  {
    titulo: 'Mais resultados',
    desc: 'A retificação de tributos se torna uma tarefa descomplicada e acessível, permitindo que pessoas e empresas realizem ajustes de forma rápida e eficiente, sem enfrentar complicações ou dificuldades desnecessárias.',
  },
]

function MarcaX(tam: number, cor: string, opacidade: number) {
  return (
    <svg width={tam} height={tam} viewBox="-200 -215 1784 1845" fill={cor} aria-hidden="true" mix={css({ opacity: String(opacidade) })}>
      <path d="M1320.09 12.1855C1348.43 12.1855 1350.01 45.7341 1335.84 63.4898L937.784 571.053L790.881 379.042L1050.88 39.8044C1063.47 22.0535 1076.07 12.1855 1101.26 12.1855H1320.09Z" />
      <path d="M321.92 12.1855C347.108 12.1866 359.706 22.0497 372.3 39.8044L1357.87 1341.88C1372.04 1359.64 1370.48 1393.18 1342.15 1393.19H1113.86C1088.67 1393.19 1076.07 1383.32 1061.9 1365.57L687.177 868.399L310.902 1365.57C296.734 1383.32 285.706 1393.18 260.522 1393.19H40.0961C11.7566 1393.19 11.7539 1359.64 25.9236 1341.88L539.191 673.1L76.304 63.4898C62.1342 45.7341 63.7143 12.1855 92.0537 12.1855H321.92Z" />
    </svg>
  )
}

const painelVisual = css({
  position: 'relative',
  overflow: 'hidden',
  display: 'grid',
  placeItems: 'center',
  minHeight: '340px',
  borderRadius: '20px',
  border: '1px solid rgba(7, 224, 255, 0.16)',
  background:
    'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(7, 224, 255, 0.1), transparent 70%), linear-gradient(227deg, #021118, #002e43)',
})

const PAINEIS = [
  {
    area: 'Visão Geral',
    titulo: 'O retrato consolidado do período',
    texto:
      'Oportunidades e possibilidades a explorar por tributo, DARFs recolhidos, receitas e compras cruzadas ano a ano na mesma tela.',
    tela: () => TelaDiagnosticoVisao(),
  },
  {
    area: 'ICMS',
    titulo: 'Entradas e saídas do fluxo operacional',
    texto:
      'O fluxo completo de entradas e saídas, com as oportunidades em prévia e refinadas ao lado do ICMS a recolher no período.',
    tela: () => TelaDiagnosticoIcms(),
  },
  {
    area: 'IPI',
    titulo: 'Oportunidades a explorar e o que já foi pago',
    texto:
      'Fluxo de entradas, oportunidades a explorar e pagamentos efetuados, sempre com o comparativo entre o valor prévio e o refinado.',
    tela: () => TelaDiagnosticoIpi(),
  },
  {
    area: 'PIS/COFINS',
    titulo: 'Análises separadas de entradas e saídas',
    texto:
      'Cada lado da operação com a sua própria análise, as oportunidades por regime e o total recolhido de PIS e COFINS no período.',
    tela: () => TelaDiagnosticoPisCofins(),
  },
  {
    area: 'IRPJ/CSLL',
    titulo: 'Créditos, pagamentos e compensações',
    texto:
      'Os créditos do período, os pagamentos de IRPJ e CSLL e as compensações já declaradas em DCTF, reunidos num painel só.',
    tela: () => TelaDiagnosticoIrpj(),
  },
  {
    area: 'Previdenciária',
    titulo: 'Verbas indenizatórias e desoneração da folha',
    texto:
      'Recolhimentos de INSS, verbas indenizatórias e desoneração da folha, período a período, com o valor refinado ao lado do prévio.',
    tela: () => TelaDiagnosticoPrev(),
  },
  {
    area: 'Teses',
    titulo: 'Transparência e escolha consciente',
    texto:
      'Mapeamento das principais teses tributárias em discussão judicial, apontando as já reconhecidas pela jurisprudência dominante (STJ, STF, CARF), com base legal clara e documentação exigida.',
    tela: () => TelaDiagnosticoTeaser('diagnostico-teses', 'Teses'),
  },
  {
    area: 'Reforma Tributária',
    titulo: 'Sua operação simulada no IVA Dual',
    texto:
      'Simulação de IBS, CBS e Imposto Seletivo sobre a sua própria operação, alimentada pelo SPED ou pelas notas fiscais.',
    tela: () => TelaReforma(),
  },
]

const molduraTela = css({
  position: 'relative',
  height: '440px',
  overflow: 'hidden',
  contain: 'content',
  contentVisibility: 'auto',
  containIntrinsicHeight: 'auto 440px',
  borderRadius: '14px',
  border: '1px solid var(--line)',
  background: '#f8fbfc',
  boxShadow: '0 24px 60px rgba(2, 17, 24, 0.28)',
  '@media (max-width: 860px)': { display: 'none' },
})

const rotuloArea = css({
  display: 'inline-block',
  marginBottom: '14px',
  padding: '6px 14px',
  borderRadius: '999px',
  background: 'rgba(7, 224, 255, 0.12)',
  color: 'var(--accent)',
  fontFamily: FONT_MONO,
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
})

const chipArea = css({
  appearance: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontFamily: FONT_MONO,
  fontSize: '12.5px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '10px 16px',
  borderRadius: '999px',
  border: '1px solid var(--line)',
  color: 'var(--muted)',
  transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), color 200ms ease, border-color 200ms ease, background 200ms ease, box-shadow 200ms ease',
  '@media (hover: hover)': {
    '&:hover': {
      transform: 'translateY(-3px)',
      color: 'var(--text)',
      borderColor: 'rgba(7, 224, 255, 0.55)',
      background: 'rgba(7, 224, 255, 0.1)',
      boxShadow: '0 8px 20px rgba(2, 17, 24, 0.35)',
    },
    '&[data-on="true"]:hover': {
      transform: 'none',
      color: 'var(--surface)',
      background: 'var(--accent)',
      borderColor: 'var(--accent)',
      boxShadow: 'none',
    },
  },
  '@media (prefers-reduced-motion: reduce)': { transition: 'color 200ms ease, border-color 200ms ease' },
  '&:focus-visible': { outline: '2px solid var(--accent)', outlineOffset: '3px' },
  '&[data-on="true"]': {
    color: 'var(--surface)',
    background: 'var(--accent)',
    borderColor: 'var(--accent)',
  },
})

const tituloSecao = css({ maxWidth: '15em' })

const colunas2 = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '56px',
  alignItems: 'center',
  '@media (max-width: 860px)': { gridTemplateColumns: '1fr', gap: '32px' },
})

export function RecursosPage() {
  return () => (
    <Document>
      <Header />
      <main>
        {SpriteIcones()}
        <section mix={[section, css({ paddingBottom: '48px', textAlign: 'center' })]}>
          <div mix={container}>
            <p mix={[eyebrow, css({ justifyContent: 'center', '&::before': { display: 'none' } })]}>Recursos</p>
            <h1
              data-reveal=""
              mix={css({
                margin: '0 auto 20px',
                maxWidth: '12em',
                fontSize: 'clamp(38px, 5.4vw, 64px)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'var(--text)',
              })}
            >
              Transforme sua <span mix={css({ color: 'var(--accent)' })}>rotina fiscal</span>
            </h1>
            <p mix={[lead, css({ margin: '0 auto 40px' })]}>
              Descubra como a tecnologia transforma a gestão tributária com precisão e agilidade excepcionais.
            </p>
            <div mix={css({ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' })}>
              <a href="#contato" mix={btnPrimary}>Falar com especialista</a>
              <a href="#baixas" mix={btnGhost}>Explorar funções</a>
            </div>
          </div>
        </section>

        <section id="baixas" mix={css({ padding: '12px 0', scrollMarginTop: '84px' })}>
          <div mix={[surfaceContrast, stage]}>
            <style>{`
              @keyframes fluxo-arquivos { to { stroke-dashoffset: -100; } }
              [data-fluxo] { stroke-dasharray: 14 86; animation: fluxo-arquivos 3s linear infinite; }
            `}</style>
            <div mix={container}>
              <p mix={eyebrow}>01 / Baixas automáticas</p>
              <h2 data-reveal="" mix={heading2}>Download automático de obrigações fiscais</h2>
              <p mix={lead}>
                Simplifique sua rotina fiscal com o download automático de documentos essenciais. Nossa solução garante
                eficiência e reduz riscos operacionais de forma significativa com robôs de automação e um motor de regras fiscais.
              </p>

              <div
                data-stagger=""
                mix={css({
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px',
                  '@media (max-width: 860px)': { gridTemplateColumns: '1fr' },
                })}
              >
                {FONTES.map((f) => (
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
                        <path d="M12 3v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4L10 13.2V3h2ZM5 19h14v2H5v-2Z" />
                      </svg>
                    </span>
                    <h3 mix={css({ margin: '0 0 8px', fontSize: '18px', color: 'var(--text)' })}>{f.nome}</h3>
                    <p mix={css({ margin: 0, fontSize: '14.5px', lineHeight: 1.55, color: 'var(--muted)' })}>{f.desc}</p>
                  </div>
                ))}
              </div>

              <div mix={css({ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', margin: '48px 0 8px' })}>
                {ORGAOS.map((o) => (
                  <span
                    mix={css({
                      padding: '10px 22px',
                      borderRadius: '10px',
                      background: '#ffffff',
                      color: '#0b2430',
                      fontSize: '14.5px',
                      fontWeight: 700,
                    })}
                  >
                    {o}
                  </span>
                ))}
              </div>

              <div mix={css({ maxWidth: '680px', margin: '0 auto' })}>
                <div mix={css({ display: 'flex', justifyContent: 'space-between', gap: '8px' })}>
                  {ARQUIVOS.map((a) => (
                    <span
                      mix={css({
                        fontFamily: FONT_MONO,
                        fontSize: '12.5px',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        padding: '8px 0',
                        width: '64px',
                        textAlign: 'center',
                        borderRadius: '8px',
                        border: '1px solid var(--line)',
                        color: 'var(--text)',
                        '@media (max-width: 560px)': { width: '44px', fontSize: '10.5px' },
                      })}
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <svg viewBox="0 0 660 120" aria-hidden="true" mix={css({ display: 'block', width: '100%' })}>
                  {ARQUIVOS.map((_, i) => {
                    const x = 32 + i * (596 / 5)
                    const d = `M${x},0 C${x},70 330,40 330,118`
                    return (
                      <>
                        <path d={d} fill="none" stroke="rgba(7, 224, 255, 0.22)" stroke-width="1.5" />
                        <path d={d} fill="none" stroke={COLORS.cyanBright} stroke-width="1.5" data-fluxo="" />
                      </>
                    )
                  })}
                </svg>
                <div
                  mix={css({
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '18px 0',
                    borderRadius: '14px',
                    border: '1px solid rgba(7, 224, 255, 0.25)',
                    background: 'rgba(7, 224, 255, 0.05)',
                  })}
                >
                  <Logo height={22} />
                </div>
              </div>

              <div mix={css({ display: 'flex', justifyContent: 'center', marginTop: '48px' })}>
                <a href="#contato" mix={btnPrimary}>Agendar com especialista</a>
              </div>
            </div>
          </div>
        </section>

        <section mix={section}>
          <div mix={[container, colunas2]}>
            <div data-reveal-left="" mix={painelVisual}>
              {MarcaX(220, 'var(--accent)', 0.9)}
            </div>
            <div data-reveal-right="">
              <p mix={eyebrow}>02 / Extraindo valor dos dados</p>
              <h2 mix={[heading2, tituloSecao]}>Estruturação e Processamento de Dados Eficiente</h2>
              <p mix={[lead, css({ marginBottom: '28px' })]}>
                Transformamos os arquivos e dados brutos em informações valiosas com nossa tecnologia de estruturação.
                Garantimos que todos os documentos sejam processados e validados de forma integrada, otimizando sua
                gestão tributária.
              </p>
              <ul mix={css({ margin: '0 0 32px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' })}>
                {ESTRUTURACAO.map((item) => (
                  <li mix={css({ display: 'flex', alignItems: 'baseline', gap: '12px', fontSize: '15.5px', color: 'var(--text)' })}>
                    <span mix={css({ fontFamily: FONT_MONO, fontWeight: 700, color: 'var(--accent)' })}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contato" mix={btnGhost}>Fale com um consultor</a>
            </div>
          </div>
        </section>

        <section mix={[section, css({ paddingTop: 0 })]}>
          <div mix={[container, colunas2]}>
            <div data-reveal-left="">
              <p mix={eyebrow}>03 / O tributário em outro nível</p>
              <h2 mix={[heading2, tituloSecao]}>Motor de Regras LaraTAX</h2>
              <p mix={[lead, css({ marginBottom: '32px' })]}>
                O motor de regras do LaraTAX é uma ferramenta revolucionária que processa mais de 2,1 bilhões de cenários
                tributários, permitindo análises profundas e precisas. Essa capacidade não apenas melhora a eficiência
                operacional, mas também oferece uma compreensão detalhada das complexidades do sistema tributário.
              </p>
              <a href="#contato" mix={btnPrimary}>Agendar com especialista</a>
            </div>
            <div data-reveal-right="" mix={[painelVisual, css({ gap: '8px', textAlign: 'center' })]}>
              <div>
                <p mix={css({ margin: 0, fontFamily: FONT_MONO, fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 500, lineHeight: 1.1, color: COLORS.cyanBright, wordSpacing: '-0.3em' })}>
                  2,1 bi
                </p>
                <p mix={css({ margin: '10px 0 0', fontSize: '14.5px', color: 'rgba(245, 255, 253, 0.7)' })}>
                  cenários tributários processados
                </p>
              </div>
            </div>
          </div>
        </section>

        <section mix={css({ padding: '12px 0' })}>
          <div mix={[surfaceContrast, stage]}>
            <div mix={container}>
              <p mix={eyebrow}>04 / Painéis que te ajudam a decidir</p>
              <h2 data-reveal="" mix={heading2}>Dashboards por área tributária</h2>
              <p mix={lead}>
                São 74 painéis de análises profundas que foram cuidadosamente desenvolvidos para te ajudar a identificar
                e explorar oportunidades valiosas. Cada painel oferece uma visão detalhada e abrangente, permitindo que
                você tome decisões conscientes e estratégicas.
              </p>
              <div
                role="tablist"
                aria-label="Áreas tributárias"
                data-stagger=""
                mix={css({ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' })}
              >
                {PAINEIS.map((p, i) => (
                  <button
                    type="button"
                    role="tab"
                    id={`aba-${i}`}
                    aria-controls={`painel-${i}`}
                    aria-selected={i === 0 ? 'true' : 'false'}
                    data-aba-recurso={String(i)}
                    data-on={i === 0 ? 'true' : 'false'}
                    mix={chipArea}
                  >
                    {p.area}
                  </button>
                ))}
              </div>

              <style>{`${CSS_TELA_ESTATICA}
                [data-painel-recurso] { display: none; }
                [data-painel-recurso][data-on='true'] { display: grid; animation: recurso-in 0.3s ease; }
                @keyframes recurso-in { from { opacity: 0; transform: translateY(8px); } }
                @media (prefers-reduced-motion: reduce) {
                  [data-painel-recurso][data-on='true'] { animation: none; }
                }`}</style>

              <div>
                {PAINEIS.map((p, i) => (
                  <div
                    role="tabpanel"
                    id={`painel-${i}`}
                    aria-labelledby={`aba-${i}`}
                    data-painel-recurso={String(i)}
                    data-on={i === 0 ? 'true' : 'false'}
                    mix={[colunas2, css({ gap: '48px', alignItems: 'center' })]}
                  >
                    <div>
                      <span mix={rotuloArea}>{p.area}</span>
                      <h3 mix={css({ margin: '0 0 12px', fontSize: '24px', lineHeight: 1.2, color: 'var(--text)' })}>
                        {p.titulo}
                      </h3>
                      <p mix={css({ margin: 0, fontSize: '15.5px', lineHeight: 1.65, color: 'var(--muted)' })}>
                        {p.texto}
                      </p>
                    </div>
                    <div mix={molduraTela}>
                      <div
                        data-tela-estatica=""
                        aria-hidden="true"
                        style={{ zoom: '0.383' }}
                        mix={css({ width: '1440px', pointerEvents: 'none', userSelect: 'none' })}
                      >
                        {p.tela()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section mix={section}>
          <div mix={container}>
            <p mix={eyebrow}>05 / Hora de recuperar os tributos</p>
            <h2 data-reveal="" mix={heading2}>Módulo de retificação de tributos</h2>
            <p mix={lead}>
              Nosso módulo de retificação de tributos proporciona ajustes precisos e ágeis nas informações fiscais.
              Após a análise, você poderá realizar a retificação diretamente pelo sistema de forma descomplicada.
            </p>
            <div
              data-stagger=""
              mix={css({
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                '@media (max-width: 860px)': { gridTemplateColumns: '1fr' },
              })}
            >
              {RETIFICACAO.map((r, i) => (
                <div mix={card}>
                  <p mix={css({ margin: '0 0 14px', fontFamily: FONT_MONO, fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--accent)' })}>
                    0{i + 1}
                  </p>
                  <h3 mix={css({ margin: '0 0 10px', fontSize: '18px', color: 'var(--text)' })}>{r.titulo}</h3>
                  <p mix={css({ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: 'var(--muted)' })}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </Document>
  )
}
