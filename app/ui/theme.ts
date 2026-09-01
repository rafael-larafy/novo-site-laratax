
const LIGHT = `
    --t-base-bg: #ffffff;
    --t-base-bg-2: #F5FFFD;
    --t-base-bg-3: #E8FFFF;
    --t-base-text: #002E43;
    --t-base-muted: rgba(2, 17, 24, 0.6);
    --t-base-line: rgba(2, 17, 24, 0.1);
    --t-base-accent: #007A99;
    --t-base-accent-graphic: #00C2EF;
    --t-base-card-bg: #ffffff;
    --t-base-card-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6), 0 1px 2px rgba(0, 46, 67, 0.04), 0 8px 24px rgba(0, 46, 67, 0.06);

    --t-contrast-bg: #021118;
    --t-contrast-bg-2: rgba(255, 255, 255, 0.05);
    --t-contrast-bg-3: #002E43;
    --t-contrast-text: #F5FFFD;
    --t-contrast-muted: rgba(255, 255, 255, 0.5);
    --t-contrast-line: rgba(255, 255, 255, 0.1);
    --t-contrast-accent: #07E0FF;
    --t-contrast-accent-graphic: #07E0FF;
    --t-contrast-card-bg: rgba(255, 255, 255, 0.05);
    --t-contrast-card-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

    --t-header-bg: rgba(255, 255, 255, 0.82);
    --logo-filter: brightness(0) opacity(0.55);
    --toggle-track: #d8dbe0;
    --toggle-knob-x: 24px;
    --toggle-knob-shadow: inset 0 0 0 0 transparent;
`

const DARK = `
    --t-base-bg: #021118;
    --t-base-bg-2: rgba(255, 255, 255, 0.05);
    --t-base-bg-3: rgba(255, 255, 255, 0.05);
    --t-base-text: #F5FFFD;
    --t-base-muted: rgba(255, 255, 255, 0.5);
    --t-base-line: rgba(255, 255, 255, 0.1);
    --t-base-accent: #07E0FF;
    --t-base-accent-graphic: #07E0FF;
    --t-base-card-bg: rgba(255, 255, 255, 0.05);
    --t-base-card-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

    --t-contrast-bg: #002E43;
    --t-contrast-bg-2: rgba(255, 255, 255, 0.07);
    --t-contrast-bg-3: #013A54;
    --t-contrast-text: #F5FFFD;
    --t-contrast-muted: rgba(255, 255, 255, 0.6);
    --t-contrast-line: rgba(255, 255, 255, 0.14);
    --t-contrast-accent: #07E0FF;
    --t-contrast-accent-graphic: #07E0FF;
    --t-contrast-card-bg: rgba(255, 255, 255, 0.07);
    --t-contrast-card-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

    --t-header-bg: rgba(2, 17, 24, 0.82);
    --logo-filter: brightness(0) invert(1) opacity(0.6);
    --toggle-track: #002E43;
    --toggle-knob-x: 0px;
    --toggle-knob-shadow: inset 8px -3px 0 0 #d8dbe0;
`
export const THEME_CSS = `
  :root {${LIGHT}}
  :root[data-theme='light'] {${LIGHT}}
  :root[data-theme='dark'] {${DARK}}
  :root:not([data-js]) [data-theme-toggle] {display:none;}
`

export const THEME_BOOTSTRAP = `
document.documentElement.dataset.js = '1';
try {
  var t = localStorage.getItem('laratax-tema');
  if (t === 'dark' || t === 'light') { document.documentElement.dataset.theme = t; }
} catch (e) {}
`
export const TRANSITION = `
@view-transition { navigation: auto; }

::view-transition-old(root) { animation: 200ms ease both vt-sai; }
::view-transition-new(root) { animation: 260ms 60ms ease both vt-entra; }
@keyframes vt-sai { to { opacity: 0; transform: translateX(-28px); } }
@keyframes vt-entra { from { opacity: 0; transform: translateX(28px); } }

header { view-transition-name: cabecalho; }

@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root), ::view-transition-new(root) { animation: none; }
}`