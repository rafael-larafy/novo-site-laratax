import { css } from 'remix/ui'

import { Document } from '../../ui/document.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { FONT_MONO, btnPrimary, container, eyebrow, lead, section, surfaceContrast } from '../../ui/tokens.ts'
import { FinalCta } from '../home/final-cta.tsx'

const ICONES = {
  email: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z',
  telefone:
    'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z',
  pino: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
}

function LinhaContato(icone: string, linhas: string[], href?: string) {
  const conteudo = linhas.map((l, i) => (
    <>
      {i > 0 ? <br /> : null}
      {l}
    </>
  ))
  return (
    <p mix={css({ display: 'flex', alignItems: 'baseline', gap: '12px', margin: '0 0 10px', fontSize: '15px', lineHeight: 1.6, color: 'var(--text)' })}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true" mix={css({ flexShrink: 0, transform: 'translateY(2px)' })}>
        <path d={icone} />
      </svg>
      {href ? (
        <a href={href} mix={css({ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'var(--accent)' } })}>
          {conteudo}
        </a>
      ) : (
        <span>{conteudo}</span>
      )}
    </p>
  )
}

function GrupoContato(titulo: string) {
  return (
    <h2 mix={css({ margin: '32px 0 12px', fontSize: '19px', fontWeight: 700, color: 'var(--text)' })}>{titulo}</h2>
  )
}

const campo = css({
  width: '100%',
  padding: '13px 16px',
  borderRadius: '10px',
  border: '1px solid var(--line)',
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'var(--text)',
  fontFamily: 'inherit',
  fontSize: '14.5px',
  '&::placeholder': { color: 'var(--muted)' },
  '&:focus-visible': { outline: '2px solid var(--accent)', outlineOffset: '1px' },
})

export function ContatoPage() {
  return () => (
    <Document>
      <Header />
      <main>
        <section mix={section}>
          <div
            mix={[
              container,
              css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'start',
                '@media (max-width: 860px)': { gridTemplateColumns: '1fr', gap: '40px' },
              }),
            ]}
          >
            <div data-reveal-left="">
              <p mix={eyebrow}>Vamos conversar</p>
              <h1
                mix={css({
                  margin: '0 0 16px',
                  fontSize: 'clamp(34px, 4.4vw, 52px)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: 'var(--text)',
                })}
              >
                Entre em contato
              </h1>
              <p mix={[lead, css({ marginBottom: '8px' })]}>
                Estamos disponíveis pelo telefone, e-mail e formulário de contato. Caso precise, estamos de portas
                abertas para te receber em nossa sede.
              </p>

              {GrupoContato('Comercial')}
              {LinhaContato(ICONES.email, ['comercial@laratax.com.br'], 'mailto:comercial@laratax.com.br')}
              {LinhaContato(ICONES.telefone, ['+55 (41) 3146-5868'], 'tel:+554131465868')}

              {GrupoContato('Ajuda')}
              {LinhaContato(ICONES.email, ['contato@laratax.com.br'], 'mailto:contato@laratax.com.br')}

              {GrupoContato('Endereço')}
              {LinhaContato(ICONES.pino, [
                'Av. Rocha Pombo, 1977',
                'São Cristóvão, São José dos Pinhais - PR',
                'CEP: 83.005-280',
              ])}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Rocha+Pombo%2C+1977+S%C3%A3o+Jos%C3%A9+dos+Pinhais"
                target="_blank"
                rel="noreferrer"
                mix={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '24px',
                  padding: '13px 22px',
                  borderRadius: '10px',
                  border: '1px solid var(--line)',
                  fontFamily: FONT_MONO,
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  '&:hover': { borderColor: 'var(--accent)', color: 'var(--accent)' },
                })}
              >
                Abrir no Google Maps ↗
              </a>
            </div>

            {/* formulário: visual apenas — sem backend, os contatos reais estão ao lado */}
            <div
              data-reveal-right=""
              mix={[
                surfaceContrast,
                css({
                  borderRadius: '24px',
                  padding: '40px 36px',
                  border: '1px solid rgba(7, 224, 255, 0.14)',
                }),
              ]}
            >
              <p
                mix={css({
                  margin: '0 0 28px',
                  textAlign: 'center',
                  fontFamily: FONT_MONO,
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                })}
              >
                Envie uma mensagem
              </p>
              <form mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
                <input type="text" name="nome" placeholder="Nome" mix={campo} />
                <input type="email" name="email" placeholder="Email" mix={campo} />
                <input type="tel" name="telefone" placeholder="Telefone" mix={campo} />
                <input type="text" name="assunto" placeholder="Assunto" mix={campo} />
                <textarea name="mensagem" rows={5} placeholder="Escreva sua mensagem" mix={[campo, css({ resize: 'vertical' })]} />
                <button type="button" mix={[btnPrimary, css({ width: '100%' })]}>Enviar</button>
              </form>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </Document>
  )
}
