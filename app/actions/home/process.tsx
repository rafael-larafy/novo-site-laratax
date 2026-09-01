import { css } from 'remix/ui'

import { COLORS, FONT_MONO, container, eyebrow, heading2, section } from '../../ui/tokens.ts'

const HUMAN = 'Interação humana'
const AI = 'Robô fiscal & Automação'

const STEPS = [
  { title: 'Procuração e certificados', desc: 'Autorização formal de acesso aos portais.', badge: HUMAN },
  { title: 'Download das obrigações', desc: 'Coleta automática de SPED, e-CAC e e-Social.', badge: AI },
  { title: 'Estruturação dos dados', desc: 'Validação e organização de milhões de registros.', badge: AI },
  { title: 'Processamento e cruzamento', desc: 'Motor de regras aplica 2,1 bi de cenários.', badge: AI },
  { title: 'Diagnósticos e dashboards', desc: '74 painéis com as oportunidades encontradas.', badge: AI },
  { title: 'Análise do consultor', desc: 'Especialista valida e prioriza as teses.', badge: HUMAN },
  { title: 'Retificação integrada', desc: 'Obrigações retificadas direto pela plataforma.', badge: AI },
]

const chip = (badge: string) =>
  css({
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '999px',
    fontFamily: FONT_MONO,
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    border: `1px solid ${badge === HUMAN ? 'var(--line)' : 'var(--accent)'}`,
    color: badge === HUMAN ? 'var(--muted)' : 'var(--accent)',
  })

export function Process() {
  return () => (
    <section id="processo" mix={section}>
      <div mix={container}>
        <p mix={eyebrow}>04 / Como funciona</p>
        <h2 data-reveal="" mix={heading2}>
          Da procuração ao crédito recuperado
        </h2>
        <div data-steps-pin="" mix={css({ margin: '56px 0 0' })}>
          <div
            data-progress-line=""
            aria-hidden="true"
            mix={css({
              height: '2px',
              borderRadius: '2px',
              background: COLORS.cyanBright,
              transformOrigin: 'left',
              marginBottom: '20px',
            })}
          />
          <ol
            role="list"
            mix={css({
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            })}
          >
          {STEPS.map((step, i) => (
            <li
              mix={css({
                flex: '0 0 min(400px, 82vw)',
                background: 'var(--surface-3)',
                borderRadius: '12px',
                padding: '20px 24px',
                transition: 'opacity 350ms ease, box-shadow 350ms ease',
                '&[data-on="false"]': { opacity: 0.35 },
                '&[data-now="true"]': { boxShadow: 'inset 2px 0 0 var(--accent)' },
                '@media (max-width: 720px)': { padding: '18px' },
              })}
            >
              <div
                mix={css({
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginBottom: '8px',
                })}
              >
                <span
                  mix={css({
                    fontFamily: FONT_MONO,
                    fontSize: '13px',
                    color: 'var(--accent)',
                  })}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  mix={css({
                    margin: 0,
                    fontSize: '19px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: 'var(--text)',
                  })}
                >
                  {step.title}
                </h3>
                <span mix={chip(step.badge)}>{step.badge}</span>
              </div>
              <p
                mix={css({
                  margin: 0,
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--muted)',
                  maxWidth: '36em',
                })}
              >
                {step.desc}
              </p>
            </li>
          ))}
          </ol>
        </div>
        <p
          mix={css({
            margin: '56px 0 0',
            fontFamily: FONT_MONO,
            fontSize: '12px',
            letterSpacing: '0.08em',
            color: 'var(--muted)',
          })}
        >
          Roda em nuvem, com autorizações formais e trilha de auditoria de ponta a ponta.
        </p>
        <a
          href="#contato"
          mix={css({
            display: 'inline-block',
            marginTop: '20px',
            fontSize: '15px',
            fontWeight: 600,
            color: 'var(--accent)',
            textDecoration: 'none',
            '& [data-arrow]': { display: 'inline-block', transition: 'transform 150ms ease' },
            '&:hover [data-arrow]': { transform: 'translateX(3px)' },
          })}
        >
          Veja isso ao vivo na apresentação <span data-arrow aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
