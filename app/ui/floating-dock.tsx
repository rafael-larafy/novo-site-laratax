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
      // X da marca inline com currentColor: escurece no hover como os demais
      // (o /X.svg tem opacidade 0.5 e degradê fixos — como <img> não reage).
      <svg viewBox="-200 -215 1784 1845" fill="currentColor" aria-hidden="true">
        <path d="M1320.09 12.1855C1348.43 12.1855 1350.01 45.7341 1335.84 63.4898L937.784 571.053L790.881 379.042L1050.88 39.8044C1063.47 22.0535 1076.07 12.1855 1101.26 12.1855H1320.09Z" />
        <path d="M321.92 12.1855C347.108 12.1866 359.706 22.0497 372.3 39.8044L1357.87 1341.88C1372.04 1359.64 1370.48 1393.18 1342.15 1393.19H1113.86C1088.67 1393.19 1076.07 1383.32 1061.9 1365.57L687.177 868.399L310.902 1365.57C296.734 1383.32 285.706 1393.18 260.522 1393.19H40.0961C11.7566 1393.19 11.7539 1359.64 25.9236 1341.88L539.191 673.1L76.304 63.4898C62.1342 45.7341 63.7143 12.1855 92.0537 12.1855H321.92Z" />
      </svg>
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
  bottom: 'calc(12px + env(safe-area-inset-bottom))',
  zIndex: 90,
  display: 'flex',
  justifyContent: 'center',
  pointerEvents: 'none',
  padding: '0 16px',
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
  '@media(max-width: 480 px)': {gap:'6px', padding: '8px 10px 10px'}
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
  '@media (max-width:860px)' : { '&::after': {display:  'none'}},
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
      <div data-dock-desktop="" mix={[dockBar]}>
        {DOCK_ITEMS.map((item) => DockLink(item))}
      </div>
    </nav>
  )
}
