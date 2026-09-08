import { Document } from '../../ui/document.tsx'
import { FloatingDock } from '../../ui/floating-dock.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { CaseStudy } from '../home/case-study.tsx'
import { FinalCta } from '../home/final-cta.tsx'
import { LogosMarquee } from '../home/logos.tsx'
import { Pains } from '../home/pains.tsx'
import { Platform } from '../home/platform.tsx'
import { Process } from '../home/process.tsx'
import { Reforma } from '../home/reforma.tsx'
import { Stats } from '../home/stats.tsx'
import { HeroCentro } from './hero-centro.tsx'

// Variante da home com hero centrado; a faixa de clientes entra logo
// depois da tela do produto, antes da seção do problema.
export function V3Page() {
  return () => (
    <Document>
      <Header />
      <main>
        <HeroCentro />
        <LogosMarquee />
        <Pains />
        <Platform />
        <Reforma />
        <Process />
        <Stats />
        <CaseStudy />
        <FinalCta />
      </main>
      <Footer />
      <FloatingDock />
    </Document>
  )
}
