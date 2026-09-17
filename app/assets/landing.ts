import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

for (const a of document.querySelectorAll('a')) {
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

    }
    describe()
  })
}

type Conexao = { saveData?: boolean; effectiveType?: string }
const nav = navigator as Navigator & { connection?: Conexao; deviceMemory?: number }

const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const conexaoRuim =
  Boolean(nav.connection?.saveData) || /(^|-)2g$|(^|-)3g$/.test(nav.connection?.effectiveType ?? '')
const aparelhoFraco =
  (nav.deviceMemory !== undefined && nav.deviceMemory < 4) ||
  (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency < 4)

if (aparelhoFraco || conexaoRuim) document.documentElement.dataset.leve = 'true'

const podeVideo = () =>
  !semMovimento &&
  !conexaoRuim &&
  !aparelhoFraco &&
  window.matchMedia('(min-width: 721px)').matches

function aposCarregar(acao: () => void) {
  if (document.readyState === 'complete') acao()
  else window.addEventListener('load', acao, { once: true })
}

function ligarVideo(video: HTMLVideoElement) {
  const fonte = video.dataset.videoSrc
  if (!fonte) return
  if (video.src) {
    video.play().catch(() => {})
    return
  }
  aposCarregar(() => {
    video.src = fonte
    video.play().catch(() => {})
  })
}

const videosSoltos = Array.from(
  document.querySelectorAll<HTMLVideoElement>('[data-video-src]'),
).filter((v) => !v.closest('[data-hero-slides]'))

if (videosSoltos.length && podeVideo()) {
  const olho = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        const video = e.target as HTMLVideoElement
        if (e.isIntersecting) ligarVideo(video)
        else if (video.src) video.pause()
      }
    },
    { rootMargin: '200px' },
  )
  for (const v of videosSoltos) olho.observe(v)
}

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

const DIST = { card: 26, section: 32, lateral: 36 }
const DUR = { card: 0.7, section: 0.8 }
const EASE = { card: 'power2.out', section: 'power3.out' }

const mm = gsap.matchMedia()
mm.add('(prefers-reduced-motion: no-preference)', () => {

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
        clearProps: 'transform',
      }),
  })

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
        clearProps: 'transform',
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
        clearProps: 'transform',
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

  const heroKpis = gsap.utils.toArray<HTMLElement>('[data-hero-app] [data-kpi], [data-hero-solto] [data-kpi]')
  if (heroKpis.length) {
    const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    const passo = 0.09
    const linha = gsap.timeline({ delay: 0.35, repeat: -1, repeatDelay: 30 })
    const heroSecao = heroKpis[0].closest('section')
    if (heroSecao) {
      ScrollTrigger.create({
        trigger: heroSecao,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => (self.isActive ? linha.play() : linha.pause()),
      })
    }
    linha.from(heroKpis, {
      y: 30,
      opacity: 0,
      duration: DUR.card,
      stagger: passo,
      ease: EASE.card,
    }, 0)
    heroKpis.forEach((card, i) => {
      const el = card.querySelector<HTMLElement>('strong')
      if (!el) return
      const alvo = parseFloat((el.textContent || '').replace(/[^\d,]/g, '').replace(',', '.'))
      if (!Number.isFinite(alvo) || alvo === 0) return
      const estado = { valor: 0 }
      linha.fromTo(
        estado,
        { valor: 0 },
        {
          valor: alvo,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = moeda.format(estado.valor)
          },
        },
        i * passo,
      )
    })
  }
})

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

const aqui = location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/'
for (const el of document.querySelectorAll<HTMLAnchorElement>('[data-versao]')) {
  el.dataset.on = new URL(el.href).pathname.replace(/\/$/, '') === aqui || (aqui === '/' && el.getAttribute('href') === '/') ? 'true' : 'false'
}

