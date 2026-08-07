import { css } from 'remix/ui'

import { FONT_MONO } from '../../ui/tokens.ts'

// Réplica navegável da plataforma (app.laratax.com.br) com dados fictícios,
// replicando 1:1 os frames do Figma "Motions": Home (78:18822), Projects - All
// (78:10268), Create Project (78:9274) e Analytics - Reforma - Dashboard Geral
// (78:14474). Paleta, ícones (SVGs exportados do arquivo) e medidas vêm do
// design system oficial. Estudo do produto em docs/estudo-plataforma.md.
// Navegação: [data-app-nav data-target] troca [data-app-screen] via landing.ts;
// sem JS a Visão geral fica estática.

// Paleta oficial do design system (variáveis do arquivo Figma)
const A = {
  bg: '#f8fbfc', // color/neutral/50 · fundo do app
  card: '#ffffff', // surface/0
  line: '#e2edf0', // surface/200 · panel/border/color
  lineForte: '#cadde2', // surface/300 · bordas de input/radio
  cinza: '#f1f8f9', // surface/100 · tag/secondary/background
  text: '#314e58', // text/color · surface/700
  slate: '#45626c', // surface/600 · ícones do menu · tag/secondary/color
  muted: '#62838e', // text/muted/color
  faint: '#90afb9', // color/neutral/400
  cyan: '#00c4e5', // primary/color · button/primary/background
  cyanVivo: '#07e0ff', // brand/logo/primary · button/link/color · barra "Reforma"
  cyanSoft: '#eaffff', // primary/50 · gradiente das telas e da marca de tipo
  ink: '#021118', // color/neutral/950
  navy: '#033649', // primary/950 · barras "Atual" dos gráficos
  navyEscuro: '#002e43', // color/primary/950 (gradiente do card de tokens)
  teal: '#037b9b', // tag/primary/color · barras "Diferença"
  green: '#15803d', // tag/success/color
  greenBg: '#dcfce7', // tag/success/background
  orange: '#c2410c', // tag/warn/color
  orangeBg: '#ffedd5', // tag/warn/background
  laranja: '#f97316', // badge/warn/background · botão do banner
  red: '#b91c1c', // tag/danger/color
  redBg: '#fee2e2', // tag/danger/background
  amarelo: '#ca8a04', // texto do banner de divergência
  amareloBorda: '#fef08a',
  amareloBg: 'rgba(254, 252, 232, 0.95)',
} as const

// --- ícones oficiais (SVGs exportados do Figma; Material Symbols do DS) ----
// box = caixa do ícone no design; w/h = glifo, centralizado via translate.

type IconDef = { box: number; w: number; h: number; d: readonly string[]; fr?: boolean }

