// Animações da landing: tudo aqui é enhancement — a página funciona sem JS.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'


for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.setAttribute('rmx-document', '')
}

const THEME_KEY = 'laratax-tema'

function currentTheme(): 'light' | 'dark' {
  const chosen = document.documentElement.dataset.theme
  if (chosen === 'light' || chosen === 'dark') return chosen
  return 'light'
}

const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]')
if (toggle) {
  const describe = () => {
    toggle.setAttribute(
      'aria-label',
      currentTheme() === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro',
    )
  }
  describe()

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      // modo privado / storage bloqueado: o tema vale só nesta página
    }
    describe()
  })
}


gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

const DIST = { card: 26, section: 32, lateral: 36 }
const DUR = { card: 0.7, section: 0.8 }
const EASE = { card: 'power2.out', section: 'power3.out' }

const mm = gsap.matchMedia()
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Scramble no eyebrow do hero, estilo williamsgptech.
  document.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el) => {
    gsap.to(el, {
      duration: 1.4,
      scrambleText: {
        text: el.dataset.scramble || el.textContent || '',
        chars: 'upperCase',
        speed: 0.4,
      },
      ease: 'none',
    })
  })

  // Fade + rise ao entrar no viewport.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 85%',
    once: true,
    onEnter: (batch) =>
      gsap.from(batch, {
        y: DIST.section,
        opacity: 0,
        duration: DUR.section,
        stagger: 0.1,
        ease: EASE.section,
        overwrite: true,
      }),
  })

  // Reveals laterais para seções 2-colunas: cada coluna entra do seu lado.
  for (const [attr, x] of [
    ['[data-reveal-left]', -DIST.lateral],
    ['[data-reveal-right]', DIST.lateral],
  ] as const) {
    gsap.utils.toArray<HTMLElement>(attr).forEach((el) => {
      gsap.from(el, {
        x,
        opacity: 0,
        duration: DUR.section,
        ease: EASE.section,
        scrollTrigger: { trigger: el, start: 'top 78%', once: true },
      })
    })
  }


  ScrollTrigger.batch('[data-stagger] > *', {
    start: 'top 85%',
    once: true,
    onEnter: (batch) =>
      gsap.from(batch, {
        y: DIST.card,
        opacity: 0,
        duration: DUR.card,
        stagger: 0.1,
        ease: EASE.card,
        overwrite: true,
      }),
  })


  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: parseFloat(el.dataset.parallax || '-10'),
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    })
  })

  // Linha de progresso da timeline: desenha com o scroll (scaleY, sem pin).
  // A linha do "Como funciona" fica de fora — o bloco data-steps-pin cuida dela.
  document.querySelectorAll<HTMLElement>('[data-progress-line]').forEach((line) => {
    if (line.closest('[data-steps-pin]')) return
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: line.closest('section') ?? line,
          start: 'top 65%',
          end: 'bottom 80%',
          scrub: true,
        },
      },
    )
  })

  // Brilho diagonal único que varre a faixa de números junto com a contagem.
  document.querySelectorAll<HTMLElement>('[data-shimmer]').forEach((el) => {
    gsap.fromTo(
      el,
      { xPercent: -120 },
      {
        xPercent: 120,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: el.closest('section') ?? el, start: 'top 70%', once: true },
      },
    )
  })

  // Contadores: <span data-count="74" data-count-decimals="0" data-count-suffix="+">
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0')
    const decimals = parseInt(el.dataset.countDecimals || '0', 10)
    const suffix = el.dataset.countSuffix || ''
    const state = { value: 0 }
    gsap.to(state, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent =
          state.value.toLocaleString('pt-BR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix
      },
    })
  })
})

