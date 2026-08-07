import { css } from 'remix/ui'

// Cores fixas da marca — as que NÃO mudam com o tema (logo, botão primário,
// grafismos ciano). Valores extraídos do laratax.com.br em produção.
// Tudo que depende de tema vem das variáveis em theme.ts.
export const COLORS = {
  navy: '#002E43',
  cyan: '#00C2EF',
  cyanBright: '#07E0FF',
  white: '#F5FFFD', // off-white da marca, não o branco puro
  ink: '#021118',
}

export const FONT_SANS =
  "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
// Kode Mono é a mono da marca (eyebrows e números grandes no site atual).
export const FONT_MONO =
  "'Kode Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace"

// Superfícies por PAPEL, não por cor: uma seção declara se é a página (base)
// ou um bloco de pontuação (contrast), e o tema resolve as cores.
// Ambas mapeiam para o mesmo conjunto de variáveis locais, então os mixins
// compartilhados e os componentes funcionam nos dois contextos sem alteração.
export const surfaceBase = css({
  '--surface': 'var(--t-base-bg)',
  '--surface-2': 'var(--t-base-bg-2)',
  '--surface-3': 'var(--t-base-bg-3)',
  '--text': 'var(--t-base-text)',
  '--muted': 'var(--t-base-muted)',
  '--line': 'var(--t-base-line)',
  '--accent': 'var(--t-base-accent)',
  '--accent-graphic': 'var(--t-base-accent-graphic)',
  '--card-bg': 'var(--t-base-card-bg)',
  '--card-shadow': 'var(--t-base-card-shadow)',
  background: 'var(--surface)',
  color: 'var(--text)',
})

export const surfaceContrast = css({
  '--surface': 'var(--t-contrast-bg)',
  '--surface-2': 'var(--t-contrast-bg-2)',
  '--surface-3': 'var(--t-contrast-bg-3)',
  '--text': 'var(--t-contrast-text)',
  '--muted': 'var(--t-contrast-muted)',
  '--line': 'var(--t-contrast-line)',
  '--accent': 'var(--t-contrast-accent)',
  '--accent-graphic': 'var(--t-contrast-accent-graphic)',
  '--card-bg': 'var(--t-contrast-card-bg)',
  '--card-shadow': 'var(--t-contrast-card-shadow)',
  background: 'var(--surface)',
  color: 'var(--text)',
})

export const container = css({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
})

export const section = css({
  padding: '112px 0',
  position: 'relative',
  scrollMarginTop: '84px', // header fixo de 68px + folga, para âncoras #...
  '@media (max-width: 720px)': { padding: '72px 0' },
})

// Bloco de pontuação arredondado flutuando sobre a página, como no site atual.
export const darkPanel = css({
  borderRadius: '28px',
  padding: '80px 56px',
  '@media (max-width: 720px)': { borderRadius: '20px', padding: '56px 24px' },
})

// Rótulo pequeno em mono uppercase, estilo williamsgptech.
// Kode Mono 14px/600 com 2px de tracking — o mesmo do "1º Robô Tributário do
// Brasil" no site atual.
export const eyebrow = css({
  margin: '0 0 20px',
  fontFamily: FONT_MONO,
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.143em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '&::before': {
    content: '""',
    width: '24px',
    height: '1px',
    background: 'currentColor',
    display: 'inline-block',
  },
})

// H2 do site atual: 48px, peso 700, line-height 1.0 e tracking normal.
// Uso 1.05 porque maiúsculas acentuadas (Ç/Ã) encostam com 1.0.
export const heading2 = css({
  margin: '0 0 16px',
  fontSize: 'clamp(30px, 4.2vw, 48px)',
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: 'normal',
  color: 'var(--text)',
  maxWidth: '18em',
})

export const lead = css({
  margin: '0 0 48px',
  fontSize: '16px',
  lineHeight: 1.5,
  color: 'var(--muted)',
  maxWidth: '38em',
})

export const card = css({
  background: 'var(--card-bg)',
  border: '1px solid var(--line)',
  borderRadius: '16px',
  padding: '28px',
  boxShadow: 'var(--card-shadow)',
})

export const btnPrimary = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '14px 28px',
  borderRadius: '10px',
  border: 'none',
  background: `linear-gradient(135deg, ${COLORS.cyanBright} 0%, ${COLORS.cyan} 100%)`,
  color: COLORS.navy,
  fontFamily: FONT_SANS,
  fontSize: '16px',
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform 150ms ease, box-shadow 150ms ease',
  boxShadow: '0 4px 16px rgba(0, 194, 239, 0.3)',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 6px 24px rgba(0, 194, 239, 0.45)',
  },
  '&:focus-visible': {
    outline: '2px solid var(--accent)',
    outlineOffset: '2px',
  },
})

export const btnGhost = css({
  position: 'relative',
  isolation: 'isolate',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '14px 28px',
  borderRadius: '10px',
  border: '1px solid var(--line)',
  background: 'transparent',
  color: 'var(--text)',
  fontFamily: FONT_SANS,
  fontSize: '16px',
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'border-color 150ms ease',
  // hover-fill que "infla" por baixo (scale3d menor no Y): premium sem JS
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    borderRadius: 'inherit',
    background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
    opacity: 0,
    transform: 'scale3d(0.9, 0.7, 1)',
    transition: 'transform 200ms cubic-bezier(0.645, 0.045, 0.355, 1), opacity 200ms ease',
  },
  '&:hover': { borderColor: 'var(--accent)' },
  '&:hover::before': { opacity: 1, transform: 'scale3d(1, 1, 1)' },
  '&:focus-visible': {
    outline: '2px solid var(--accent)',
    outlineOffset: '2px',
  },
})
