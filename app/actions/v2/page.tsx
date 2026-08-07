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
import { HeroSlides } from './hero-slides.tsx'

// Variante da home com hero-carrossel (áreas da plataforma). O marquee de
// clientes vive dentro do hero, então a seção standalone sai.
export function V2Page() {
  return () => (
    <Document>
      <Header />
      <main>
        <HeroSlides />
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
