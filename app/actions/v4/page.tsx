import { Document } from '../../ui/document.tsx'
import { FloatingDock } from '../../ui/floating-dock.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { CaseStudy } from '../home/case-study.tsx'
import { FinalCta } from '../home/final-cta.tsx'
import { Pains } from '../home/pains.tsx'
import { Platform } from '../home/platform.tsx'
import { Process } from '../home/process.tsx'
import { Reforma } from '../home/reforma.tsx'
import { Stats } from '../home/stats.tsx'
import { HeroBento } from './hero-bento.tsx'

// Variante da home com hero em bento; a prova social vive dentro do hero,
// então a faixa de logos standalone sai.
export function V4Page() {
  return () => (
    <Document>
      <Header />
      <main>
        <HeroBento />
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
