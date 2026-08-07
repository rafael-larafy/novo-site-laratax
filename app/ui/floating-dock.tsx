import { css } from 'remix/ui'

import { COLORS, FONT_SANS } from './tokens.ts'

// Navegação por seções no estilo dock do macOS.
// SSR puro: hover/tooltip em CSS; proximidade e seção ativa em landing.ts.
const DOCK_ITEMS = [
  {
    href: '#inicio',
    label: 'Início',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
      </svg>
    ),
  },
  {
    href: '#plataforma',
    label: 'Plataforma',
    icon: (
<img src="/X.svg" alt="Icon LaraTAX" mix={css({ display:'flex',width:'80%' , padding:'10px'})} />
    ),
  },
  {
    href: '#reforma',
    label: 'Reforma',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M7 8v4a5 5 0 0 0 10 0V8" />
      </svg>
    ),
  },
  {
    href: '#processo',
    label: 'Processo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="12" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M8.5 7.2 15.5 11M8.5 16.8 15.5 13" />
      </svg>
    ),
  },
  {
    href: '#resultados',
    label: 'Resultados',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15v-4" />
        <path d="M12 15V8" />
        <path d="M16 15v-7" />
      </svg>
    ),
  },
  {
    href: '#contato',
    label: 'Contato',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
] as const

const dockShell = css({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: '20px',
  zIndex: 90,
  display: 'flex',
  justifyContent: 'center',
  pointerEvents: 'none',
  padding: '0 16px',
  '@media (max-width: 860px)': { justifyContent: 'flex-end' },
})

const dockBar = css({
  pointerEvents: 'auto',
  display: 'flex',
  alignItems: 'end',
  gap: '8px',
  padding: '10px 14px 12px',
  borderRadius: '22px',
  border: '1px solid var(--line)',
  background: 'color-mix(in srgb, var(--t-header-bg) 92%, transparent)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: '0 10px 40px rgba(1, 46, 67, 0.14)',
})

const dockItem = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '44px',
  height: '44px',
  borderRadius: '14px',
  color: 'var(--muted)',
  textDecoration: 'none',
  background: 'color-mix(in srgb, var(--text) 4%, transparent)',
  transformOrigin: '50% 100%',
  transition: 'color 160ms ease, background 160ms ease, box-shadow 160ms ease',
  willChange: 'transform',
  '& svg': { width: '22px', height: '22px', display: 'block' },
  '&:hover, &:focus-visible': {
    color: COLORS.navy,
    background: `linear-gradient(145deg, ${COLORS.cyanBright}, ${COLORS.cyan})`,
    boxShadow: '0 6px 18px rgba(0, 194, 239, 0.35)',
  },
  '&:focus-visible': {
    outline: '2px solid var(--accent)',
    outlineOffset: '3px',
  },
  '&[data-active="true"]': {
    color: 'var(--text)',
    background: 'color-mix(in srgb, var(--accent) 16%, transparent)',
    boxShadow: `inset 0 -2px 0 ${COLORS.cyan}`,
  },
  // tooltip
  '&::after': {
    content: 'attr(data-label)',
    position: 'absolute',
    bottom: 'calc(100% + 10px)',
    left: '50%',
    transform: 'translateX(-50%) translateY(4px)',
    padding: '5px 10px',
    borderRadius: '8px',
    background: COLORS.ink,
    color: COLORS.white,
    fontFamily: FONT_SANS,
    fontSize: '12px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 140ms ease, transform 140ms ease',
  },
  '&:hover::after, &:focus-visible::after': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0)',
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'color 120ms ease, background 120ms ease',
  },
})

const mobileWrap = css({
  pointerEvents: 'auto',
  position: 'relative',
  display: 'none',
  '@media (max-width: 860px)': { display: 'block' },
  '& summary': {
    listStyle: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '18px',
    border: '1px solid var(--line)',
    background: 'color-mix(in srgb, var(--t-header-bg) 92%, transparent)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    color: 'var(--text)',
    boxShadow: '0 10px 40px rgba(1, 46, 67, 0.14)',
  },
  '& summary::-webkit-details-marker': { display: 'none' },
  '& summary:focus-visible': {
    outline: '2px solid var(--accent)',
    outlineOffset: '3px',
  },
  '& summary svg': { width: '22px', height: '22px' },
})

const mobilePanel = css({
  position: 'absolute',
  right: 0,
  bottom: '64px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '10px',
  borderRadius: '18px',
  border: '1px solid var(--line)',
  background: 'color-mix(in srgb, var(--t-header-bg) 94%, transparent)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: '0 10px 40px rgba(1, 46, 67, 0.16)',
})

const desktopOnly = css({
  display: 'flex',
  '@media (max-width: 860px)': { display: 'none' },
})

function DockLink(item: (typeof DOCK_ITEMS)[number]) {
  return (
    <a
      href={item.href}
      data-dock-item=""
      data-label={item.label}
      aria-label={item.label}
      mix={dockItem}
    >
      {item.icon}
    </a>
  )
}

export function FloatingDock() {
  return () => (
    <nav aria-label="Navegação por seções" data-floating-dock="" mix={dockShell}>
      <div data-dock-desktop="" mix={[dockBar, desktopOnly]}>
        {DOCK_ITEMS.map((item) => DockLink(item))}
      </div>

      <details data-dock-mobile="" mix={mobileWrap}>
        <summary aria-label="Abrir navegação por seções">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none" />
          </svg>
        </summary>
        <div mix={mobilePanel}>{DOCK_ITEMS.map((item) => DockLink(item))}</div>
      </details>
    </nav>
  )
}