// scroll lateral dos passos 1→7 .
const stepsWrap = document.querySelector<HTMLElement>('[data-steps-pin]')
const trilho = stepsWrap?.querySelector<HTMLElement>('ol')
if (stepsWrap && trilho) {
  const passos = Array.from(trilho.querySelectorAll<HTMLElement>(':scope > li'))
  const linha = stepsWrap.querySelector<HTMLElement>('[data-progress-line]')
  const sobra = () => trilho.scrollWidth - trilho.clientWidth
  const pintar = () => {
    const max = sobra()
    const p = max > 0 ? trilho.scrollLeft / max : 1
    const n = Math.min(passos.length - 1, Math.floor(p * passos.length))
    passos.forEach((el, i) => {
      el.dataset.on = i <= n ? 'true' : 'false'
      el.dataset.now = i === n ? 'true' : 'false'
    })
    if (linha) linha.style.transform = `scaleX(${p})`
  }
  trilho.addEventListener('scroll', pintar, { passive: true })
  pintar()
  mm.add('(min-width: 721px) and (prefers-reduced-motion: no-preference)', () => {
    ScrollTrigger.create({
      trigger: stepsWrap.closest('section') ?? stepsWrap,
      start: 'center center',
      end: () => '+=' + sobra(),
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        trilho.scrollLeft = self.progress * sobra()
      },
    })
  })
}

// --- réplica da plataforma (seção 02) -----------------------------------
const appDemo = document.querySelector<HTMLElement>('[data-app-demo]')
if (appDemo) {
  const telas = Array.from(appDemo.querySelectorAll<HTMLElement>('[data-app-screen]'))
  const controles = Array.from(appDemo.querySelectorAll<HTMLElement>('[data-app-nav]'))
  const mostrar = (id: string) => {
    telas.forEach((tela) => {
      tela.dataset.on = tela.dataset.appScreen === id ? 'true' : 'false'
    })
    controles.forEach((c) => {
      // prefixo cobre sub-telas (perdcomp-clientes acende o item "perdcomp")
      c.dataset.on = c.dataset.target === id || id.startsWith(c.dataset.target + '-') ? 'true' : 'false'
    })
  }
  controles.forEach((c) => {
    c.addEventListener('click', () => {
      const alvo = c.dataset.target
      if (alvo) mostrar(alvo)
    })
  })
}

// --- hero carrossel (/v2) -----------------------------------------------