const appDemo = document.querySelector<HTMLElement>('[data-app-demo]')
if (appDemo) {
  const telas = Array.from(appDemo.querySelectorAll<HTMLElement>('[data-app-screen]'))
  const controles = Array.from(appDemo.querySelectorAll<HTMLElement>('[data-app-nav]'))
  const mostrar = (id: string) => {
    telas.forEach((tela) => {
      tela.dataset.on = tela.dataset.appScreen === id ? 'true' : 'false'
    })
    controles.forEach((c) => {

      c.dataset.on = c.dataset.target === id || id.startsWith(c.dataset.target + '-') ? 'true' : 'false'
    })
  }
  controles.forEach((c) => {
    c.addEventListener('click', () => {
      const alvo = c.dataset.target
      if (alvo) mostrar(alvo)
      const aba = c.dataset.abaAlvo
      if (alvo && aba) {
        appDemo
          .querySelector<HTMLElement>(`[data-app-screen="${alvo}"] [data-sub-nav][data-sub-target="${aba}"]`)
          ?.click()
      }
      const detalhe = c.dataset.detalhe
      if (detalhe) {
        Object.entries(JSON.parse(detalhe) as Record<string, string>).forEach(([campo, valor]) => {
          appDemo.querySelectorAll<HTMLElement>(`[data-campo="${campo}"]`).forEach((el) => {
            el.textContent = valor
          })
          appDemo.querySelectorAll<HTMLElement>(`[data-campo-tip="${campo}"]`).forEach((el) => {
            el.dataset.tipLinhas = valor
          })
          appDemo.querySelectorAll<HTMLElement>(`[data-campo-estilo="${campo}"]`).forEach((el) => {
            const [prop, v] = valor.split(':')
            el.style.setProperty(prop, v)
          })
        })
      }
    })
  })

  appDemo.querySelectorAll<HTMLElement>('[data-embaralha]').forEach((caixa) => {
    const filhos = Array.from(caixa.children)
    for (let i = filhos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[filhos[i], filhos[j]] = [filhos[j], filhos[i]]
    }
    filhos.forEach((f) => caixa.append(f))
  })

  const modais = Array.from(appDemo.querySelectorAll<HTMLElement>('[data-app-modal]'))
  appDemo.querySelectorAll<HTMLElement>('[data-modal-abre]').forEach((b) => {
    b.addEventListener('click', () => {
      modais.forEach((m) => {
        m.dataset.on = m.dataset.appModal === b.dataset.modalAbre ? 'true' : 'false'
      })
    })
  })
  appDemo.querySelectorAll<HTMLElement>('[data-modal-fecha]').forEach((b) => {
    b.addEventListener('click', () => {
      modais.forEach((m) => {
        m.dataset.on = 'false'
      })
    })
  })

  const tip = appDemo.querySelector<HTMLElement>('[data-tip-flutuante]')
  const corpoTip = appDemo.querySelector<HTMLElement>('[data-app-body]')
  if (tip && corpoTip) {
    const montar = (el: HTMLElement) => {
      tip.textContent = ''
      const titulo = el.dataset.tipTitulo
      if (titulo) {
        const cab = document.createElement('div')
        cab.style.cssText = 'display:flex;align-items:center;gap:8px;font-weight:700;margin-bottom:4px'
        const cor = el.dataset.tipCor
        if (cor) {
          const quadrado = document.createElement('span')
          quadrado.style.cssText = `width:12px;height:12px;border-radius:3px;flex-shrink:0;background:${cor}`
          cab.appendChild(quadrado)
        }
        cab.appendChild(document.createTextNode(titulo))
        tip.appendChild(cab)
      }
      for (const linha of (el.dataset.tipLinhas || '').split(';;')) {
        if (!linha) continue
        const [rotulo, valor] = linha.split('|')
        const row = document.createElement('div')
        row.style.cssText = 'display:flex;gap:20px;justify-content:space-between'
        const a = document.createElement('span')
        a.textContent = rotulo
        const b = document.createElement('strong')
        b.textContent = valor
        row.appendChild(a)
        row.appendChild(b)
        tip.appendChild(row)
      }
    }
    const posicionar = (e: MouseEvent) => {
      const zoom = parseFloat(String(getComputedStyle(corpoTip).zoom)) || 1
      const r = corpoTip.getBoundingClientRect()
      tip.style.left = `${(e.clientX - r.left) / zoom + 16}px`
      tip.style.top = `${(e.clientY - r.top) / zoom - 12}px`
    }
    appDemo.querySelectorAll<HTMLElement>('[data-ponto-grafico]').forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        montar(el)
        tip.style.display = 'block'
        posicionar(e)
      })
      el.addEventListener('mousemove', posicionar)
      el.addEventListener('mouseleave', () => {
        tip.style.display = 'none'
      })
    })
  }

  const expandir = appDemo.querySelector<HTMLElement>('[data-app-expandir]')
  const corpoApp = appDemo.querySelector<HTMLElement>('[data-app-body]')
  const rotuloExpandir = appDemo.querySelector<HTMLElement>('[data-app-expandir-rotulo]')
  if (expandir && corpoApp) {
    if (!document.fullscreenEnabled) expandir.style.display = 'none'
    expandir.addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen()
      else appDemo.requestFullscreen().catch(() => {})
    })
    document.addEventListener('fullscreenchange', () => {
      const cheio = document.fullscreenElement === appDemo
      if (cheio) {
        const zoom = (window.innerHeight - 96) / 1038
        corpoApp.style.setProperty('zoom', String(zoom))

        corpoApp.style.width = Math.max(1845, Math.floor((window.innerWidth - 48) / zoom)) + 'px'
      } else {
        corpoApp.style.setProperty('zoom', '')
        corpoApp.style.width = ''
      }
      if (rotuloExpandir) rotuloExpandir.textContent = cheio ? 'Sair' : 'Expandir'
    })
  }

  appDemo.querySelectorAll<HTMLElement>('[data-sub-scope]').forEach((scope) => {
    const donos = (el: HTMLElement) => el.parentElement?.closest('[data-sub-scope]') === scope
    const botoes = Array.from(scope.querySelectorAll<HTMLElement>('[data-sub-nav]')).filter(donos)
    const paineis = Array.from(scope.querySelectorAll<HTMLElement>('[data-sub-screen]')).filter(donos)
    botoes.forEach((b) => {
      b.addEventListener('click', () => {
        botoes.forEach((x) => {
          x.dataset.on = x === b ? 'true' : 'false'
        })
        paineis.forEach((p) => {
          p.dataset.on = p.dataset.subScreen === b.dataset.subTarget ? 'true' : 'false'
        })
      })
    })
  })
}