const ICONE = {
  add: { box: 16, w: 9.333, h: 9.333, d: ['M8.66667 5.33333H5.33333V8.66667C5.33333 9.03333 5.03333 9.33333 4.66667 9.33333C4.3 9.33333 4 9.03333 4 8.66667V5.33333H0.666667C0.3 5.33333 0 5.03333 0 4.66667C0 4.3 0.3 4 0.666667 4H4V0.666667C4 0.3 4.3 0 4.66667 0C5.03333 0 5.33333 0.3 5.33333 0.666667V4H8.66667C9.03333 4 9.33333 4.3 9.33333 4.66667C9.33333 5.03333 9.03333 5.33333 8.66667 5.33333Z'] },
  home: { box: 24, w: 20, h: 17, d: ['M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z'] },
  layers: { box: 24, w: 18, h: 19.07, d: ['M8.99 16.54L1.62 10.81L0 12.07L9 19.07L18 12.07L16.37 10.8L8.99 16.54ZM9 14L16.36 8.27L18 7L9 0L0 7L1.63 8.27L9 14ZM9 2.53L14.74 7L9 11.47L3.26 7L9 2.53Z'] },
  receiptLong: { box: 24, w: 18, h: 20, d: ['M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0V14H0V17C0 18.66 1.34 20 3 20H15C16.66 20 18 18.66 18 17V0L16.5 1.5ZM12 18H3C2.45 18 2 17.55 2 17V16H12V18ZM16 17C16 17.55 15.55 18 15 18C14.45 18 14 17.55 14 17V14H5V3H16V17Z', 'M12 5H6V7H12V5Z', 'M15 5H13V7H15V5Z', 'M12 8H6V10H12V8Z', 'M15 8H13V10H15V8Z'] },
  usuarios: { box: 24, w: 20, h: 20, d: ['M10.51 7.99C10.51 6.34 9.16 4.99 7.51 4.99C5.86 4.99 4.51 6.34 4.51 7.99C4.51 9.64 5.86 10.99 7.51 10.99C9.16 10.99 10.51 9.64 10.51 7.99ZM7.51 8.99C6.96 8.99 6.51 8.54 6.51 7.99C6.51 7.44 6.96 6.99 7.51 6.99C8.06 6.99 8.51 7.44 8.51 7.99C8.51 8.54 8.06 8.99 7.51 8.99ZM14.01 10.99C15.12 10.99 16.01 10.1 16.01 8.99C16.01 7.88 15.12 6.99 14.01 6.99C12.9 6.99 12 7.88 12.01 8.99C12.01 10.1 12.9 10.99 14.01 10.99ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM3.85 15.11C4.53 14.57 6.12 14 7.51 14C7.58 14 7.66 14.01 7.74 14.01C7.98 13.37 8.41 12.72 9.04 12.15C8.48 12.05 7.95 11.99 7.51 11.99C6.21 11.99 4.12 12.44 2.78 13.42C2.28 12.38 2 11.22 2 9.99C2 5.58 5.59 1.99 10 1.99C14.41 1.99 18 5.58 18 9.99C18 11.19 17.73 12.33 17.25 13.36C16.25 12.77 14.89 12.49 14.01 12.49C12.49 12.49 9.51 13.3 9.51 15.19V17.97C7.24 17.84 5.22 16.76 3.85 15.11Z'] },
  config: { box: 24, w: 19.454, h: 20, d: ['M17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2993 3.11 17.1293 3.02 16.9493 3.02C16.8893 3.02 16.8293 3.03 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.61933 3.03 2.55933 3.02 2.49933 3.02C2.32933 3.02 2.15933 3.11 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668304 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668304 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.15933 16.89 2.32933 16.98 2.50933 16.98C2.56933 16.98 2.62933 16.97 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C16.8393 16.97 16.8993 16.98 16.9593 16.98C17.1293 16.98 17.2993 16.89 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98ZM15.1793 9.27C15.2193 9.58 15.2293 9.79 15.2293 10C15.2293 10.21 15.2093 10.43 15.1793 10.73L15.0393 11.86L15.9293 12.56L17.0093 13.4L16.3093 14.61L15.0393 14.1L13.9993 13.68L13.0993 14.36C12.6693 14.68 12.2593 14.92 11.8493 15.09L10.7893 15.52L10.6293 16.65L10.4293 18H9.02933L8.67933 15.52L7.61933 15.09C7.18933 14.91 6.78933 14.68 6.38933 14.38L5.47933 13.68L4.41933 14.11L3.14933 14.62L2.44933 13.41L3.52933 12.57L4.41933 11.87L4.27933 10.74C4.24933 10.43 4.22933 10.2 4.22933 10C4.22933 9.8 4.24933 9.57 4.27933 9.27L4.41933 8.14L3.52933 7.44L2.44933 6.6L3.14933 5.39L4.41933 5.9L5.45933 6.32L6.35933 5.64C6.78933 5.32 7.19933 5.08 7.60933 4.91L8.66933 4.48L8.82933 3.35L9.02933 2H10.4193L10.7693 4.48L11.8293 4.91C12.2593 5.09 12.6593 5.32 13.0593 5.62L13.9693 6.32L15.0293 5.89L16.2993 5.38L16.9993 6.59L15.9293 7.44L15.0393 8.14L15.1793 9.27ZM9.72933 6C7.51933 6 5.72933 7.79 5.72933 10C5.72933 12.21 7.51933 14 9.72933 14C11.9393 14 13.7293 12.21 13.7293 10C13.7293 7.79 11.9393 6 9.72933 6ZM9.72933 12C8.62933 12 7.72933 11.1 7.72933 10C7.72933 8.9 8.62933 8 9.72933 8C10.8293 8 11.7293 8.9 11.7293 10C11.7293 11.1 10.8293 12 9.72933 12Z'] },
  dinheiro: { box: 24, w: 20, h: 20, d: ['M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.31 9.14C8.54 8.69 7.97 8.2 7.97 7.47C7.97 6.63 8.76 6.04 10.07 6.04C11.45 6.04 11.97 6.7 12.01 7.68H13.72C13.67 6.34 12.85 5.11 11.23 4.71V3H8.9V4.69C7.39 5.01 6.18 5.99 6.18 7.5C6.18 9.29 7.67 10.19 9.84 10.71C11.79 11.17 12.18 11.86 12.18 12.58C12.18 13.11 11.79 13.97 10.08 13.97C8.48 13.97 7.85 13.25 7.76 12.33H6.04C6.14 14.03 7.4 14.99 8.9 15.3V17H11.24V15.33C12.76 15.04 13.96 14.17 13.97 12.56C13.96 10.36 12.07 9.6 10.31 9.14Z'] },
  ajuda: { box: 24, w: 20, h: 20, d: ['M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z'] },
  token: { box: 16, w: 12, h: 13.333, d: ['M12 3.33333L6 0L0 3.33333V10L6 13.3333L12 10V3.33333ZM6 1.52667L9.94 3.71333L7.93333 4.82667C7.44667 4.32 6.76 4 6 4C5.24 4 4.55333 4.32 4.06667 4.82667L2.06 3.71333L6 1.52667ZM5.33333 11.44L1.33333 9.22V4.84L3.42 6C3.36 6.20667 3.33333 6.43333 3.33333 6.66667C3.33333 7.90667 4.18 8.95333 5.33333 9.24667V11.44ZM4.66667 6.66667C4.66667 5.93333 5.26667 5.33333 6 5.33333C6.73333 5.33333 7.33333 5.93333 7.33333 6.66667C7.33333 7.4 6.73333 8 6 8C5.26667 8 4.66667 7.4 4.66667 6.66667ZM6.66667 11.44V9.25333C7.82 8.96 8.66667 7.91333 8.66667 6.67333C8.66667 6.44 8.64 6.21333 8.58 6L10.6667 4.84V9.22L6.66667 11.44Z'] },
  download: { box: 16, w: 10.667, h: 10.667, d: ['M9.33333 7.33333V9.33333H1.33333V7.33333H0V9.33333C0 10.0667 0.6 10.6667 1.33333 10.6667H9.33333C10.0667 10.6667 10.6667 10.0667 10.6667 9.33333V7.33333H9.33333ZM8.66667 4.66667L7.72667 3.72667L6 5.44667V0H4.66667V5.44667L2.94 3.72667L2 4.66667L5.33333 8L8.66667 4.66667Z'] },
  chevronDir: { box: 16, w: 4.39, h: 7.444, d: ['M0.195 0.195842C-0.065 0.455842 -0.065 0.875841 0.195 1.13584L2.78167 3.72251L0.195 6.30918C-0.065 6.56918 -0.065 6.98918 0.195 7.24918C0.455 7.50918 0.875 7.50918 1.135 7.24918L4.195 4.18917C4.455 3.92917 4.455 3.50917 4.195 3.24917L1.135 0.189175C0.881667 -0.0641586 0.455 -0.0641585 0.195 0.195842Z'] },
  busca: { box: 14, w: 14, h: 14, fr: true, d: ['M1.2 6.016C1.2 3.3562 3.35619 1.2 6.01599 1.2C8.6758 1.2 10.832 3.3562 10.832 6.016C10.832 8.6758 8.6758 10.832 6.01599 10.832C3.35619 10.832 1.2 8.67581 1.2 6.016ZM6.01599 0C2.69345 0 0 2.69346 0 6.016C0 9.33855 2.69345 12.032 6.01599 12.032C7.46118 12.032 8.78734 11.5224 9.82461 10.6731L12.9757 13.8243C13.2101 14.0586 13.59 14.0586 13.8243 13.8243C14.0586 13.5899 14.0586 13.21 13.8243 12.9757L10.6731 9.82461C11.5224 8.78735 12.032 7.46118 12.032 6.016C12.032 2.69345 9.33854 0 6.01599 0Z'] },
  monitorHeart: { box: 24, w: 20, h: 16, d: ['M18 0H2C0.9 0 0 0.9 0 2V5H2V2H18V5H20V2C20 0.9 19.1 0 18 0Z', 'M18 14H2V11H0V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V11H18V14Z', 'M12.89 3.55C12.55 2.87 11.44 2.87 11.1 3.55L8 9.76L6.89 7.55C6.72 7.21 6.38 7 6 7H0V9H5.38L7.1 12.45C7.28 12.79 7.62 13 8 13C8.38 13 8.72 12.79 8.89 12.45L12 6.24L13.11 8.45C13.28 8.79 13.62 9 14 9H20V7H14.62L12.89 3.55Z'] },
  checklist: { box: 20, w: 16.667, h: 12.558, d: ['M16.6667 2.55833H9.16667V4.225H16.6667V2.55833ZM16.6667 9.225H9.16667V10.8917H16.6667V9.225ZM2.95 5.89167L0 2.94167L1.175 1.76667L2.94167 3.53333L6.475 0L7.65 1.175L2.95 5.89167ZM2.95 12.5583L0 9.60833L1.175 8.43333L2.94167 10.2L6.475 6.66667L7.65 7.84167L2.95 12.5583Z'] },
  pessoas: { box: 32, w: 29.333, h: 21.333, d: ['M20.8933 12.1733C22.72 13.4133 24 15.0933 24 17.3333V21.3333H29.3333V17.3333C29.3333 14.4267 24.5733 12.7067 20.8933 12.1733Z', 'M18.6667 10.6667C21.6133 10.6667 24 8.28 24 5.33333C24 2.38667 21.6133 0 18.6667 0C18.04 0 17.4533 0.133333 16.8933 0.32C18 1.69333 18.6667 3.44 18.6667 5.33333C18.6667 7.22667 18 8.97333 16.8933 10.3467C17.4533 10.5333 18.04 10.6667 18.6667 10.6667Z', 'M10.6667 10.6667C13.6133 10.6667 16 8.28 16 5.33333C16 2.38667 13.6133 0 10.6667 0C7.72 0 5.33333 2.38667 5.33333 5.33333C5.33333 8.28 7.72 10.6667 10.6667 10.6667ZM10.6667 2.66667C12.1333 2.66667 13.3333 3.86667 13.3333 5.33333C13.3333 6.8 12.1333 8 10.6667 8C9.2 8 8 6.8 8 5.33333C8 3.86667 9.2 2.66667 10.6667 2.66667Z', 'M10.6667 12C7.10667 12 0 13.7867 0 17.3333V21.3333H21.3333V17.3333C21.3333 13.7867 14.2267 12 10.6667 12ZM18.6667 18.6667H2.66667V17.3467C2.93333 16.3867 7.06667 14.6667 10.6667 14.6667C14.2667 14.6667 18.4 16.3867 18.6667 17.3333V18.6667Z'] },
  relogio: { box: 12, w: 10, h: 10, d: ['M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9ZM5.25 2.5H4.5V5.5L7.1 7.1L7.5 6.45L5.25 5.1V2.5Z'] },
  grupo: { box: 10.5, w: 8.75, h: 7.875, d: ['M1.75 5.25C2.23125 5.25 2.625 5.64375 2.625 6.125C2.625 6.60625 2.23125 7 1.75 7C1.26875 7 0.875 6.60625 0.875 6.125C0.875 5.64375 1.26875 5.25 1.75 5.25ZM1.75 4.375C0.7875 4.375 0 5.1625 0 6.125C0 7.0875 0.7875 7.875 1.75 7.875C2.7125 7.875 3.5 7.0875 3.5 6.125C3.5 5.1625 2.7125 4.375 1.75 4.375ZM4.375 0.875C4.85625 0.875 5.25 1.26875 5.25 1.75C5.25 2.23125 4.85625 2.625 4.375 2.625C3.89375 2.625 3.5 2.23125 3.5 1.75C3.5 1.26875 3.89375 0.875 4.375 0.875ZM4.375 0C3.4125 0 2.625 0.7875 2.625 1.75C2.625 2.7125 3.4125 3.5 4.375 3.5C5.3375 3.5 6.125 2.7125 6.125 1.75C6.125 0.7875 5.3375 0 4.375 0ZM7 5.25C7.48125 5.25 7.875 5.64375 7.875 6.125C7.875 6.60625 7.48125 7 7 7C6.51875 7 6.125 6.60625 6.125 6.125C6.125 5.64375 6.51875 5.25 7 5.25ZM7 4.375C6.0375 4.375 5.25 5.1625 5.25 6.125C5.25 7.0875 6.0375 7.875 7 7.875C7.9625 7.875 8.75 7.0875 8.75 6.125C8.75 5.1625 7.9625 4.375 7 4.375Z'] },
  maisVert: { box: 14, w: 2.333, h: 9.333, d: ['M1.16667 2.33333C1.80833 2.33333 2.33333 1.80833 2.33333 1.16667C2.33333 0.525 1.80833 0 1.16667 0C0.525 0 0 0.525 0 1.16667C0 1.80833 0.525 2.33333 1.16667 2.33333ZM1.16667 3.5C0.525 3.5 0 4.025 0 4.66667C0 5.30833 0.525 5.83333 1.16667 5.83333C1.80833 5.83333 2.33333 5.30833 2.33333 4.66667C2.33333 4.025 1.80833 3.5 1.16667 3.5ZM1.16667 7C0.525 7 0 7.525 0 8.16667C0 8.80833 0.525 9.33333 1.16667 9.33333C1.80833 9.33333 2.33333 8.80833 2.33333 8.16667C2.33333 7.525 1.80833 7 1.16667 7Z'] },
  baixando: { box: 20, w: 16.625, h: 16.583, d: ['M13.6 1.84167C12.3667 0.833334 10.8417 0.166667 9.16667 0V1.68333C10.3833 1.83333 11.4917 2.31667 12.4167 3.03333L13.6 1.84167ZM14.9417 7.45833H16.625C16.4583 5.78333 15.7917 4.25833 14.7833 3.025L13.5917 4.20833C14.3083 5.13333 14.7917 6.24167 14.9417 7.45833ZM13.5917 12.375L14.7833 13.5667C15.7917 12.3333 16.4583 10.8 16.625 9.13333H14.9417C14.7917 10.3417 14.3083 11.45 13.5917 12.375ZM9.16667 14.9V16.5833C10.8417 16.4167 12.3667 15.75 13.6 14.7417L12.4083 13.55C11.4917 14.2667 10.3833 14.75 9.16667 14.9ZM11.325 7.11667L9.16667 9.26667V4.125H7.5V9.26667L5.34167 7.10833L4.16667 8.29167L8.33333 12.4583L12.5 8.29167L11.325 7.11667ZM7.5 14.9V16.5833C3.29167 16.1667 0 12.6167 0 8.29167C0 3.96667 3.29167 0.416667 7.5 0V1.68333C4.20833 2.09167 1.66667 4.89167 1.66667 8.29167C1.66667 11.6917 4.20833 14.4917 7.5 14.9Z'] },
  menuDashboard: { box: 20, w: 15, h: 15, d: ['M13.3333 1.66667V3.33333H10V1.66667H13.3333ZM5 1.66667V6.66667H1.66667V1.66667H5ZM13.3333 8.33333V13.3333H10V8.33333H13.3333ZM5 11.6667V13.3333H1.66667V11.6667H5ZM15 0H8.33333V5H15V0ZM6.66667 0H0V8.33333H6.66667V0ZM15 6.66667H8.33333V15H15V6.66667ZM6.66667 10H0V15H6.66667V10Z'] },
  menuVendas: { box: 20, w: 16.67, h: 16.663, d: ['M16.175 7.84167L8.81667 0.483333C8.50833 0.175 8.08333 0 7.64167 0H1.66667C0.75 0 0 0.75 0 1.66667V7.64167C0 8.08333 0.175 8.50833 0.491667 8.81667L7.85 16.175C8.5 16.825 9.55833 16.825 10.2083 16.175L16.1833 10.2C16.8333 9.55 16.8333 8.5 16.175 7.84167ZM9.025 15L1.66667 7.64167V1.66667H7.64167L15 9.025L9.025 15Z', 'M3.75 5C4.44036 5 5 4.44036 5 3.75C5 3.05964 4.44036 2.5 3.75 2.5C3.05964 2.5 2.5 3.05964 2.5 3.75C2.5 4.44036 3.05964 5 3.75 5Z'] },
  menuCompras: { box: 20, w: 16.673, h: 16.667, d: ['M12.125 9.16667C12.75 9.16667 13.3 8.825 13.5833 8.30833L16.5667 2.9C16.875 2.35 16.475 1.66667 15.8417 1.66667H3.50833L2.725 0H0V1.66667H1.66667L4.66667 7.99167L3.54167 10.025C2.93333 11.1417 3.73333 12.5 5 12.5H15V10.8333H5L5.91667 9.16667H12.125ZM4.3 3.33333H14.425L12.125 7.5H6.275L4.3 3.33333ZM5 13.3333C4.08333 13.3333 3.34167 14.0833 3.34167 15C3.34167 15.9167 4.08333 16.6667 5 16.6667C5.91667 16.6667 6.66667 15.9167 6.66667 15C6.66667 14.0833 5.91667 13.3333 5 13.3333ZM13.3333 13.3333C12.4167 13.3333 11.675 14.0833 11.675 15C11.675 15.9167 12.4167 16.6667 13.3333 16.6667C14.25 16.6667 15 15.9167 15 15C15 14.0833 14.25 13.3333 13.3333 13.3333Z'] },
  menuOutros: { box: 20, w: 11.667, h: 15, d: ['M3.33333 0L0 3.325H2.5V9.16667H4.16667V3.325H6.66667L3.33333 0ZM9.16667 11.675V5.83333H7.5V11.675H5L8.33333 15L11.6667 11.675H9.16667Z'] },
  menuTransicao: { box: 20, w: 15, h: 16.667, d: ['M3.33333 7.5H5V9.16667H3.33333V7.5ZM15 3.33333V15C15 15.9167 14.25 16.6667 13.3333 16.6667H1.66667C0.741667 16.6667 0 15.9167 0 15L0.00833333 3.33333C0.00833333 2.41667 0.741667 1.66667 1.66667 1.66667H2.5V0H4.16667V1.66667H10.8333V0H12.5V1.66667H13.3333C14.25 1.66667 15 2.41667 15 3.33333ZM1.66667 5H13.3333V3.33333H1.66667V5ZM13.3333 15V6.66667H1.66667V15H13.3333ZM10 9.16667H11.6667V7.5H10V9.16667ZM6.66667 9.16667H8.33333V7.5H6.66667V9.16667Z'] },
  menuMemoria: { box: 20, w: 15, h: 15, d: ['M6.66667 8.33333H3.33333V11.6667H6.66667V8.33333Z', 'M11.6667 8.33333H8.33333V11.6667H11.6667V8.33333Z', 'M13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0ZM13.3333 13.3333H1.66667V1.66667H13.3333V13.3333Z', 'M6.66667 3.33333H3.33333V6.66667H6.66667V3.33333Z', 'M11.6667 3.33333H8.33333V6.66667H11.6667V3.33333Z'] },
  filtro: { box: 14, w: 9.283, h: 9.333, d: ['M1.7276 1.16667H7.56094L4.63844 4.84167L1.7276 1.16667ZM0.123436 0.939167C1.30177 2.45 3.4776 5.25 3.4776 5.25V8.75C3.4776 9.07083 3.7401 9.33333 4.06094 9.33333H5.2276C5.54844 9.33333 5.81094 9.07083 5.81094 8.75V5.25C5.81094 5.25 7.98094 2.45 9.15927 0.939167C9.45677 0.554167 9.1826 0 8.69844 0H0.584269C0.100102 0 -0.174064 0.554167 0.123436 0.939167Z'] },
  chevronBaixo: { box: 14, w: 11.5, h: 6.5, fr: true, d: ['M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.75 4.68934L10.2197 0.21967C10.5126 -0.0732233 10.9874 -0.0732233 11.2803 0.21967C11.5732 0.512563 11.5732 0.987437 11.2803 1.28033L6.28033 6.28033C5.98744 6.57322 5.51256 6.57322 5.21967 6.28033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z'] },
  exportar: { box: 14, w: 9.333, h: 9.333, d: ['M8.16667 6.41667V8.16667H1.16667V6.41667H0V8.16667C0 8.80833 0.525 9.33333 1.16667 9.33333H8.16667C8.80833 9.33333 9.33333 8.80833 9.33333 8.16667V6.41667H8.16667ZM1.75 2.91667L2.5725 3.73917L4.08333 2.23417V7H5.25V2.23417L6.76083 3.73917L7.58333 2.91667L4.66667 0L1.75 2.91667Z'] },
  menos: { box: 14, w: 14, h: 1.355, fr: true, d: ['M0 0.677419C0 0.303291 0.303291 0 0.677419 0H13.3226C13.6967 0 14 0.303291 14 0.677419C14 1.05155 13.6967 1.35484 13.3226 1.35484H0.677419C0.303291 1.35484 0 1.05155 0 0.677419Z'] },
  porcentoInput: { box: 14, w: 9.333, h: 9.333, d: ['M2.04167 0C0.915833 0 0 0.915833 0 2.04167C0 3.1675 0.915833 4.08333 2.04167 4.08333C3.1675 4.08333 4.08333 3.1675 4.08333 2.04167C4.08333 0.915833 3.1675 0 2.04167 0ZM2.04167 2.91667C1.5575 2.91667 1.16667 2.52583 1.16667 2.04167C1.16667 1.5575 1.5575 1.16667 2.04167 1.16667C2.52583 1.16667 2.91667 1.5575 2.91667 2.04167C2.91667 2.52583 2.52583 2.91667 2.04167 2.91667ZM7.29167 5.25C6.16583 5.25 5.25 6.16583 5.25 7.29167C5.25 8.4175 6.16583 9.33333 7.29167 9.33333C8.4175 9.33333 9.33333 8.4175 9.33333 7.29167C9.33333 6.16583 8.4175 5.25 7.29167 5.25ZM7.29167 8.16667C6.8075 8.16667 6.41667 7.77583 6.41667 7.29167C6.41667 6.8075 6.8075 6.41667 7.29167 6.41667C7.77583 6.41667 8.16667 6.8075 8.16667 7.29167C8.16667 7.77583 7.77583 8.16667 7.29167 8.16667ZM0.8225 9.33333L0 8.51083L8.51083 0L9.33333 0.8225L0.8225 9.33333Z'] },
  porcentoKpi: { box: 24, w: 16, h: 16, d: ['M3.5 0C1.57 0 0 1.57 0 3.5C0 5.43 1.57 7 3.5 7C5.43 7 7 5.43 7 3.5C7 1.57 5.43 0 3.5 0ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM12.5 9C10.57 9 9 10.57 9 12.5C9 14.43 10.57 16 12.5 16C14.43 16 16 14.43 16 12.5C16 10.57 14.43 9 12.5 9ZM12.5 14C11.67 14 11 13.33 11 12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5C14 13.33 13.33 14 12.5 14ZM1.41 16L0 14.59L14.59 0L16 1.41L1.41 16Z'] },
  setaCima: { box: 16, w: 10.667, h: 10.667, d: ['M0 5.33333L0.94 6.27333L4.66667 2.55333V10.6667H6V2.55333L9.72 6.28L10.6667 5.33333L5.33333 0L0 5.33333Z'] },
  setaBaixo: { box: 16, w: 10.667, h: 10.667, d: ['M10.6667 5.33333L9.72667 4.39333L6 8.11333V0H4.66667V8.11333L0.946667 4.38667L0 5.33333L5.33333 10.6667L10.6667 5.33333Z'] },
  alertaLaranja: { box: 24, w: 20, h: 20, d: ['M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z'] },
  receitaFederal: { box: 24, w: 24, h: 15.781, fr: true, d: ['M11.4883 2.90801C12.056 2.856 12.6341 2.89196 13.1865 3.03594C13.5409 3.1277 13.8855 3.2671 14.1914 3.46856C14.4072 3.6122 14.604 3.79108 14.7373 4.01446C14.8753 4.24409 14.9369 4.52751 14.8682 4.78985C14.793 5.09984 14.5775 5.35537 14.3301 5.54864C13.9513 5.83959 13.4955 6.01606 13.0312 6.11895C12.2681 6.28584 11.4625 6.26971 10.708 6.06622C10.2499 5.93993 9.80292 5.73363 9.45508 5.40508C9.22274 5.175 9.04472 4.86315 9.05957 4.52813C9.06812 4.17259 9.28146 3.85622 9.5459 3.63165C10.088 3.18079 10.7965 2.9807 11.4883 2.90801Z', 'M12.0713 0.0105533C13.7496 0.447318 15.3812 1.04599 16.9766 1.72051C17.1295 1.78838 17.2878 1.84445 17.4355 1.92364C17.3133 2.78651 17.1816 3.64827 17.0713 4.51251C17.2152 4.4455 17.3489 4.35888 17.4883 4.28301C18.2108 3.87534 18.95 3.49636 19.7031 3.14727C19.7689 3.12002 19.8442 3.06442 19.915 3.11114C21.1745 3.73711 22.3999 4.42929 23.6123 5.14044C23.7417 5.21828 23.8738 5.29174 24 5.37481C23.6078 5.65826 23.2096 5.93432 22.8213 6.22344C21.5655 7.15193 20.3507 8.13598 19.1768 9.16485C19.1076 9.23589 19.0065 9.17523 18.9248 9.16387C16.8536 8.69012 14.7658 8.28964 12.667 7.95782C12.4568 7.92988 12.2477 7.88583 12.0361 7.86993C12.1126 7.94364 12.2014 8.00251 12.2881 8.06329C13.723 9.10355 15.1361 10.1746 16.5137 11.2889C16.5557 11.3234 16.5971 11.3589 16.6387 11.3943C16.4769 11.5645 16.2945 11.7144 16.1289 11.8807C14.7836 13.1546 13.4364 14.4269 12.0918 15.702C12.0616 15.7283 12.0316 15.7549 12.001 15.7811C11.8887 15.6951 11.7941 15.5891 11.6924 15.492C9.35875 13.2573 7.00238 11.0425 4.55566 8.9295C4.59655 8.83119 4.6453 8.73639 4.69531 8.64239C5.33657 7.39227 5.98529 6.14478 6.69531 4.93145C6.76672 4.80513 6.85258 4.68669 6.91309 4.5545C6.79438 4.6062 6.6846 4.67516 6.57227 4.73907C5.26278 5.48928 3.97743 6.282 2.71387 7.10626C2.64564 7.14871 2.58287 7.20534 2.50391 7.22735C2.42855 7.18398 2.36613 7.12205 2.29785 7.06915C1.62163 6.53085 0.920943 6.02337 0.207031 5.53594C0.136925 5.48849 0.0678235 5.43934 0 5.38848C0.143886 5.28315 0.305392 5.20491 0.457031 5.11114C2.47947 3.926 4.55076 2.81809 6.69336 1.86212C6.78306 1.8208 6.87477 1.77159 6.97656 1.77227C8.47793 1.77387 9.97931 1.83154 11.4766 1.94122C11.6271 1.94962 11.7777 1.9729 11.9287 1.96563C11.8859 1.93958 11.8419 1.91505 11.7959 1.89532C10.9086 1.53487 10.0079 1.20626 9.09863 0.905085C9.23658 0.841295 9.38438 0.802172 9.52734 0.751764C10.2983 0.491962 11.0704 0.234452 11.8564 0.0232486C11.9259 0.00372825 12.0003 -0.0107874 12.0713 0.0105533ZM12.0713 2.0086C12.029 1.98839 11.9808 1.98943 11.9395 2.01055C10.6536 2.57541 9.39297 3.19765 8.15527 3.86016C7.75373 4.07975 7.3481 4.29341 6.9541 4.52618C7.05203 4.59041 7.15398 4.64836 7.25488 4.70782C8.11135 5.2175 8.95012 5.75645 9.77734 6.31133C10.5289 6.81238 11.2651 7.33606 12.0039 7.85528C12.1252 7.77828 12.2388 7.68945 12.3564 7.60723C13.791 6.58727 15.2502 5.59847 16.7656 4.70001C16.8626 4.64328 16.9625 4.5905 17.0518 4.5213C15.4583 3.5607 13.7899 2.72397 12.0713 2.0086Z'] },
  alertaBanner: { box: 18, w: 15, h: 15, d: ['M6.75 9.75H8.25V11.25H6.75V9.75ZM6.75 3.75H8.25V8.25H6.75V3.75ZM7.4925 0C3.3525 0 0 3.36 0 7.5C0 11.64 3.3525 15 7.4925 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.4925 0ZM7.5 13.5C4.185 13.5 1.5 10.815 1.5 7.5C1.5 4.185 4.185 1.5 7.5 1.5C10.815 1.5 13.5 4.185 13.5 7.5C13.5 10.815 10.815 13.5 7.5 13.5Z'] },
  expandir: { box: 24, w: 11.175, h: 6.585, d: ['M9.4625 0.2925L5.5825 4.1725L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L4.8825 6.2925C5.2725 6.6825 5.9025 6.6825 6.2925 6.2925L10.8825 1.7025C11.2725 1.3125 11.2725 0.6825 10.8825 0.2925C10.4925 -0.0875 9.8525 -0.0975 9.4625 0.2925Z'] },
  tagSetaBaixo: { box: 10.5, w: 7, h: 7, d: ['M7 3.5L6.38313 2.88313L3.9375 5.32438V0H3.0625V5.32438L0.62125 2.87875L0 3.5L3.5 7L7 3.5Z'] },
  tagSetaCima: { box: 10.5, w: 7, h: 7, d: ['M0 3.5L0.616875 4.11687L3.0625 1.67562V7H3.9375V1.67562L6.37875 4.12125L7 3.5L3.5 0L0 3.5Z'] },
  sync: { box: 14, w: 9.333, h: 12.833, d: ['M4.66667 1.75V0L2.33333 2.33333L4.66667 4.66667V2.91667C6.5975 2.91667 8.16667 4.48583 8.16667 6.41667C8.16667 7.00583 8.02083 7.56583 7.75833 8.05L8.61 8.90167C9.065 8.18417 9.33333 7.3325 9.33333 6.41667C9.33333 3.83833 7.245 1.75 4.66667 1.75ZM4.66667 9.91667C2.73583 9.91667 1.16667 8.3475 1.16667 6.41667C1.16667 5.8275 1.3125 5.2675 1.575 4.78333L0.723333 3.93167C0.268333 4.64917 0 5.50083 0 6.41667C0 8.995 2.08833 11.0833 4.66667 11.0833V12.8333L7 10.5L4.66667 8.16667V9.91667Z'] },
  fechar: { box: 14, w: 8.167, h: 8.167, d: ['M8.16667 0.8225L7.34417 0L4.08333 3.26083L0.8225 0L0 0.8225L3.26083 4.08333L0 7.34417L0.8225 8.16667L4.08333 4.90583L7.34417 8.16667L8.16667 7.34417L4.90583 4.08333L8.16667 0.8225Z'] },
} as const satisfies Record<string, IconDef>

