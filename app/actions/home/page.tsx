import { Document } from '../../ui/document.tsx'
import { FloatingDock } from '../../ui/floating-dock.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { CaseStudy } from './case-study.tsx'
import { FinalCta } from './final-cta.tsx'
import { Hero } from './hero.tsx'
import { LogosMarquee } from './logos.tsx'
import { Pains } from './pains.tsx'
import { Platform } from './platform.tsx'
import { Process } from './process.tsx'
import { Reforma } from './reforma.tsx'
import { Stats } from './stats.tsx'

export function HomePage() {
  return () => (
    <Document>
      <Header />
      {/* Ordem narrativa: problema → solução → valor/urgência → como → prova → CTA.
          Stats vira faixa-ponte de prova quantitativa, encostada no caso real. */}
      <main>
        <Hero />
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