const jornada = document.querySelector<HTMLElement>('[data-jornada]')
if (jornada) {
  const fio = jornada.querySelector<HTMLElement>('[data-jornada-fio]')
  const marca = jornada.querySelector<HTMLElement>('[data-jornada-marca]')
  const slots = Array.from(jornada.querySelectorAll<HTMLElement>('[data-jornada-slot]'))
  const caixas = slots.map((s) => s.querySelector<HTMLElement>('[data-jornada-caixa]'))
  const paineis = slots.map((s) => s.querySelector<HTMLElement>('[data-jornada-painel]'))

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (fio) fio.style.height = '100%'
  } else if (fio && marca) {
    const APAGADA = 'rgba(7, 224, 255, 0.14)'
    paineis.forEach((p) => p && gsap.set(p, { height: 0 }))
    caixas.forEach((c) => {
      const texto = c?.querySelector<HTMLElement>('[data-jornada-texto]')
      if (texto) gsap.set(texto, { autoAlpha: 0, scale: 0.92 })
    })
    gsap.set(marca, { autoAlpha: 1 })

    const abrir = (i: number, aberto: boolean) => {
      const caixa = caixas[i]
      if (!caixa) return
      const painel = paineis[i]
      const texto = caixa.querySelector<HTMLElement>('[data-jornada-texto]')
      const conector = caixa.querySelector<HTMLElement>('[data-jornada-conector]')
      gsap.to(caixa, {
        borderColor: aberto ? 'rgba(7, 224, 255, 0.5)' : APAGADA,
        boxShadow: aberto ? '0 0 30px rgba(7, 224, 255, 0.22)' : '0 0 0 rgba(7, 224, 255, 0)',
        duration: 0.45,
        overwrite: 'auto',
      })
      if (conector) {
        gsap.to(conector, { scaleX: aberto ? 1 : 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
      }
      if (painel) {
        gsap.to(painel, {
          height: aberto ? painel.scrollHeight : 0,
          duration: 0.55,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }
      if (texto) {
        gsap.to(texto, {
          autoAlpha: aberto ? 1 : 0,
          scale: aberto ? 1 : 0.92,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    }

    const poeMarca = gsap.quickSetter(marca, 'top', 'px') as (v: number) => void
    const poeFio = gsap.quickSetter(fio, 'height', 'px') as (v: number) => void
    const sincronizar = () => {
      const centro = window.innerHeight / 2
      const y = Math.max(0, Math.min(jornada.offsetHeight, centro - jornada.getBoundingClientRect().top))
      poeMarca(y)
      poeFio(y)
      return centro
    }

    mm.add('(min-width: 1024px)', () => {
      let atual = -1
      const st = ScrollTrigger.create({
        trigger: jornada,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: () => {
          const centro = sincronizar()
          let ativo = -1
          slots.forEach((slot, i) => {
            const r = slot.getBoundingClientRect()
            if (r.top <= centro && r.bottom > centro) ativo = i
          })
          if (ativo !== atual) {
            if (atual >= 0) abrir(atual, false)
            if (ativo >= 0) abrir(ativo, true)
            atual = ativo
          }
        },
      })
      return () => {
        st.kill()
        caixas.forEach((_, i) => abrir(i, false))
        atual = -1
      }
    })

    mm.add('(max-width: 1023px)', () => {
      const abertos = caixas.map(() => false)
      const atualizar = () => {
        sincronizar()
        const linha = window.innerHeight * 0.8
        caixas.forEach((caixa, i) => {
          if (!caixa) return
          const abre = caixa.getBoundingClientRect().top < linha
          if (abre !== abertos[i]) {
            abertos[i] = abre
            abrir(i, abre)
          }
        })
      }
      const st = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: atualizar })
      atualizar()
      return () => {
        st.kill()
        caixas.forEach((_, i) => abrir(i, false))
      }
    })

    ScrollTrigger.refresh()
  }
}

const heroSlides = document.querySelector<HTMLElement>('[data-hero-slides]')
if (heroSlides) {
  const HERO_DURATION = 7000
  const bgs = Array.from(heroSlides.querySelectorAll<HTMLElement>('[data-hero-bg]'))
  const cards = Array.from(heroSlides.querySelectorAll<HTMLElement>('[data-hero-card]'))
  const tabs = Array.from(heroSlides.querySelectorAll<HTMLButtonElement>('[data-hero-tab]'))
  const bars = Array.from(heroSlides.querySelectorAll<HTMLElement>('[data-hero-bar]'))
  const heroNav = heroSlides.querySelector<HTMLElement>('[data-hero-nav]')
  const heroReduce = semMovimento

  let heroVisivel = true
  new IntersectionObserver(([e]) => {
    heroVisivel = e.isIntersecting
    heroLast = null
  }).observe(heroSlides)

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

    bgs.forEach((bg, i) => {
      const video = bg.querySelector('video')
      if (!video) return
      if (i === heroActive && podeVideo()) ligarVideo(video)
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
      if (!heroVisivel || document.hidden) {
        heroLast = null
        requestAnimationFrame(tick)
        return
      }
      if (heroLast === null) heroLast = ts

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

  const hint = heroSlides.querySelector<HTMLElement>('[data-hero-hint]')
  heroNav?.addEventListener(
    'touchstart',
    () => {
      if (hint) hint.style.opacity = '0'
    },
    { once: true, passive: true },
  )
}

const marquees = document.querySelectorAll<HTMLElement>(
  '[data-logos-track], [data-hero-logos], [data-bento-logos]',
)
if (marquees.length) {
  const olho = new IntersectionObserver((entradas) => {
    for (const e of entradas) {
      ;(e.target as HTMLElement).style.animationPlayState = e.isIntersecting ? '' : 'paused'
    }
  })
  for (const m of marquees) olho.observe(m)
}

const abasRecurso = Array.from(
  document.querySelectorAll<HTMLElement>('[data-aba-recurso]'),
)
if (abasRecurso.length) {
  const paineis = Array.from(document.querySelectorAll<HTMLElement>('[data-painel-recurso]'))
  const mostrar = (alvo: string) => {
    for (const aba of abasRecurso) {
      const ativa = aba.dataset.abaRecurso === alvo
      aba.dataset.on = ativa ? 'true' : 'false'
      aba.setAttribute('aria-selected', ativa ? 'true' : 'false')
    }
    for (const painel of paineis) {
      painel.dataset.on = painel.dataset.painelRecurso === alvo ? 'true' : 'false'
    }
  }
  for (const aba of abasRecurso) {
    aba.addEventListener('click', () => mostrar(aba.dataset.abaRecurso || '0'))
  }
}

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

  const mobile = document.querySelector<HTMLDetailsElement>('[data-dock-mobile]')
  for (const item of dockItems) {
    item.addEventListener('click', () => {
      if (mobile) mobile.open = false
    })
  }
}

const vv = window.visualViewport
const dockFixo = document.querySelector<HTMLElement>('[data-floating-dock]')
if (vv && dockFixo) {
  const LIMITE_BARRA = 150

  const colar = () => {
    const sobra = document.documentElement.clientHeight - vv.height - vv.offsetTop
    const ajuste = sobra > 0 && sobra < LIMITE_BARRA ? sobra : 0
    dockFixo.style.transform = ajuste ? `translateY(${-ajuste}px)` : ''
  }

  let agendado = false
  const agendar = () => {
    if (agendado) return
    agendado = true
    requestAnimationFrame(() => {
      agendado = false
      colar()
    })
  }

  vv.addEventListener('resize', agendar)
  vv.addEventListener('scroll', agendar)
  window.addEventListener('scroll', agendar, { passive: true })
  colar()
}
