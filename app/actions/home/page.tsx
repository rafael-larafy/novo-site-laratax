import { Document } from '../../ui/document.tsx'
import { FloatingDock } from '../../ui/floating-dock.tsx'
import { Footer } from '../../ui/footer.tsx'
import { Header } from '../../ui/header.tsx'
import { CaseStudy } from './case-study.tsx'
import { FinalCta } from './final-cta.tsx'
import { Hero } from './hero.tsx'
import { LogosMarquee } from './logos.tsx'
import { Pains } from './pains.tsx'
import { SpriteIcones } from './plataforma-app.tsx'
import { Platform } from './platform.tsx'
import { Process } from './process.tsx'
import { Retificacao } from './retificacao.tsx'
import { Stats } from './stats.tsx'

export function HomePage() {
  return () => (
    <Document>
      <Header />
      <main>
        {SpriteIcones()}
        <Hero />
        <LogosMarquee />
        <Stats />
        <Pains />
        <Platform />
        <Retificacao />
        <Process />
        <CaseStudy />
        <FinalCta />
      </main>
      <Footer />
      <FloatingDock />
    </Document>
  )
}
