import { container, eyebrow, heading2, lead, section } from '../../ui/tokens.ts'
import { PlataformaApp } from './plataforma-app.tsx'

// A seção não descreve a plataforma: ela MOSTRA a plataforma — réplica
// navegável com dados fictícios (ver docs/estudo-plataforma.md).
export function Platform() {
  return () => (
    <section id="plataforma" mix={section}>
      <div mix={container}>
        <p mix={eyebrow}>02 / A plataforma</p>
        <h2 data-reveal="" mix={heading2}>
          Sua consultoria com superpoderes
        </h2>
        <p data-reveal="" mix={lead}>
          Navegue pela plataforma como ela é: da visão geral aos projetos, do início de um
          diagnóstico ao módulo da Reforma Tributária.
        </p>
        <PlataformaApp />
      </div>
    </section>
  )
}