function Icone(icon: IconDef, tam?: number) {
  return (
    <svg
      width={tam}
      height={tam}
      viewBox={`0 0 ${icon.box} ${icon.box}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <g transform={`translate(${(icon.box - icon.w) / 2} ${(icon.box - icon.h) / 2})`}>
        {icon.d.map((d) =>
          icon.fr ? <path d={d} fill-rule="evenodd" clip-rule="evenodd" /> : <path d={d} />,
        )}
      </g>
    </svg>
  )
}

// ponytail: avatares do Figma são fotos de banco de imagens; iniciais em círculo
// evitam embutir binários — trocar se o Rafael subir os assets.
function Avatar(nome: string, tam = 32) {
  const iniciais = nome
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
  return (
    <span
      mix={css({
        display: 'grid',
        placeItems: 'center',
        borderRadius: '999px',
        background: `linear-gradient(135deg, ${A.teal}, ${A.navy})`,
        color: '#ffffff',
        fontSize: '11px',
        fontWeight: 700,
        flexShrink: 0,
      })}
      style={{ width: `${tam}px`, height: `${tam}px` }}
    >
      {iniciais}
    </span>
  )
}

// --- dados fictícios (idênticos aos frames do Figma) ----------------------

type Projeto = {
  data: string
  hora: string
  grupo: string
  empresa: string
  cnpj: string
  de?: string
  ate?: string
  tipo: string
  chips: string[]
  status: string
  cor: 'verde' | 'laranja' | 'vermelho' | 'neutro'
  marca: 'diagnostico' | 'baixa'
  abreReforma?: boolean
}

const PROJETOS: Projeto[] = [
  { data: '31/12/2023', hora: '12:47h', grupo: 'Innovative', empresa: 'Innovative Solutions for Tomorrow Enterprises', cnpj: '12.345.678/0001-90', tipo: 'Baixa de notas fiscais', chips: ["1.128.200 xml's"], status: 'Concluído', cor: 'verde', marca: 'baixa' },
  { data: '30/11/2023', hora: '09:32h', grupo: 'Synergy', empresa: 'Global Synergy Technologies and Services Inc.', cnpj: '98.765.432/0001-21', de: '01/2020', ate: '02/2025', tipo: 'Diagnóstico tributário', chips: ['Completo'], status: 'Aguardando arquivos', cor: 'laranja', marca: 'diagnostico', abreReforma: true },
  { data: '29/10/2023', hora: '15:18h', grupo: 'Dynamic Ventures', empresa: 'Dynamic Ventures International Holdings', cnpj: '11.222.333/0001-45', de: '03/2020', ate: '04/2025', tipo: 'Baixa de obrigações acessórias', chips: ['Receita BX', 'e-CAC', 'e-Social'], status: 'Processando...', cor: 'neutro', marca: 'baixa' },
  { data: '28/09/2023', hora: '18:03h', grupo: 'Creative', empresa: 'Creative Minds Digital Agency LLC', cnpj: '22.333.444/0001-67', de: '05/2020', ate: '06/2025', tipo: 'Baixa de obrigações acessórias', chips: ['e-Social'], status: 'Procuração inválida', cor: 'vermelho', marca: 'baixa' },
  { data: '27/08/2023', hora: '07:29h', grupo: 'Nextgen', empresa: 'Nextgen Innovations and Technology Corp.', cnpj: '33.444.555/0001-89', de: '07/2020', ate: '08/2025', tipo: 'Baixa de obrigações acessórias', chips: ['e-CAC', 'e-Social', 'Simples Nacional'], status: 'Falha no processamento', cor: 'vermelho', marca: 'baixa' },
  { data: '26/07/2023', hora: '22:14h', grupo: 'Pioneering', empresa: 'Pioneering Strategies Consulting Group', cnpj: '44.555.666/0001-12', de: '09/2020', ate: '10/2025', tipo: 'Baixa de obrigações acessórias', chips: ['Receita BX'], status: 'Concluído', cor: 'verde', marca: 'baixa' },
  { data: '25/06/2023', hora: '03:52h', grupo: 'Comprehensive', empresa: 'Comprehensive Solutions Enterprises Ltda', cnpj: '55.666.777/0001-34', de: '11/2020', ate: '12/2025', tipo: 'Baixa de obrigações acessórias', chips: ['Todas as baixas'], status: 'Concluído', cor: 'verde', marca: 'baixa' },
  { data: '24/05/2023', hora: '11:08h', grupo: 'VS Concepts', empresa: 'Visionary Concepts International Inc.', cnpj: '66.777.888/0001-56', de: '01/2020', ate: '02/2025', tipo: 'Diagnóstico tributário', chips: ['Completo'], status: 'Concluído', cor: 'verde', marca: 'diagnostico' },
  { data: '23/04/2023', hora: '20:35h', grupo: 'Leading Edge', empresa: 'Leading Edge Consulting Services SA', cnpj: '77.888.999/0001-78', de: '03/2020', ate: '04/2025', tipo: 'Diagnóstico tributário', chips: ['Completo'], status: 'Concluído', cor: 'verde', marca: 'diagnostico' },
  { data: '22/03/2023', hora: '14:58h', grupo: 'Grupo TRI', empresa: 'Transformative Ideas Digital Marketing', cnpj: '88.999.000/0001-90', de: '05/2020', ate: '06/2025', tipo: 'Diagnóstico tributário', chips: ['Previdenciário'], status: 'Concluído', cor: 'verde', marca: 'diagnostico' },
]

const NAV_PRINCIPAL: Array<{ label: string; target?: string; icon: IconDef }> = [
  { label: 'Início', target: 'inicio', icon: ICONE.home },
  { label: 'Projetos', target: 'projetos', icon: ICONE.layers },
  { label: 'Controle PERD/COMP', icon: ICONE.receiptLong },
  { label: 'Clientes', icon: ICONE.usuarios },
  { label: 'Configurações', icon: ICONE.config },
  { label: 'Faturamento', icon: ICONE.dinheiro },
  { label: 'Ajuda e treinamentos', icon: ICONE.ajuda },
]

const ACOES_RAPIDAS: Array<{ rotulo: string; target?: string; icon: IconDef }> = [
  { rotulo: 'Projetos', target: 'projetos', icon: ICONE.layers },
  { rotulo: 'Clientes', icon: ICONE.usuarios },
  { rotulo: 'Faturamento', icon: ICONE.dinheiro },
  { rotulo: 'Usuários', icon: ICONE.pessoas },
]

const WIZARD = [
  {
    titulo: 'Diagnóstico tributário',
    desc: 'Baixe automaticamente ou faça upload manual para processar, gerar relatórios e diagnósticos tributários voltados a recuperação de tributos.',
    icone: ICONE.monitorHeart,
  },
  {
    titulo: 'Baixa de XML de notas fiscais',
    desc: 'Baixa de notas fiscais sem certificado digital, apenas com a chave de acesso.',
    icone: ICONE.download,
  },
]

const KPIS = [
  { icone: ICONE.dinheiro, rotulo: 'Receita bruta', valor: 'R$ 846.760.091,44', pos: 'R$ 870.069.784,91', cor: A.green, seta: ICONE.setaCima, alerta: false },
  { icone: ICONE.menuCompras, rotulo: 'Compra bruta', valor: 'R$ 943.892.635,44', pos: 'R$ 967.862.374,39', cor: A.red, seta: ICONE.setaCima, alerta: true },
  { icone: ICONE.receitaFederal, rotulo: 'Tributos apurados', valor: 'R$ 18.904.695,63', pos: 'R$ 6.815.273,30', cor: A.green, seta: ICONE.setaBaixo, alerta: false },
  { icone: ICONE.porcentoKpi, rotulo: 'Carga tributária', valor: '2,23 %', pos: '0,78 %', cor: A.green, seta: ICONE.setaBaixo, alerta: false },
]

const TRIB_ATUAIS = [
  ['PIS', '- R$ 1.816.124,43', '0,18%'],
  ['COFINS', '- R$ 8.355.015,65', '0,18%'],
  ['IPI', 'R$ 1.589.222,81', '0,18%'],
] as const
const TRIB_NOVOS = [
  ['CBS', 'R$ 2.263.643,93'],
  ['IBS', 'R$ 4.551.629,38'],
  ['Imposto Seletivo', 'R$ 0,00'],
] as const
const TRIB_ESTADUAIS = [
  ['ICMS', 'R$ 27.487.402,94', '0,18%'],
  ['ISS', 'R$ 0,00', '0,18%'],
  ['ICMS - ST', 'R$ 0,00', '0,18%'],
] as const

const GRAFICOS = [
  {
    titulo: 'Impacto Tributário',
    unidade: 'Unidade: Milhão',
    escala: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
    barras: [
      { pct: 75, rotulo: '15' },
      { pct: 35, rotulo: '7' },
      { pct: 40, rotulo: '8' },
    ],
    tag: { texto: 'Mantendo o mesmo preço, o valor dos tributos diminuirão em 55,93%', cor: 'verde', seta: ICONE.tagSetaBaixo },
    largura: 'cheia',
  },
  {
    titulo: 'Impacto nos preços de venda',
    unidade: 'Unidade: Bilhão',
    escala: ['0', '0.2', '0.4', '0.6', '0.8', '1'],
    barras: [
      { pct: 84, rotulo: '0.84' },
      { pct: 87, rotulo: '0.87' },
      { pct: 2, rotulo: '0.02' },
    ],
    tag: { texto: 'Mantendo o mesmo preço, o valor das vendas subirão 2,68%.', cor: 'verde', seta: ICONE.tagSetaCima },
    largura: 'meia',
  },
  {
    titulo: 'Impacto nos preços de compra',
    unidade: 'Unidade: Bilhão',
    escala: ['0', '0.2', '0.4', '0.6', '0.8', '1'],
    barras: [
      { pct: 94, rotulo: '0.94' },
      { pct: 96, rotulo: '0.96' },
      { pct: 2, rotulo: '0.02' },
    ],
    tag: { texto: 'Mantendo o mesmo preço, o valor das vendas subirão 2,49%.', cor: 'vermelho', seta: ICONE.tagSetaCima },
    largura: 'meia',
  },
] as const

const BARRAS_CORES = [A.navy, A.cyanVivo, A.teal] as const
const LEGENDA = ['Atual', 'Reforma', 'Diferença'] as const

const MENU_REFORMA: Array<{ label: string; icon: IconDef }> = [
  { label: 'Visão Geral', icon: ICONE.menuDashboard },
  { label: 'Impacto Vendas', icon: ICONE.menuVendas },
  { label: 'Impacto Compras', icon: ICONE.menuCompras },
  { label: 'Outros Créditos/Débitos', icon: ICONE.menuOutros },
  { label: 'Transição', icon: ICONE.menuTransicao },
  { label: 'Apuração Assistida', icon: ICONE.checklist },
  { label: 'Memória de cálculo', icon: ICONE.menuMemoria },
]

// --- estilos base ---------------------------------------------------------

const chrome = css({
  borderRadius: '16px',
  border: '1px solid var(--line)',
  boxShadow: 'var(--card-shadow)',
  overflow: 'hidden',
  overflowX: 'auto',
  background: A.bg,
})

// O app é desenhado nos 1366px exatos do Figma e reduzido com zoom para
// caber na coluna do site sem quebrar as proporções.
const appBody = css({
  display: 'flex',
  alignItems: 'stretch',
  minWidth: '1366px',
  zoom: 0.84,
  color: A.text,
  fontSize: '14px',
  lineHeight: 1.5,
  textAlign: 'left',
})

const telaRaiz = css({ display: 'flex', width: '100%', background: A.bg })

// coluna de conteúdo: painel branco flutuando à direita do menu
const colConteudo = css({
  flex: 1,
  minWidth: 0,
  padding: '16px 16px 16px 0',
})

const painel = css({
  background: A.card,
  border: `1px solid ${A.line}`,
  borderRadius: '6px',
})

// conteúdo da tela com o degradê ciano no topo
const painelConteudo = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px',
})

const degradeTopo = css({
  position: 'absolute',
  top: '1px',
  left: '1px',
  right: '1px',
  height: '120px',
  borderRadius: '5px 5px 0 0',
  background: 'linear-gradient(180deg, rgba(234, 255, 255, 0.5), rgba(255, 255, 255, 0))',
  pointerEvents: 'none',
})

const h1 = css({ margin: 0, fontSize: '20px', lineHeight: '28px', fontWeight: 600, color: A.text })
const sub = css({ margin: 0, fontSize: '14px', color: A.muted })
const tituloPainel = css({ margin: 0, fontSize: '14px', fontWeight: 600, color: A.text })

const btnPrimario = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '9px 13px',
  borderRadius: '6px',
  border: `1px solid ${A.cyan}`,
  background: A.cyan,
  color: '#ffffff',
  font: 'inherit',
  fontWeight: 500,
  fontSize: '14px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  '&:hover': { filter: 'brightness(1.06)' },
  '&:focus-visible': { outline: `2px solid ${A.ink}`, outlineOffset: '2px' },
})

const btnContorno = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '9px 13px',
  borderRadius: '6px',
  border: `1px solid ${A.line}`,
  background: 'none',
  color: A.muted,
  font: 'inherit',
  fontWeight: 500,
  fontSize: '14px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  '&:hover': { background: A.bg },
})

const tag = (bg: string, cor: string) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3.5px 7px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    background: bg,
    color: cor,
  })

const tagStatus = (cor: Projeto['cor']) =>
  tag(
    cor === 'verde' ? A.greenBg : cor === 'laranja' ? A.orangeBg : cor === 'vermelho' ? A.redBg : A.cinza,
    cor === 'verde' ? A.green : cor === 'laranja' ? A.orange : cor === 'vermelho' ? A.red : A.slate,
  )

const badgeCirc = (bg: string) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '20px',
    height: '20px',
    padding: '0 5px',
    borderRadius: '10.5px',
    background: bg,
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 700,
  })

const inputFake = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10.5px',
  padding: '9px 13px',
  borderRadius: '6px',
  border: `1px solid ${A.lineForte}`,
  background: A.card,
  boxShadow: '0 1px 2px rgba(18, 18, 23, 0.05)',
  fontSize: '14px',
})

const num = css({ fontVariantNumeric: 'tabular-nums' })

// --- decorativos (SVGs do arquivo Figma) ----------------------------------

// padrão quadriculado dos cards de ações rápidas (176×100)
function QuadriculadoCard() {
  return (
    <svg
      viewBox="0 0 176 100"
      fill="none"
      aria-hidden="true"
      mix={css({ position: 'absolute', top: 0, right: 0, width: '176px', height: '100px' })}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.7714 24.375H49.6571V0H50.9143V24.375H74.8V0H101.2V24.375H125.086V0H126.343V24.375H150.229V0H151.486V24.375H176V50.625H151.486V74.375H176V75.625H151.486V100H150.229V75.625H126.343V100H125.086V75.625H101.2V100H99.9429V75.625H76.0571V100H74.8V75.625H50.9143V100H24.5143V75.625H0V74.375H24.5143V50.625H0V49.375H24.5143V25.625H0V0H25.7714V24.375ZM25.7714 74.375H49.6571V50.625H25.7714V74.375ZM50.9143 74.375H74.8V50.625H50.9143V74.375ZM76.0571 74.375H99.9429V50.625H76.0571V74.375ZM126.343 74.375H150.229V50.625H126.343V74.375ZM25.7714 49.375H49.6571V25.625H25.7714V49.375ZM50.9143 49.375H74.8V25.625H50.9143V49.375ZM76.0571 49.375H99.9429V25.625H76.0571V49.375ZM101.2 49.375H125.086V25.625H101.2V49.375ZM126.343 49.375H150.229V25.625H126.343V49.375Z"
        fill="url(#deg-quadriculado)"
        fill-opacity="0.8"
      />
      <defs>
        <radialGradient id="deg-quadriculado" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(176 0) rotate(163.697) scale(187.02 329.155)">
          <stop stop-color="#E2EDF0" />
          <stop offset="1" stop-color="white" />
        </radialGradient>
      </defs>
    </svg>
  )
}

// marca-d'água do card "Meus tokens" (hexágono 200×200, opacidade 5%)
function MarcaToken() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      mix={css({
        position: 'absolute',
        top: '50%',
        right: '-66px',
        width: '200px',
        height: '200px',
        transform: 'translateY(-50%) rotate(15deg)',
        pointerEvents: 'none',
      })}
    >
      <path
        opacity="0.05"
        fill="#ffffff"
        d="M100 177.083L30.4167 138.541L30.4167 61.4579L100 22.9163L169.583 61.4579V138.541L100 177.083ZM76.8751 83.7496C79.6528 80.1385 83.0556 77.2913 87.0834 75.208C91.1112 73.1246 95.4167 72.083 100 72.083C104.583 72.083 108.889 73.1246 112.917 75.208C116.945 77.2913 120.347 80.1385 123.125 83.7496L160.208 63.1246L100 29.5829L39.7917 63.1246L76.8751 83.7496ZM97.0834 168.75L97.0834 128.125C90.0001 127.014 84.0626 123.819 79.2709 118.541C74.4792 113.264 72.0834 107.083 72.0834 99.9996C72.0834 98.0552 72.257 96.2149 72.6042 94.4788C72.9514 92.7427 73.4723 90.9718 74.1667 89.1663L36.2501 67.9163L36.2501 135L97.0834 168.75ZM100 122.083C106.25 122.083 111.493 119.965 115.729 115.729C119.965 111.493 122.083 106.25 122.083 99.9996C122.083 93.7496 119.965 88.5066 115.729 84.2705C111.493 80.0343 106.25 77.9163 100 77.9163C93.7501 77.9163 88.507 80.0343 84.2709 84.2705C80.0348 88.5066 77.9167 93.7496 77.9167 99.9996C77.9167 106.25 80.0348 111.493 84.2709 115.729C88.507 119.965 93.7501 122.083 100 122.083ZM102.917 168.75L163.75 135V67.9163L125.833 89.1663C126.528 90.9718 127.049 92.7427 127.396 94.4788C127.743 96.2149 127.917 98.0552 127.917 99.9996C127.917 107.083 125.521 113.264 120.729 118.541C115.938 123.819 110 127.014 102.917 128.125L102.917 168.75Z"
      />
    </svg>
  )
}

// conectores do diagrama "Tributos atuais x Novos tributos" (ponto → seta,
// degradê #CADDE2 → #5BF2FF, exportados do Figma)
function ConexaoReta(id: string) {
  return (
    <svg viewBox="0 0 209.573 11.0459" fill="none" preserveAspectRatio="none" aria-hidden="true" mix={css({ position: 'absolute', left: 0, right: 0, width: '100%', height: '11px' })}>
      <path
        d="M0 5.52297C0 7.73211 1.79086 9.52297 4 9.52297C6.20914 9.52297 8 7.73211 8 5.52297C8 3.31383 6.20914 1.52297 4 1.52297C1.79086 1.52297 0 3.31383 0 5.52297ZM209.354 6.0533C209.647 5.76041 209.647 5.28553 209.354 4.99264L204.581 0.21967C204.288 -0.0732231 203.813 -0.0732231 203.52 0.21967C203.227 0.512564 203.227 0.987437 203.52 1.28033L207.763 5.52297L203.52 9.76561C203.227 10.0585 203.227 10.5334 203.52 10.8263C203.813 11.1192 204.288 11.1192 204.581 10.8263L209.354 6.0533ZM4 5.52297V6.27297H208.823V5.52297V4.77297H4V5.52297Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient id={id} x1="4" y1="6.02297" x2="208.823" y2="6.02297" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CADDE2" />
          <stop offset="1" stop-color="#5BF2FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ConexaoCurvaS() {
  return (
    <svg viewBox="0 0 209.402 179.523" fill="none" preserveAspectRatio="none" aria-hidden="true" mix={css({ position: 'absolute', left: 0, right: 0, width: '100%', height: '179px' })}>
      <path
        d="M0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4ZM209.182 174.53C209.475 174.237 209.475 173.763 209.182 173.47L204.41 168.697C204.117 168.404 203.642 168.404 203.349 168.697C203.056 168.99 203.056 169.464 203.349 169.757L207.591 174L203.349 178.243C203.056 178.536 203.056 179.01 203.349 179.303C203.642 179.596 204.117 179.596 204.41 179.303L209.182 174.53ZM4 4V4.75H96.3261V4V3.25H4V4ZM106.326 14H105.576V164H106.326H107.076V14H106.326ZM116.326 174V174.75H208.652V174V173.25H116.326V174ZM106.326 164H105.576C105.576 169.937 110.389 174.75 116.326 174.75V174V173.25C111.217 173.25 107.076 169.109 107.076 164H106.326ZM96.3261 4V4.75C101.435 4.75 105.576 8.89137 105.576 14H106.326H107.076C107.076 8.06294 102.263 3.25 96.3261 3.25V4Z"
        fill="url(#deg-conexao-s)"
      />
      <defs>
        <linearGradient id="deg-conexao-s" x1="4" y1="89" x2="208.652" y2="89" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CADDE2" />
          <stop offset="1" stop-color="#5BF2FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ConexaoCotovelo(id: string) {
  return (
    <svg viewBox="0 0 209.228 92.523" fill="none" preserveAspectRatio="none" aria-hidden="true" mix={css({ width: '100%', height: '100%' })}>
      <path
        d="M0 88.523C0 90.7321 1.79086 92.523 4 92.523C6.20914 92.523 8 90.7321 8 88.523C8 86.3138 6.20914 84.523 4 84.523C1.79086 84.523 0 86.3138 0 88.523ZM209.008 6.0533C209.301 5.76041 209.301 5.28553 209.008 4.99264L204.235 0.21967C203.943 -0.0732231 203.468 -0.0732231 203.175 0.21967C202.882 0.512564 202.882 0.987437 203.175 1.28033L207.417 5.52297L203.175 9.76561C202.882 10.0585 202.882 10.5334 203.175 10.8263C203.468 11.1192 203.943 11.1192 204.235 10.8263L209.008 6.0533ZM116.326 5.52297V6.27297H208.478V5.52297V4.77297H116.326V5.52297ZM4 88.523V89.273H96.3261V88.523V87.773H4V88.523ZM106.326 78.523H107.076V15.523H106.326H105.576V78.523H106.326ZM96.3261 88.523V89.273C102.263 89.273 107.076 84.46 107.076 78.523H106.326H105.576C105.576 83.6316 101.435 87.773 96.3261 87.773V88.523ZM116.326 5.52297V4.77297C110.389 4.77297 105.576 9.58591 105.576 15.523H106.326H107.076C107.076 10.4143 111.217 6.27297 116.326 6.27297V5.52297Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient id={id} x1="4" y1="47.023" x2="208.478" y2="47.023" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CADDE2" />
          <stop offset="1" stop-color="#5BF2FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// --- sidebar principal (Side Menu 78:8099) --------------------------------

// ponytail: logo em texto estilizado; trocar pelos letterforms do Figma se
// virarem asset no repo.
function Logo() {
  return (
    <p
      mix={css({
        margin: 0,
        padding: '16px 0',
        fontSize: '20px',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1,
        color: A.navy,
      })}
    >
      LaraTA<span mix={css({ color: A.cyanVivo })}>X</span>
    </p>
  )
}

function BuscaSidebar() {
  return (
    <div mix={css({ display: 'flex', alignItems: 'center', gap: '8.75px', width: '100%', padding: '7px 11px', borderRadius: '6px', border: `1px solid ${A.lineForte}`, background: A.card, boxShadow: '0 1px 2px rgba(18, 18, 23, 0.05)' })}>
      <span mix={css({ display: 'inline-flex', color: A.faint })}>{Icone(ICONE.busca, 14)}</span>
      <span mix={css({ flex: 1, fontSize: '14px', color: A.muted })}>Procurar</span>
      <span mix={css({ padding: '1px 4px', borderRadius: '4px', background: A.cinza, fontSize: '12px', fontWeight: 500, color: A.muted })}>CTRL + K</span>
    </div>
  )
}

function BotaoCriar() {
  return (
    <button
      type="button"
      data-app-nav=""
      data-target="novo"
      mix={css({
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        height: '40px',
        padding: '0 12px',
        borderRadius: '8px',
        border: `1px solid ${A.lineForte}`,
        background: `linear-gradient(90deg, #ffffff, ${A.cinza})`,
        font: 'inherit',
        fontWeight: 500,
        fontSize: '14px',
        color: A.slate,
        cursor: 'pointer',
        '&:hover': { filter: 'brightness(0.99)' },
        '&:focus-visible': { outline: `2px solid ${A.cyan}`, outlineOffset: '2px' },
      })}
    >
      <span mix={css({ display: 'grid', placeItems: 'center', width: '24px', height: '24px', borderRadius: '6px', background: A.cyanVivo, color: '#ffffff' })}>
        {Icone(ICONE.add, 16)}
      </span>
      Iniciar novo projeto
    </button>
  )
}