const heroSlides = document.querySelector<HTMLElement>('[data-hero-slides]')
if (heroSlides) {
  const HERO_DURATION = 7000
  const bgs = Array.from(heroSlides.querySelectorAll<HTMLElement>('[data-hero-bg]'))
  const cards = Array.from(heroSlides.querySelectorAll<HTMLElement>('[data-hero-card]'))
  const tabs = Array.from(heroSlides.querySelectorAll<HTMLButtonElement>('[data-hero-tab]'))
  const bars = Array.from(heroSlides.querySelectorAll<HTMLElement>('[data-hero-bar]'))
  const heroNav = heroSlides.querySelector<HTMLElement>('[data-hero-nav]')
  const heroReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let heroActive = 0
  let heroElapsed = 0
  let heroLast: number | null = null

  const applySlide = () => {
    const flag = (els: HTMLElement[]) =>
      els.forEach((el, i) => {
        el.dataset.on = i === heroActive ? 'true' : 'false'
      })
    flag(bgs)
    flag(cards)
    tabs.forEach((tab, i) => {
      tab.dataset.on = i === heroActive ? 'true' : 'false'
      if (i === heroActive) tab.setAttribute('aria-current', 'true')
      else tab.removeAttribute('aria-current')
    })
    bars.forEach((bar, i) => {
      if (i !== heroActive) bar.style.transform = 'scaleX(0)'
    })
    // vídeo (quando houver): só o slide ativo decodifica
    bgs.forEach((bg, i) => {
      const video = bg.querySelector('video')
      if (!video) return
      if (i === heroActive) video.play().catch(() => {})
      else video.pause()
    })
    const btn = tabs[heroActive]
    if (heroNav && btn) {
      heroNav.scrollTo({ left: btn.offsetLeft - 24, behavior: heroReduce ? 'auto' : 'smooth' })
    }
  }

  const goToSlide = (i: number) => {
    heroActive = i
    heroElapsed = 0
    heroLast = null
    applySlide()
  }

  tabs.forEach((tab, i) => tab.addEventListener('click', () => goToSlide(i)))

  // estado inicial: pausa os vídeos dos slides inativos (só o 1º tem autoplay)
  applySlide()

  if (heroReduce) {
    const paint = () =>
      bars.forEach((bar, i) => {
        bar.style.transform = i === heroActive ? 'scaleX(1)' : 'scaleX(0)'
      })
    paint()
    window.setInterval(() => {
      goToSlide((heroActive + 1) % tabs.length)
      paint()
    }, HERO_DURATION)
  } else {
    const tick = (ts: number) => {
      if (heroLast === null) heroLast = ts
      // clamp: aba em background congela o rAF; sem isso o retorno pula slides
      heroElapsed += Math.min(ts - heroLast, 100)
      heroLast = ts
      const p = Math.min(heroElapsed / HERO_DURATION, 1)
      const bar = bars[heroActive]
      if (bar) bar.style.transform = `scaleX(${p})`
      if (p >= 1) goToSlide((heroActive + 1) % tabs.length)
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  // dica de swipe some no primeiro toque na timeline
  const hint = heroSlides.querySelector<HTMLElement>('[data-hero-hint]')
  heroNav?.addEventListener(
    'touchstart',
    () => {
      if (hint) hint.style.opacity = '0'
    },
    { once: true, passive: true },
  )
}

// --- floating dock ------------------------------------------------------
// Magnificação por proximidade (desktop) + seção ativa. Funciona sem JS;
// isto só aprimora.
const dockDesktop = document.querySelector<HTMLElement>('[data-dock-desktop]')
const dockItems = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-dock-item]'))
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (dockDesktop && dockItems.length && !reduceMotion) {
  const maxScale = 1.45
  const influence = 80

  const reset = () => {
    for (const item of dockItems) {
      if (!dockDesktop.contains(item)) continue
      item.style.transform = ''
    }
  }

  dockDesktop.addEventListener('mousemove', (event) => {
    for (const item of dockItems) {
      if (!dockDesktop.contains(item)) continue
      const rect = item.getBoundingClientRect()
      const mid = rect.left + rect.width / 2
      const dist = Math.abs(event.clientX - mid)
      const t = Math.max(0, 1 - dist / influence)
      const scale = 1 + (maxScale - 1) * t * t
      item.style.transform = `scale(${scale})`
    }
  })

  dockDesktop.addEventListener('mouseleave', reset)
}

// Marca o item da seção visível.
if (dockItems.length && 'IntersectionObserver' in window) {
  const sections = dockItems
    .map((item) => {
      const id = item.getAttribute('href')?.slice(1)
      return id ? document.getElementById(id) : null
    })
    .filter((el): el is HTMLElement => Boolean(el))

  const setActive = (id: string) => {
    for (const item of dockItems) {
      item.dataset.active = item.getAttribute('href') === `#${id}` ? 'true' : 'false'
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    },
    { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.35, 0.6] },
  )

  for (const section of sections) observer.observe(section)

  // Fecha o menu mobile ao escolher um destino.
  const mobile = document.querySelector<HTMLDetailsElement>('[data-dock-mobile]')
  for (const item of dockItems) {
    item.addEventListener('click', () => {
      if (mobile) mobile.open = false
    })
  }
}

// viewport cravado

const vv = window.visualViewport
const header = document.querySelector<HTMLElement>('header')
const dock = document.querySelector<HTMLElement>('data-floating-dock')
if (vv && dock) {
  const colar = () => {
  if (header) header.style.transform = `(translateY(${vv.offsetTop}px)`
  const sobra = window.innerHeight - vv.height - vv.offsetTop
  dock.style.transform = `translateY(${-sobra}px)`
}
vv.addEventListener('resize', colar)
vv.addEventListener('scroll', colar)
}