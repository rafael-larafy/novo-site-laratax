import { Document } from '../../ui/document.tsx'
import { FloatingDock } from '../../ui/floating-dock.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { CaseStudy } from '../home/case-study.tsx'
import { FinalCta } from '../home/final-cta.tsx'
import { Pains } from '../home/pains.tsx'
import { SpriteIcones } from '../home/plataforma-app.tsx'
import { Platform } from '../home/platform.tsx'
import { Process } from '../home/process.tsx'
import { Retificacao } from '../home/retificacao.tsx'
import { Stats } from '../home/stats.tsx'
import { HeroSlides } from './hero-slides.tsx'

export function V2Page() {
  return () => (
    <Document>
      <Header />
      <main>
        {SpriteIcones()}
        <HeroSlides />
        <Pains />
        <Platform />
        <Retificacao />
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
