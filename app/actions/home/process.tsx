import { css } from 'remix/ui'

import { COLORS, FONT_MONO, container, eyebrow, heading2, lead, section } from '../../ui/tokens.ts'

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
  const automaticas = STEPS.filter((s) => s.badge === AI).length
  const humanas = STEPS.length - automaticas
  return () => (
    <section id="processo" mix={section}>
      <div
        mix={[
          container,
          css({
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '64px',
            alignItems: 'start',
            '@media (max-width: 960px)': { gridTemplateColumns: '1fr', gap: '48px' },
          }),
        ]}
      >
        <div
          data-reveal-left=""
          mix={css({
            position: 'sticky',
            top: '100px',
            '@media (max-width: 960px)': { position: 'static' },
          })}
        >
          <p mix={eyebrow}>04 / Como funciona</p>
          <h2 mix={heading2}>Da procuração ao crédito recuperado</h2>
          <p mix={[lead, css({ marginBottom: 0 })]}>
            São {STEPS.length} etapas entre a assinatura da procuração e o crédito de volta ao caixa. A maior parte
            roda sozinha: a sua equipe entra apenas onde o julgamento humano importa.
          </p>
          <p
            mix={css({
              margin: '48px 0 0',
              fontFamily: FONT_MONO,
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
            })}
          >
            - composição
          </p>
          <ul
            role="list"
            data-stagger=""
            mix={css({ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' })}
          >
            {(
              [
                [AI, `${automaticas} etapas automatizadas`],
                [HUMAN, `${humanas} pontos de interação humana`],
              ] as const
            ).map(([badge, texto]) => (
              <li
                mix={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '13px 0',
                  borderTop: '1px solid var(--line)',
                  '&:last-child': { borderBottom: '1px solid var(--line)' },
                })}
              >
                <span mix={chip(badge)}>{badge}</span>
                <span mix={css({ fontFamily: FONT_MONO, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' })}>
                  {texto}
                </span>
              </li>
            ))}
          </ul>
          <p
            mix={css({
              margin: '48px 0 0',
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

        {/* trilha vertical no mesmo desenho da seção "rotina fiscal manual" */}
        <div mix={css({ position: 'relative' })}>
          <div
            aria-hidden="true"
            mix={css({
              position: 'absolute',
              left: '23px',
              top: '16px',
              bottom: '16px',
              width: '1px',
              background: `linear-gradient(180deg, ${COLORS.cyan} 0%, ${COLORS.cyanBright} 100%)`,
            })}
          />
          <ol
            role="list"
            data-stagger=""
            mix={css({ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' })}
          >
            {STEPS.map((step, i) => (
              <li mix={css({ position: 'relative', paddingLeft: '68px', '@media (max-width: 560px)': { paddingLeft: '52px' } })}>
                <span
                  aria-hidden="true"
                  mix={css({
                    position: 'absolute',
                    left: '11px',
                    top: '22px',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    background: 'var(--surface)',
                    border: `1px solid ${step.badge === HUMAN ? 'var(--muted)' : 'var(--accent-graphic)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_MONO,
                    fontSize: '11px',
                    color: step.badge === HUMAN ? 'var(--muted)' : 'var(--accent)',
                    '@media (max-width: 560px)': { left: '3px' },
                  })}
                >
                  {i + 1}
                </span>
                <div
                  mix={css({
                    background: 'var(--surface-2)',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '26px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    transition: 'border-color 150ms ease, transform 150ms ease',
                    '&:hover': { borderColor: 'var(--accent)', transform: 'translateY(-2px)' },
                    '@media (max-width: 560px)': { padding: '20px 18px' },
                  })}
                >
                  <div mix={css({ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' })}>
                    <h3 mix={css({ margin: 0, fontSize: '21px', fontWeight: 700, color: 'var(--text)' })}>{step.title}</h3>
                    <span mix={chip(step.badge)}>{step.badge}</span>
                  </div>
                  <p mix={css({ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--muted)' })}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