function CardTokens() {
  return (
    <div
      mix={css({
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        padding: '16px',
        borderRadius: '8px',
        background: `linear-gradient(227deg, ${A.ink}, ${A.navyEscuro})`,
      })}
    >
      {MarcaToken()}
      <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' })}>
        <strong mix={css({ color: '#ffffff', fontSize: '14px', fontWeight: 700 })}>Meus tokens</strong>
        <span mix={css({ color: A.cyanVivo, fontSize: '14px', fontWeight: 500, cursor: 'pointer' })}>Recarregar</span>
      </div>
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' })}>
        <p mix={[num, css({ margin: 0, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: A.faint })]}>
          <span mix={css({ display: 'inline-flex', color: '#ffffff' })}>{Icone(ICONE.token, 16)}</span>
          <strong mix={css({ color: '#f8fbfc' })}>640</strong> tokens de diagnóstico
        </p>
        <p mix={[num, css({ margin: 0, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: A.faint })]}>
          <span mix={css({ display: 'inline-flex', color: '#ffffff' })}>{Icone(ICONE.download, 16)}</span>
          <strong mix={css({ color: '#f8fbfc' })}>3.890</strong> tokens de baixa
        </p>
      </div>
    </div>
  )
}

function SidebarPrincipal(ativo: 'inicio' | 'projetos') {
  return (
    <aside
      mix={css({
        width: '290px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '20px 20px 24px',
        '@media (max-width: 1023px)': { display: 'none' },
      })}
    >
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
        {Logo()}
        {BuscaSidebar()}
      </div>
      <div mix={css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', minHeight: 0 })}>
        {BotaoCriar()}
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
          {NAV_PRINCIPAL.map((item) => {
            const estilo = css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              height: '44px',
              padding: '0 12px',
              borderRadius: '8px',
              border: '1px solid transparent',
              background: 'none',
              font: 'inherit',
              fontWeight: 500,
              fontSize: '14px',
              color: A.text,
              textAlign: 'left',
              filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05))',
              '& svg': { flexShrink: 0, color: A.slate },
            })
            const estiloLink = css({
              cursor: 'pointer',
              transition: 'background 140ms ease, border-color 140ms ease',
              '&:hover': { background: A.bg, borderColor: A.line },
              '&[data-on="true"]': { background: A.bg, borderColor: A.line },
              '&:focus-visible': { outline: `2px solid ${A.cyan}`, outlineOffset: '2px' },
            })
            return item.target ? (
              <button
                type="button"
                data-app-nav=""
                data-target={item.target}
                data-on={item.target === ativo ? 'true' : 'false'}
                mix={[estilo, estiloLink]}
              >
                {Icone(item.icon, 24)}
                {item.label}
              </button>
            ) : (
              <span mix={estilo}>
                {Icone(item.icon, 24)}
                {item.label}
              </span>
            )
          })}
        </div>
      </div>
      {CardTokens()}
      <div mix={css({ height: '1px', background: A.line })} />
      <button
        type="button"
        mix={css({ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', border: 'none', background: 'none', font: 'inherit', textAlign: 'left', cursor: 'pointer', padding: 0 })}
      >
        {Avatar('Nome Sobrenome')}
        <span mix={css({ flex: 1, minWidth: 0 })}>
          <strong mix={css({ display: 'block', fontSize: '14px', fontWeight: 700, color: A.text, lineHeight: 1.1 })}>Nome Sobrenome</strong>
          <span mix={css({ display: 'block', fontSize: '14px', color: A.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
            nome.sobrenome@email.com
          </span>
        </span>
        <span mix={css({ display: 'inline-flex', color: A.muted, flexShrink: 0 })}>{Icone(ICONE.chevronDir, 16)}</span>
      </button>
    </aside>
  )
}

// --- linha de projeto (project-item 78:10528) -----------------------------

function LinhaProjeto(p: Projeto) {
  const conteudo = (
    <>
      <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: '80px', maxWidth: '146px', alignSelf: 'stretch', flexShrink: 0 })}>
        <span mix={css({ fontSize: '14px', fontWeight: 500, lineHeight: 1 })}>Solicitado</span>
        <span mix={[num, css({ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', lineHeight: 1, whiteSpace: 'nowrap' })]}>
          {p.data}
          <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '2px', color: A.muted })}>
            {Icone(ICONE.relogio, 12)}
            {p.hora}
          </span>
        </span>
      </div>
      <div mix={css({ flex: 1, minWidth: '141px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' })}>
        <span mix={tag(A.cinza, A.slate)}>
          {Icone(ICONE.grupo, 10.5)}
          {p.grupo}
        </span>
        <span mix={css({ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', minWidth: 0, lineHeight: 1 })}>
          <span mix={css({ fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
            {p.empresa}
          </span>
          <span mix={[num, css({ fontSize: '14px', color: A.muted, whiteSpace: 'nowrap' })]}>{p.cnpj}</span>
        </span>
      </div>
      <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '85px', alignSelf: 'stretch', flexShrink: 0, lineHeight: 1, '@media (max-width: 1279px)': { display: 'none' } })}>
        {p.de ? (
          <>
            <span mix={css({ fontSize: '14px', fontWeight: 500 })}>Período</span>
            <span mix={[num, css({ fontSize: '14px' })]}>
              De {p.de}
              <br />
              Até {p.ate}
            </span>
          </>
        ) : null}
      </div>
      <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', width: '210px', minWidth: '144px', height: '64px', flexShrink: 0 })}>
        <span mix={css({ fontSize: '14px', lineHeight: 1 })}>{p.tipo}</span>
        <span mix={css({ display: 'flex', flexWrap: 'wrap', gap: '4px' })}>
          {p.chips.map((c) => (
            <span mix={tag(A.cinza, A.slate)}>{c}</span>
          ))}
        </span>
      </div>
      <div mix={css({ display: 'flex', alignItems: 'center', flexShrink: 0 })}>{Avatar(p.grupo)}</div>
      <div mix={css({ flex: '1 0 0', minWidth: '150px', maxWidth: '182px', display: 'flex', alignItems: 'center' })}>
        <span mix={tagStatus(p.cor)}>{p.status}</span>
      </div>
      <span
        mix={css({
          display: 'grid',
          placeItems: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '999px',
          border: `1px solid ${A.line}`,
          color: A.muted,
          flexShrink: 0,
        })}
      >
        {Icone(ICONE.maisVert, 14)}
      </span>
    </>
  )
  const base = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
    padding: '16px 16px 16px 56px',
    font: 'inherit',
    textAlign: 'left',
    color: A.text,
  })
  const marca = (
    <span
      mix={css({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '56px',
        borderRadius: '5px 0 0 5px',
        background: `linear-gradient(90deg, ${A.cyanSoft}, rgba(255, 255, 255, 0))`,
        display: 'grid',
        placeItems: 'center',
        color: A.cyan,
      })}
    >
      {Icone(p.marca === 'diagnostico' ? ICONE.monitorHeart : ICONE.baixando, 20)}
    </span>
  )
  return p.abreReforma ? (
    <button
      type="button"
      data-app-nav=""
      data-target="reforma"
      mix={[painel, base, css({ cursor: 'pointer', '&:hover': { borderColor: A.cyan } })]}
    >
      {marca}
      {conteudo}
    </button>
  ) : (
    <div mix={[painel, base]}>
      {marca}
      {conteudo}
    </div>
  )
}

// --- telas ----------------------------------------------------------------

function TelaInicio() {
  return (
    <div data-app-screen="inicio" data-on="true" mix={telaRaiz}>
      {SidebarPrincipal('inicio')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px' })}>
            <div mix={css({ flex: 1, minWidth: 0 })}>
              <h3 mix={h1}>Visão geral</h3>
              <p mix={sub}>Bem vindo, Fulano!</p>
            </div>
            <button type="button" data-app-nav="" data-target="novo" mix={btnPrimario}>
              <span mix={css({ display: 'inline-flex' })}>{Icone(ICONE.add, 14)}</span>
              Iniciar projeto
            </button>
          </div>

          <div mix={css({ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' })}>
            <p mix={tituloPainel}>Ações rápidas</p>
            <div mix={css({ display: 'flex', gap: '16px', '@media (max-width: 1279px)': { flexWrap: 'wrap' } })}>
              {ACOES_RAPIDAS.map((acao) => {
                const cardCss = css({
                  position: 'relative',
                  overflow: 'hidden',
                  flex: 1,
                  minWidth: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '32px',
                  font: 'inherit',
                  textAlign: 'left',
                  color: A.text,
                })
                const miolo = (
                  <>
                    {QuadriculadoCard()}
                    <span mix={css({ position: 'relative', display: 'inline-flex', color: A.slate })}>{Icone(acao.icon, 32)}</span>
                    <span mix={css({ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' })}>
                      <strong mix={css({ fontSize: '16px', fontWeight: 500, lineHeight: 1 })}>{acao.rotulo}</strong>
                      <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: A.cyan })}>
                        Ver página {Icone(ICONE.chevronDir, 14)}
                      </span>
                    </span>
                  </>
                )
                return acao.target ? (
                  <button type="button" data-app-nav="" data-target={acao.target} mix={[painel, cardCss, css({ cursor: 'pointer', '&:hover': { borderColor: A.cyan } })]}>
                    {miolo}
                  </button>
                ) : (
                  <div mix={[painel, cardCss]}>{miolo}</div>
                )
              })}
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative' })]}>
            <div mix={css({ padding: '18px' })}>
              <p mix={tituloPainel}>Últimos projetos executados</p>
            </div>
            <div mix={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '0 15.75px 15.75px' })}>
              {PROJETOS.slice(0, 5).map((p) => LinhaProjeto(p))}
              <button type="button" data-app-nav="" data-target="projetos" mix={btnContorno}>
                Ver todos os projetos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaProjetos() {
  return (
    <div data-app-screen="projetos" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('projetos')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px' })}>
            <div mix={css({ flex: 1, minWidth: 0 })}>
              <h3 mix={h1}>Projetos</h3>
              <p mix={sub}>Acompanhe e organize todos os projetos em um só lugar.</p>
            </div>
            <button type="button" data-app-nav="" data-target="novo" mix={btnPrimario}>
              <span mix={css({ display: 'inline-flex' })}>{Icone(ICONE.add, 14)}</span>
              Iniciar projeto
            </button>
          </div>

          <div mix={css({ position: 'relative', display: 'flex', borderBottom: `1px solid ${A.line}` })}>
            {(
              [
                ['Todos os projetos', null, true],
                ['Pendências', ['3', A.laranja], false],
                ['Processando', null, false],
                ['Concluídos', null, false],
                ['Recorrentes', ['36', A.cyan], false],
              ] as const
            ).map(([rotulo, badge, ativo]) => (
              <span
                mix={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 15.75px 15px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: ativo ? A.text : A.muted,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                })}
              >
                {rotulo}
                {badge ? <span mix={badgeCirc(badge[1])}>{badge[0]}</span> : null}
              </span>
            ))}
          </div>

          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={[inputFake, css({ width: '256px' })]}>
              <span mix={css({ display: 'inline-flex', color: A.faint })}>{Icone(ICONE.busca, 14)}</span>
              <span mix={css({ color: A.muted })}>Buscar projeto...</span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px' })}>
              <div mix={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <span mix={css({ fontSize: '14px', whiteSpace: 'nowrap' })}>Ordenar por:</span>
                <div mix={[inputFake, css({ width: '181px', padding: '0 0 0 12px', height: '35px', justifyContent: 'space-between', gap: 0 })]}>
                  Data de solicitação
                  <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', alignSelf: 'stretch', color: A.faint })}>
                    {Icone(ICONE.chevronBaixo, 14)}
                  </span>
                </div>
              </div>
              <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <button type="button" mix={[btnContorno, css({ width: '40px', height: '35px', padding: 0, justifyContent: 'center' })]}>
                  {Icone(ICONE.sync, 14)}
                </button>
                <button type="button" mix={btnContorno}>
                  {Icone(ICONE.filtro, 14)}
                  Filtrar projetos
                </button>
              </div>
            </div>
          </div>

          <div mix={css({ position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px' })}>
            {PROJETOS.map((p) => LinhaProjeto(p))}
          </div>

          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' })}>
            {(['«', '‹', '1', '2', '3', '4', '5', '›', '»'] as const).map((rotulo) => (
              <span
                mix={css({
                  display: 'grid',
                  placeItems: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  color: rotulo === '1' ? A.text : A.muted,
                  background: rotulo === '1' ? A.cinza : 'transparent',
                  fontWeight: rotulo === '1' ? 700 : 400,
                  cursor: 'pointer',
                })}
              >
                {rotulo}
              </span>
            ))}
            <div mix={[inputFake, css({ height: '35px', padding: '0 0 0 12px', gap: 0, marginLeft: '8px' })]}>
              10
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', alignSelf: 'stretch', color: A.faint })}>
                {Icone(ICONE.chevronBaixo, 14)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaNovoProjeto() {
  return (
    <div data-app-screen="novo" data-on="false" mix={[telaRaiz, css({ justifyContent: 'center' })]}>
      <div mix={css({ width: '100%', maxWidth: '745px', display: 'flex', flexDirection: 'column', gap: '48px', padding: '56px 24px 48px' })}>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
          <h3 mix={css({ margin: 0, fontSize: '24px', fontWeight: 700, color: A.text })}>Selecione o tipo de projeto</h3>
          <p mix={css({ margin: 0, fontSize: '16px', color: A.muted })}>Selecione o objetivo do projeto que deseja executar</p>
        </div>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
          {WIZARD.map((w) => (
            <label
              mix={css({
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px',
                borderRadius: '8px',
                border: `1px solid ${A.lineForte}`,
                background: A.card,
                cursor: 'pointer',
                transition: 'border-color 140ms ease',
                '&:hover': { borderColor: A.cyan },
                '&:has(input:checked)': { borderColor: A.cyan, boxShadow: '0 0 0 1px rgba(0, 196, 229, 0.35)' },
              })}
            >
              <span
                mix={css({
                  display: 'grid',
                  placeItems: 'center',
                  width: '56px',
                  height: '56px',
                  flexShrink: 0,
                  borderRadius: '8px',
                  border: `1px solid ${A.lineForte}`,
                  color: A.cyan,
                })}
              >
                {Icone(w.icone, 24)}
              </span>
              <span mix={css({ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' })}>
                <strong mix={css({ fontSize: '16px', fontWeight: 500, color: A.text })}>{w.titulo}</strong>
                <span mix={css({ fontSize: '14px', color: A.muted })}>{w.desc}</span>
              </span>
              <input
                type="radio"
                name="tipo-projeto-demo"
                mix={css({ accentColor: A.cyan, width: '20px', height: '20px', flexShrink: 0 })}
              />
            </label>
          ))}
        </div>
        <div mix={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '48px' })}>
          <button type="button" data-app-nav="" data-target="inicio" mix={[btnContorno, css({ background: A.card, color: A.slate, borderColor: A.cinza })]}>
            Sair da criação
            {Icone(ICONE.fechar, 14)}
          </button>
          <button type="button" data-app-nav="" data-target="projetos" mix={[btnPrimario, css({ opacity: 0.7 })]}>
            Avançar
            {Icone(ICONE.chevronDir, 14)}
          </button>
        </div>
      </div>
    </div>
  )
}

// --- Reforma: rail colapsado + menu analytics + dashboard -----------------

function SidebarRail() {
  const quadrado = css({
    display: 'grid',
    placeItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid transparent',
    background: 'none',
    color: A.slate,
    font: 'inherit',
    cursor: 'pointer',
    '&:hover': { background: A.bg, borderColor: A.line },
    '&[data-on="true"]': { background: A.bg, borderColor: A.line },
    '&:focus-visible': { outline: `2px solid ${A.cyan}`, outlineOffset: '2px' },
  })
  return (
    <aside
      mix={css({
        width: '84px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '20px 0 24px',
        position: 'sticky',
        top: 0,
        alignSelf: 'flex-start',
        height: '768px',
        '@media (max-width: 1023px)': { display: 'none' },
      })}
    >
      <p mix={css({ margin: '0 0 4px', fontSize: '22px', fontWeight: 800, color: A.navy })}>
        <span mix={css({ color: A.cyanVivo })}>X</span>
      </p>
      <span mix={[quadrado, css({ width: '32px', height: '32px', border: `1px solid ${A.lineForte}`, color: A.faint })]}>
        {Icone(ICONE.busca, 14)}
      </span>
      <button
        type="button"
        data-app-nav=""
        data-target="novo"
        mix={[quadrado, css({ width: '32px', height: '32px', background: A.cyanVivo, color: '#ffffff', '&:hover': { background: A.cyanVivo, filter: 'brightness(1.05)' } })]}
      >
        {Icone(ICONE.add, 16)}
      </button>
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' })}>
        <button type="button" data-app-nav="" data-target="inicio" mix={quadrado}>
          {Icone(ICONE.home, 24)}
        </button>
        <button type="button" data-app-nav="" data-target="projetos" data-on="true" mix={quadrado}>
          {Icone(ICONE.layers, 24)}
        </button>
        <span mix={quadrado}>{Icone(ICONE.receiptLong, 24)}</span>
        <span mix={quadrado}>{Icone(ICONE.usuarios, 24)}</span>
        <span mix={quadrado}>{Icone(ICONE.config, 24)}</span>
        <span mix={quadrado}>{Icone(ICONE.dinheiro, 24)}</span>
        <span mix={quadrado}>{Icone(ICONE.ajuda, 24)}</span>
      </div>
      <div mix={css({ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' })}>
        <span mix={css({ display: 'inline-flex', color: A.slate })}>{Icone(ICONE.token, 24)}</span>
        {Avatar('Nome Sobrenome')}
      </div>
    </aside>
  )
}

function MenuReforma() {
  return (
    <aside
      mix={css({
        width: '160px',
        flexShrink: 0,
        padding: '16px 12px',
        position: 'sticky',
        top: 0,
        alignSelf: 'flex-start',
        height: '768px',
        '@media (max-width: 1023px)': { display: 'none' },
      })}
    >
      <div
        mix={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          height: '100%',
          padding: '0 12px',
          borderRadius: '12px',
          background: `linear-gradient(186deg, ${A.ink}, ${A.navy})`,
        })}
      >
        <p mix={css({ margin: 0, width: '100%', textAlign: 'center', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', color: A.faint })}>
          Reforma Tributária
        </p>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' })}>
          {MENU_REFORMA.map((item, i) => (
            <span
              mix={css({
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: 1.25,
                color: i === 0 ? A.cyanVivo : A.lineForte,
                background: i === 0 ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                cursor: 'pointer',
              })}
            >
              {Icone(item.icon, 20)}
              {item.label}
              {i === 0 ? (
                <span mix={css({ position: 'absolute', right: '-14px', top: '50%', transform: 'translateY(-50%)', width: '4px', height: '32px', borderRadius: '99px', background: A.cyanVivo })} />
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}

function RadioFake(rotulo: string, marcado: boolean) {
  return (
    <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '14px', cursor: 'pointer' })}>
      <span
        mix={css({
          display: 'grid',
          placeItems: 'center',
          width: '20px',
          height: '20px',
          borderRadius: '999px',
          border: `1px solid ${marcado ? A.cyan : A.lineForte}`,
          background: marcado ? A.cyan : A.card,
        })}
      >
        {marcado ? <span mix={css({ width: '12px', height: '12px', borderRadius: '999px', background: '#ffffff' })} /> : null}
      </span>
      {rotulo}
    </span>
  )
}

function CampoAliquota(rotulo: string) {
  return (
    <div mix={css({ display: 'flex', flexDirection: 'column', gap: '7px', width: '155px' })}>
      <span mix={css({ fontSize: '14px' })}>{rotulo}</span>
      <div mix={[inputFake, css({ justifyContent: 'space-between', height: '35px' })]}>
        <span mix={css({ color: A.muted })}>0,00</span>
        <span mix={css({ display: 'inline-flex', color: A.faint })}>{Icone(ICONE.porcentoInput, 14)}</span>
      </div>
    </div>
  )
}

function KpiCard(k: (typeof KPIS)[number]) {
  return (
    <div mix={css({ position: 'relative', flex: 1, minWidth: '180px', display: 'flex', flexDirection: 'column' })}>
      <div mix={[painel, css({ borderRadius: '6px 6px 0 0', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px 20px 32px' })]}>
        <div mix={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
          <span mix={css({ display: 'inline-flex', color: A.cyan, flex: 1 })}>{Icone(k.icone, 24)}</span>
          {k.alerta ? <span mix={css({ display: 'inline-flex', color: A.laranja })}>{Icone(ICONE.alertaLaranja, 24)}</span> : null}
        </div>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
          <span mix={css({ fontSize: '14px', fontWeight: 500, color: A.muted, lineHeight: 1 })}>{k.rotulo}</span>
          <strong mix={[num, css({ fontSize: '16px', fontWeight: 700, textAlign: 'center', lineHeight: 1 })]}>{k.valor}</strong>
        </div>
      </div>
      <div mix={css({ position: 'relative', border: `1px solid ${A.line}`, borderTop: 'none', borderRadius: '0 0 6px 6px', padding: '32px 20px 24px' })}>
        <span
          mix={css({
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'grid',
            placeItems: 'center',
            padding: '8px',
            borderRadius: '99px',
            background: A.card,
            border: `1px solid ${A.line}`,
            color: A.text,
          })}
        >
          {Icone(ICONE.expandir, 24)}
        </span>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
          <span mix={css({ fontSize: '12px', color: A.muted, lineHeight: 1 })}>Pós reforma</span>
          <span mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' })}>
            <strong mix={[num, css({ fontSize: '16px', fontWeight: 700, lineHeight: 1, whiteSpace: 'nowrap' })]} style={{ color: k.cor }}>
              {k.pos}
            </strong>
            <span mix={css({ display: 'inline-flex' })} style={{ color: k.cor }}>
              {Icone(k.seta, 16)}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

function CardTributo(nome: string, valor: string, pct?: string, destaque?: boolean) {
  return (
    <div mix={[painel, css({ width: '200px', padding: '15.75px', display: 'flex', flexDirection: 'column', gap: '8px' })]}>
      <span mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', lineHeight: 1 })}>
        <span mix={css({ fontSize: '14px', fontWeight: 500, color: destaque ? A.cyan : A.muted })}>{nome}</span>
        {pct ? <span mix={css({ fontSize: '12px', color: A.muted })}>{pct}</span> : null}
      </span>
      <strong mix={[num, css({ fontSize: '16px', fontWeight: 700, textAlign: 'center', lineHeight: 1 })]}>{valor}</strong>
    </div>
  )
}

function GraficoBarras(g: (typeof GRAFICOS)[number]) {
  return (
    <div mix={[painel, css({ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' })]}>
      <div mix={css({ padding: '18px' })}>
        <p mix={[tituloPainel, css({ textAlign: 'center' })]}>{g.titulo}</p>
      </div>
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 15.75px 15.75px' })}>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 16px 0 0' })}>
          <div mix={css({ position: 'relative', display: 'flex', justifyContent: 'space-between', paddingLeft: '58px', fontSize: '12px', color: 'rgba(0, 0, 26, 0.7)' })}>
            {g.escala.map((n) => (
              <span mix={css({ width: '16px', textAlign: 'center' })}>{n}</span>
            ))}
            <span mix={css({ position: 'absolute', right: 0, top: '-14px', fontSize: '12px' })}>{g.unidade}</span>
          </div>
          <div mix={css({ display: 'flex', alignItems: 'stretch', gap: '2px' })}>
            <span mix={css({ display: 'flex', alignItems: 'center', fontSize: '12px', color: 'rgba(0, 0, 26, 0.7)', padding: '0 2px' })}>Compras</span>
            <div mix={css({ position: 'relative', flex: 1, height: '170px', borderBottom: '1px solid rgba(0, 0, 26, 0.3)' })}>
              <div mix={css({ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between' })}>
                {g.escala.map(() => (
                  <span mix={css({ width: '1px', height: '100%', background: `repeating-linear-gradient(180deg, ${A.line} 0 4px, transparent 4px 8px)` })} />
                ))}
              </div>
              <div mix={css({ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2px', padding: '28px 0' })}>
                {g.barras.map((b, i) => (
                  <div mix={css({ position: 'relative', flex: 1, minHeight: 0 })}>
                    <div
                      mix={css({ position: 'absolute', top: 0, bottom: 0, left: 0, opacity: 0.8 })}
                      style={{ width: `${b.pct}%`, backgroundColor: BARRAS_CORES[i] }}
                    />
                    <span
                      mix={[num, css({ position: 'absolute', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', color: 'rgba(0, 0, 26, 0.7)' })]}
                      style={{ left: `calc(${b.pct}% + 4px)` }}
                    >
                      {b.rotulo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div mix={css({ display: 'flex', justifyContent: 'center', gap: '8px', padding: '0 8px' })}>
            {LEGENDA.map((rotulo, i) => (
              <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px', fontSize: '12px', color: 'rgba(0, 0, 26, 0.7)' })}>
                <span mix={css({ width: '12px', height: '12px', border: '1px solid #ffffff' })} style={{ backgroundColor: BARRAS_CORES[i] }} />
                {rotulo}
              </span>
            ))}
          </div>
        </div>
        <span mix={[tag(g.tag.cor === 'verde' ? A.greenBg : A.redBg, g.tag.cor === 'verde' ? A.green : A.red), css({ width: '100%' })]}>
          {Icone(g.tag.seta, 10.5)}
          {g.tag.texto}
        </span>
      </div>
    </div>
  )
}

function TelaReforma() {
  return (
    <div data-app-screen="reforma" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuReforma()}
      <div mix={[colConteudo, css({ paddingLeft: '16px' })]}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Visão geral da Reforma Tributária</h3>
              <p mix={sub}>Impactos gerais da reforma na empresa</p>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>Global Synergy Technologies and Services Inc.</strong>
                <span mix={sub}>Período disponível: 01/2024 à 12/2025</span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>
          <div mix={css({ position: 'relative', height: '1px', background: A.line })} />

          <div mix={[painel, css({ position: 'relative' })]}>
            <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5.25px 15.75px' })}>
              <p mix={tituloPainel}>Configuração de simulação IVA Dual + IS</p>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '32px', color: A.muted, cursor: 'pointer' })}>
                {Icone(ICONE.menos, 14)}
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', padding: '0 15.75px 15.75px' })}>
              <div mix={css({ display: 'flex', flexDirection: 'column', gap: '7px' })}>
                <span mix={css({ fontSize: '14px' })}>Método de apuração</span>
                <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px', height: '35px' })}>
                  {RadioFake('Via SPED', true)}
                  {RadioFake('Via notas fiscais', false)}
                </div>
              </div>
              {CampoAliquota('Alíquota IS')}
              {CampoAliquota('Alíquota IBS')}
              {CampoAliquota('Alíquota CBS')}
              <button type="button" mix={[btnPrimario, css({ marginLeft: 'auto' })]}>
                Aplicar simulação
              </button>
            </div>
          </div>

          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' })}>
            <button type="button" mix={btnContorno}>
              {Icone(ICONE.filtro, 14)}
              Filtrar dados
              <span mix={badgeCirc(A.laranja)}>3</span>
            </button>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px' })}>
              <div mix={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <span mix={css({ fontSize: '14px' })}>Período:</span>
                <div mix={css({ display: 'flex' })}>
                  <div mix={[inputFake, css({ width: '168px', height: '35px', padding: '0 0 0 12px', justifyContent: 'space-between', gap: 0, borderRadius: '6px 0 0 6px' })]}>
                    Último mês
                    <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', alignSelf: 'stretch', color: A.faint })}>
                      {Icone(ICONE.chevronBaixo, 14)}
                    </span>
                  </div>
                  <div mix={[inputFake, num, css({ width: '176px', height: '35px', borderRadius: '0 6px 6px 0', borderLeft: 'none' })]}>
                    Jan/2026 - Jan/2026
                  </div>
                </div>
              </div>
              <button type="button" mix={btnContorno}>
                {Icone(ICONE.exportar, 14)}
                Exportar
              </button>
            </div>
          </div>

          <div mix={css({ position: 'relative', display: 'flex', gap: '16px', '@media (max-width: 1279px)': { flexWrap: 'wrap' } })}>
            {KPIS.map((k) => KpiCard(k))}
          </div>

          <div mix={css({ position: 'relative', borderRadius: '6px', border: `1px solid ${A.amareloBorda}`, boxShadow: '0 4px 8px rgba(9, 7, 0, 0.04)' })}>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10.5px', borderRadius: '5px', background: A.amareloBg })}>
              <span mix={css({ display: 'inline-flex', color: A.amarelo, flexShrink: 0 })}>{Icone(ICONE.alertaBanner, 18)}</span>
              <span mix={css({ flex: 1, fontSize: '16px', fontWeight: 500, color: A.amarelo })}>
                Identificamos uma divergência entre as notas escrituradas no SPED e as enviadas manualmente para análise do diagnóstico via notas fiscais.
                Podemos baixar automaticamente as notas fiscais que faltam.
              </span>
              <button type="button" mix={[btnPrimario, css({ background: A.laranja, borderColor: A.laranja })]}>
                Baixar notas faltantes
              </button>
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative' })]}>
            <div mix={css({ padding: '18px' })}>
              <p mix={[tituloPainel, css({ textAlign: 'center' })]}>Tributos atuais x Novos tributos</p>
            </div>
            <div mix={css({ padding: '0 15.75px 15.75px' })}>
              <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
                <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
                  {TRIB_ATUAIS.map(([nome, valor, pct]) => CardTributo(nome, valor, pct))}
                </div>
                <div mix={css({ position: 'relative', flex: 1, maxWidth: '205px', minWidth: '90px', alignSelf: 'stretch', '@media (max-width: 1140px)': { display: 'none' } })}>
                  <span mix={css({ position: 'absolute', left: 0, right: 0, top: 'calc(50% - 91px)' })}>{ConexaoReta('deg-conexao-e1')}</span>
                  <span mix={css({ position: 'absolute', left: 0, right: 0, top: 'calc(50% - 5px)' })}>{ConexaoReta('deg-conexao-e2')}</span>
                  <span mix={css({ position: 'absolute', left: 0, right: 0, top: 'calc(50% - 89px)' })}>{ConexaoCurvaS()}</span>
                </div>
                <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
                  {TRIB_NOVOS.map(([nome, valor]) => CardTributo(nome, valor, undefined, true))}
                </div>
                <div mix={css({ position: 'relative', flex: 1, maxWidth: '205px', minWidth: '90px', alignSelf: 'stretch', '@media (max-width: 1140px)': { display: 'none' } })}>
                  <span mix={css({ position: 'absolute', left: 0, right: 0, top: 'calc(50% - 91px)', height: '92px', transform: 'scaleX(-1)' })}>
                    {ConexaoCotovelo('deg-conexao-d1')}
                  </span>
                  <span mix={css({ position: 'absolute', left: 0, right: 0, top: 'calc(50% - 1px)', height: '92px', transform: 'scale(-1, -1)' })}>
                    {ConexaoCotovelo('deg-conexao-d2')}
                  </span>
                </div>
                <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
                  {TRIB_ESTADUAIS.map(([nome, valor, pct]) => CardTributo(nome, valor, pct))}
                </div>
              </div>
            </div>
          </div>

          <div mix={css({ position: 'relative', display: 'flex' })}>{GraficoBarras(GRAFICOS[0])}</div>
          <div mix={css({ position: 'relative', display: 'flex', gap: '24px', '@media (max-width: 1140px)': { flexWrap: 'wrap' } })}>
            {GraficoBarras(GRAFICOS[1])}
            {GraficoBarras(GRAFICOS[2])}
          </div>
        </div>
      </div>
    </div>
  )
}

// --- componente -----------------------------------------------------------

export function PlataformaApp() {
  return () => (
    <div data-app-demo="" data-reveal="">
      <style>{`
        [data-app-screen] { display: none; }
        [data-app-screen][data-on='true'] { display: flex; animation: app-screen-in 0.25s ease; }
        @keyframes app-screen-in { from { opacity: 0; transform: translateY(6px); } }
        @media (prefers-reduced-motion: reduce) {
          [data-app-screen][data-on='true'] { animation: none; }
        }
      `}</style>

      <p mix={css({ margin: '40px 0 12px', fontFamily: FONT_MONO, fontSize: '11px', letterSpacing: '0.06em', color: 'var(--muted)' })}>
        Demonstração interativa · dados fictícios
      </p>

      <div mix={chrome}>
        <div mix={appBody}>
          {TelaInicio()}
          {TelaProjetos()}
          {TelaNovoProjeto()}
          {TelaReforma()}
        </div>
      </div>
    </div>
  )
}
