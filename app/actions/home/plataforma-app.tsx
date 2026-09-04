import { css } from 'remix/ui'

import { FONT_MONO } from '../../ui/tokens.ts'


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
  editar: { box: 24, w: 24, h: 24, d: ['M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z'] },
  historico: { box: 24, w: 24, h: 24, d: ['M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6a7 7 0 1 1 7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18Zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12Z'] },
  copiar: { box: 24, w: 24, h: 24, d: ['M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 16H8V7h11v14Z'] },
  lixeira: { box: 24, w: 24, h: 24, d: ['M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z'] },
  play: { box: 24, w: 24, h:24, d: ['M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 14.5v-9l6 4.5-6 4.5Z'] },
  caixaAberta: { box: 24, w: 24, h:24, d: ['M20 2H4c-1.1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2Zm-5 12H9v-2h6v2Zm5-7H4V4h16v3Z'] },
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
  // pares campo→valor copiados para o overlay de detalhe no clique (data-detalhe/data-campo)
  detalhe: Record<string, string>
}

// --- dados procedurais: seed fixa = mesmo universo em todo build -----------
// funções geradoras/agregadoras vivem no fim do arquivo (hoisting cobre)

const EMPRESAS = geraEmpresas(120)
const CLIENTES_EMPRESAS = EMPRESAS.slice(0, 10)
// rótulos truncados como no app real; os valores por empresa saem de geraDiag
const DARF_ROTULOS = [
  'ÇÕES MERC APREENDIDAS', 'EV DESCONTA SEGURADO-', 'MULTAS - REC PRÓPRIOS', 'EDUCAÇÃO- DEP JUDICIAL',
  'P IMPORTACAO - OUTROS', 'COFINS - IMPORTAÇÃO', 'ESI - DEPÓSITO JUDICIAL', 'IRRF - APLICAÇÕES',
  'ENTAL/APOSENT ESPECIAL', 'VINCULADO IMPORTACAO', 'OBR LUC REAL-BAL TRIM', 'OS - SALÁRIO EDUCAÇÃO',
  'UIÇÃO TERCEIROS - SESI', 'CSLL - DEMAIS BAL TRIM', 'CRA - DEPÓSITO JUDICIAL', 'A PARTE DO AFRMM (FMM)',
  'SERV PRESTADOS POR PJ', 'TENÇÃO PREVIDENCIÁRIA',
]
const DIAGS = CLIENTES_EMPRESAS.map((e, i) => geraDiag(e, i))
const PROJETOS: Projeto[] = geraProjetos(10)

const UF_EMPRESAS = contagem((e) => e.uf)
const CNAE_SEGMENTOS = fatiasPizza(contagem((e) => e.segmento))
const REGIME_TRIBUTARIO = fatiasPizza(contagem((e) => e.regime))
const PROCESSOS_PARCEIRO = somaProcessosPorParceiro()
const TOTAL_PROCESSOS = PROCESSOS_PARCEIRO.reduce((s, [, n]) => s + n, 0)
const PROCESSOS_MES = geraProcessosMes()

const NAV_PRINCIPAL: Array<{ label: string; target?: string; icon: IconDef }> = [
  { label: 'Início', target: 'inicio', icon: ICONE.home },
  { label: 'Projetos', target: 'projetos', icon: ICONE.layers },
  { label: 'Controle PER/DCOMP', target: 'perdcomp', icon: ICONE.receiptLong },
  { label: 'Clientes', target: 'clientes', icon: ICONE.usuarios },
  { label: 'Configurações', target: 'config', icon: ICONE.config },
  { label: 'Faturamento', target: 'faturamento', icon: ICONE.dinheiro },
  { label: 'Ajuda e treinamentos', icon: ICONE.ajuda },
]

const ACOES_RAPIDAS: Array<{ rotulo: string; target?: string; aba?: string; icon: IconDef }> = [
  { rotulo: 'Projetos', target: 'projetos', icon: ICONE.layers },
  { rotulo: 'Clientes', target: 'clientes', icon: ICONE.usuarios },
  { rotulo: 'Faturamento', target: 'faturamento', icon: ICONE.dinheiro },
  { rotulo: 'Usuários', target: 'config', aba: 'usuarios', icon: ICONE.pessoas },
]

// ponytail: ícones de Reforma/PER-DCOMP/Apuração aproximados do set existente
const WIZARD = [
  {
    titulo: 'Diagnóstico tributário',
    desc: 'Analisa automaticamente os dados fiscais da empresa, obtidos por download automático ou upload manual, para identificar oportunidades de recuperação de tributos gerando relatórios claros e prontos para análise.',
    icone: ICONE.monitorHeart,
  },
  {
    titulo: 'Baixa automática de documentos e obrigações acessórias',
    desc: 'Download automático diretamente de órgãos oficiais, como Receita Federal, e-CAC, e-Social e notas fiscais, sem necessidade de certificado digital.',
    icone: ICONE.download,
  },
  {
    titulo: 'Reforma tributária',
    desc: 'Simulação e análise dos impactos da reforma tributária com base nos dados reais da empresa para o período de 2024.',
    icone: ICONE.menuTransicao,
  },
  {
    titulo: 'Controle de PER/DCOMP',
    desc: 'Sincronize o extrato do crédito diretamente com a secretaria de fazenda para gerenciar o consumo e saldo.',
    icone: ICONE.sync,
  },
  {
    titulo: 'Apuração Assistida',
    desc: 'Automatize o controle de débitos e créditos tributários e simplifique os fechamentos, garantindo conformidade tributária.',
    icone: ICONE.checklist,
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

//  estilos base 

const chrome = css({
  borderRadius: '16px',
  border: '1px solid var(--line)',
  boxShadow: 'var(--card-shadow)',
  overflow: 'hidden',
  overflowX: 'auto',
  background: A.bg,
})

const appBody = css({
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative', // âncora dos modais globais
  minWidth: '1845px',
  height: 'var(--app-h, 1038px)',
  zoom: 0.62,
  color: A.text,
  fontSize: '14px',
  lineHeight: 1.5,
  textAlign: 'left',
})

const telaRaiz = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  background: A.bg,
})


const colConteudo = css({
  flex: 1,
  minWidth: 0,
  padding: '16px 16px 16px 0',
  display: 'flex',
  flexDirection: 'column',
})

const painel = css({
  background: A.card,
  border: `1px solid ${A.line}`,
  borderRadius: '6px',
})

const painelConteudo = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px',
  flex: 1,
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


export function Logo() {
  return (
    <img src="/logo-laratax.svg" alt="Logo LaraTAX" mix={css({ display:'flex',width:'70%' , padding:'10px'})} />
  );
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
        <button type="button" data-modal-abre="recarga" mix={css({ border: 'none', background: 'none', padding: 0, font: 'inherit', color: A.cyanVivo, fontSize: '14px', fontWeight: 500, cursor: 'pointer' })}>
          Recarregar
        </button>
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

function SidebarPrincipal(ativo: 'inicio' | 'projetos'| 'perdcomp' | 'clientes' | 'config' | 'faturamento') {
  return (
    <aside
      mix={css({
        width: '290px',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: 'var(--app-h, 1038px)',
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
      <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', width: '210px', minWidth: '144px', height: '64px',flex:'0 1 210px'})}>
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
  return (
    <button
      type="button"
      data-app-nav=""
      data-target="projetos-detalhe"
      data-detalhe={JSON.stringify(p.detalhe)}
      mix={[painel, base, css({ cursor: 'pointer', '&:hover': { borderColor: A.cyan } })]}
    >
      {marca}
      {conteudo}
    </button>
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
              <p mix={sub}>Bem-vindo, XXXXXXXXXX!</p>
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
                  <button type="button" data-app-nav="" data-target={acao.target} data-aba-alvo={acao.aba || ''} mix={[painel, cardCss, css({ cursor: 'pointer', '&:hover': { borderColor: A.cyan } })]}>
                    {miolo}
                  </button>
                ) : (
                  <div mix={[painel, cardCss]}>{miolo}</div>
                )
              })}
            </div>
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' })}>
            {GraficoProcessosMes()}
            {GraficoUf()}
            {GraficoPizza('Segmentos CNAE (CNAE principal)', String(EMPRESAS.length), CNAE_SEGMENTOS, EMPRESAS.length)}
            {GraficoPizza('Regime tributário (último ano cadastrado)', String(REGIME_TRIBUTARIO.length), REGIME_TRIBUTARIO, EMPRESAS.length)}
            {GraficoParceiros()}
            {PainelNoticias()}
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaProjetos() {
  // badges e listas derivados dos dados procedurais: contagem sempre bate
  const ABAS: Array<{ rotulo: string; alvo: string; lista: Projeto[]; corBadge?: string }> = [
    { rotulo: 'Todos os projetos', alvo: 'todos', lista: PROJETOS },
    {
      rotulo: 'Pendências',
      alvo: 'pendencias',
      lista: PROJETOS.filter((p) => p.cor === 'laranja' || p.cor === 'vermelho'),
      corBadge: A.laranja,
    },
    { rotulo: 'Processando', alvo: 'processando', lista: PROJETOS.filter((p) => p.status === 'Processando...') },
    { rotulo: 'Concluídos', alvo: 'concluidos', lista: PROJETOS.filter((p) => p.status === 'Concluído') },
    { rotulo: 'Recorrentes', alvo: 'recorrentes', lista: PROJETOS.filter((p) => p.marca === 'baixa'), corBadge: A.cyan },
  ]
  return (
    <div data-app-screen="projetos" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('projetos')}
      <div mix={colConteudo}>
        <div data-sub-scope="" mix={[painel, painelConteudo]}>
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

          <div data-abas-projetos="" mix={css({ position: 'relative', display: 'flex', borderBottom: `1px solid ${A.line}` })}>
            {ABAS.map((a, i) => (
              <button
                type="button"
                data-sub-nav=""
                data-sub-target={a.alvo}
                data-on={i === 0 ? 'true' : 'false'}
                mix={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 15.75px 15px',
                  border: 'none',
                  background: 'transparent',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                })}
              >
                {a.rotulo}
                {a.corBadge ? <span mix={badgeCirc(a.corBadge)}>{a.lista.length}</span> : null}
              </button>
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

          {ABAS.map((a, i) => (
            <div data-sub-screen={a.alvo} data-on={i === 0 ? 'true' : 'false'} mix={css({ position: 'relative' })}>
              {a.lista.length === 0 ? (
                <p mix={css({ margin: 0, padding: '32px 0', textAlign: 'center', fontSize: '13.5px', color: A.muted })}>
                  Nenhum projeto nesta categoria.
                </p>
              ) : (
                <div data-embaralha="" mix={css({ display: 'flex', flexDirection: 'column', gap: '12px' })}>
                  {a.lista.map((p) => LinhaProjeto(p))}
                </div>
              )}
            </div>
          ))}

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
                data-wizard-icone=""
                mix={css({
                  display: 'grid',
                  placeItems: 'center',
                  width: '56px',
                  height: '56px',
                  flexShrink: 0,
                  borderRadius: '8px',
                  border: `1px solid ${A.lineForte}`,
                  color: A.cyan,
                  transition: 'background 140ms ease, color 140ms ease',
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
        <div mix={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '48px' })}>
          <button type="button" data-app-nav="" data-target="inicio" mix={[btnContorno, css({ background: A.card, color: A.slate, borderColor: A.cinza })]}>
            Sair da criação
            {Icone(ICONE.fechar, 14)}
          </button>
          <button type="button" data-app-nav="" data-target="novo-diagnostico" mix={[btnPrimario, css({ opacity: 0.7 })]}>
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
      data-rail=""
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
        height: 'var(--app-h, 1038px)',
        zIndex: 30,
        '@media (max-width: 1023px)': { display: 'none' },
      })}
    >
      {/* X vetorial da marca (mesmos paths do dock flutuante) */}
      <svg
        width={26}
        height={26}
        viewBox="-200 -215 1784 1845"
        fill="currentColor"
        aria-hidden="true"
        mix={css({ margin: '0 0 4px', color: A.navy, flexShrink: 0 })}
      >
        <path d="M1320.09 12.1855C1348.43 12.1855 1350.01 45.7341 1335.84 63.4898L937.784 571.053L790.881 379.042L1050.88 39.8044C1063.47 22.0535 1076.07 12.1855 1101.26 12.1855H1320.09Z" />
        <path d="M321.92 12.1855C347.108 12.1866 359.706 22.0497 372.3 39.8044L1357.87 1341.88C1372.04 1359.64 1370.48 1393.18 1342.15 1393.19H1113.86C1088.67 1393.19 1076.07 1383.32 1061.9 1365.57L687.177 868.399L310.902 1365.57C296.734 1383.32 285.706 1393.18 260.522 1393.19H40.0961C11.7566 1393.19 11.7539 1359.64 25.9236 1341.88L539.191 673.1L76.304 63.4898C62.1342 45.7341 63.7143 12.1855 92.0537 12.1855H321.92Z" />
      </svg>
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
      {/* menu completo (igual ao da home) que abre no hover; exibição + véu no <style> global */}
      <div
        data-rail-cheio=""
        mix={css({
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          background: A.bg,
          borderRight: `1px solid ${A.line}`,
          borderRadius: '0 12px 12px 0',
          boxShadow: '24px 0 48px rgba(2, 17, 24, 0.25)',
        })}
      >
        {SidebarPrincipal('projetos')}
      </div>
    </aside>
  )
}

function MenuReforma() {
  const itemMenu = (ativo: boolean) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 8px',
      borderRadius: '10px',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      textAlign: 'center',
      lineHeight: 1.3,
      color: ativo ? A.cyanVivo : A.lineForte,
      background: ativo ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
      cursor: 'pointer',
      '&:hover': { background: 'rgba(255, 255, 255, 0.05)' },
    })
  return (
    <aside
      mix={css({
        width: '160px',
        flexShrink: 0,
        padding: '16px 12px',
        position: 'sticky',
        top: 0,
        alignSelf: 'flex-start',
        '@media (max-width: 1023px)': { display: 'none' },
      })}
    >
      {/* painel flutuante que abraça o conteúdo (não estica até o pé da tela) */}
      <div
        mix={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          padding: '20px 10px 14px',
          borderRadius: '16px',
          background: `linear-gradient(186deg, ${A.ink}, ${A.navy})`,
          boxShadow: '0 12px 28px rgba(2, 17, 24, 0.35)',
        })}
      >
        <p mix={css({ margin: 0, width: '100%', textAlign: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: A.faint })}>
          Reforma Tributária
        </p>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' })}>
          {MENU_REFORMA.map((item, i) => (
            <span mix={itemMenu(i === 0)}>
              {Icone(item.icon, 20)}
              {item.label}
            </span>
          ))}
        </div>
        <div mix={css({ height: '1px', background: 'rgba(255, 255, 255, 0.14)' })} />
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' })}>
          {/* ponytail: ícones aproximados do set (checklist/usuarios) */}
          <span mix={[itemMenu(false), css({ textTransform: 'none', fontSize: '12px' })]}>
            {Icone(ICONE.checklist, 20)}
            Minhas análises
          </span>
          <span mix={[itemMenu(false), css({ textTransform: 'none', fontSize: '12px', color: A.faint, cursor: 'default', '&:hover': { background: 'transparent' } })]}>
            {Icone(ICONE.usuarios, 20)}
            Apresentações
          </span>
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
        [data-app-screen][data-on='true'] { display: flex; animation: app-screen-in 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
        [data-sub-screen] { display: none; }
        [data-sub-screen][data-on='true'] { display: block; animation: app-fade-in 0.22s ease; }
        [data-app-modal] { display: none; }
        [data-app-modal][data-on='true'] { display: block; animation: app-fade-in 0.22s ease; }
        [data-sub-nav][data-on='true'] [data-radio] { border-color: #00c4e5; }
        [data-sub-nav][data-on='true'] [data-ponto] { opacity: 1; }
        [data-ponto-grafico] { cursor: default; transition: filter 120ms ease; }
        [data-ponto-grafico]:hover { filter: brightness(0.82); }
        label:has(input:checked) [data-wizard-icone] { background: #56c2e0; border-color: #56c2e0; color: #ffffff; }
        [data-sub-nav][data-on='true'] [data-caixa-icone] { background: #56c2e0; color: #ffffff; }
        [data-abas-projetos] [data-sub-nav] { color: #62838e; }
        [data-abas-projetos] [data-sub-nav][data-on='true'] { color: #314e58; }
        [data-diag-borrado] { filter: blur(7px); pointer-events: none; user-select: none; }
        [data-rail] [data-rail-cheio] { display: none; }
        [data-rail]:hover [data-rail-cheio] { display: block; animation: rail-in 0.26s cubic-bezier(0.22, 1, 0.36, 1); }
        [data-rail] ~ * { transition: filter 220ms ease; }
        [data-rail]:hover ~ * { filter: brightness(0.85); }
        /* folha branca dos detalhes desliza da direita; véu escuro faz fade junto */
        [data-app-screen][data-on='true'] [data-folha] { animation: folha-in 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
        /* micro-interações: hovers deixam de "pular" */
        [data-app-demo] :is(button, [data-app-nav], [data-sub-nav], [data-modal-abre], tr[data-app-nav]) {
          transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease, filter 150ms ease, box-shadow 150ms ease;
        }
        [data-app-demo] td { transition: background-color 150ms ease; }
        @keyframes app-screen-in { from { opacity: 0; transform: translateY(10px); } }
        @keyframes app-fade-in { from { opacity: 0; } }
        @keyframes folha-in { from { opacity: 0; transform: translateX(32px); } }
        @keyframes rail-in { from { opacity: 0; transform: translateX(-12px); } }
        @media (prefers-reduced-motion: reduce) {
          [data-app-screen][data-on='true'],
          [data-sub-screen][data-on='true'],
          [data-app-modal][data-on='true'],
          [data-rail]:hover [data-rail-cheio],
          [data-app-screen][data-on='true'] [data-folha] { animation: none; }
        }
        [data-app-demo]:fullscreen {
          background: var(--surface, #f8fbfc);
          padding: 16px 24px 24px;
          overflow: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        [data-app-demo]:fullscreen [data-app-chrome] {
          width: fit-content;
          max-width: 100%;
          margin: 0 auto;
        }
      `}</style>

      <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', margin: '40px 0 12px' })}>
        <p mix={css({ margin: 0, fontFamily: FONT_MONO, fontSize: '11px', letterSpacing: '0.06em', color: 'var(--muted)' })}>
          Demonstração interativa · dados fictícios
        </p>
        <button
          type="button"
          data-app-expandir=""
          mix={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 12px',
            borderRadius: '8px',
            border: '1px solid var(--line)',
            background: 'transparent',
            font: 'inherit',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--muted)',
            cursor: 'pointer',
            transition: 'color 150ms ease, border-color 150ms ease',
            '&:hover': { color: 'var(--accent)', borderColor: 'var(--accent)' },
            '&:focus-visible': { outline: '2px solid var(--accent)', outlineOffset: '2px' },
          })}
        >
          {Icone(ICONE.expandir, 16)} <span data-app-expandir-rotulo="">Expandir</span>
        </button>
      </div>

      <div data-app-chrome="" mix={chrome}>
        <div data-app-body="" mix={appBody}>
          {TelaInicio()}
          {TelaProjetos()}
          {TelaNovoProjeto()}
          {TelaReforma()}
          {TelaPerdcompDash()}
          {TelaPerdcompClientes()}
          {TelaPerdcompCliente()}
          {TelaClientes()}
          {TelaCliente()}
          {TelaConfig()}
          {TelaFaturamento()}
          {TelaNovoDiagnostico()}
          {TelaDiagnosticoVisao()}
          {TelaDiagnosticoIcms()}
          {TelaDiagnosticoIpi()}
          {TelaDiagnosticoPisCofins()}
          {TelaDiagnosticoPrev()}
          {TelaDiagnosticoIrpj()}
          {TelaMinhasAnalises()}
          {TelaDiagnosticoTeaser('diagnostico-reforma', 'Reforma Tributária')}
          {TelaDiagnosticoTeaser('diagnostico-teses', 'Teses')}
          {TelaDiagnosticoTeaser('diagnostico-apresentacoes', 'Apresentações')}
          {ModalRecarga()}
          {/* tooltip único dos gráficos; o landing.ts preenche e posiciona */}
          <div data-tip-flutuante="" mix={css({ position: 'absolute', zIndex: 30, display: 'none', pointerEvents: 'none', background: A.card, border: `1px solid ${A.line}`, borderRadius: '8px', boxShadow: '0 8px 24px rgba(2, 17, 24, 0.18)', padding: '10px 14px', minWidth: '150px', fontSize: '13px', lineHeight: 1.6 })} />
          {TelaProjeto()}
        </div>
      </div>
    </div>
  )
}

//PER/DCOMP - dados

const MESES = ['09/25', '10/25', '11/25', '12/25', '01/26', '02/26', '03/26', '04/26', '05/26', '06/26', '07/26', '08/26']

const KPIS_PERDCOMP = [
  {icone:ICONE.dinheiro,rotulo: 'Crédito original',valor:'R$ 28.262.210,02'},  
  {icone:ICONE.sync,rotulo:'Crédito atualizado',valor:'R$ 29.110.077,37'},
  {icone:ICONE.receiptLong,rotulo:'Saldo compensado',valor:'R$ 30.781.997,51'},
  {icone:ICONE.dinheiro,rotulo:'Saldo disponível',valor:'-R$ 2.519.787,49',destaque: true},  
]

const KPIS_CLIENTES = [
{icone:ICONE.dinheiro,rotulo:'Crédito original',valor:'R$ 239.649,80',},
{icone:ICONE.sync,rotulo:'Crédito atualizado',valor:'R$ 239.741,32',},
{icone:ICONE.receiptLong,rotulo:'Saldo compensado',valor:'R$ 194.542,53',},
{icone:ICONE.dinheiro,rotulo:'Saldo disponível',valor:'R$ 45.107,27',destaque: true},  
]

const G_CREDITO = {titulo:'Crédito atualizado',serie:[23.5, 25.6, 26.4, 26.9, 28.6, 28.9, 29, 29.1, 29.1, 29.1, 29.1, 29.1],rotulo:['R$ 23,5 mi', 'R$ 25,6 mi', 'R$ 26,4 mi', 'R$ 26,9 mi', 'R$ 28,6 mi', 'R$ 28,9 mi', 'R$ 29 mi', 'R$ 29,1 mi', 'R$ 29,1 mi', 'R$ 29,1 mi', 'R$ 29,1 mi', 'R$ 29,1 mi'],eixo:['R$ 29,1 mi', 'R$ 14,6 mi', 'R$ 0'] as [string,string,string]}
const G_COMPENSADO = {titulo:'Saldo compensado',serie:[24.8, 25.9, 26.9, 28.2, 29.2, 29.6, 30.1, 31, 31.8, 31.8, 31.8, 31.8],rotulo:['R$ 24,8 mi', 'R$ 25,9 mi', 'R$ 26,9 mi', 'R$ 28,2 mi', 'R$ 29,2 mi', 'R$ 29,6 mi', 'R$ 30,1 mi', 'R$ 31 mi', 'R$ 31,8 mi', 'R$ 31,8 mi', 'R$ 31,8 mi', 'R$ 31,8 mi'],eixo:['R$ 31,8 mi', 'R$ 15,9 mi', 'R$ 0'] as [string,string,string]}
const G_DISPONIVEL = {titulo:'Saldo disponível',serie:[-1.3, -0.32, -0.5, -1.3, -0.55, -0.7, -1.2, -1.9, -2.7, -2.7, -2.7, -2.5],rotulo:['R$ -1,3 mi', 'R$ -316,2 mil', 'R$ -501,7 mil', 'R$ -1,3 mi', 'R$ -550,6 mil', 'R$ -697 mil', 'R$ -1,2 mi', 'R$ -1,9 mi', 'R$ -2,7 mi', 'R$ -2,7 mi', 'R$ -2,7 mi', 'R$ -2,5 mi'],eixo:['R$ 0', 'R$ -1,4 mi', 'R$ -2,7 mi'] as [string,string,string]}

const QTD_EMPRESAS = {titulo:'Quantidade de empresas',serie:[0, 0, 0, 0, 0, 0, 0, 0, 12, 2, 0, 0],escala:12}
const QTD_PERDCOMP = {titulo:'Quantidade de PER/DCOMP',serie:[3, 16, 15, 13, 16, 8, 5, 47, 80, 0, 0, 0],escala:80}

const EMPRESAS_TOP = [
  {nome:'EMPRESA EXEMPLO 1',credito:19.2,saldo:23.6,rc:'R$ 19.161.402',rs:'R$ 23.612.673'},
  {nome:'EMPRESA EXEMPLO 2',credito:6.5,saldo:4.6,rc:'R$ 6.484.133',rs:'R$ 4.593.711'},
  {nome:'EMPRESA EXEMPLO 3',credito:2.9,saldo:2.1,rc:'R$ 2.856.778',rs:'R$ 2.143.871'},
  {nome:'EMPRESA EXEMPLO 4',credito:0.19,saldo:0.19,rc:'R$ 239.741',rs:'R$ 194.543'},
  {nome:'EMPRESA EXEMPLO 5',credito:0.2,saldo:0.09,rc:'R$ 204.982',rs:'R$ 94.137'},
]

type ClientePerdcomp = {empresa:string;cnpj:string;hora:string;de:string;resp:string;email:string;}
const CLIENTES_PERDCOMP: ClientePerdcomp [] = [
  {empresa:'EMPRESA EXEMPLO 1',cnpj:'01.234.567/0001-01',hora:'11:05h',de:'06/2021',resp:'Tecnico 1',email:'tecnicoum@laratax.com.br'},
  {empresa:'EMPRESA EXEMPLO 2',cnpj:'01.234.567/0001-02',hora:'11:05h',de:'06/2021',resp:'Tecnico 2',email:'tecnicodois@laratax.com.br'},
  {empresa:'EMPRESA EXEMPLO 3',cnpj:'01.234.567/0001-03',hora:'11:06h',de:'06/2021',resp:'Tecnico 4',email:'tecnicoquatro@laratax.com.br'},
  {empresa:'EMPRESA EXEMPLO 4',cnpj:'01.234.567/0001-04',hora:'10:31h',de:'06/2021',resp:'Tecnico 2',email:'tecnicodois@laratax.com.br'},
  {empresa:'EMPRESA EXEMPLO 5',cnpj:'01.234.567/0001-05',hora:'16:01h',de:'06/2021',resp:'Tecnico 3',email:'tecnicotres@laratax.com.br'},
]

type Registro = {doc:string; situacao:'Em análise' | 'Retificado' | 'Cancelado'; apuracao:string; data:string; credito:string; usado:string; saldo:string }
const HISTORICO: Registro [] = [
  {doc:'09171.6583',situacao:'Em análise',apuracao:'20/05/2026',data:'19/05/2026',credito:'R$ 16.033,05',usado:'R$ 8.827,33',saldo:'R$ 5.453,92',},
  {doc:'10427.5956',situacao:'Em análise',apuracao:'19/05/2026',data:'18/05/2026',credito:'R$ 7.205,72',usado:'R$ 708,53',saldo:'R$ 11.598,94',},
  {doc:'32349.5984',situacao:'Retificado',apuracao:'20/05/2026',data:'19/05/2026',credito:'R$ 10.147,46',usado:'R$ 10.147,46',saldo:'R$ 7.105,35',},
  {doc:'01992.0021',situacao:'Em análise',apuracao:'22/05/2026',data:'21/05/2026',credito:'R$ 10.647,59',usado:'R$ 581,88',saldo:'R$ 14.171,76',},
  {doc:'27525.2403',situacao:'Em análise',apuracao:'25/03/2026',data:'24/03/2026',credito:'R$ 19.601,80',usado:'R$ 8.954,21',saldo:'R$ 7.933,53',},
  {doc:'31176.3380',situacao:'Cancelado',apuracao:'16/04/2026',data:'12/04/2026',credito:'R$ 10.832,06',usado:'R$ 3.285,00',saldo:'R$ 23.453,28',},
  {doc:'08013.7602',situacao:'Em análise',apuracao:'13/06/2026',data:'10/06/2026',credito:'R$ 17.753,13',usado:'R$ 6.439,07',saldo:'R$ 21.135,99',},
  {doc:'08650.0787',situacao:'Retificado',apuracao:'20/03/2026',data:'18/03/2026',credito:'R$ 23.507,83',usado:'R$ 7.236,12',saldo:'-',},
  {doc:'08751.0168',situacao:'Retificado',apuracao:'07/05/2026',data:'06/05/2026',credito:'R$ 54.026,14',usado:'R$ 26.956,53',saldo:'R$ 33.154,26',},
]

//PER/DCOMP:peças

const azulBg = '#eff6ff'
const azul = '#1d4ed8' 

const tituloGrafico = css ({padding:'16px 20px', borderBottom:`1px solid ${A.line}`,fontSize:'15px', fontWeight:'700',color: A.text})

function CabecalhoPerdcomp (ativa: 'dash' | 'clientes') {
  const aba = (rotulo:string,target:string,on:boolean) =>
  (
    <button type='button'
    data-app-nav=""
    data-target={target}
    mix={css({ padding:'10px 4px',border:'none',background:'none',font:'inherit',fontSize:'14px',fontWeight:600,cursor:'pointer',
      color:on ? A.cyan : A.slate, borderBottom:`2px solid ${on ? A.cyan : 'transparent'}`,marginBottom:'-1px',
    })}
>
  {rotulo}
    </button>
  )
  return(
    <div mix={css({display:'flex',flexDirection:'column',gap:'16px'})}>
      <div>
        <h3 mix={h1}>Controle PER/DCOMP</h3>
        <p mix={css({margin:'4px 0 0', fontSize:'14px',color:A.muted})}>Gerencie e acompanhe suas PER/DCOMP.</p>
      </div>
      <div mix={css({display:'flex',gap:'24px', borderBottom:`1px solid ${A.line}`})}>
        {aba('Dashboard consolidado', 'perdcomp', ativa === 'dash')}
        {aba('Consultar cliente', 'perdcomp-clientes', ativa === 'clientes')}
      </div>
    </div>
  )
}

function KpiPerdcomp(k: (typeof KPIS_PERDCOMP)[number]) {
  return (
    <div mix={[painel, css({ position: 'relative', overflow: 'hidden', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' })]}>
      {QuadriculadoCard()}
      <span mix={css({ position: 'relative', color: A.cyan })}>{Icone(k.icone, 24)}</span>
      <span mix={css({ position: 'relative' })}>
        <span mix={css({ display: 'block', fontSize: '14px', color: A.slate })}>{k.rotulo}</span>
        <strong mix={[num, css({ fontSize: '20px', fontWeight: 700, color: k.destaque ? A.cyan : A.text })]}>{k.valor}</strong>
      </span>
    </div>
  )
}

function GraficoLinha(g: typeof G_CREDITO) {
  const max = Math.max(...g.serie)
  const min = Math.min(...g.serie)
  const px = (i: number) => 60 + (i * 480) / (g.serie.length - 1)
  const py = (v: number) => 28 + ((max - v) * 128) / (max - min || 1)
  const pts = g.serie.map((v, i) => `${px(i)},${py(v)}`).join(' ')
  return (
    <div mix={painel}>
      <div mix={tituloGrafico}>{g.titulo}</div>
      <svg viewBox="0 0 560 200" role="img" aria-label={g.titulo} mix={css({ width: '100%', height: 'auto', display: 'block', padding: '8px 8px 4px' })}>
        <defs>
          <linearGradient id="perdcomp-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="rgba(7, 224, 255, 0.25)" />
            <stop offset="1" stop-color="rgba(7, 224, 255, 0)" />
          </linearGradient>
        </defs>
        {[28, 92, 156].map((y, i) => (
          <g>
            <line x1="60" y1={y} x2="540" y2={y} stroke={A.line} stroke-dasharray="3 4" />
            <text x="52" y={y + 3} text-anchor="end" font-size="10" fill={A.muted}>{g.eixo[i]}</text>
          </g>
        ))}
        <polygon points={`${pts} ${px(g.serie.length - 1)},156 60,156`} fill="url(#perdcomp-area)" />
        <polyline points={pts} fill="none" stroke={A.cyan} stroke-width="2" />
        {g.serie.map((v, i) => (
          <g>
            <circle cx={px(i)} cy={py(v)} r="3.5" fill={A.card} stroke={A.cyan} stroke-width="1.5" />
            {/* área de hover invisível: o ponto visível é pequeno demais pro mouse */}
            <circle
              cx={px(i)}
              cy={py(v)}
              r="12"
              fill="transparent"
              data-ponto-grafico=""
              data-tip-titulo={g.titulo}
              data-tip-cor={A.cyan}
              data-tip-linhas={`${MESES[i]}|${g.rotulo[i]}`}
            />
            {i % 2 === 0 ? (
              <text x={px(i)} y={py(v) - 9} text-anchor="middle" font-size="9" fill={A.slate}>{g.rotulo[i]}</text>
            ) : null}
          </g>
        ))}
        {MESES.map((m, i) => (i % 2 === 0 ? <text x={px(i)} y="182" text-anchor="middle" font-size="10" fill={A.muted}>{m}</text> : null))}
      </svg>
    </div>
  )
}

function GraficoColunas(g: typeof QTD_EMPRESAS) {
  return (
    <div mix={painel}>
      <div mix={tituloGrafico}>{g.titulo}</div>
      <div mix={css({ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '170px', padding: '28px 20px 0' })}>
        {g.serie.map((v, i) => (
          <div mix={css({ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' })}>
            <strong mix={[num, css({ fontSize: '12px', color: A.navy })]}>{v}</strong>
            <div
              style={{ height: `${(v / g.escala) * 100}%` }}
              data-ponto-grafico=""
              data-tip-titulo={g.titulo}
              data-tip-cor={A.navy}
              data-tip-linhas={`${MESES[i]}|${v}`}
              mix={css({ width: '100%', maxWidth: '32px', minHeight: '2px', borderRadius: '4px 4px 0 0', background: A.navy })}
            />
          </div>
        ))}
      </div>
      <div mix={css({ display: 'flex', gap: '10px', padding: '8px 20px 20px' })}>
        {MESES.map((m) => (
          <span mix={[num, css({ flex: 1, textAlign: 'center', fontSize: '10px', color: A.muted, transform: 'rotate(-35deg)' })]}>{m}</span>
        ))}
      </div>
    </div>
  )
}

function GraficoEmpresas() {
  const max = 24
  const barra = (frac: number, cor: string, rotulo: string, empresa: string, serie: string) => (
    <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
      <span
        style={{ width: `${(frac / max) * 100}%` }}
        data-ponto-grafico=""
        data-tip-titulo={empresa}
        data-tip-cor={cor}
        data-tip-linhas={`${serie}|${rotulo}`}
        mix={css({ height: '10px', minWidth: '2px', borderRadius: '0 4px 4px 0', background: cor })}
      />
      <span mix={[num, css({ fontSize: '11px', color: A.slate, whiteSpace: 'nowrap' })]}>{rotulo}</span>
    </span>
  )
  return (
    <div mix={painel}>
      <div mix={tituloGrafico}>5 principais empresas</div>
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' })}>
        {EMPRESAS_TOP.map((e) => (
          <div mix={css({ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '12px', alignItems: 'center' })}>
            <span mix={css({ fontSize: '11px', color: A.slate, textAlign: 'right', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{e.nome}</span>
            <span mix={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              {barra(e.credito, 'rgba(0, 196, 229, 0.55)', e.rc, e.nome, 'Crédito atualizado')}
              {barra(e.saldo, A.navy, e.rs, e.nome, 'Saldo compensado')}
            </span>
          </div>
        ))}
        <div mix={css({ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', color: A.slate })}>
          <span mix={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
            <span mix={css({ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(0, 196, 229, 0.55)' })} /> Crédito atualizado
          </span>
          <span mix={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
            <span mix={css({ width: '12px', height: '12px', borderRadius: '3px', background: A.navy })} /> Saldo compensado
          </span>
        </div>
      </div>
    </div>
  )
}

function LinhaCliente(c: ClientePerdcomp) {
  return (
    <button
      type="button"
      data-app-nav=""
      data-target="perdcomp-cliente"
      mix={[painel, css({
        position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', width: '100%',
        padding: '16px 16px 16px 56px', font: 'inherit', textAlign: 'left', color: A.text, cursor: 'pointer',
        '&:hover': { borderColor: A.cyan },
      })]}
    >
      <span mix={css({ position: 'absolute', top: 0, bottom: 0, left: 0, width: '56px', borderRadius: '5px 0 0 5px', background: `linear-gradient(90deg, ${A.cyanSoft}, rgba(255, 255, 255, 0))`, display: 'grid', placeItems: 'center', color: A.cyan })}>
        {Icone(ICONE.monitorHeart, 20)}
      </span>
      <span mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignSelf: 'stretch', flexShrink: 0 })}>
        <span mix={css({ fontSize: '14px', fontWeight: 500, lineHeight: 1 })}>Solicitado</span>
        <span mix={[num, css({ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', lineHeight: 1, whiteSpace: 'nowrap' })]}>
          20/05/2026
          <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '2px', color: A.muted })}>{Icone(ICONE.relogio, 12)}{c.hora}</span>
        </span>
      </span>
      <span mix={css({ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px', lineHeight: 1 })}>
        <span mix={css({ fontSize: '14px', fontWeight: 500, textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{c.empresa}</span>
        <span mix={[num, css({ fontSize: '14px', color: A.muted, whiteSpace: 'nowrap' })]}>{c.cnpj}</span>
      </span>
      <span mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignSelf: 'stretch', width: '85px', flexShrink: 0, lineHeight: 1 })}>
        <span mix={css({ fontSize: '14px', fontWeight: 500 })}>Período</span>
        <span mix={[num, css({ fontSize: '14px' })]}>De {c.de}<br />Até 05/2026</span>
      </span>
      <span mix={css({ width: '160px', flexShrink: 0, fontSize: '14px' })}>Controle PER/DCOMP</span>
      <span mix={css({ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' })}>
        <strong mix={css({ fontSize: '14px', fontWeight: 700 })}>{c.resp}</strong>
        <span mix={css({ fontSize: '13px', color: A.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{c.email}</span>
      </span>
      <span mix={[tag(A.cyanSoft, A.teal), css({ flexShrink: 0 })]}>Sincronização ativa</span>
    </button>
  )
}

// --- PER/DCOMP: telas ------------------------------------------------------

function TelaPerdcompDash() {
  return (
    <div data-app-screen="perdcomp" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('perdcomp')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          {CabecalhoPerdcomp('dash')}
          <div mix={css({ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' })}>
            {KPIS_PERDCOMP.map((k) => KpiPerdcomp(k))}
          </div>
          <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' })}>
            {GraficoEmpresas()}
            {GraficoColunas(QTD_EMPRESAS)}
            {GraficoLinha(G_CREDITO)}
            {GraficoLinha(G_COMPENSADO)}
            {GraficoLinha(G_DISPONIVEL)}
            {GraficoColunas(QTD_PERDCOMP)}
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaPerdcompClientes() {
  return (
    <div data-app-screen="perdcomp-clientes" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('perdcomp')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          {CabecalhoPerdcomp('clientes')}
          <div mix={[inputFake, css({ width: '256px' })]}>
            {Icone(ICONE.busca, 14)} Buscar cliente por razão
          </div>
          <div mix={css({ display: 'flex', flexDirection: 'column', gap: '12px' })}>
            {CLIENTES_PERDCOMP.map((c) => LinhaCliente(c))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaPerdcompCliente() {
  // compactos para as 11 colunas caberem sem rolagem lateral
  const th = css({ padding: '12px 10px', fontSize: '12.5px', fontWeight: 700, color: A.text, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${A.line}` })
  const td = css({ padding: '12px 10px', fontSize: '12.5px', color: A.slate, whiteSpace: 'nowrap', borderBottom: `1px solid ${A.cinza}` })
  const badgeSituacao = (s: Registro['situacao']) => (s === 'Cancelado' ? tag(A.redBg, A.red) : tag(azulBg, azul))
  return (
    <div data-app-screen="perdcomp-cliente" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('perdcomp')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          {CabecalhoPerdcomp('clientes')}

          <div mix={[painel, css({ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 20px', borderColor: A.cyan })]}>
            <span mix={css({ color: A.cyan })}>{Icone(ICONE.usuarios, 24)}</span>
            <span mix={css({ flex: 1, minWidth: 0 })}>
              <strong mix={css({ display: 'block', fontSize: '15px', fontWeight: 700 })}>EMPRESA EXEMPLO 1</strong>
              <span mix={[num, css({ fontSize: '13px', color: A.muted })]}>01.234.567/0001-01</span>
            </span>
            <span mix={css({ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500 })}>
              Sincronização ativa
              <span mix={css({ width: '40px', height: '22px', borderRadius: '999px', background: A.cyan, position: 'relative', '&::after': { content: '""', position: 'absolute', top: '3px', right: '3px', width: '16px', height: '16px', borderRadius: '50%', background: A.card } })} />
            </span>
            <span mix={css({ lineHeight: 1.2 })}>
              <span mix={css({ display: 'block', fontSize: '12px', color: A.muted })}>Total de PER/DCOMP</span>
              <strong mix={num}>64</strong>
            </span>
            <button type="button" data-app-nav="" data-target="perdcomp-clientes" mix={btnContorno}>
              {Icone(ICONE.sync, 14)} Trocar cliente
            </button>
          </div>

          <div mix={css({ display: 'flex', justifyContent: 'flex-end', gap: '8px' })}>
            <span mix={[painel, css({ display: 'grid', placeItems: 'center', width: '36px', height: '36px', color: A.slate })]}>{Icone(ICONE.download, 16)}</span>
            <span mix={[btnPrimario, css({ display: 'inline-flex', alignItems: 'center', gap: '6px' })]}>{Icone(ICONE.filtro, 14)} Filtrar registros</span>
          </div>

          <div mix={css({ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' })}>
            {KPIS_CLIENTES.map((k) => KpiPerdcomp(k))}
          </div>

          <div mix={painel}>
            <div mix={css({ display: 'flex', alignItems: 'baseline', gap: '16px', padding: '16px 20px' })}>
              <strong mix={css({ fontSize: '15px', fontWeight: 700 })}>Histórico de PER/DCOMP</strong>
              <span mix={css({ fontSize: '13px', color: A.muted })}>Última atualização: — · Próxima atualização: —</span>
              <span mix={css({ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 })}>
                Agrupar <span mix={css({ width: '18px', height: '18px', borderRadius: '4px', border: `1px solid ${A.lineForte}` })} />
              </span>
            </div>
            <div mix={css({ overflowX: 'auto' })}>
              <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
                <thead>
                  <tr>
                    {['Nº documento', 'Situação receita', 'Tipo', 'CNPJ', 'Razão social', 'Tipo de crédito', 'Apuração do crédito', 'Data transmissão', 'Crédito atualizado', 'Crédito utilizado', 'Saldo disponível'].map((c) => (
                      <th mix={th}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* 5 linhas para a tela fechar em 1038 (paginador é decorativo) */}
                  {HISTORICO.slice(0, 5).map((r) => (
                    <tr>
                      <td mix={td}>
                        <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '6px', color: A.laranja })}>
                          {Icone(ICONE.alertaLaranja, 14)}
                          <strong mix={[num, css({ color: A.text })]}>{r.doc}</strong>
                        </span>
                      </td>
                      <td mix={td}><span mix={badgeSituacao(r.situacao)}>{r.situacao}</span></td>
                      <td mix={td}><span mix={tag(A.orangeBg, A.orange)}>Vinculado</span></td>
                      <td mix={[td, num]}>01.234.567/...</td>
                      <td mix={td}>EMPRESA EXEMPLO 1...</td>
                      <td mix={td}>Saldo Negativo de CSLL</td>
                      <td mix={[td, num]}>{r.apuracao}</td>
                      <td mix={[td, num]}>{r.data}</td>
                      <td mix={[td, num, css({ textAlign: 'right' })]}>{r.credito}</td>
                      <td mix={[td, num, css({ textAlign: 'right' })]}>{r.usado}</td>
                      <td mix={[td, num, css({ textAlign: 'right', fontWeight: 700, color: A.green })]}>{r.saldo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', padding: '12px 16px', fontSize: '14px', color: A.slate })}>
              Tamanho da Página:
              <span mix={[inputFake, css({ width: '64px', height: '32px' })]}>10 {Icone(ICONE.chevronBaixo, 14)}</span>
              <span mix={num}>1 até 5 de 64</span>
              {['|<', '<'].map((s) => <span mix={[painel, css({ display: 'grid', placeItems: 'center', width: '32px', height: '32px', color: A.faint })]}>{s}</span>)}
              <span mix={num}>Página 1 de 7</span>
              {['>', '>|'].map((s) => <span mix={[painel, css({ display: 'grid', placeItems: 'center', width: '32px', height: '32px', color: A.slate })]}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- detalhe de projeto: Baixa Automática Completa --------------------------
// Sub-abas via [data-sub-nav]/[data-sub-screen] (landing.ts) — as 5 abas do
// topo são um escopo; as categorias de Arquivos e Relatórios são escopos
// aninhados dentro dos seus painéis.

const CNPJ_ARQ = '12345678000190'

const MESES_ARQ = [
  { rot: 'Janeiro/2021', ini: '20210101', fim: '20210131' },
  { rot: 'Fevereiro/2021', ini: '20210201', fim: '20210228' },
  { rot: 'Março/2021', ini: '20210301', fim: '20210331' },
  { rot: 'Abril/2021', ini: '20210401', fim: '20210430' },
  { rot: 'Maio/2021', ini: '20210501', fim: '20210531' },
  { rot: 'Junho/2021', ini: '20210601', fim: '20210630' },
  { rot: 'Julho/2021', ini: '20210701', fim: '20210731' },
  { rot: 'Agosto/2021', ini: '20210801', fim: '20210831' },
]
type MesArq = (typeof MESES_ARQ)[number]

// hash fake determinístico (nada de Math.random num render server-side)
const hexId = (n: number) =>
  Array.from({ length: 32 }, (_, i) => '0123456789ABCDEF'[((n + 3) * 31 + (i + 1) * (i + 2) * 7 + n * i * 11) % 16]).join('')

type CatArq = {
  id: string
  rotulo: string
  grupo: 'SPEDs' | 'E-Cac' | 'Notas Fiscais'
  n?: string
  rec?: boolean
  arquivo: (m: MesArq, i: number) => string
}
const arquivoPadrao = (slug: string) => (m: MesArq, i: number) =>
  `${slug}_${CNPJ_ARQ}_${m.ini}_${m.fim}_${hexId(i + slug.length * 3)}`
const cat = (id: string, rotulo: string, grupo: CatArq['grupo'], slug: string): CatArq =>
  ({ id, rotulo, grupo, arquivo: arquivoPadrao(slug) })

// ponytail: dupes do app real ("cnd" minúsculo, "processados") ficaram de fora
const CATS_ARQ: CatArq[] = [
  { id: 'efd-contribuicoes', rotulo: 'EFD CONTRIBUIÇÕES', grupo: 'SPEDs', n: '118 arquivos', rec: true, arquivo: (m, i) => `PISCOFINS_${m.ini}_${m.fim}_${CNPJ_ARQ}_${i === 0 ? 'Retificadora' : 'Original'}_${m.ini}165037_${hexId(i + 1)}` },
  { id: 'efd-fiscal', rotulo: 'EFD-FISCAL', grupo: 'SPEDs', n: '116 arquivos', arquivo: (m, i) => `${CNPJ_ARQ}-1234567890-${m.ini}-${m.fim}-${i % 2}-${hexId(i + 40)}-SPED-EFD` },
  cat('ecd', 'ECD', 'SPEDs', 'ECD'),
  cat('ecf', 'ECF', 'SPEDs', 'ECF'),
  cat('reinf', 'REINF', 'SPEDs', 'REINF'),
  cat('xml-zip', 'XML ZIP', 'SPEDs', 'XML'),
  cat('apuracao-assistida', 'APURACAO ASSISTIDA', 'SPEDs', 'APURACAO'),
  cat('capacidade-pagamento', 'CAPACIDADE PAGAMENTO', 'SPEDs', 'CAPACIDADE'),
  cat('cnd', 'CND', 'SPEDs', 'CND'),
  cat('divida-ativa', 'DIVIDA ATIVA', 'SPEDs', 'DIVIDA'),
  cat('situacao-fiscal', 'SITUACAO FISCAL', 'SPEDs', 'SITUACAO'),
  cat('dctf', 'DCTF', 'E-Cac', 'DCTF'),
  cat('dctf-web', 'DCTF WEB', 'E-Cac', 'DCTFWEB'),
  cat('perdcomp-web', 'PER/DCOMP WEB', 'E-Cac', 'PERDCOMP'),
  cat('dirf', 'DIRF', 'E-Cac', 'DIRF'),
  cat('darf', 'DARF', 'E-Cac', 'DARF'),
  cat('eprocesso', 'EPROCESSO', 'E-Cac', 'EPROCESSO'),
  cat('detalhe-perdcomp', 'DETALHE PERDCOMP', 'E-Cac', 'DETPERDCOMP'),
  cat('e-social', 'E-SOCIAL', 'Notas Fiscais', 'ESOCIAL'),
  cat('nfe-nfse', 'NF-e/NFS-e', 'Notas Fiscais', 'NFE'),
]
const GRUPOS_ARQ: Array<CatArq['grupo']> = ['SPEDs', 'E-Cac', 'Notas Fiscais']

type CatRel = { id: string; rotulo: string; grupo: 'Relatórios gerais' | 'Relatórios LaraTAX'; n?: string; itens: Array<{ cod: string; desc: string }> }
const RELS: CatRel[] = [
  { id: 'rel-efdc', rotulo: 'EFD CONTRIBUIÇÕES', grupo: 'Relatórios gerais', n: '56 relatórios', itens: [
    { cod: 'EFD-C 0110-0111', desc: 'Regimes de apuração - Tabela de receita mensal para fins de rateio de créditos' },
    { cod: 'EFD-C 0140-0150', desc: 'Cadastro de estabelecimento - Cadastro de participante' },
    { cod: 'EFD-C 0140-0200', desc: 'Cadastro de estabelecimento - Cadastro de itens (Produtos e Serviços)' },
    { cod: 'EFD-C 0140', desc: 'Cadastro de estabelecimento' },
    { cod: 'EFD-C 1500', desc: 'Controle de créditos fiscais - COFINS' },
    { cod: 'EFD-C A100-A170', desc: 'Nota fiscal de serviço - Itens do documento' },
    { cod: 'EFD-C C100-C120', desc: 'Nota fiscal - Operações de importação' },
    { cod: 'EFD-C C100-C170', desc: 'Nota fiscal - Itens do documento' },
    { cod: 'EFD-C C100-C190-C191-C195', desc: 'Consolidação de notas fiscais modelo 55 - Operações com direito a crédito de PIS-COFINS' },
  ] },
  { id: 'rel-efdf', rotulo: 'EFD-FISCAL', grupo: 'Relatórios gerais', itens: [
    { cod: 'EFD-F C100-C170', desc: 'Nota fiscal - Itens do documento' },
    { cod: 'EFD-F E100-E110', desc: 'Apuração do ICMS - Valores consolidados' },
    { cod: 'EFD-F H005-H010', desc: 'Inventário - Itens do estoque' },
  ] },
  { id: 'rel-ecd', rotulo: 'ECD', grupo: 'Relatórios gerais', itens: [
    { cod: 'ECD I050', desc: 'Plano de contas' },
    { cod: 'ECD I155', desc: 'Saldos periódicos por conta contábil' },
    { cod: 'ECD J100', desc: 'Balanço patrimonial' },
  ] },
  { id: 'rel-ecf', rotulo: 'ECF', grupo: 'Relatórios gerais', itens: [
    { cod: 'ECF N500', desc: 'Apuração do IRPJ - Base de cálculo' },
    { cod: 'ECF Y540', desc: 'Discriminação da receita por CNAE' },
  ] },
  { id: 'rel-esocial', rotulo: 'E-SOCIAL', grupo: 'Relatórios gerais', itens: [
    { cod: 'S-1200', desc: 'Remuneração de trabalhadores - Eventos periódicos' },
    { cod: 'S-5011', desc: 'Informações das contribuições sociais consolidadas' },
  ] },
  { id: 'rel-ecac', rotulo: 'E-Cac', grupo: 'Relatórios gerais', itens: [
    { cod: 'DCTF Débitos', desc: 'Débitos declarados por período de apuração' },
    { cod: 'PER/DCOMP Créditos', desc: 'Créditos transmitidos e situação atual' },
  ] },
  { id: 'rel-xml', rotulo: 'XML', grupo: 'Relatórios gerais', itens: [
    { cod: 'XML NF-e Entradas', desc: 'Notas de entrada por fornecedor e CFOP' },
    { cod: 'XML NF-e Saídas', desc: 'Notas de saída por cliente e CFOP' },
  ] },
  { id: 'rel-dashboard', rotulo: 'Dashboard', grupo: 'Relatórios gerais', itens: [
    { cod: 'Dashboard Executivo', desc: 'Visão consolidada do diagnóstico do projeto' },
  ] },
  { id: 'rel-cruzamento', rotulo: 'Cruzamento', grupo: 'Relatórios LaraTAX', itens: [
    { cod: 'Cruzamento EFD x DCTF', desc: 'Divergências entre débitos escriturados e declarados' },
    { cod: 'Cruzamento XML x EFD', desc: 'Notas fiscais ausentes da escrituração' },
  ] },
]
const GRUPOS_REL: Array<CatRel['grupo']> = ['Relatórios gerais', 'Relatórios LaraTAX']

const RETIFICACOES: Array<[string, string]> = [
  ['#177278', 'remuneracao'], ['#177250', 'lotacao_processo'], ['#177196', 'lotacao_processo'],
  ['#177168', 'lotacao_processo'], ['#176507', 'lotacao_processo'], ['#176505', 'remuneracao'],
  ['#176503', 'remuneracao'], ['#176475', 'remuneracao'], ['#176473', 'lotacao_processo'],
  ['#176471', 'lotacao_processo'],
]

const abaProjeto = css({
  padding: '10px 2px', border: 'none', background: 'none', font: 'inherit', fontSize: '13.5px', fontWeight: 600,
  cursor: 'pointer', color: A.slate, borderBottom: '2px solid transparent', marginBottom: '-1px',
  '&[data-on="true"]': { color: A.cyan, borderBottomColor: A.cyan },
})
const catBtn = css({
  display: 'block', width: '100%', textAlign: 'left', padding: '6px 12px', border: 'none', background: 'none',
  font: 'inherit', fontSize: '13px', color: A.slate, cursor: 'pointer', borderRadius: '6px',
  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  '&:hover': { background: A.bg },
  '&[data-on="true"]': { background: A.cyanSoft, color: A.teal },
})
const btnBaixar = css({
  display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 10px', borderRadius: '6px',
  border: `1px solid ${A.line}`, background: A.card, fontSize: '12px', color: A.slate, whiteSpace: 'nowrap', flexShrink: 0,
})
const rotuloCampo = css({ display: 'block', fontSize: '12.5px', color: A.muted, marginBottom: '2px' })

function Caixa(on:boolean) {
  return (
    <input
    type='checkbox'
    checked={on||undefined}
    mix={css({
      appearance:'none',
      width:'16px',height:'16px',borderRadius:'4px',flexShrink:0,
      display:'grid',placeItems:'center',margin:0,cursor:'pointer',
      fontSize:'11px', lineHeight:1,
      border:`1px solid ${A.lineForte}`,background:A.card,
      '&:checked':{border:`1px solid ${A.cyan}`,background:A.cyan},
      '&checked::after': {content:'"✓"',color:'#ffffff'},
    })}
    />
  )
}

function Campo(rotulo: string, valor: string, campo = '') {
  return (
    <span>
      <span mix={rotuloCampo}>{rotulo}</span>
      <span data-campo={campo} mix={css({ fontSize: '14px', color: A.text })}>{valor}</span>
    </span>
  )
}

function PainelDetalhes() {
  const d0 = PROJETOS[0].detalhe
  return (
    <div data-sub-screen="detalhes" data-on="true">
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
        <div mix={[painel, css({ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '14px', background: A.card })]}>
          <strong mix={css({ fontSize: '14px' })}>Dados do projeto</strong>
          <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '24px', alignItems: 'center' })}>
            {Campo('Solicitado em', d0.solicitado, 'solicitado')}
            {Campo('Período', d0.periodo, 'periodo')}
            <span>
              <span mix={rotuloCampo}>Solicitante</span>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                {Avatar('Tecnico 1', 28)}
                <span mix={css({ lineHeight: 1.25 })}>
                  <strong mix={css({ display: 'block', fontSize: '14px' })}>Tecnico 1</strong>
                  <span mix={css({ fontSize: '12.5px', color: A.muted })}>tecnicoum@laratax.com.br</span>
                </span>
              </span>
            </span>
            <button type="button" data-app-nav="" data-target="diagnostico-visao" mix={btnPrimario}>
              Acessar Diagnóstico
            </button>
          </div>
        </div>
        <div mix={[painel, css({ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '16px', background: A.card })]}>
          <div mix={css({ display: 'flex', alignItems: 'center' })}>
            <strong mix={css({ fontSize: '14px' })}>Dados do cliente</strong>
            <span mix={css({ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' })}>
              <span mix={css({ fontSize: '13px', fontWeight: 600, color: A.cyan })}>Ver cliente</span>
              <span mix={css({ color: A.muted })}>−</span>
            </span>
          </div>
          <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px 24px' })}>
            {Campo('Parceiro indicador', d0.parceiro, 'parceiro')}
            {Campo('CNPJ', d0.cnpj, 'cnpj')}
            {Campo('Inscrição Estadual', d0.ie, 'ie')}
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={[rotuloCampo, css({ display: 'flex', alignItems: 'center', gap: '8px' })]}>
                Razão Social <span mix={tag(A.greenBg, A.green)}>Ativa na RFB</span>
              </span>
              <span data-campo="empresa" mix={css({ fontSize: '14px', textTransform: 'uppercase' })}>{d0.empresa}</span>
            </span>
            {Campo('UF', d0.uf, 'uf')}
            {Campo('Município', d0.municipio, 'municipio')}
            {Campo('Número de filiais', d0.filiais, 'filiais')}
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={rotuloCampo}>Regime fiscal</span>
              {['2018', '2019', '2020', '2021', '2022'].map((ano) => (
                <span mix={css({ display: 'block', fontSize: '13.5px', color: A.slate, padding: '1px 0' })}>{ano} - <span data-campo="regime">{d0.regime}</span></span>
              ))}
            </span>
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={rotuloCampo}>CNAE principal</span>
              <span data-campo="cnae" mix={css({ fontSize: '13.5px', color: A.slate })}>{d0.cnae}</span>
            </span>
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={rotuloCampo}>CNAE secundário</span>
              {[
                '2599-3/02 - Serviço de corte e dobra de metais',
                '2599-3/99 - Fabricação de outros produtos de metal não especificados anteriormente',
                '4672-9/00 - Comércio atacadista de ferragens e ferramentas',
                '4679-6/99 - Comércio atacadista de materiais de construção em geral',
                '4744-0/01 - Comércio varejista de ferragens e ferramentas',
                '4744-0/99 - Comércio varejista de materiais de construção em geral',
              ].map((cnae) => (
                <span mix={css({ display: 'block', fontSize: '13.5px', color: A.slate, padding: '1px 0' })}>{cnae}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// barra "Todos + Procurar + Baixar seleção" compartilhada por Arquivos/Relatórios
function BarraSelecao() {
  return (
    <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px' })}>
      <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: A.slate })}>{Caixa(false)} Todos</span>
      <div mix={[inputFake, css({ width: '240px', margin: '0 auto' })]}>{Icone(ICONE.busca, 14)} Procurar...</div>
      <span mix={[btnPrimario, css({ marginLeft: 'auto' })]}>Baixar seleção {Icone(ICONE.chevronBaixo, 14)}</span>
    </div>
  )
}

function LateralCategorias(grupos: string[], itens: Array<{ id: string; rotulo: string; grupo: string }>, ativa: string) {
  return (
    <div mix={[painel, css({ padding: '12px', background: A.card })]}>
      {grupos.map((grupo, gi) => (
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: gi === 0 ? 0 : '12px', paddingTop: gi === 0 ? 0 : '12px', borderTop: gi === 0 ? 'none' : `1px solid ${A.line}` })}>
          <strong mix={css({ fontSize: '13px', padding: '2px 12px 6px' })}>{grupo}</strong>
          {itens.filter((c) => c.grupo === grupo).map((c) => (
            <button type="button" data-sub-nav="" data-sub-target={c.id} data-on={c.id === ativa ? 'true' : 'false'} mix={catBtn}>
              {c.rotulo}
            </button>
          ))}
        </div>
      ))}
      <span mix={[btnContorno, css({ marginTop: '14px', width: '100%', justifyContent: 'center', color: A.cyan, gap: '8px' })]}>
        {Icone(ICONE.download, 16)} Baixar tudo
      </span>
    </div>
  )
}

function PainelArquivos() {
  return (
    <div data-sub-screen="arquivos" data-on="false" data-sub-scope="">
      <div mix={css({ display: 'grid', gridTemplateColumns: '215px 1fr', gap: '16px', alignItems: 'start' })}>
        {LateralCategorias(GRUPOS_ARQ, CATS_ARQ, 'efd-contribuicoes')}
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 })}>
          {BarraSelecao()}
          {CATS_ARQ.map((c, ci) => (
            <div data-sub-screen={c.id} data-on={ci === 0 ? 'true' : 'false'}>
              <strong mix={css({ display: 'block', fontSize: '15px', fontWeight: 700 })}>{c.rotulo}</strong>
              <span mix={css({ display: 'block', fontSize: '12px', color: A.muted, margin: '2px 0 10px' })}>{c.n ?? `${MESES_ARQ.length} arquivos`}</span>
              <div mix={[painel, css({ background: A.card })]}>
                <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 16px', borderBottom: `1px solid ${A.line}`, fontSize: '13px', fontWeight: 700 })}>
                  {Caixa(false)}
                  <span mix={css({ width: '110px', flexShrink: 0 })}>Período</span>
                  <span>Arquivo</span>
                </div>
                {MESES_ARQ.map((m, i) => (
                  <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 16px', borderBottom: `1px solid ${A.cinza}`, background: ci === 0 && i === 0 ? A.cinza : 'transparent' })}>
                    {Caixa(ci === 0 && i === 0)}
                    <span mix={css({ width: '110px', fontSize: '13px', flexShrink: 0 })}>{m.rot}</span>
                    <span mix={[num, css({ flex: 1, minWidth: 0, fontSize: '12.5px', color: A.slate, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })]}>{c.arquivo(m, i)}</span>
                    {c.rec ? <span mix={btnBaixar}>{Icone(ICONE.download, 12)} Baixar .rec</span> : null}
                    <span mix={btnBaixar}>{Icone(ICONE.download, 12)} Baixar .txt</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PainelRelatorios() {
  return (
    <div data-sub-screen="relatorios" data-on="false" data-sub-scope="">
      <div mix={css({ display: 'grid', gridTemplateColumns: '215px 1fr', gap: '16px', alignItems: 'start' })}>
        {LateralCategorias(GRUPOS_REL, RELS, 'rel-efdc')}
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 })}>
          {BarraSelecao()}
          {RELS.map((c, ci) => (
            <div data-sub-screen={c.id} data-on={ci === 0 ? 'true' : 'false'}>
              <strong mix={css({ display: 'block', fontSize: '15px', fontWeight: 700 })}>{c.rotulo}</strong>
              <span mix={css({ display: 'block', fontSize: '12px', color: A.muted, margin: '2px 0 10px' })}>{c.n ?? `${c.itens.length} relatórios`}</span>
              <div mix={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
                {c.itens.map((r) => (
                  <div mix={[painel, css({ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', background: A.card })]}>
                    {Caixa(false)}
                    <span mix={css({ color: A.slate })}>{Icone(ICONE.receiptLong, 16)}</span>
                    <span mix={css({ flex: 1, minWidth: 0, lineHeight: 1.3 })}>
                      <strong mix={css({ display: 'block', fontSize: '14px' })}>{r.cod}</strong>
                      <span mix={css({ fontSize: '12.5px', color: A.muted })}>{r.desc}</span>
                    </span>
                    <span mix={css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '50%', border: `1px solid ${A.line}`, color: A.slate, flexShrink: 0 })}>{Icone(ICONE.download, 14)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PainelUpload() {
  return (
        <div data-sub-screen="upload" data-on="false">
              <div mix={[painel, css({ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', background: A.card })]}>
          <span mix={css({ display: 'grid', placeItems: 'center', width: '36px', height: '36px', borderRadius: '8px', background: A.cyanSoft, color: A.cyan, flexShrink: 0 })}>{Icone(ICONE.play, 20)}</span>
          <span mix={css({ flex: 1, minWidth: 0, lineHeight: 1.35 })}>
            <strong mix={css({ display: 'block', fontSize: '14px' })}>Iniciar processamento das NF-e?</strong>
            <span mix={css({ fontSize: '13.5px', color: A.muted })}>Tem certeza de que deseja iniciar este projeto com os arquivos enviados? Não será possível enviar mais arquivos após iniciar.</span>
          </span>
          <span mix={[btnPrimario, css({ opacity: 0.55 })]}>Confirmar NF-e</span>
        </div>

        <strong mix={css({ fontSize: '16px' })}>Upload de arquivos</strong>
        <div mix={css({ borderBottom: `1px solid ${A.line}` })}>
          <span mix={css({ display: 'inline-block', padding: '8px 2px', fontSize: '13.5px', fontWeight: 600, color: A.cyan, borderBottom: `2px solid ${A.cyan}`, marginBottom: '-1px' })}>NF-e/NFS-e (ZIP)</span>
        </div>
        <div mix={css({ border: `1px dashed ${A.lineForte}`, borderRadius: '8px', minHeight: '130px', display: 'grid', placeItems: 'center', background: A.card })}>
          <span mix={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: A.muted, padding: '20px' })}>
            {Icone(ICONE.baixando, 20)}
            <span>Arraste e solte aqui ou <span mix={css({ color: A.cyan, fontWeight: 600 })}>escolha os arquivos</span></span>
          </span>
        </div>
        <div mix={css({ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: A.muted })}>
          <span>Arquivos suportados: zip</span>
          <span>Limite de 1.000.000 de linhas por arquivo.</span>
        </div>
        <div mix={[painel, css({ minHeight: '320px', display: 'grid', placeItems: 'center', background: A.card })]}>
  <span mix={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '40px', textAlign: 'center' })}>
    <span mix={css({ color: A.cyan })}>{Icone(ICONE.caixaAberta, 44)}</span>
    <strong mix={css({ fontSize: '16px' })}>Nenhum arquivo enviado ainda</strong>
    <span mix={css({ fontSize: '13.5px', color: A.muted, maxWidth: '340px', lineHeight: 1.5 })}>
      Nenhum arquivo foi enviado ainda. Clique em escolha os arquivos ou arraste e solte acima.
    </span>
  </span>
      </div>
    </div>
  )
}

function PainelRetificacoes() {
  const cab = css({ fontSize: '13px', fontWeight: 700, color: A.text })
  return (
    <div data-sub-screen="retificacoes" data-on="false">
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
        <div mix={css({ display: 'flex', alignItems: 'center' })}>
          <div mix={[inputFake, css({ width: '220px' })]}>{Icone(ICONE.busca, 14)} Procurar...</div>
          <span mix={[btnPrimario, css({ marginLeft: 'auto' })]}>Nova retificação</span>
        </div>
        <strong mix={css({ fontSize: '14px' })}>Retificações realizadas</strong>
        <div mix={[painel, css({ background: A.card })]}>
          <div mix={css({ display: 'flex', gap: '16px', padding: '10px 16px', borderBottom: `1px solid ${A.line}` })}>
            <span mix={[cab, css({ flex: 1.2 })]}>ID / Tipo</span>
            <span mix={[cab, css({ width: '120px' })]}>Solicitado em</span>
            <span mix={[cab, css({ flex: 1.4 })]}>Solicitante</span>
            <span mix={[cab, css({ width: '130px' })]}>Situação</span>
            <span mix={css({ width: '30px' })} />
          </div>
          {RETIFICACOES.map(([id, tipo]) => (
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px', padding: '7px 16px', borderBottom: `1px solid ${A.cinza}`, fontSize: '13px' })}>
              <span mix={css({ flex: 1.2, lineHeight: 1.3 })}>
                <strong mix={[num, css({ display: 'block' })]}>{id}</strong>
                <span mix={css({ fontSize: '12px', color: A.muted })}>{tipo}</span>
              </span>
              <span mix={[num, css({ width: '120px', lineHeight: 1.3 })]}>07/01/2026<br />07:25h</span>
              <span mix={css({ flex: 1.4, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 })}>
                {Avatar('Tecnico 1', 24)}
                <span mix={css({ lineHeight: 1.3, minWidth: 0 })}>
                  <strong mix={css({ display: 'block', fontSize: '13px' })}>Tecnico 1</strong>
                  <span mix={css({ fontSize: '12px', color: A.muted })}>tecnicoum@laratax.com.br</span>
                </span>
              </span>
              <span mix={css({ width: '130px', flexShrink: 0 })}><span mix={tag(A.cyanSoft, A.teal)}>Aguardando</span></span>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '50%', border: `1px solid ${A.line}`, color: A.muted, flexShrink: 0 })}>{Icone(ICONE.maisVert, 14)}</span>
            </div>
          ))}
          <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '14px', padding: '10px 16px', fontSize: '13px', color: A.slate })}>
            Tamanho da Página:
            <span mix={[inputFake, css({ width: '56px', height: '28px' })]}>10 {Icone(ICONE.chevronBaixo, 14)}</span>
            <span mix={num}>1 até 10 de 10</span>
            <span mix={num}>Página 1 de 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const ABAS_PROJETO = [
  { id: 'detalhes', rotulo: 'Detalhes' },
  { id: 'arquivos', rotulo: 'Arquivos' },
  { id: 'relatorios', rotulo: 'Relatórios' },
  { id: 'upload', rotulo: 'Upload de arquivos' },
  { id: 'retificacoes', rotulo: 'Retificações' },
]

function TelaProjeto() {
  return (
    <div data-app-screen="projetos-detalhe" data-on="false" mix={[telaRaiz, css({ position: 'relative', overflow: 'hidden' })]}>
      {SidebarPrincipal('projetos')}
      {/* fundo escurecido sobre a tela de trás; clicar nele também fecha */}
      <div data-app-nav="" data-target="projetos" mix={css({ position: 'absolute', inset: 0, background: 'rgba(2, 17, 24, 0.5)', cursor: 'pointer' })} />
      <div data-folha="" mix={css({ position: 'absolute', top: 0, right: 0, bottom: 0, left: '240px', overflowY: 'auto', background: A.card, boxShadow: '-18px 0 44px rgba(2, 17, 24, 0.35)' })}>
        <div data-sub-scope="" mix={css({ minHeight: '100%', display: 'flex', flexDirection: 'column' })}>
          <div mix={css({ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px 0' })}>
            <span mix={css({ display: 'grid', placeItems: 'center', width: '36px', height: '36px', borderRadius: '8px', background: A.cyanSoft, color: A.cyan, flexShrink: 0 })}>{Icone(ICONE.baixando, 20)}</span>
            <span mix={css({ flex: 1, minWidth: 0, lineHeight: 1.3 })}>
              <strong data-campo="tipo" mix={css({ display: 'block', fontSize: '14px' })}>{PROJETOS[0].tipo}</strong>
              <span data-campo="empresa" mix={css({ fontSize: '13px', color: A.slate, textTransform: 'uppercase' })}>{PROJETOS[0].empresa}</span>
            </span>
            <button type="button" data-app-nav="" data-target="projetos" aria-label="Fechar" mix={css({ border: 'none', background: 'none', cursor: 'pointer', color: A.muted, padding: '8px' })}>
              {Icone(ICONE.fechar, 14)}
            </button>
          </div>
          <div mix={css({ display: 'flex', gap: '20px', padding: '6px 20px 0', borderBottom: `1px solid ${A.line}` })}>
            {ABAS_PROJETO.map((a, i) => (
              <button type="button" data-sub-nav="" data-sub-target={a.id} data-on={i === 0 ? 'true' : 'false'} mix={abaProjeto}>
                {a.rotulo}
              </button>
            ))}
          </div>
          <div mix={css({ padding: '16px 20px 20px', flex: 1, background: A.bg })}>
            {PainelDetalhes()}
            {PainelArquivos()}
            {PainelRelatorios()}
            {PainelUpload()}
            {PainelRetificacoes()}
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Clientes --------------------------------------------------------------

function ConteudoClientes() {
  const th = css({ padding: '12px 16px', fontSize: '14px', fontWeight: 700, color: A.text, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${A.line}` })
  const td = css({ padding: '12px 16px', fontSize: '14px', color: A.slate, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '340px', borderBottom: `1px solid ${A.cinza}` })
  return (
    <>
      {SidebarPrincipal('clientes')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ display: 'flex', alignItems: 'flex-start', gap: '16px' })}>
            <div mix={css({ flex: 1 })}>
              <h3 mix={h1}>Empresas</h3>
              <p mix={sub}>Gerencie todas as empresas cadastradas.</p>
            </div>
            <span mix={btnPrimario}>{Icone(ICONE.add, 12)} Nova empresa</span>
          </div>
          <div mix={[inputFake, css({ width: '320px' })]}>{Icone(ICONE.busca, 14)} Buscar por nome ou CNPJ...</div>
          <div mix={painel}>
            <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
              <thead>
                <tr>
                  {['Empresa', 'CNPJ', 'Grupo', 'Situação', 'Parceiro'].map((c) => (
                    <th mix={th}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody data-embaralha="">
                {CLIENTES_EMPRESAS.map((c, i) => (
                  <tr
                    data-app-nav=""
                    data-target="clientes-detalhe"
                    data-detalhe={JSON.stringify({
                      empresa: c.empresa, cnpj: c.cnpj, grupo: c.grupo, parceiro: c.parceiro,
                      uf: c.uf, municipio: c.municipio, ie: c.ie, filiais: `${c.filiais} unidades`,
                      regime: c.regime, cnae: c.cnae, cep: c.cep, logradouro: c.logradouro,
                      ...DIAGS[i],
                    })}
                    mix={css({ cursor: 'pointer', '&:hover td': { background: A.bg } })}
                  >
                    <td mix={[td, css({ color: A.text })]}>{c.empresa}</td>
                    <td mix={[td, num]}>{c.cnpj}</td>
                    <td mix={td}>{c.grupo}</td>
                    <td mix={[td, css({ fontWeight: 700, color: A.text })]}>Ativa na RFB</td>
                    <td mix={td}>{c.parceiro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* paginador decorativo, como no histórico do PER/DCOMP */}
            <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px', padding: '12px 16px', fontSize: '13px', color: A.slate })}>
              <span>Tamanho da Página: <strong>10</strong> {Icone(ICONE.tagSetaBaixo, 8)}</span>
              <span mix={num}>1 até 10 de {EMPRESAS.length}</span>
              <span>Página <strong mix={num}>1</strong> de <strong mix={num}>{Math.ceil(EMPRESAS.length / 10)}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function TelaClientes() {
  return (
    <div data-app-screen="clientes" data-on="false" mix={telaRaiz}>
      {ConteudoClientes()}
    </div>
  )
}

function TelaCliente() {
  const c0 = CLIENTES_EMPRESAS[0]
  return (
    <div data-app-screen="clientes-detalhe" data-on="false" mix={[telaRaiz, css({ position: 'relative', overflow: 'hidden' })]}>
      {ConteudoClientes()}
      {/* fundo escurecido; clicar nele fecha */}
      <div data-app-nav="" data-target="clientes" mix={css({ position: 'absolute', inset: 0, background: 'rgba(2, 17, 24, 0.5)', cursor: 'pointer' })} />
      <div data-folha="" mix={css({ position: 'absolute', top: 0, right: 0, bottom: 0, left: '690px', overflowY: 'auto', background: A.card, boxShadow: '-18px 0 44px rgba(2, 17, 24, 0.35)' })}>
        <div mix={css({ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px 20px 0' })}>
          <span mix={css({ display: 'grid', placeItems: 'center', width: '36px', height: '36px', borderRadius: '8px', background: A.cyanSoft, color: A.cyan, flexShrink: 0 })}>{Icone(ICONE.monitorHeart, 20)}</span>
          <span mix={css({ flex: 1, minWidth: 0, lineHeight: 1.35 })}>
            <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '15px' })}>{c0.empresa}</strong>
            <span data-campo="cnpj" mix={[num, css({ fontSize: '14px', color: A.teal })]}>{c0.cnpj}</span>
          </span>
          <button type="button" data-app-nav="" data-target="clientes" aria-label="Fechar" mix={css({ border: 'none', background: 'none', cursor: 'pointer', color: A.muted, padding: '8px' })}>
            {Icone(ICONE.fechar, 14)}
          </button>
        </div>
        <div mix={css({ padding: '8px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px' })}>
          <h3 mix={h1}>Dados da empresa</h3>
          <div mix={[painel, css({ padding: '18px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', background: A.card })]}>
            {Campo('Grupo empresarial', c0.grupo, 'grupo')}
            {Campo('Parceiro indicador', c0.parceiro, 'parceiro')}
            {Campo('CNPJ', c0.cnpj, 'cnpj')}
            <span>
              <span mix={[rotuloCampo, css({ display: 'flex', alignItems: 'center', gap: '8px' })]}>
                Razão Social <span mix={tag(A.greenBg, A.green)}>Ativa</span>
              </span>
              <span data-campo="empresa" mix={css({ fontSize: '14px', textTransform: 'uppercase' })}>{c0.empresa}</span>
            </span>
            <div mix={css({ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' })}>
              {Campo('Inscrição Estadual', c0.ie, 'ie')}
              {Campo('UF', c0.uf, 'uf')}
              {Campo('Município', c0.municipio, 'municipio')}
              {Campo('Número de filiais', `${c0.filiais} unidades`, 'filiais')}
            </div>
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={rotuloCampo}>Regime fiscal</span>
              <span mix={css({ display: 'block', background: A.cinza, borderRadius: '8px', padding: '10px 14px' })}>
                {['2021', '2022', '2023', '2024'].map((ano) => (
                  <span mix={css({ display: 'block', fontSize: '13.5px', color: A.text, padding: '2px 0' })}>{ano} - <span data-campo="regime">{c0.regime}</span></span>
                ))}
              </span>
            </span>
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={rotuloCampo}>CNAE principal</span>
              <span data-campo="cnae" mix={css({ fontSize: '13.5px', color: A.text })}>{c0.cnae}</span>
            </span>
            <span mix={css({ gridColumn: '1 / -1' })}>
              <span mix={rotuloCampo}>CNAE secundário</span>
              <span mix={css({ display: 'block', background: A.cinza, borderRadius: '8px', padding: '10px 14px' })}>
                {[
                  '2599-3/02 - Serviço de corte e dobra de metais',
                  '2599-3/99 - Fabricação de outros produtos de metal não especificados anteriormente',
                  '4672-9/00 - Comércio atacadista de ferragens e ferramentas',
                  '4679-6/99 - Comércio atacadista de materiais de construção em geral',
                  '4744-0/01 - Comércio varejista de ferragens e ferramentas',
                ].map((cnae) => (
                  <span mix={css({ display: 'block', fontSize: '13.5px', color: A.text, padding: '2px 0' })}>{cnae}</span>
                ))}
              </span>
            </span>
          </div>
          <div mix={[painel, css({ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '16px', background: A.card })]}>
            <strong mix={tituloPainel}>Endereço</strong>
            <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '16px 24px' })}>
              {Campo('CEP', c0.cep, 'cep')}
              {Campo('Logradouro', c0.logradouro, 'logradouro')}
              {Campo('UF', c0.uf, 'uf')}
              {Campo('Número', '-')}
              {Campo('Complemento', '-')}
              {Campo('Bairro', '-')}
              {Campo('Município', c0.municipio, 'municipio')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// --- Configurações ---------------------------------------------------------

const ABAS_CONFIG = [
  { id: 'dados', rotulo: 'Dados da empresa' },
  { id: 'usuarios', rotulo: 'Usuários' },
  { id: 'permissoes', rotulo: 'Permissões' },
  { id: 'certificados', rotulo: 'Certificados digitais' },
  { id: 'sync', rotulo: 'Sincronizações' },
]

const USUARIOS_CONFIG = [
  { nome: 'Tecnico 1', email: 'tecnico1@laratax.com.br', perfil: 'Master', ativo: true },
  { nome: 'Tecnico 2', email: 'tecnico2@laratax.com.br', perfil: 'Master', ativo: true },
  { nome: 'Tecnico 3', email: 'tecnico3@laratax.com.br', perfil: 'Master', ativo: true },
  { nome: 'Tecnico 4', email: 'tecnico4@laratax.com.br', perfil: 'Master', ativo: false },
  { nome: 'Tecnico 5', email: 'tecnico5@laratax.com.br', perfil: 'Operador', ativo: false },
  { nome: 'Tecnico 6', email: 'tecnico6@laratax.com.br', perfil: 'Master', ativo: true },
  { nome: 'Tecnico 7', email: 'tecnico7@laratax.com.br', perfil: 'Administrador', ativo: true },
  { nome: 'Tecnico 8', email: 'tecnico8@laratax.com.br', perfil: 'Administrador', ativo: true },
  { nome: 'Tecnico 9', email: 'tecnico9@laratax.com.br', perfil: 'Operador', ativo: false },
  { nome: 'Tecnico 10', email: 'tecnico10@laratax.com.br', perfil: 'Administrador', ativo: false },
]

const CERTIFICADOS = [
  { nome: 'CERTIFICADO EXEMPLO 1 LTDA', validade: '13/03/2026' },
  { nome: 'CERTIFICADO EXEMPLO 2 LTDA', validade: '17/07/2026' },
  { nome: 'CERTIFICADO EXEMPLO 3', validade: '19/03/2026' },
  { nome: 'CERTIFICADO EXEMPLO 4 LTDA', validade: '03/09/2025' },
  { nome: 'CERTIFICADO EXEMPLO 5 LTDA', validade: '02/06/2026' },
  { nome: 'CERTIFICADO EXEMPLO 6 LTDA', validade: '21/10/2025' },
  { nome: 'CERTIFICADO EXEMPLO 7 LTDA', validade: '04/03/2026' },
  { nome: 'CERTIFICADO EXEMPLO 8 LTDA', validade: '14/08/2026' },
  { nome: 'CERTIFICADO EXEMPLO 9 LTDA', validade: '21/01/2026' },
  { nome: 'CERTIFICADO EXEMPLO 10 LTDA', validade: '13/03/2026' },
]

const SYNCS = [
  { nome: 'e-CAC', desc: 'Caixa postal, situação fiscal e procurações', ultima: '24/08/2026 - 06:12', ativa: true },
  { nome: 'SPED', desc: 'EFD Contribuições e EFD ICMS/IPI', ultima: '24/08/2026 - 05:40', ativa: true },
  { nome: 'e-Social', desc: 'Eventos e obrigações trabalhistas', ultima: '23/08/2026 - 22:10', ativa: false },
  { nome: 'Receita Federal', desc: 'PER/DCOMP, processos e caixa postal', ultima: '24/08/2026 - 04:05', ativa: true },
]

// paginador decorativo compartilhado pelas tabelas de Configurações
function PagerConfig(faixa: string, pagina: string) {
  return (
    <div mix={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px', padding: '12px 16px', fontSize: '13px', color: A.slate })}>
      <span>Tamanho da Página: <strong>10</strong> {Icone(ICONE.tagSetaBaixo, 8)}</span>
      <span mix={num}>{faixa}</span>
      <span>Página {pagina}</span>
    </div>
  )
}

function TelaConfig() {
  const th = css({ padding: '12px 16px', fontSize: '14px', fontWeight: 700, color: A.text, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${A.line}` })
  const td = css({ padding: '12px 16px', fontSize: '14px', color: A.slate, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '360px', borderBottom: `1px solid ${A.cinza}` })
  const rotulo = css({ display: 'block', fontSize: '14px', fontWeight: 500, color: A.text, marginBottom: '6px' })
  const campo = css({ display: 'flex', alignItems: 'center', gap: '8px', height: '40px', padding: '0 14px', borderRadius: '8px', border: `1px solid ${A.lineForte}`, background: A.card, fontSize: '14px', color: A.text })
  const campoTravado = css({ background: A.cinza, borderColor: 'transparent', color: A.slate })
  const maisVert = (
    <span mix={css({ display: 'grid', placeItems: 'center', width: '32px', height: '32px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
      {Icone(ICONE.maisVert, 14)}
    </span>
  )
  const cab = (id: string, titulo: string, descricao: string, botao?: string) => (
    <div data-sub-screen={id} data-on={id === 'dados' ? 'true' : 'false'}>
      <div mix={css({ display: 'flex', alignItems: 'flex-start', gap: '16px' })}>
        <div mix={css({ flex: 1 })}>
          <h3 mix={h1}>{titulo}</h3>
          <p mix={sub}>{descricao}</p>
        </div>
        {botao ? <span mix={btnPrimario}>{Icone(ICONE.add, 12)} {botao}</span> : null}
      </div>
    </div>
  )
  const tagPerfil = (perfil: string) =>
    perfil === 'Master' ? tag(A.cyanSoft, A.teal) : tag(A.cinza, A.slate)
  return (
    <div data-app-screen="config" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('config')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div data-sub-scope="" mix={css({ display: 'flex', flexDirection: 'column', gap: '20px' })}>
            {/* cabeçalhos por aba: mesmo id do conteúdo, alternam juntos */}
            {cab('dados', 'Dados da empresa', 'Configure os dados fiscais e informações da sua empresa')}
            {cab('usuarios', 'Meus usuários', 'Gerencie os usuários com acesso ao sistema', 'Convidar usuário')}
            {cab('permissoes', 'Perfis de permissionamento', 'Configure e gerencie permissões de acesso ao sistema', 'Criar novo perfil')}
            {cab('certificados', 'Certificados digitais', 'Gerencie os certificados para assinatura de documentos e emissão de notas fiscais', 'Importar certificado')}
            {cab('sync', 'Sincronizações', 'Acompanhe as integrações e sincronizações automáticas de dados')}

            <div mix={css({ display: 'flex', gap: '24px', borderBottom: `1px solid ${A.line}` })}>
              {ABAS_CONFIG.map((a, i) => (
                <button type="button" data-sub-nav="" data-sub-target={a.id} data-on={i === 0 ? 'true' : 'false'} mix={abaProjeto}>
                  {a.rotulo}
                </button>
              ))}
            </div>

            <div data-sub-screen="dados" data-on="true">
              <div mix={css({ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1240px' })}>
                <div>
                  <strong mix={css({ fontSize: '16px' })}>Dados da empresa</strong>
                  <p mix={sub}>Configure os dados fiscais e informações da sua empresa</p>
                </div>
                <div mix={css({ width: '420px' })}>
                  <span mix={rotulo}>CNPJ</span>
                  <span mix={[campo, campoTravado, num]}>12.345.678/0001-90</span>
                </div>
                <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' })}>
                  <div>
                    <span mix={rotulo}>Nome da empresa</span>
                    <span mix={[campo, campoTravado]}>LARATAX</span>
                    <p mix={[sub, css({ fontSize: '13px', marginTop: '6px' })]}>Este nome ficará visível em relatórios e exportações.</p>
                  </div>
                  <div>
                    <span mix={rotulo}>Razão social</span>
                    <span mix={[campo, campoTravado]}>LARATAX</span>
                  </div>
                </div>
                <div mix={css({ display: 'grid', gridTemplateColumns: '260px 440px', gap: '24px' })}>
                  <div>
                    <span mix={rotulo}>Telefone</span>
                    <span mix={[campo, num]}>(11) 99999-9999</span>
                  </div>
                  <div>
                    <span mix={rotulo}>Endereço de e-mail</span>
                    <span mix={campo}>tecnicoum@laratax.com.br</span>
                  </div>
                </div>
                <div mix={css({ marginTop: '12px' })}>
                  <strong mix={css({ fontSize: '16px' })}>Endereço da empresa</strong>
                  <p mix={sub}>O endereço da empresa será utilizado para fins de contato e emissão de notas fiscais</p>
                </div>
                <div mix={css({ width: '420px' })}>
                  <span mix={rotulo}>CEP</span>
                  <span mix={campo}>
                    <span mix={[num, css({ flex: 1 })]}>80000-000</span>
                    <span mix={css({ color: A.cyan, fontWeight: 500, cursor: 'pointer' })}>Buscar</span>
                  </span>
                </div>
                <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' })}>
                  <div>
                    <span mix={rotulo}>Endereço</span>
                    <span mix={campo}>RUA EXEMPLO - 123</span>
                  </div>
                  <div>
                    <span mix={rotulo}>Número</span>
                    <span mix={campo} />
                  </div>
                </div>
                <div mix={css({ width: '55%' })}>
                  <span mix={rotulo}>Complemento</span>
                  <span mix={campo} />
                </div>
                <div mix={css({ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: '24px' })}>
                  <div>
                    <span mix={rotulo}>UF</span>
                    <span mix={campo}>
                      <span mix={css({ flex: 1 })}>PR</span>
                      {Icone(ICONE.chevronBaixo, 12)}
                    </span>
                  </div>
                  <div>
                    <span mix={rotulo}>Município</span>
                    <span mix={campo}>SAO JOSE DOS PINHAIS</span>
                  </div>
                  <div>
                    <span mix={rotulo}>Bairro</span>
                    <span mix={campo} />
                  </div>
                </div>
              </div>
            </div>

            <div data-sub-screen="usuarios" data-on="false">
              <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
                <div mix={[inputFake, css({ width: '300px' })]}>{Icone(ICONE.busca, 14)} Buscar por nome ou e-mail...</div>
                <div mix={painel}>
                  <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
                    <thead>
                      <tr>
                        {['Nome', 'E-mail', 'Perfil', 'Situação', ''].map((c) => (
                          <th mix={th}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {USUARIOS_CONFIG.map((u) => (
                        <tr>
                          <td mix={[td, css({ color: A.text })]}>{u.nome}</td>
                          <td mix={td}>{u.email}</td>
                          <td mix={td}><span mix={tagPerfil(u.perfil)}>{u.perfil}</span></td>
                          <td mix={td}>
                            <span mix={u.ativo ? tag(A.greenBg, A.green) : tag(A.cinza, A.slate)}>{u.ativo ? 'Ativo' : 'Inativo'}</span>
                          </td>
                          <td mix={[td, css({ width: '48px' })]}>{maisVert}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {PagerConfig('1 até 10 de 58', '1 de 6')}
                </div>
              </div>
            </div>

            <div data-sub-screen="permissoes" data-on="false">
              <div mix={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
                <div mix={[inputFake, css({ width: '300px' })]}>{Icone(ICONE.busca, 14)} Buscar permissão...</div>
                <div mix={painel}>
                  <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
                    <thead>
                      <tr>
                        <th mix={[th, css({ width: '48px' })]}>{Caixa(false)}</th>
                        {['Permissão', 'Módulos', 'Usuários', ''].map((c) => (
                          <th mix={th}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { nome: 'junior', descricao: 'permissões', modulos: ['Clientes', 'Projetos'], usuarios: '1 usuário' },
                        { nome: 'Super Admin', descricao: 'Acesso total', modulos: ['Faturamento', 'Clientes', '+2'], usuarios: '18 usuários' },
                      ].map((p) => (
                        <tr>
                          <td mix={td}>{Caixa(false)}</td>
                          <td mix={td}>
                            <strong mix={css({ display: 'block', fontSize: '14px', color: A.text })}>{p.nome}</strong>
                            <span mix={css({ fontSize: '13px' })}>{p.descricao}</span>
                          </td>
                          <td mix={td}>
                            <span mix={css({ display: 'inline-flex', gap: '6px' })}>
                              {p.modulos.map((m) => (
                                <span mix={tag(A.cinza, A.slate)}>{m}</span>
                              ))}
                            </span>
                          </td>
                          <td mix={td}>{p.usuarios}</td>
                          <td mix={[td, css({ width: '48px' })]}>{maisVert}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {PagerConfig('1 até 2 de 2', '1 de 1')}
                </div>
              </div>
            </div>

            <div data-sub-screen="certificados" data-on="false">
              <div mix={painel}>
                <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
                  <thead>
                    <tr>
                      {['Nome', 'Data de validade', 'Situação', ''].map((c) => (
                        <th mix={th}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CERTIFICADOS.map((c) => (
                      <tr>
                        <td mix={[td, css({ color: A.text })]}>{c.nome}</td>
                        <td mix={td}>
                          <strong mix={[num, css({ display: 'block', color: A.text, fontWeight: 600 })]}>{c.validade}</strong>
                          <span mix={css({ fontSize: '13px' })}>Expirado</span>
                        </td>
                        <td mix={td}><span mix={tag(A.redBg, A.red)}>Vencido</span></td>
                        <td mix={[td, css({ width: '120px' })]}>
                          {/* ponytail: ícone de lixeira não está no set — × cobre a demo */}
                          <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(185, 28, 28, 0.35)', color: A.red, fontSize: '13px', fontWeight: 500, cursor: 'pointer' })}>
                            {Icone(ICONE.fechar, 10)} Excluir
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {PagerConfig('1 até 10 de 32', '1 de 4')}
              </div>
            </div>

            <div data-sub-screen="sync" data-on="false">
              <div mix={css({ display: 'flex', flexDirection: 'column', gap: '12px' })}>
                {SYNCS.map((s) => (
                  <div mix={[painel, css({ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 20px' })]}>
                    <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '8px', background: A.cyanSoft, color: A.cyan, flexShrink: 0 })}>
                      {Icone(ICONE.sync, 18)}
                    </span>
                    <span mix={css({ flex: 1, minWidth: 0 })}>
                      <strong mix={css({ display: 'block', fontSize: '14px' })}>{s.nome}</strong>
                      <span mix={css({ fontSize: '13px', color: A.muted })}>{s.desc}</span>
                    </span>
                    <span mix={css({ fontSize: '13px', color: A.muted, whiteSpace: 'nowrap' })}>
                      Última sincronização: <span mix={num}>{s.ultima}</span>
                    </span>
                    <span mix={s.ativa ? tag(A.cyanSoft, A.teal) : tag(A.cinza, A.slate)}>{s.ativa ? 'Ativa' : 'Pausada'}</span>
                    <span mix={css({ width: '40px', height: '22px', borderRadius: '999px', flexShrink: 0, background: s.ativa ? A.cyan : A.lineForte, position: 'relative', '&::after': { content: '""', position: 'absolute', top: '3px', right: s.ativa ? '3px' : '21px', width: '16px', height: '16px', borderRadius: '50%', background: A.card } })} />
                    <span mix={btnContorno}>{Icone(ICONE.sync, 14)} Sincronizar agora</span>
                  </div>
                ))}
                <p mix={[sub, css({ fontSize: '13px' })]}>As sincronizações automáticas rodam a cada 6 horas. Dados fictícios para demonstração.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// --- Faturamento -----------------------------------------------------------

const PAGAMENTOS = [
  { id: 'pay_r5oei31l8s8yt7o2', motivo: 'Compra de 842 xmls ...', desc: 'PIX', valor: 'R$ 126,30', pago: false },
  { id: 'pay_mpeeaqdx0ei8tiyv', motivo: 'Compra de 1291 xml...', desc: 'PIX', valor: 'R$ 167,83', pago: false },
  { id: 'pay_3l1xzkbgy6lqgibz', motivo: '', desc: '', valor: 'R$ 599,90', pago: false },
  { id: 'pay_t3y2xnl35s4j15vn', motivo: '', desc: '', valor: 'R$ 599,90', pago: false },
  { id: 'pay_m99l8jc2k72cvr...', motivo: '', desc: '', valor: 'R$ 599,90', pago: false },
  { id: 'pay_5444r87b0n2rjjii', motivo: '', desc: '', valor: 'R$ 599,90', pago: true },
  { id: 'pay_yyy3cdp3tfy36tzw', motivo: '', desc: '', valor: 'R$ 150,00', pago: true },
  { id: 'pay_4g63nl6uuvms9...', motivo: '', desc: '', valor: 'R$ 150,00', pago: true },
  { id: 'pay_6ezrmgi9tiwah5...', motivo: '', desc: '', valor: 'R$ 599,90', pago: true },
  { id: 'pay_xy5r3p6r46zzgjar', motivo: '', desc: '', valor: 'R$ 599,90', pago: true },
]

function TelaFaturamento() {
  const th = css({ padding: '12px 16px', fontSize: '14px', fontWeight: 700, color: A.text, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${A.line}` })
  const td = css({ padding: '12px 16px', fontSize: '14px', color: A.slate, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '260px', borderBottom: `1px solid ${A.cinza}` })
  const saldo = (icon: IconDef, rotuloSaldo: string, valor: string) => (
    <span mix={css({ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 })}>
      <span mix={css({ display: 'grid', placeItems: 'center', width: '48px', height: '48px', borderRadius: '10px', background: A.cinza, color: A.text, flexShrink: 0 })}>
        {Icone(icon, 22)}
      </span>
      <span mix={css({ lineHeight: 1.3 })}>
        <span mix={css({ display: 'block', fontSize: '14px', color: A.slate })}>{rotuloSaldo}</span>
        <strong mix={[num, css({ fontSize: '24px', fontWeight: 700 })]}>{valor}</strong>
      </span>
    </span>
  )
  return (
    <div data-app-screen="faturamento" data-on="false" mix={telaRaiz}>
      {SidebarPrincipal('faturamento')}
      <div mix={colConteudo}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingBottom: '20px', borderBottom: `1px solid ${A.line}` })}>
            <div mix={css({ flex: 1 })}>
              <h3 mix={h1}>Faturamento</h3>
              <p mix={sub}>Gerencie seus planos, pagamentos e notas fiscais.</p>
            </div>
            <span mix={btnContorno}>Histórico de consumo</span>
          </div>

          <strong mix={css({ fontSize: '16px' })}>Saldos disponíveis</strong>
          <div mix={[painel, css({ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px 24px' })]}>
            {saldo(ICONE.token, 'Tokens de diagnóstico', '41.061')}
            {saldo(ICONE.download, 'Tokens de baixa de XML', '1.000.000.100')}
            <button type="button" data-modal-abre="recarga" mix={btnPrimario}>
              Recarregar
            </button>
          </div>

          <strong mix={css({ fontSize: '16px' })}>Pagamentos e notas fiscais</strong>
          <div mix={painel}>
            <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
              <thead>
                <tr>
                  {['Data', 'ID do pagamento', 'Motivo', 'Descrição', 'Vencimento'].map((c) => (
                    <th mix={th}>{c}</th>
                  ))}
                  <th mix={[th, css({ textAlign: 'right' })]}>Valor</th>
                  <th mix={th}>Situação</th>
                  <th mix={th} />
                </tr>
              </thead>
              <tbody>
                {PAGAMENTOS.map((p) => (
                  <tr>
                    <td mix={td}>-</td>
                    <td mix={[td, num, css({ color: A.text })]}>{p.id}</td>
                    <td mix={td}>{p.motivo}</td>
                    <td mix={td}>{p.desc}</td>
                    <td mix={td}>-</td>
                    <td mix={[td, num, css({ textAlign: 'right', color: A.text })]}>{p.valor}</td>
                    <td mix={td}>
                      <span mix={p.pago ? tag(A.greenBg, A.green) : tag(A.cyanSoft, A.teal)}>{p.pago ? 'Pago' : 'Pendente'}</span>
                    </td>
                    <td mix={[td, css({ width: '48px' })]}>
                      <span mix={css({ display: 'grid', placeItems: 'center', width: '32px', height: '32px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                        {Icone(ICONE.maisVert, 14)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {PagerConfig('1 até 10 de 24', '1 de 3')}
          </div>
        </div>
      </div>
    </div>
  )
}

// popup "Recarga de tokens": global à janela, abre por [data-modal-abre]; tudo estático
function ModalRecarga() {
  const titulo = css({ fontSize: '16px', fontWeight: 700, color: A.text })
  // rádio pintado por CSS a partir do data-on do botão-cartão pai
  const radio = (
    <span data-radio="" mix={css({ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, border: `2px solid ${A.lineForte}`, display: 'grid', placeItems: 'center' })}>
      <span data-ponto="" mix={css({ width: '10px', height: '10px', borderRadius: '50%', background: A.cyan, opacity: 0 })} />
    </span>
  )
  const cartao = css({
    display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px', borderRadius: '10px',
    border: `1px solid ${A.line}`, background: 'none', font: 'inherit', color: A.text, cursor: 'pointer', textAlign: 'left',
    '&[data-on="true"]': { borderColor: A.cyan },
  })
  const faixa = (preco: string, quando: string, atual: boolean) => (
    <span mix={css({ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', padding: '20px 10px', borderRadius: '10px', border: `1px solid ${atual ? A.cyan : A.line}` })}>
      {atual ? (
        <span mix={css({ position: 'absolute', top: '-11px', padding: '3px 12px', borderRadius: '999px', background: A.cyanSoft, color: A.teal, fontSize: '12px', fontWeight: 700 })}>Atual</span>
      ) : null}
      <strong mix={[num, css({ fontSize: '17px', color: atual ? A.text : A.muted })]}>{preco}</strong>
      <span mix={[num, css({ fontSize: '13px', color: A.muted })]}>{quando}</span>
    </span>
  )
  return (
    <div data-app-modal="recarga" data-on="false">
      <div mix={css({ position: 'absolute', inset: 0, zIndex: 10, display: 'grid', placeItems: 'center', padding: '24px' })}>
        {/* véu: clicar fora fecha */}
        <span data-modal-fecha="" mix={css({ position: 'absolute', inset: 0, background: 'rgba(2, 17, 24, 0.5)', cursor: 'pointer' })} />
        <div data-sub-scope="" mix={css({ position: 'relative', width: '780px', maxWidth: '100%', maxHeight: '100%', overflowY: 'auto', background: A.card, borderRadius: '16px', boxShadow: '0 24px 60px rgba(2, 17, 24, 0.4)', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '18px' })}>
          <div mix={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
            <strong mix={css({ flex: 1, fontSize: '19px', fontWeight: 700 })}>Recarga de tokens</strong>
            <button type="button" data-modal-fecha="" aria-label="Fechar" mix={css({ border: 'none', background: 'none', cursor: 'pointer', color: A.muted, padding: '8px' })}>
              {Icone(ICONE.fechar, 14)}
            </button>
          </div>
          <p mix={[sub, css({ margin: 0 })]}>Receba descontos progressivos</p>
          <p data-sub-screen="baixa" data-on="false" mix={css({ margin: 0, fontSize: '15px', color: A.red })}>
            Preços não configurados para este tipo de token. Entre em contato com o suporte.
          </p>

          <strong mix={titulo}>Tipo de Token</strong>
          <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' })}>
            <button type="button" data-sub-nav="" data-sub-target="diag" data-on="true" mix={cartao}>
              <span mix={css({ flex: 1 })}>
                <strong mix={css({ display: 'block', fontSize: '16px', marginBottom: '6px' })}>Token de diagnóstico</strong>
                <span mix={css({ fontSize: '14px', color: A.slate })}>Uso para projetos de diagnóstico tributário.</span>
              </span>
              {radio}
            </button>
            <button type="button" data-sub-nav="" data-sub-target="baixa" data-on="false" mix={cartao}>
              <span mix={css({ flex: 1 })}>
                <strong mix={css({ display: 'block', fontSize: '16px', marginBottom: '6px' })}>Tokens de baixas</strong>
                <span mix={css({ fontSize: '14px', color: A.slate })}>Uso para projetos de baixas de obrigações acessórias.</span>
              </span>
              {radio}
            </button>
          </div>

          <strong mix={titulo}>Forma de pagamento</strong>
          {/* escopo aninhado: a forma de pagamento alterna sem mexer no tipo de token */}
          <div data-sub-scope="" mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' })}>
            <button type="button" data-sub-nav="" data-sub-target="pix" data-on="true" mix={cartao}>
              {/* ponytail: logo do PIX aproximado com ícone do set */}
              <span mix={css({ display: 'grid', placeItems: 'center', width: '52px', height: '52px', borderRadius: '12px', background: A.cyan, color: '#ffffff', flexShrink: 0 })}>
                {Icone(ICONE.token, 24)}
              </span>
              <strong mix={css({ flex: 1, fontSize: '16px' })}>Pagamento por PIX</strong>
              {radio}
            </button>
            <button type="button" data-sub-nav="" data-sub-target="boleto" data-on="false" mix={cartao}>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '52px', height: '52px', borderRadius: '12px', background: A.cinza, flexShrink: 0 })}>
                <span mix={css({ width: '26px', height: '18px', background: `repeating-linear-gradient(90deg, ${A.cyan} 0 2px, transparent 2px 5px)` })} />
              </span>
              <strong mix={css({ flex: 1, fontSize: '16px' })}>Boleto bancário</strong>
              {radio}
            </button>
          </div>

          <div mix={css({ display: 'flex', alignItems: 'baseline' })}>
            <strong mix={titulo}>Quantidade</strong>
            <span data-sub-screen="diag" data-on="true" mix={[num, css({ marginLeft: 'auto', fontSize: '14px', color: A.slate })]}>2761 para o limite</span>
            <span data-sub-screen="baixa" data-on="false" mix={[num, css({ marginLeft: 'auto', fontSize: '14px', color: A.slate })]}>2760 para o limite</span>
          </div>
          <div mix={css({ display: 'flex', alignItems: 'center', gap: '24px' })}>
            <span mix={css({ flex: 1, height: '4px', borderRadius: '999px', background: A.line, position: 'relative' })}>
              <span mix={css({ position: 'absolute', left: 0, top: 0, bottom: 0, width: '8%', borderRadius: '999px', background: A.cyan })} />
              <span mix={css({ position: 'absolute', left: '8%', top: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', borderRadius: '50%', background: A.card, border: `1px solid ${A.lineForte}`, boxShadow: '0 1px 4px rgba(2, 17, 24, 0.25)' })} />
            </span>
            <span mix={css({ display: 'flex', alignItems: 'stretch', borderRadius: '8px', border: `1px solid ${A.lineForte}`, overflow: 'hidden' })}>
              <span mix={[num, css({ padding: '10px 16px', fontSize: '15px' })]}>240</span>
              <span mix={css({ padding: '10px 14px', fontSize: '14px', color: A.muted, borderLeft: `1px solid ${A.lineForte}` })}>und</span>
            </span>
          </div>

          <strong mix={titulo}>Progressão de descontos</strong>
          <div data-sub-screen="diag" data-on="true">
            <div mix={css({ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' })}>
              {faixa('R$ 30,00', 'Até 180', false)}
              {faixa('R$ 27,00', '181 a 300', true)}
              {faixa('R$ 25,00', '301 a 600', false)}
              {faixa('R$ 16,67', '601 a 3000', false)}
            </div>
          </div>

          <div data-sub-screen="diag" data-on="true">
            <div mix={[painel, css({ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '14px' })]}>
              <div mix={css({ display: 'flex', alignItems: 'baseline' })}>
                <span mix={css({ fontSize: '15px' })}>Desconto aplicado</span>
                <strong mix={[num, css({ marginLeft: 'auto', color: A.cyan, fontSize: '17px' })]}>- R$ 720,00</strong>
              </div>
              <div mix={css({ height: '1px', background: A.line })} />
              <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px' })}>
                <span mix={css({ flex: 1 })}>
                  <strong mix={css({ display: 'block', fontSize: '15px' })}>Total da recarga</strong>
                  <span mix={css({ fontSize: '14px', color: A.slate })}>
                    Faltam <strong>61</strong> tokens para pagar <span mix={[num, css({ color: A.cyan, fontWeight: 700 })]}>R$ 25,00</span>
                  </span>
                </span>
                <strong mix={[num, css({ fontSize: '27px', fontWeight: 700 })]}>R$ 6.480,00</strong>
              </div>
            </div>
          </div>
          <div data-sub-screen="baixa" data-on="false">
            <div mix={[painel, css({ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '14px' })]}>
              <div mix={css({ display: 'flex', alignItems: 'baseline' })}>
                <span mix={css({ fontSize: '15px' })}>Desconto aplicado</span>
                <strong mix={[num, css({ marginLeft: 'auto', color: A.cyan, fontSize: '17px' })]}>- R$ 0,00</strong>
              </div>
              <div mix={css({ height: '1px', background: A.line })} />
              <div mix={css({ display: 'flex', alignItems: 'center', gap: '16px' })}>
                <span mix={css({ flex: 1 })}>
                  <strong mix={css({ display: 'block', fontSize: '15px' })}>Total da recarga</strong>
                  <span mix={css({ fontSize: '14px', color: A.slate })}>Você está no último tier de desconto.</span>
                </span>
                <strong mix={[num, css({ fontSize: '27px', fontWeight: 700 })]}>R$ 0,00</strong>
              </div>
            </div>
          </div>

          <div mix={css({ display: 'flex', justifyContent: 'flex-end', gap: '12px' })}>
            <button type="button" data-modal-fecha="" mix={css({ padding: '10px 18px', borderRadius: '8px', border: 'none', background: A.cinza, color: A.text, font: 'inherit', fontSize: '14px', fontWeight: 500, cursor: 'pointer' })}>
              Cancelar
            </button>
            <span data-sub-screen="diag" data-on="true">
              <button type="button" data-modal-fecha="" mix={btnPrimario}>
                Recarregar agora
              </button>
            </span>
            <span data-sub-screen="baixa" data-on="false">
              {/* sem preço configurado: botão desabilitado, não fecha */}
              <span mix={[btnPrimario, css({ opacity: 0.55, cursor: 'not-allowed' })]}>Recarregar agora</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}


// --- Visão geral: dashboard ------------------------------------------------

const NOTICIAS = [
  { emoji: '🎓', titulo: 'Educação Fiscal Gamificada: USP Inova em Formação de Cultura Tributária para Além da Auditoria', fonte: 'Jornal da USP', data: '25/08/2026' },
  { emoji: '🎯', titulo: 'LOA 2027 Incorpora IBS: Governo Projeta Novo Modelo Fiscal em Cenário de Incerteza Normativa', fonte: 'Valor Econômico', data: '25/08/2026' },
  { emoji: '💰', titulo: 'Arrecadação de Julho Sob Pressão: Receita Federal Divulga Números Antes de Feriado de Agosto', fonte: 'www.gov.br', data: '25/08/2026' },
]

function CabecalhoGrafico(icon: IconDef, tituloCard: string, valor: string) {
  return (
    <div mix={css({ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 20px', borderBottom: `1px solid ${A.line}` })}>
      <span mix={css({ display: 'inline-flex', color: A.slate })}>{Icone(icon, 18)}</span>
      <strong mix={css({ flex: 1, fontSize: '14.5px' })}>{tituloCard}</strong>
      <strong mix={[num, css({ fontSize: '19px', color: A.cyan })]}>{valor}</strong>
    </div>
  )
}

function GraficoProcessosMes() {
  return (
    <div mix={painel}>
      {CabecalhoGrafico(ICONE.setaCima, 'Processos (últimos 6 meses completos)', String(PROCESSOS_MES.reduce((s, [, v]) => s + v, 0)))}
      <div mix={css({ display: 'flex', gap: '12px', padding: '20px 24px 16px' })}>
        <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', paddingBottom: '24px' })}>
          {['60', '40', '20', '0'].map((v) => (
            <span mix={[num, css({ fontSize: '11px', color: A.muted })]}>{v}</span>
          ))}
        </div>
        <div mix={css({ flex: 1, display: 'flex', alignItems: 'stretch', gap: '18px' })}>
          {PROCESSOS_MES.map(([mes, valor]) => (
            <div mix={css({ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' })}>
              <div mix={css({ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '190px' })}>
                <strong mix={[num, css({ fontSize: '12.5px' })]}>{valor}</strong>
                <span style={{ height: `${(valor / 60) * 100}%` }} data-ponto-grafico="" data-tip-linhas={`${mes}|${valor}`} mix={css({ width: '70%', borderRadius: '4px 4px 0 0', background: '#56c2e0' })} />
              </div>
              <span mix={css({ fontSize: '11.5px', color: A.slate, whiteSpace: 'nowrap' })}>{mes}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GraficoUf() {
  const max = UF_EMPRESAS[0][1]
  return (
    <div mix={painel}>
      {CabecalhoGrafico(ICONE.grupo, 'Distribuição por UF (empresas no escopo)', String(EMPRESAS.length))}
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '9px', padding: '20px 24px' })}>
        {UF_EMPRESAS.map(([uf, valor]) => (
          <div mix={css({ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '10px', alignItems: 'center' })}>
            <span mix={[num, css({ fontSize: '11.5px', color: A.slate, textAlign: 'right' })]}>{uf}</span>
            <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <span style={{ width: `${(valor / max) * 100}%` }} data-ponto-grafico="" data-tip-linhas={`${uf}|${valor}`} mix={css({ height: '11px', minWidth: '3px', borderRadius: '0 4px 4px 0', background: '#56c2e0' })} />
              <strong mix={[num, css({ fontSize: '11.5px' })]}>{valor}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// pizza em SVG (uma fatia por path, para o hover por fatia); legenda ao lado
// ponytail: rótulos flutuantes em volta das fatias ficam na legenda mesmo
function GraficoPizza(tituloCard: string, valor: string, fatias: Array<[string, number, string]>, baseEmpresas: number) {
  const C = 100
  const R = 96
  let ang = -Math.PI / 2
  const paths = fatias.map(([rotuloFatia, pct, cor], i) => {
    const a0 = ang
    ang += (pct / 100) * Math.PI * 2
    const a1 = ang
    const grande = a1 - a0 > Math.PI ? 1 : 0
    const d = `M ${C} ${C} L ${(C + R * Math.cos(a0)).toFixed(2)} ${(C + R * Math.sin(a0)).toFixed(2)} A ${R} ${R} 0 ${grande} 1 ${(C + R * Math.cos(a1)).toFixed(2)} ${(C + R * Math.sin(a1)).toFixed(2)} Z`
    return (
      <path
        d={d}
        fill={cor}
        stroke="#ffffff"
        stroke-width="2"
        data-ponto-grafico=""
        data-tip-titulo={rotuloFatia}
        data-tip-cor={cor}
        data-tip-linhas={`Empresas|${Math.round((pct / 100) * baseEmpresas)};;Percentual|${pct.toLocaleString('pt-BR')}%;;Posição|#${i + 1} de ${fatias.length}`}
      />
    )
  })
  return (
    <div mix={painel}>
      {CabecalhoGrafico(ICONE.porcentoKpi, tituloCard, valor)}
      <div mix={css({ display: 'flex', alignItems: 'center', gap: '32px', padding: '24px 28px' })}>
        <svg width={190} height={190} viewBox="0 0 200 200" aria-hidden="true" mix={css({ flexShrink: 0 })}>
          {paths}
        </svg>
        <div mix={css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px' })}>
          {fatias.map(([rotuloFatia, pct, cor]) => (
            <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: A.slate })}>
              <span style={{ background: cor }} mix={css({ width: '11px', height: '11px', borderRadius: '3px', flexShrink: 0 })} />
              <strong mix={[num, css({ width: '46px', color: A.text })]}>{pct.toLocaleString('pt-BR')}%</strong>
              <span mix={css({ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{rotuloFatia}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function GraficoParceiros() {
  return (
    <div mix={painel}>
      {CabecalhoGrafico(ICONE.receiptLong, 'Processos por parceiro (vida útil)', String(TOTAL_PROCESSOS))}
      <div mix={css({ display: 'flex', gap: '12px', padding: '20px 24px 34px' })}>
        <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', paddingBottom: '30px' })}>
          {['1000', '500', '0'].map((v) => (
            <span mix={[num, css({ fontSize: '11px', color: A.muted })]}>{v}</span>
          ))}
        </div>
        <div mix={css({ flex: 1, display: 'flex', alignItems: 'stretch', gap: '12px' })}>
          {PROCESSOS_PARCEIRO.map(([parceiro, valor]) => (
            <div mix={css({ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: 0 })}>
              <div mix={css({ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', minHeight: '170px' })}>
                <strong mix={[num, css({ fontSize: '12px' })]}>{valor}</strong>
                <span style={{ height: `${Math.max(2, (valor / 1000) * 100)}%` }} data-ponto-grafico="" data-tip-linhas={`${parceiro}|${valor}`} mix={css({ width: '68%', borderRadius: '4px 4px 0 0', background: A.navy })} />
              </div>
              <span mix={css({ fontSize: '10.5px', color: A.slate, whiteSpace: 'nowrap', transform: 'rotate(-18deg)' })}>{parceiro}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PainelNoticias() {
  return (
    <div mix={painel}>
      <div mix={css({ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 20px', borderBottom: `1px solid ${A.line}` })}>
        <span mix={css({ display: 'inline-flex', color: A.slate })}>{Icone(ICONE.menuTransicao, 18)}</span>
        <strong mix={css({ flex: 1, fontSize: '14.5px' })}>Últimas notícias tributárias</strong>
        <span mix={css({ fontSize: '13px', color: A.muted })}>(últimas 10 notícias)</span>
      </div>
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px 24px' })}>
        {NOTICIAS.map((n) => (
          <div mix={[painel, css({ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '8px' })]}>
            <strong mix={css({ fontSize: '13.5px', lineHeight: 1.45 })}>{n.emoji} {n.titulo}</strong>
            <span mix={css({ display: 'flex', fontSize: '12.5px' })}>
              <span mix={css({ color: A.teal })}>{n.fonte}</span>
              <span mix={[num, css({ marginLeft: 'auto', color: A.muted })]}>{n.data}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}


// --- Novo projeto: passo 2 do diagnóstico tributário -----------------------

const PRODUTOS_DIAG = [
  {
    id:'completo',
    rotulo:'Completo',
    titulo:'Diagnóstico completo',
    desc:'Leitura e estruturação dos dados das obrigações acessórias, processamento e cruzamento com mais de 2.1 bilhões de cenários tributários, construção de relatórios e diagnóstico com 74 painéis de análise de oportunidades.',
    tokens:80,
    meses:80,
    tags:['DCTF', 'DCTFWeb', 'DIRF', 'ECD', 'ECF', 'EFD-C', 'EFD-F', 'MIT', 'PER/DCOMP', 'Pagamentos', 'e-Social']
  },
  {
    id:'fiscal',
    rotulo:'Fiscal',
    titulo:'Diagnóstico fiscal',
    desc:'Leitura e estruturação das obrigações fiscais, cruzamento de cenários tributários e geração de relatórios para identificar oportunidades e inconsistências com foco fiscal.',
    tokens: 73,
    meses: 73,
    tags:['DCTF', 'DCTFWeb', 'ECD', 'ECF', 'EFD-C', 'EFD-F', 'PER/DCOMP', 'Pagamentos', 'e-Social']
  },
  {
    id:'previdenciario',
    rotulo:'Previdenciário',
    titulo:'Diagnóstico previdenciário',
    desc:'Análise das obrigações previdenciárias e folha, com cruzamento de bases do e-Social para identificar recolhimentos indevidos e oportunidades.',
    meses:73,
    tokens:37,
    tags:['DCTFWeb', 'PER/DCOMP', 'Pagamentos', 'e-Social']
  }
]

function TelaNovoDiagnostico() {
  const secaoTitulo = css({ margin: 0, fontSize: '16px', fontWeight: 700, color: A.text })
  const rotuloForm = css({ display: 'block', fontSize: '14px', fontWeight: 500, color: A.text, marginBottom: '6px' })
  const selectFake = css({ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, height: '42px', padding: '0 14px', borderRadius: '8px', border: `1px solid ${A.lineForte}`, background: A.card, fontSize: '14px', color: A.text })
  const cartaoArquivos = css({
    display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', borderRadius: '10px',
    border: `1px solid ${A.line}`, background: A.card, font: 'inherit', color: A.text, cursor: 'pointer', textAlign: 'left',
    '&[data-on="true"]': { borderColor: A.cyan },
  })
  const radinho = (
    <span data-radio="" mix={css({ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, border: `2px solid ${A.lineForte}`, display: 'grid', placeItems: 'center' })}>
      <span data-ponto="" mix={css({ width: '10px', height: '10px', borderRadius: '50%', background: A.cyan, opacity: 0 })} />
    </span>
  )
  const linhaResumo = (icone: IconDef, texto: string) => (
    <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: A.slate })}>
      <span mix={css({ display: 'inline-flex', color: A.slate })}>{Icone(icone, 15)}</span>
      {texto}
    </span>
  )
  const cartaoResumo = (p: (typeof PRODUTOS_DIAG)[number]) => (
    <div mix={css({ display: 'flex', flexDirection: 'column', height: '100%' })}>
      <div mix={[painel, css({ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '14px' })]}>
        <div mix={css({ display: 'flex', alignItems: 'baseline' })}>
          <strong mix={css({ fontSize: '15px' })}>Diagnóstico tributário</strong>
          <strong mix={[num, css({ marginLeft: 'auto', fontSize: '15px' })]}>{p.tokens} tokens</strong>
        </div>
        {linhaResumo(ICONE.menuTransicao, `${p.meses} meses`)}
        {linhaResumo(ICONE.download, 'Baixas automáticas')}
        <div mix={css({ display: 'flex', flexWrap: 'wrap', gap: '6px' })}>
          {p.tags.map((o) => (
            <span mix={tag(A.cinza, A.slate)}>{o}</span>
          ))}
        </div>
      </div>
      <div mix={css({ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' })}>
        <strong mix={secaoTitulo}>Custo do projeto</strong>
        <div mix={[painel, css({ padding: '16px 22px', display: 'flex', alignItems: 'center' })]}>
          <span mix={css({ fontSize: '14px', color: A.slate })}>Total de tokens</span>
          <strong mix={[num, css({ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' })]}>
            {Icone(ICONE.token, 16)} {p.tokens} tokens
          </strong>
        </div>
      </div>
    </div>
  )
  return (
    <div data-app-screen="novo-diagnostico" data-on="false" data-sub-scope="" mix={telaRaiz}>
      <div mix={css({ flex: 1, minWidth: 0, padding: '48px 56px', display: 'flex', flexDirection: 'column', gap: '32px', borderRight: `1px solid ${A.line}` })}>
        <div>
          <h3 mix={css({ margin: 0, fontSize: '24px', fontWeight: 700, color: A.text })}>Configure o diagnóstico tributário</h3>
          <p mix={css({ margin: '6px 0 0', fontSize: '15px', color: A.muted })}>Configure os dados para o processamento tributário e identificação de oportunidades</p>
        </div>

        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
          <strong mix={secaoTitulo}>Selecione o produto</strong>
          <div mix={css({ display: 'flex', gap: '32px' })}>
            {PRODUTOS_DIAG.map((p, i) => (
              <button
                type="button"
                data-sub-nav=""
                data-sub-target={p.id}
                data-on={i === 0 ? 'true' : 'false'}
                mix={css({ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', border: 'none', background: 'none', font: 'inherit', color: A.text, cursor: 'pointer' })}
              >
                {radinho}
                {p.rotulo}
              </button>
            ))}
          </div>
          {PRODUTOS_DIAG.map((p, i) => (
            <div data-sub-screen={p.id} data-on={i === 0 ? 'true' : 'false'}>
              <div mix={[painel, css({ padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: '8px' })]}>
                <strong mix={css({ fontSize: '19px' })}>{p.titulo}</strong>
                <p mix={css({ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: A.slate })}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
          <strong mix={secaoTitulo}>Disponibilização dos arquivos</strong>
          {/* escopo aninhado: Baixa/Upload só alternam a própria seleção */}
          <div data-sub-scope="" mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' })}>
            {/* ponytail: robô/mãozinha aproximados com ícones do set */}
            <button type="button" data-sub-nav="" data-sub-target="baixa" data-on="false" mix={cartaoArquivos}>
              <span data-caixa-icone="" mix={css({ display: 'grid', placeItems: 'center', width: '56px', height: '56px', borderRadius: '10px', background: A.cyanSoft, color: A.cyan, flexShrink: 0, transition: 'background 140ms ease, color 140ms ease' })}>
                {Icone(ICONE.baixando, 24)}
              </span>
              <span mix={css({ flex: 1, minWidth: 0 })}>
                <strong mix={css({ display: 'block', fontSize: '15.5px', marginBottom: '4px' })}>Baixa automática</strong>
                <span mix={css({ fontSize: '13.5px', color: A.slate })}>Robôs coletam as obrigações acessórias direto das entidades oficiais.</span>
              </span>
              {radinho}
            </button>
            <button type="button" data-sub-nav="" data-sub-target="upload" data-on="false" mix={cartaoArquivos}>
              <span data-caixa-icone="" mix={css({ display: 'grid', placeItems: 'center', width: '56px', height: '56px', borderRadius: '10px', background: A.cyanSoft, color: A.cyan, flexShrink: 0, transition: 'background 140ms ease, color 140ms ease' })}>
                {Icone(ICONE.exportar, 22)}
              </span>
              <span mix={css({ flex: 1, minWidth: 0 })}>
                <strong mix={css({ display: 'block', fontSize: '15.5px', marginBottom: '4px' })}>Upload manual</strong>
                <span mix={css({ fontSize: '13.5px', color: A.slate })}>Você faz o upload de todos os documentos necessários para geração do diagnóstico.</span>
              </span>
              {radinho}
            </button>
          </div>
        </div>

        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
          <strong mix={secaoTitulo}>Dados do projeto</strong>
          <div>
            <span mix={rotuloForm}>Cliente</span>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '14px' })}>
              <span mix={selectFake}>
                <span mix={[num, css({ flex: 1 })]}>01.234.567/0001-01 - EMPRESA EXEMPLO 1</span>
                {Icone(ICONE.fechar, 10)}
                {Icone(ICONE.chevronBaixo, 12)}
              </span>
              <span mix={css({ fontSize: '14px', fontWeight: 600, color: A.slate })}>OU</span>
              <span mix={btnContorno}>{Icone(ICONE.add, 12)} Criar cliente</span>
            </div>
          </div>
          <div mix={css({ display: 'grid', gridTemplateColumns: '220px 220px', gap: '24px' })}>
            <div>
              <span mix={rotuloForm}>Competência inicial</span>
              <span mix={selectFake}>
                <span mix={[num, css({ flex: 1 })]}>01/2020</span>
                {Icone(ICONE.menuTransicao, 15)}
              </span>
            </div>
            <div>
              <span mix={rotuloForm}>Competência final</span>
              <span mix={selectFake}>
                <span mix={[num, css({ flex: 1 })]}>08/2026</span>
                {Icone(ICONE.menuTransicao, 15)}
              </span>
            </div>
          </div>
        </div>

        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
          <strong mix={secaoTitulo}>Credenciais de acesso</strong>
          <div>
            <span mix={rotuloForm}>Certificado digital</span>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '14px' })}>
              <span mix={selectFake}>
                <span mix={css({ flex: 1 })}>CERTIFICADO EXEMPLO 1</span>
                {Icone(ICONE.fechar, 10)}
                {Icone(ICONE.chevronBaixo, 12)}
              </span>
              <span mix={css({ fontSize: '14px', fontWeight: 600, color: A.slate })}>OU</span>
              <span mix={btnContorno}>{Icone(ICONE.add, 12)} Enviar certificado</span>
            </div>
          </div>
        </div>

        <div mix={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '32px' })}>
          <button type="button" data-app-nav="" data-target="novo" mix={[btnContorno, css({ background: A.card, color: A.slate, borderColor: A.cinza })]}>
            Voltar
          </button>
          <button type="button" data-app-nav="" data-target="projetos" mix={btnPrimario}>
            Avançar
            {Icone(ICONE.chevronDir, 14)}
          </button>
        </div>
      </div>

      <aside mix={css({ width: '470px', flexShrink: 0, position: 'sticky', top: 0, height: 'var(--app-h, 1038px)', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: '24px' })}>
        <strong mix={css({ fontSize: '17px' })}>Resumo do projeto</strong>
        <div mix={css({ flex: 1, minHeight: 0 })}>
          <div data-sub-screen="vazio" data-on="true" mix={css({ height: '100%' })}>
            <div mix={css({ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px', textAlign: 'center' })}>
              <span style={{ filter: 'grayscale(1)', opacity: 0.65 }} mix={css({ fontSize: '40px' })}>👆</span>
              <span mix={css({ fontSize: '16px', fontWeight: 600, color: A.slate, maxWidth: '220px' })}>Selecione o tipo de projeto e configurações.</span>
            </div>
          </div>
          {PRODUTOS_DIAG.map((p) => (
            <div data-sub-screen={p.id} data-on="false" mix={css({ height: '100%' })}>{cartaoResumo(p)}</div>
          ))}
        </div>
      </aside>
    </div>
  )
}


// --- Diagnóstico Tributário: tela de ICMS --- //

const MENU_DIAGNOSTICO: Array<{ label: string; icon: IconDef; target?: string }> = [
  { label: 'Visão Geral', icon: ICONE.menuDashboard, target: 'diagnostico-visao' },
  { label: 'ICMS', icon: ICONE.menuCompras, target: 'diagnostico-icms' },
  { label: 'IPI', icon: ICONE.menuMemoria, target: 'diagnostico-ipi' },
  { label: 'PIS/COFINS', icon: ICONE.pessoas, target: 'diagnostico-piscofins' },
  { label: 'Previdenciário', icon: ICONE.usuarios, target: 'diagnostico-previdenciario' },
  { label: 'Reforma Tributária', icon: ICONE.menuTransicao, target: 'diagnostico-reforma' },
  { label: 'Teses', icon: ICONE.checklist, target: 'diagnostico-teses' },
  { label: 'IRPJ/CSLL', icon: ICONE.menuMemoria, target: 'diagnostico-irpjcsll' },
]

function MenuDiagnostico(telaAtiva: string) {
  const itemMenu = (ativo: boolean) =>
    css({
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%',
      padding: '10px 8px', borderRadius: '10px', border: 'none', background: ativo ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
      font: 'inherit', fontSize: '11px', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase',
      textAlign: 'center', lineHeight: 1.3, color: ativo ? A.cyanVivo : A.lineForte, cursor: 'pointer',
      '&:hover': { background: 'rgba(255, 255, 255, 0.05)' },
      '&[data-on="true"]': { background: 'rgba(255, 255, 255, 0.08)', color: A.cyanVivo },
    })
  return (
    <aside mix={css({ width: '160px', flexShrink: 0, padding: '16px 12px', position: 'sticky', top: 0, alignSelf: 'flex-start', '@media (max-width: 1023px)': { display: 'none' } })}>
      <div mix={css({ display: 'flex', flexDirection: 'column', gap: '18px', padding: '20px 10px 14px', borderRadius: '16px', background: `linear-gradient(186deg, ${A.ink}, ${A.navy})`, boxShadow: '0 12px 28px rgba(2, 17, 24, 0.35)' })}>
        <p mix={css({ margin: 0, width: '100%', textAlign: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: A.faint })}>
          Diagnóstico Tributário
        </p>
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' })}>
          {MENU_DIAGNOSTICO.map((item) =>
            item.target ? (
              <button type="button" data-app-nav="" data-target={item.target} data-on={item.target === telaAtiva ? 'true' : 'false'} mix={itemMenu(false)}>
                {Icone(item.icon, 20)}
                {item.label}
              </button>
            ) : (
              <span mix={itemMenu(false)}>
                {Icone(item.icon, 20)}
                {item.label}
              </span>
            ),
          )}
        </div>
        <div mix={css({ height: '1px', background: 'rgba(255, 255, 255, 0.14)' })} />
        <div mix={css({ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' })}>
          <button
            type="button"
            data-app-nav=""
            data-target="diagnostico-analises"
            data-on={telaAtiva === 'diagnostico-analises' ? 'true' : 'false'}
            mix={[itemMenu(false), css({ textTransform: 'none', fontSize: '12px' })]}
          >
            {Icone(ICONE.busca, 20)}
            Minhas análises
          </button>
          <button
            type="button"
            data-app-nav=""
            data-target="diagnostico-apresentacoes"
            data-on={telaAtiva === 'diagnostico-apresentacoes' ? 'true' : 'false'}
            mix={[itemMenu(false), css({ textTransform: 'none', fontSize: '12px' })]}
          >
            {Icone(ICONE.usuarios, 20)}
            Apresentações
          </button>
        </div>
      </div>
    </aside>
  )
}

// card flutuante "agende com um especialista", usado sobre conteúdo desfocado
function ConviteDiag() {
  return (
    <div mix={css({ position: 'absolute', inset: 0, zIndex: 5, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '150px' })}>
      <div mix={[painel, css({ maxWidth: '430px', textAlign: 'center', padding: '36px 32px', background: A.card, boxShadow: '0 24px 56px rgba(2, 17, 24, 0.22)' })]}>
        <span mix={css({ display: 'grid', placeItems: 'center', width: '48px', height: '48px', margin: '0 auto 16px', borderRadius: '12px', background: A.cyanSoft, color: A.cyan })}>
          {Icone(ICONE.play, 24)}
        </span>
        <strong mix={css({ display: 'block', fontSize: '18px', marginBottom: '8px' })}>Quer ver esta área em ação?</strong>
        <p mix={css({ margin: '0 0 20px', fontSize: '14px', lineHeight: 1.6, color: A.muted })}>
          Agende com um dos nossos especialistas e veja tudo o que a plataforma pode fazer por você.
        </p>
        <a href="#contato" mix={btnPrimario}>Agendar apresentação</a>
      </div>
    </div>
  )
}

// áreas do menu sem demo: conteúdo fake desfocado + convite pra agendar
function TelaDiagnosticoTeaser(id: string, rotulo: string) {
  const kpisFake = ['R$ 1.186.514,96', 'R$ 362.562,01', 'R$ 128.502,87', 'R$ 51.211,37']
  const barrasFake = [42, 68, 55, 80, 61, 74, 48, 88, 66, 58, 76, 52]
  return (
    <div data-app-screen={id} data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico(id)}
      <div mix={[colConteudo, css({ paddingLeft: '16px' })]}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative' })}>
            <h3 mix={h1}>Diagnóstico de {rotulo}</h3>
            <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
              {Icone(ICONE.home, 14)}
              {Icone(ICONE.chevronDir, 9)}
              {rotulo}
            </span>
          </div>

          <div mix={css({ position: 'relative', minHeight: '540px' })}>
            <div
              aria-hidden="true"
              mix={css({ display: 'flex', flexDirection: 'column', gap: '16px', filter: 'blur(7px)', opacity: 0.65, pointerEvents: 'none', userSelect: 'none' })}
            >
              <div mix={css({ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' })}>
                {kpisFake.map((v, i) => (
                  <div mix={[painel, css({ padding: '18px 20px', background: A.card })]}>
                    <span mix={css({ display: 'block', fontSize: '12px', color: A.muted, marginBottom: '6px' })}>
                      {['Possíveis Oportunidades', 'Créditos Apurados', 'Débitos do Período', 'Saldo a Recuperar'][i]}
                    </span>
                    <strong mix={[num, css({ fontSize: '18px' })]}>{v}</strong>
                  </div>
                ))}
              </div>
              <div mix={css({ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px' })}>
                <div mix={[painel, css({ background: A.card })]}>
                  <div mix={tituloGrafico}>Evolução mensal</div>
                  <div mix={css({ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '220px', padding: '24px 20px' })}>
                    {barrasFake.map((h) => (
                      <span style={{ height: `${h}%` }} mix={css({ flex: 1, borderRadius: '4px 4px 0 0', background: '#56c2e0' })} />
                    ))}
                  </div>
                </div>
                <div mix={[painel, css({ background: A.card })]}>
                  <div mix={tituloGrafico}>Por estabelecimento</div>
                  <div mix={css({ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px 20px' })}>
                    {[86, 64, 47, 33, 21, 12].map((w) => (
                      <span style={{ width: `${w}%` }} mix={css({ height: '12px', borderRadius: '0 4px 4px 0', background: A.navy })} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {ConviteDiag()}
          </div>
        </div>
      </div>
    </div>
  )
}

const ICMS_EXPLORAR = {
  titulo: 'Possibilidades a Explorar',
  colunas: ['', '2021', '2022', 'Total'],
  linhas: [
    ['Uso/Consumo e Combus.', 'R$ 127.940,21', 'R$ 361.113,51', 'R$ 1.155.957,16'],
    ['Energia Elétrica', 'R$ 562,66', 'R$ 1.448,42', 'R$ 10.859,78'],
  ],
  total: ['Total', 'R$ 128.502,87', 'R$ 362.562,01', 'R$ 1.166.816,94'],
}

const ICMS_OPORTUNIDADES = {
  titulo: 'Possíveis Oportunidades',
  colunas: ['', '2021', '2022', 'Total'],
  linhas: [
    ['Fretes', 'R$ 7.280,35', 'R$ 11.234,10', 'R$ 51.211,37'],
    ['Insumo/Revenda', 'R$ 78,38', 'R$ 244,00', 'R$ 655.233,49'],
    ['CIAP', 'R$ 1.152,02', 'R$ 649,89', 'R$ 8.235,37'],
    ['Importado', 'R$ 239,77', 'R$ 0,00', 'R$ 60.116,66'],
    ['Débitos indevidos', 'R$ 2.324,12', 'R$ 960,04', 'R$ 411.718,07'],
  ],
  total: ['Total', 'R$ 11.074,64', 'R$ 13.088,03', 'R$ 1.186.514,96'],
}

const ICMS_EMPRESAS = {
  titulo: 'Empresas',
  colunas: ['', 'Possíveis Oportunidades', 'Total'],
  linhas: [
    ['INNOVATIVE SOLUTIONS TEC LTDA', 'R$ 1.114.388,46', 'R$ 1.868.728,41'],
    ['INNOVATIVE SOLUTIONS TECNOLOGIA LTDA', 'R$ 63.891,14', 'R$ 476.368,13'],
  ],
  total: ['Total', 'R$ 1.178.279,60', 'R$ 2.345.096,54'],
}

const ICMS_ESTABELECIMENTOS = {
  titulo: 'Estabelecimentos',
  colunas: ['cnpj', 'nome_empresa', 'vlr_item'],
  linhas: [
    ['12345678000190', 'INNOVATIVE SOLUTIONS TEC LTDA', '841.650'],
    ['12345678000190', 'INNOVATIVE SOLUTIONS TECNOLOGIA LTDA', '357.845'],
    ['12345678000271', 'INNOVATIVE SOLUTIONS TECNOLOGIA LTDA', '119.194'],
    ['12345678000271', 'INNOVATIVE SOLUTIONS TEC LTDA', '69.865'],
  ],
  total: ['', '', '1.388.554'],
}

function TabelaDiag(dados: { titulo: string; colunas: string[]; linhas: string[][]; total: string[] }, comCaixa = false) {
  const th = css({ padding: '10px 16px', fontSize: '13.5px', fontWeight: 700, color: A.text, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${A.line}` })
  const td = css({ padding: '10px 16px', fontSize: '13.5px', color: A.slate, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px', borderBottom: `1px solid ${A.cinza}` })
  const tdTotal = css({ padding: '11px 16px', fontSize: '13.5px', fontWeight: 700, color: '#ffffff', background: A.navy, whiteSpace: 'nowrap' })
  const botaoIcone = css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '6px', color: A.muted, cursor: 'pointer', '&:hover': { background: A.bg } })
  return (
    <div mix={[painel, css({ display: 'flex', flexDirection: 'column' })]}>
      <div mix={css({ display: 'flex', alignItems: 'center', padding: '14px 16px' })}>
        <strong mix={css({ flex: 1, fontSize: '14.5px' })}>{dados.titulo}</strong>
        <span mix={botaoIcone}>{Icone(ICONE.filtro, 13)}</span>
        <span mix={botaoIcone}>{Icone(ICONE.download, 14)}</span>
        <span mix={botaoIcone}>{Icone(ICONE.exportar, 13)}</span>
      </div>
      <div mix={css({ overflowX: 'auto' })}>
        <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
          <thead>
            <tr>
              {comCaixa ? <th mix={[th, css({ width: '40px' })]} /> : null}
              {dados.colunas.map((c, i) => (
                <th mix={th}>
                  {c}
                  {i === 1 && c !== 'nome_empresa' ? <span mix={css({ marginLeft: '6px', display: 'inline-flex', color: A.muted })}>{Icone(ICONE.setaBaixo, 10)}</span> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.linhas.map((linha) => (
              <tr>
                {comCaixa ? <td mix={td}>{Caixa(false)}</td> : null}
                {linha.map((valor, i) => (
                  <td mix={[td, i === 0 && !comCaixa ? css({ color: A.text }) : num, i === linha.length - 1 ? css({ fontWeight: 700, color: A.text }) : css({})]}>{valor}</td>
                ))}
              </tr>
            ))}
            <tr>
              {comCaixa ? <td mix={tdTotal} /> : null}
              {dados.total.map((valor) => (
                <td mix={[tdTotal, num]}>{valor}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function AbaDiag(rotulo: string, ativa: boolean, comSeta: boolean) {
  return (
    <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: ativa ? A.cyan : A.slate, cursor: 'pointer' })}>
      {rotulo}
      {comSeta ? Icone(ICONE.chevronBaixo, 10) : null}
    </span>
  )
}

function KpiDiag(rotulo: string, valor: string, refinada?: { rotulo: string; valor: string; ruim?: boolean; bom?: boolean; traco?: boolean; campo?: string }, valorGrande = false, campo = '') {
  return (
    <div mix={[painel, css({ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' })]}>
      {QuadriculadoCard()}
      <div mix={css({ position: 'relative', flex: 1, padding: '22px 24px 26px' })}>
        <span mix={css({ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '6px' })}>{rotulo}</span>
        <strong data-campo={campo} mix={[num, css({ fontSize: valorGrande ? '24px' : '19px', color: valorGrande ? A.cyan : A.text })]}>{valor}</strong>
      </div>
      {refinada ? (
        <div mix={css({ position: 'relative', borderTop: `1px solid ${A.line}` })}>
          <span mix={css({ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', display: 'grid', placeItems: 'center', width: '28px', height: '28px', borderRadius: '50%', background: A.card, border: `1px solid ${A.line}`, color: A.muted })}>
            {Icone(ICONE.chevronBaixo, 10)}
          </span>
          <div mix={css({ display: 'flex', alignItems: 'center', gap: '10px', padding: '18px 24px', background: refinada.ruim ? 'linear-gradient(180deg, rgba(254, 226, 226, 0), #fee2e2)' : refinada.bom ? 'linear-gradient(180deg, rgba(220, 252, 231, 0), #dcfce7)' : 'transparent' })}>
            <span mix={css({ flex: 1, fontSize: '13px', color: A.slate })}>{refinada.rotulo}</span>
            <strong data-campo={refinada.campo || ''} mix={[num, css({ fontSize: '15px', color: refinada.ruim ? A.red : refinada.bom ? A.green : A.text })]}>{refinada.valor}</strong>
            {refinada.ruim ? (
              <span mix={css({ display: 'inline-flex', color: A.red })}>{Icone(ICONE.setaBaixo, 13)}</span>
            ) : refinada.bom ? (
              <span mix={css({ display: 'inline-flex', color: A.green })}>{Icone(ICONE.setaCima, 13)}</span>
            ) : refinada.traco ? (
              <span mix={css({ color: A.muted })}>−</span>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function TelaDiagnosticoIcms() {
  return (
    <div data-app-screen="diagnostico-icms" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-icms')}
      <div mix={[colConteudo, css({ paddingLeft: '16px', position: 'relative' })]}>
        {ConviteDiag()}
        <div data-diag-borrado="" mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Diagnóstico de ICMS</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                ICMS
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px' })]}>
            {AbaDiag('Resumo', true, false)}
            {AbaDiag('Fluxo Operacional', false, true)}
            {AbaDiag('Entradas', false, true)}
            {AbaDiag('Saídas', false, true)}
            <span mix={css({ marginLeft: 'auto', display: 'flex', gap: '8px' })}>
              <span mix={btnContorno}>{Icone(ICONE.download, 14)} Exportar</span>
              <span mix={btnPrimario}>{Icone(ICONE.checklist, 14)} Gerar retificação</span>
            </span>
          </div>

          {BannerAnalise()}

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' })}>
            {KpiDiag('Possível Oportunidades Analisar (Prévia)', DIAGS[0].icmsPrev1, { rotulo: 'Possível Oportunidades Analisar (Refinada)', valor: 'R$ 0,00', ruim: true }, false, 'icmsPrev1')}
            {KpiDiag('Possíveis Oportunidades (Prévia)', DIAGS[0].icmsPrev2, { rotulo: 'Possíveis Oportunidades (Refinada)', valor: '-' }, false, 'icmsPrev2')}
            {KpiDiag('ICMS a Recolher', DIAGS[0].kpiIcms, undefined, true, 'kpiIcms')}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' })}>
            {TabelaDiag(ICMS_EXPLORAR)}
            {TabelaDiag(ICMS_OPORTUNIDADES)}
            {TabelaDiag(ICMS_EMPRESAS)}
            {TabelaDiag(ICMS_ESTABELECIMENTOS, true)}
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaDiagnosticoIpi() {
  return (
    <div data-app-screen="diagnostico-ipi" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-ipi')}
      <div mix={[colConteudo, css({ paddingLeft: '16px', position: 'relative' })]}>
        {ConviteDiag()}
        <div data-diag-borrado="" mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Diagnóstico de IPI</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                IPI
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px' })]}>
            {AbaDiag('Resumo', true, false)}
            {AbaDiag('Fluxo Operacional', false, true)}
            {AbaDiag('Entradas', false, true)}
            {AbaDiag('Saídas', false, true)}
            <span mix={css({ marginLeft: 'auto', display: 'flex', gap: '8px' })}>
              <span mix={btnContorno}>{Icone(ICONE.download, 14)} Exportar</span>
              <span mix={btnPrimario}>{Icone(ICONE.checklist, 14)} Gerar retificação</span>
            </span>
          </div>

          {BannerAnalise()}

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' })}>
            {KpiDiag('Possível Oportunidades (Prévia)', 'R$ 0,00', { rotulo: 'Possível Oportunidades (Refinada)', valor: 'R$ 0,00', traco: true })}
            {KpiDiag('Oportunidades Analisar (Prévia)', '—', { rotulo: 'Possível Oportunidades Analisar (Refinada)', valor: 'R$ 0,00' })}
            {KpiDiag('Pagamentos Efetuados', 'R$ 0,00', { rotulo: 'Compensações Efetuadas (DCTF)', valor: DIAGS[0].ipiComp, bom: true, campo: 'ipiComp' })}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' })}>
            {KpiDiag('Compensações Efetuadas (DCTF)', DIAGS[0].ipiComp, undefined, false, 'ipiComp')}
          </div>
        </div>
      </div>
    </div>
  )
}

// tabelas do PIS/COFINS (no app real aparecem com erro de carregamento;
// aqui preenchidas — colunas somam certinho e o total geral bate com o KPI)
const PISCOFINS_REGIME = {
  titulo: 'Regime de Incidência - PIS/COFINS',
  colunas: ['', '2021', '2022', 'Total'],
  linhas: [
    ['Não Cumulativo', 'R$ 3.981.220,14', 'R$ 4.427.903,66', 'R$ 21.409.113,05'],
    ['Cumulativo', 'R$ 812.334,90', 'R$ 745.118,22', 'R$ 3.902.446,78'],
    ['Monofásico', 'R$ 401.876,55', 'R$ 388.204,17', 'R$ 1.943.021,88'],
    ['Alíquota Zero', 'R$ 118.905,73', 'R$ 96.417,28', 'R$ 512.334,60'],
  ],
  total: ['Total', 'R$ 5.314.337,32', 'R$ 5.657.643,33', 'R$ 27.766.916,31'],
}

const PISCOFINS_OPORTUNIDADES = {
  titulo: 'Possíveis Oportunidades',
  colunas: ['', '2021', '2022', 'Total'],
  linhas: [
    ['Insumos (Créditos)', 'R$ 21.310,45', 'R$ 47.612,80', 'R$ 141.520,66'],
    ['Monofásico', 'R$ 9.884,12', 'R$ 15.006,91', 'R$ 78.410,22'],
    ['Exclusão ICMS da Base', 'R$ 3.115,08', 'R$ 6.240,55', 'R$ 28.486,52'],
  ],
  total: ['Total', 'R$ 34.309,65', 'R$ 68.860,26', 'R$ 248.417,40'],
}

function BannerAnaliseAtiva() {
  const botaoIcone = css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '6px', color: A.muted, cursor: 'pointer', '&:hover': { background: A.bg } })
  return (
    <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px' })]}>
      <span mix={css({ display: 'grid', placeItems: 'center', width: '38px', height: '38px', borderRadius: '10px', background: '#56c2e0', color: '#fff', flexShrink: 0 })}>
        {Icone(ICONE.pessoas, 18)}
      </span>
      <strong mix={css({ flex: 1, fontSize: '14.5px' })}>teste mkt</strong>
      <span mix={tag(A.cinza, A.slate)}>Aprovado pelo cliente</span>
      <span mix={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
        <span mix={css({ width: '34px', height: '34px', borderRadius: '50%', background: A.lineForte, flexShrink: 0 })} />
        <span mix={css({ lineHeight: 1.35 })}>
          <span mix={css({ display: 'block', fontSize: '13px', color: A.slate })}>Última atualização</span>
          <strong mix={[num, css({ fontSize: '13px' })]}>25/08/2026 - 08:44h</strong>
        </span>
      </span>
      <span mix={css({ width: '1px', alignSelf: 'stretch', background: A.line })} />
      <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
        <span mix={botaoIcone}>{Icone(ICONE.historico, 16)}</span>
        <span mix={botaoIcone}>{Icone(ICONE.editar, 15)}</span>
        <span mix={css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '50%', border: `1.5px solid ${A.red}`, color: A.red, cursor: 'pointer' })}>
          {Icone(ICONE.fechar, 11)}
        </span>
      </span>
    </div>
  )
}

function TelaDiagnosticoPisCofins() {
  return (
    <div data-app-screen="diagnostico-piscofins" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-piscofins')}
      <div mix={[colConteudo, css({ paddingLeft: '16px', position: 'relative' })]}>
        {ConviteDiag()}
        <div data-diag-borrado="" mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Diagnóstico de PIS/COFINS</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                PIS/COFINS
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px' })]}>
            {AbaDiag('Resumo', true, false)}
            {AbaDiag('Fluxo Operacional', false, true)}
            {AbaDiag('Entradas', false, true)}
            {AbaDiag('Saídas', false, true)}
            <span mix={css({ marginLeft: 'auto', display: 'flex', gap: '8px' })}>
              <span mix={btnContorno}>{Icone(ICONE.download, 14)} Exportar</span>
              <span mix={btnPrimario}>{Icone(ICONE.checklist, 14)} Gerar retificação</span>
            </span>
          </div>

          {BannerAnaliseAtiva()}

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' })}>
            {KpiDiag('Possível Oportunidades (Prévia)', DIAGS[0].pcPrev, { rotulo: 'Possível Oportunidades (Refinada)', valor: 'R$ 0,00', ruim: true }, false, 'pcPrev')}
            {KpiDiag('Oportunidades Analisar (Prévia)', 'R$ 0,00', { rotulo: 'Possível Oportunidades Analisar (Refinada)', valor: 'R$ 0,00', traco: true })}
            {KpiDiag('Pagamentos PIS/COFINS', '—', { rotulo: 'Compensações Efetuadas (DCTF)', valor: '—', traco: true })}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' })}>
            {TabelaDiag(PISCOFINS_REGIME)}
            {TabelaDiag(PISCOFINS_OPORTUNIDADES)}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' })}>
            {KpiDiag('Compensações Efetuadas (DCTF)', '—')}
          </div>
        </div>
      </div>
    </div>
  )
}

function TabelaPrev(
  titulo: string,
  colunas: string[],
  linhas: string[][],
  opts: { expansor?: boolean; setaCol1?: boolean; pager?: boolean; campos?: Array<string | undefined>; alturaMin?: string } = {},
) {
  const th = css({ padding: '10px 16px', fontSize: '13.5px', fontWeight: 700, color: A.text, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${A.line}` })
  const td = css({ padding: '10px 16px', fontSize: '13.5px', color: A.slate, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px', borderBottom: `1px solid ${A.cinza}` })
  const botaoIcone = css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '6px', color: A.muted, cursor: 'pointer', '&:hover': { background: A.bg } })
  return (
    <div mix={[painel, css({ display: 'flex', flexDirection: 'column' }), opts.alturaMin ? css({ minHeight: opts.alturaMin }) : css({})]}>
      <div mix={css({ display: 'flex', alignItems: 'center', padding: '14px 16px' })}>
        <strong mix={css({ flex: 1, fontSize: '14.5px' })}>{titulo}</strong>
        <span mix={botaoIcone}>{Icone(ICONE.filtro, 13)}</span>
        <span mix={botaoIcone}>{Icone(ICONE.download, 14)}</span>
        <span mix={botaoIcone}>{Icone(ICONE.expandir, 13)}</span>
      </div>
      <div mix={css({ overflowX: 'auto' })}>
        <table mix={css({ borderCollapse: 'collapse', width: '100%' })}>
          <thead>
            <tr>
              <th mix={[th, css({ width: '40px' })]} />
              {opts.expansor ? <th mix={[th, css({ width: '28px' })]} /> : null}
              {colunas.map((c, i) => (
                <th mix={th}>
                  {c}
                  {i === 0 && opts.setaCol1 ? <span mix={css({ marginLeft: '6px', display: 'inline-flex', color: A.muted })}>{Icone(ICONE.setaCima, 10)}</span> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {linhas.map((linha) => (
              <tr>
                <td mix={td}>{Caixa(false)}</td>
                {opts.expansor ? <td mix={[td, css({ color: A.muted })]}>{Icone(ICONE.chevronDir, 10)}</td> : null}
                {linha.map((valor, i) => (
                  <td data-campo={opts.campos?.[i] || ''} mix={[td, num]}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {opts.pager ? (
        <div mix={css({ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '14px', padding: '10px 16px', fontSize: '13.5px', color: A.muted })}>
          <span>«</span>
          <span>‹</span>
          <strong mix={[num, css({ color: A.cyan })]}>1</strong>
          <span mix={num}>2</span>
          <span>›</span>
          <span>»</span>
          <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 10px', borderRadius: '6px', border: `1px solid ${A.lineForte}`, color: A.slate })}>
            20 {Icone(ICONE.chevronBaixo, 9)}
          </span>
        </div>
      ) : null}
    </div>
  )
}

function TelaDiagnosticoPrev() {
  const d0 = DIAGS[0]
  return (
    <div data-app-screen="diagnostico-previdenciario" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-previdenciario')}
      <div mix={[colConteudo, css({ paddingLeft: '16px', position: 'relative' })]}>
        {ConviteDiag()}
        <div data-diag-borrado="" mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Diagnóstico de PREVIDENCIÁRIO</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                PREVIDENCIÁRIO
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px' })]}>
            {AbaDiag('Resumo', true, false)}
            {AbaDiag('Verbas Indenizatórias', false, true)}
            <span mix={css({ marginLeft: 'auto', display: 'flex', gap: '8px' })}>
              <span mix={btnContorno}>{Icone(ICONE.download, 14)} Exportar</span>
              <span mix={btnPrimario}>{Icone(ICONE.checklist, 14)} Gerar retificação</span>
            </span>
          </div>

          {BannerAnalise()}

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' })}>
            {TabelaPrev(
              'Relação PER/DCOMP - INSS',
              ['Período', 'razao_social'],
              ['2022-06-01', '2021-01-01', '2018-07-01', '2022-04-01', '2020-05-01', '2021-02-01', '2020-07-01', '2019-12-01'].map((p) => [p, '']),
              { expansor: true },
            )}
            {KpiDiag('Recolhimentos INSS', d0.inss, undefined, false, 'inss')}
            {KpiDiag('Verbas Indenizatórias', 'R$ 0,00', { rotulo: 'Refinado', valor: 'R$ 0,00', traco: true })}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.1fr 1.1fr', gap: '16px', alignItems: 'start' })}>
            {TabelaPrev(
              'Desoneração Folha',
              ['Período', 'Desoneração Folha'],
              ['2018', '2019', '2020', '2021', '2022'].map((ano) => [ano, '0 - Não aplicável']),
              { expansor: true, setaCol1: true },
            )}
            {TabelaPrev(
              'Alíquotas RAT e FAP',
              ['CNAE Preponderante', 'Alíquota RAT', 'Alíquota FAP'],
              Array.from({ length: 9 }, (_, i) => [d0.cnaePrep, i === 2 ? '2' : '', i === 2 ? '0,5' : '']),
              { campos: ['cnaePrep'] },
            )}
            {TabelaPrev(
              'Lotações',
              ['Raíz CNPJ', 'Código Lotação', 'Início Validade'],
              [
                [d0.cnpjRaiz, '1', '2022-06-01'],
                [d0.cnpjRaiz, '1', '2024-03-01'],
                [d0.cnpjRaiz, '1', '2025-01-01'],
                [d0.cnpjRaiz, '1', '2025-10-01'],
                [d0.cnpjRaiz, '1', '2024-01-01'],
                [d0.cnpjRaiz, 'E001', '2022-05-01'],
              ],
              { campos: ['cnpjRaiz'], pager: true },
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function TelaDiagnosticoIrpj() {
  return (
    <div data-app-screen="diagnostico-irpjcsll" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-irpjcsll')}
      <div mix={[colConteudo, css({ paddingLeft: '16px', position: 'relative' })]}>
        {ConviteDiag()}
        <div data-diag-borrado="" mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Diagnóstico de IRPJ/CSLL</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                IRPJ/CSLL
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>

          <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px' })]}>
            {AbaDiag('Resumo', true, false)}
            {AbaDiag('Fluxo Operacional', false, true)}
            {AbaDiag('CRÉDITOS', false, true)}
            <span mix={css({ marginLeft: 'auto', display: 'flex', gap: '8px' })}>
              <span mix={btnContorno}>{Icone(ICONE.download, 14)} Exportar</span>
              <span mix={btnPrimario}>{Icone(ICONE.checklist, 14)} Gerar retificação</span>
            </span>
          </div>

          {BannerAnalise()}

          {/* como no app real: um único card "Tabela" alto, na metade esquerda */}
          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' })}>
            {TabelaPrev(
              'Tabela',
              ['movimentacao', 'cnpj'],
              [['0 - Bloco com dados informados', '']],
              { expansor: true, alturaMin: '560px' },
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Minhas análises -------------------------------------------------------

type Analise = {
  nome: string
  status: 'rascunho' | 'concluido' | 'aprovado'
  mod: string
  data: string
  rodape?: 'uso' | 'selecionar' | 'ativa'
}

const SECOES_ANALISES: Array<{ icone: IconDef; titulo: string; analises: Analise[] }> = [
  {
    icone: ICONE.menuCompras,
    titulo: 'Análises de ICMS',
    analises: [
      { nome: '2 teste', status: 'rascunho', mod: '1 de 11 modificado', data: '26/08/2026 - 11:37h' },
      { nome: 'Análise 2024', status: 'rascunho', mod: '1 de 11 modificado', data: '26/08/2026 - 10:54h' },
      { nome: '011', status: 'concluido', mod: '0 de 11 modificados', data: '24/08/2026 - 16:58h' },
    ],
  },
  {
    icone: ICONE.menuMemoria,
    titulo: 'Análises de IPI',
    analises: [{ nome: '01 ipi', status: 'rascunho', mod: '0 de 6 modificados', data: '18/08/2026 - 10:56h' }],
  },
  {
    icone: ICONE.menuMemoria,
    titulo: 'Análises de IRPJ/CSLL',
    analises: [{ nome: 'teste tecnico', status: 'rascunho', mod: '0 de 5 modificados', data: '26/08/2026 - 11:33h' }],
  },
  {
    icone: ICONE.pessoas,
    titulo: 'Análises de PIS/COFINS',
    analises: [
      { nome: 'Teste - Tecnico 1', status: 'aprovado', mod: '0 de 12 modificados', data: '26/08/2026 - 12:07h' },
      { nome: '010', status: 'rascunho', mod: '1 de 13 modificado', data: '26/08/2026 - 08:57h' },
      { nome: 'teste 2 mkt', status: 'concluido', mod: '0 de 13 modificados', data: '26/08/2026 - 07:43h', rodape: 'selecionar' },
      // coerente com o BannerAnaliseAtiva da tela de PIS/COFINS
      { nome: 'teste mkt', status: 'aprovado', mod: '1 de 13 modificado', data: '25/08/2026 - 08:44h', rodape: 'ativa' },
    ],
  },
  {
    icone: ICONE.usuarios,
    titulo: 'Análises de PREVIDENCIÁRIO',
    analises: [{ nome: 'INSS 2025', status: 'rascunho', mod: '0 de 8 modificados', data: '26/08/2026 - 09:12h' }],
  },
  { icone: ICONE.menuTransicao, titulo: 'Análises de REFORMA TRIBUTÁRIA', analises: [] },
  { icone: ICONE.checklist, titulo: 'Análises de TESES', analises: [] },
  {
    icone: ICONE.menuDashboard,
    titulo: 'Análises de VISÃO GERAL',
    analises: [{ nome: 'Geral 2024', status: 'concluido', mod: '0 de 11 modificados', data: '22/08/2026 - 14:20h', rodape: 'selecionar' }],
  },
]

function CardAnalise(a: Analise) {
  const botaoIcone = css({ display: 'grid', placeItems: 'center', width: '28px', height: '28px', borderRadius: '6px', color: A.muted, cursor: 'pointer', '&:hover': { background: A.bg } })
  const etiqueta =
    a.status === 'concluido' ? (
      <span mix={tag(A.greenBg, A.green)}>Concluído</span>
    ) : a.status === 'aprovado' ? (
      <span mix={tag(A.cyanSoft, A.teal)}>Aprovado pelo cliente</span>
    ) : (
      <span mix={tag(A.cinza, A.slate)}>Rascunho</span>
    )
  return (
    <div mix={[painel, css({ display: 'flex', flexDirection: 'column', gap: '14px', padding: '18px', background: A.card }), a.rodape === 'ativa' ? css({ borderColor: A.cyan }) : css({})]}>
      <div mix={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
        {etiqueta}
        <span mix={css({ flex: 1 })} />
        <span mix={botaoIcone}>{Icone(ICONE.sync, 14)}</span>
        <span mix={[botaoIcone, css({ color: A.faint })]}>{Icone(ICONE.historico, 15)}</span>
        <span mix={botaoIcone}>{Icone(ICONE.copiar, 14)}</span>
        <span mix={[botaoIcone, css({ color: A.red })]}>{Icone(ICONE.lixeira, 15)}</span>
      </div>
      <strong mix={css({ fontSize: '15px' })}>{a.nome}</strong>
      <div mix={css({ flex: 1, minHeight: '28px' })} />
      <div mix={[painel, css({ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: A.card })]}>
        <strong mix={css({ flex: 1, fontSize: '14.5px' })}>Resumo da análise</strong>
        <span mix={css({ fontSize: '13.5px', color: A.slate })}>{a.mod}</span>
        <span mix={css({ display: 'inline-flex', color: A.muted })}>{Icone(ICONE.chevronBaixo, 10)}</span>
      </div>
      <div mix={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
        <span mix={css({ width: '34px', height: '34px', borderRadius: '50%', background: A.lineForte, flexShrink: 0 })} />
        <span mix={css({ flex: 1, lineHeight: 1.35 })}>
          <span mix={css({ display: 'block', fontSize: '13px', color: A.slate })}>Última atualização</span>
          <strong mix={[num, css({ fontSize: '13px' })]}>{a.data}</strong>
        </span>
        {a.rodape === 'ativa' ? (
          <>
            <span mix={tag(A.cyanSoft, A.teal)}>✓ Análise ativa</span>
            <span mix={css({ display: 'grid', placeItems: 'center', width: '28px', height: '28px', borderRadius: '50%', border: `1.5px solid ${A.red}`, color: A.red, cursor: 'pointer' })}>
              {Icone(ICONE.fechar, 10)}
            </span>
          </>
        ) : a.rodape === 'selecionar' ? (
          <span mix={css({ fontSize: '13.5px', fontWeight: 600, color: A.cyan, cursor: 'pointer' })}>Selecionar análise</span>
        ) : (
          <span mix={tag(A.cinza, A.slate)}>{Icone(ICONE.pessoas, 11)} Análise em uso</span>
        )}
      </div>
    </div>
  )
}

function TelaMinhasAnalises() {
  return (
    <div data-app-screen="diagnostico-analises" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-analises')}
      <div mix={[colConteudo, css({ paddingLeft: '16px', position: 'relative' })]}>
        {ConviteDiag()}
        <div data-diag-borrado="" mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Minhas análises</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                Minhas análises
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>

          <div mix={css({ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px' })}>
            {SECOES_ANALISES.map((s, i) => (
              <>
                {i > 0 ? <div mix={css({ height: '1px', background: A.line })} /> : null}
                <div mix={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <span mix={css({ display: 'inline-flex', color: A.text })}>{Icone(s.icone, 18)}</span>
                  <strong mix={css({ flex: 1, fontSize: '16px' })}>{s.titulo}</strong>
                  <span mix={css({ fontSize: '14px', fontWeight: 600, color: A.cyan, cursor: 'pointer' })}>+ Iniciar nova análise</span>
                </div>
                {s.analises.length ? (
                  <div mix={css({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' })}>{s.analises.map((a) => CardAnalise(a))}</div>
                ) : (
                  <div mix={css({ borderRadius: '10px', border: `1px dashed ${A.line}`, background: A.bg, padding: '44px', textAlign: 'center', fontSize: '14.5px', color: A.muted })}>
                    Nenhuma análise iniciada ainda
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


function BannerAnalise() {
  return (
    <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px' })]}>
      <span mix={css({ display: 'grid', placeItems: 'center', width: '34px', height: '34px', borderRadius: '8px', background: A.cinza, color: A.slate })}>
        {Icone(ICONE.busca, 14)}
      </span>
      <span mix={css({ fontSize: '14.5px', fontWeight: 600 })}>Nenhuma análise ativa.</span>
      <span mix={css({ display: 'flex', alignItems: 'center', gap: '10px', width: '240px', height: '38px', padding: '0 14px', borderRadius: '8px', border: `1px solid ${A.lineForte}`, fontSize: '14px', color: A.muted })}>
        <span mix={css({ flex: 1 })}>Selecione uma análise</span>
        {Icone(ICONE.chevronBaixo, 11)}
      </span>
      <span mix={css({ fontSize: '14px', color: A.muted })}>ou</span>
      <span mix={css({ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: A.cyan, cursor: 'pointer' })}>
        {Icone(ICONE.add, 11)} Crie uma análise
      </span>
    </div>
  )
}

function CabecalhoCardDiag(tituloCard: string, comFiltros: boolean) {
  const botaoIcone = css({ display: 'grid', placeItems: 'center', width: '30px', height: '30px', borderRadius: '6px', color: A.muted, cursor: 'pointer', '&:hover': { background: A.bg } })
  return (
    <div mix={css({ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: `1px solid ${A.line}` })}>
      <strong mix={css({ flex: 1, fontSize: '15px' })}>{tituloCard}</strong>
      {comFiltros ? (
        <>
          <span mix={botaoIcone}>{Icone(ICONE.filtro, 13)}</span>
          <span mix={botaoIcone}>{Icone(ICONE.download, 14)}</span>
        </>
      ) : null}
      <span mix={botaoIcone}>{Icone(ICONE.exportar, 13)}</span>
    </div>
  )
}

function GraficoDarfs() {
  const d0 = DIAGS[0]
  return (
    <div mix={[painel, css({ display: 'flex', flexDirection: 'column' })]}>
      {CabecalhoCardDiag("DARF's Recolhidos", false)}
      <div mix={css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px', padding: '18px 20px 8px' })}>
        {DARF_ROTULOS.map((rotuloDarf, i) => (
          <div mix={css({ display: 'grid', gridTemplateColumns: '172px 1fr', gap: '8px', alignItems: 'center' })}>
            <span mix={css({ fontSize: '11.5px', color: A.text, textAlign: 'right', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{rotuloDarf}</span>
            <span mix={css({ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 })}>
              {/* sem flexShrink 0: a barra cede espaço para o valor não vazar do card */}
              <span style={{ width: d0[`darfE${i}`].split(':')[1] }} data-campo-estilo={`darfE${i}`} data-ponto-grafico="" data-tip-linhas={d0[`darfT${i}`]} data-campo-tip={`darfT${i}`} mix={css({ height: '8px', minWidth: '2px', borderRadius: '0 4px 4px 0', background: '#56c2e0' })} />

              <strong data-campo={`darfV${i}`} mix={[num, css({ fontSize: '11px', whiteSpace: 'nowrap' })]}>{d0[`darfV${i}`]}</strong>
            </span>
          </div>
        ))}
        <div mix={css({ display: 'flex', gap: '90px', paddingLeft: '180px', marginTop: '8px' })}>
          {[0, 1, 2].map((i) => (
            <span data-campo={`eixoD${i}`} mix={[num, css({ fontSize: '11px', color: A.muted })]}>{d0[`eixoD${i}`]}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function GraficoReceitasCompras() {
  const d0 = DIAGS[0]
  return (
    <div mix={[painel, css({ display: 'flex', flexDirection: 'column' })]}>
      {CabecalhoCardDiag('Receitas/ Compras', false)}
      <div mix={css({ flex: 1, display: 'flex', gap: '12px', padding: '22px 24px 14px' })}>
        <div mix={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', paddingBottom: '22px' })}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span data-campo={`eixoRC${i}`} mix={[num, css({ fontSize: '11px', color: A.muted })]}>{d0[`eixoRC${i}`]}</span>
          ))}
        </div>
        <div mix={css({ flex: 1, display: 'flex', flexDirection: 'column' })}>
          <div mix={css({ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '18px', borderBottom: `1px solid ${A.lineForte}`, minHeight: '260px' })}>
            <span style={{ height: d0.receitasE.split(':')[1] }} data-campo-estilo="receitasE" data-ponto-grafico="" data-tip-linhas={d0.receitasT} data-campo-tip="receitasT" mix={css({ width: '72px', background: '#56c2e0', borderRadius: '3px 3px 0 0' })} />
            <span style={{ height: d0.comprasE.split(':')[1] }} data-campo-estilo="comprasE" data-ponto-grafico="" data-tip-linhas={d0.comprasT} data-campo-tip="comprasT" mix={css({ width: '72px', background: '#56c2e0', borderRadius: '3px 3px 0 0' })} />
          </div>
          <span data-campo="cnpjNum" mix={[num, css({ textAlign: 'center', fontSize: '11.5px', color: A.slate, paddingTop: '6px' })]}>{d0.cnpjNum}</span>
        </div>
      </div>
    </div>
  )
}

function TelaDiagnosticoVisao() {
  return (
    <div data-app-screen="diagnostico-visao" data-on="false" mix={telaRaiz}>
      {SidebarRail()}
      {MenuDiagnostico('diagnostico-visao')}
      <div mix={[colConteudo, css({ paddingLeft: '16px' })]}>
        <div mix={[painel, painelConteudo]}>
          <div mix={degradeTopo} />
          <div mix={css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' })}>
            <div mix={css({ flex: 1, minWidth: '260px' })}>
              <h3 mix={h1}>Diagnóstico de VISÃO GERAL</h3>
              <span mix={css({ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '13.5px', color: A.muted })}>
                {Icone(ICONE.home, 14)}
                {Icone(ICONE.chevronDir, 9)}
                VISÃO GERAL
              </span>
            </div>
            <div mix={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <div mix={css({ textAlign: 'right' })}>
                <strong data-campo="empresa" mix={css({ display: 'block', fontSize: '20px', fontWeight: 600, lineHeight: '28px' })}>{EMPRESAS[0].empresa}</strong>
                <span mix={sub}>Período disponível: <span data-campo="periodoDisp">01/2021 à 12/2025</span></span>
              </div>
              <span mix={css({ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '999px', border: `1px solid ${A.line}`, color: A.muted })}>
                {Icone(ICONE.layers, 14)}
              </span>
            </div>
          </div>
          <div mix={css({ position: 'relative', height: '1px', background: A.line })} />

          <div mix={[painel, css({ position: 'relative', display: 'flex', alignItems: 'center', gap: '20px', padding: '12px 16px' })]}>
            {AbaDiag('Resumo', true, false)}
            <span mix={css({ marginLeft: 'auto', display: 'flex', gap: '8px' })}>
              <span mix={btnContorno}>{Icone(ICONE.download, 14)} Exportar</span>
              <span mix={btnPrimario}>{Icone(ICONE.checklist, 14)} Gerar retificação</span>
            </span>
          </div>

          {BannerAnalise()}

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' })}>
            {KpiDiag('Possíveis Oportunidades', '—', { rotulo: 'Pós reforma', valor: DIAGS[0].posReforma, campo: 'posReforma' })}
            {KpiDiag('Oportunidades a Explorar', '—', { rotulo: 'Pós reforma', valor: DIAGS[0].posReforma, campo: 'posReforma' })}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' })}>
            {KpiDiag('Compras', '—')}
            {KpiDiag('Receitas', DIAGS[0].kpiReceitas, undefined, false, 'kpiReceitas')}
            {KpiDiag("DARF's Recolhidos", DIAGS[0].kpiDarfs, undefined, false, 'kpiDarfs')}
            {KpiDiag('ICMS a Recolher', DIAGS[0].kpiIcms, undefined, false, 'kpiIcms')}
          </div>

          <div mix={css({ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.7fr 1.3fr', gap: '16px', alignItems: 'stretch' })}>
            <div mix={[painel, css({ display: 'flex', flexDirection: 'column' })]}>
              {CabecalhoCardDiag('Regime Tributário', true)}
              {/* vazio como no app real */}
              <div mix={css({ flex: 1, minHeight: '320px' })} />
            </div>
            {GraficoDarfs()}
            {GraficoReceitasCompras()}
          </div>
        </div>
      </div>
    </div>
  )
}


// Sistema de SEED's =O
function rng(seed:number) {
  return () => {
    seed |= 0;seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296)
  }
}

type Empresa = ReturnType<typeof geraEmpresas>[number]

function geraEmpresas(qtd: number, seed = 42) {
  const PRE = ['NOVA', 'ALFA', 'PRIME', 'GLOBAL', 'ATLAS', 'VETOR', 'AURORA', 'DELTA', 'RUMO']
  const MEIO = ['LOGISTICA', 'COMERCIO', 'INDUSTRIA', 'TECNOLOGIA', 'ALIMENTOS', 'ENERGIA', 'TEXTIL', 'SERVICOS']
  const FIM = ['LTDA', 'S.A.', 'EIRELI', 'ME']
  const UFS: Array<[string, string]> = [
    ['PR', 'CURITIBA'], ['SP', 'SÃO PAULO'], ['SC', 'FLORIANÓPOLIS'], ['GO', 'GOIÂNIA'], ['RS', 'PORTO ALEGRE'],
    ['MT', 'CUIABÁ'], ['MG', 'BELO HORIZONTE'], ['DF', 'BRASÍLIA'], ['MS', 'CAMPO GRANDE'], ['ES', 'VITÓRIA'],
  ]
  const SEGMENTOS: Array<[string, string]> = [
    ['Comércio varejo', '4744-0/01 - Comércio varejista de ferragens e ferramentas'],
    ['Comércio atacado', '4663-0/00 - Comércio atacadista de máquinas e equipamentos para uso industrial'],
    ['Transporte terrestre', '4930-2/02 - Transporte rodoviário de carga intermunicipal'],
    ['Saúde', '8630-5/03 - Atividade médica ambulatorial'],
    ['Comércio veículos', '4511-1/01 - Comércio a varejo de automóveis novos'],
    ['Alimentos', '1091-1/01 - Fabricação de produtos de panificação'],
    ['Metal', '2599-3/02 - Serviço de corte e dobra de metais'],
    ['TI', '6201-5/01 - Desenvolvimento de programas de computador sob encomenda'],
    ['Outros', '8211-3/00 - Serviços combinados de escritório e apoio administrativo'],
  ]
  const REGIMES = ['Normal', 'Real/Trimestral', 'Real/Estimativa', 'Presumido', 'Outros']
  const PARCEIROS = ['LARATAX', 'Parceiro 1', 'Parceiro 2', 'Parceiro 3', 'Parceiro 4', 'Parceiro 5', 'Parceiro 6', 'Parceiro 7', 'Parceiro 8', 'Parceiro 9']
  const nomes = new Set<string>()
  return Array.from({ length: qtd }, (_, i) => {
    // fluxo de rng próprio por empresa: editar o gerador não "embaralha" as demais
    const r = rng(seed + i * 101)
    const sorteia = <T,>(a: T[]) => a[Math.floor(r() * a.length)]
    const vicia = <T,>(a: T[], forca = 2) => a[Math.floor(r() ** forca * a.length)]
    const dig = (n: number) => Array.from({ length: n }, () => Math.floor(r() * 10)).join('')
    let empresa = ''
    do { empresa = `${sorteia(PRE)} ${sorteia(MEIO)} ${sorteia(FIM)}` } while (nomes.has(empresa))
    nomes.add(empresa)
    const [uf, municipio] = vicia(UFS)
    const [segmento, cnae] = vicia(SEGMENTOS, 1.6)
    return {
      empresa,
      cnpj: `${dig(2)}.${dig(3)}.${dig(3)}/0001-${dig(2)}`,
      grupo: sorteia(['GRUPO A', 'GRUPO B', 'Independente']),
      parceiro: vicia(PARCEIROS, 3),
      uf, municipio, segmento, cnae,
      regime: vicia(REGIMES),
      ie: dig(10),
      filiais: 1 + Math.floor(r() * 8),
      cep: `${dig(5)}-${dig(3)}`,
      logradouro: `AVENIDA ${sorteia(PRE)} - ${dig(3)}`,
      processos: 2 + Math.floor(r() * 15),
    }
  })
}

function geraProjetos(qtd: number, seed = 7): Projeto[] {
  const pad = (n: number) => String(n).padStart(2, '0')
  const TIPOS: Array<{ tipo: string; chips: string[]; marca: Projeto['marca'] }> = [
    { tipo: 'Diagnóstico tributário', chips: ['Completo'], marca: 'diagnostico' },
    { tipo: 'Diagnóstico tributário', chips: ['Previdenciário'], marca: 'diagnostico' },
    { tipo: 'Baixa de notas fiscais', chips: ["1.128.200 xml's"], marca: 'baixa' },
    { tipo: 'Baixa de obrigações acessórias', chips: ['Receita BX', 'e-CAC', 'e-Social'], marca: 'baixa' },
    { tipo: 'Baixa de obrigações acessórias', chips: ['e-Social'], marca: 'baixa' },
    { tipo: 'Baixa de obrigações acessórias', chips: ['Todas as baixas'], marca: 'baixa' },
  ]

  const STATUS: Array<{ status: string; cor: Projeto['cor'] }> = [
    { status: 'Concluído', cor: 'verde' },
    { status: 'Concluído', cor: 'verde' },
    { status: 'Concluído', cor: 'verde' },
    { status: 'Aguardando arquivos', cor: 'laranja' },
    { status: 'Processando...', cor: 'neutro' },
    { status: 'Procuração inválida', cor: 'vermelho' },
    { status: 'Falha no processamento', cor: 'vermelho' },
  ]
  return EMPRESAS.slice(0, qtd).map((e, i) => {
    const r = rng(seed + i * 31)
    const t = TIPOS[Math.floor(r() * TIPOS.length)]
    const s = STATUS[Math.floor(r() * STATUS.length)]
    const data = `${pad(28 - i)}/${pad(12 - i)}/2023`
    const hora = `${pad(Math.floor(r() * 24))}:${pad(Math.floor(r() * 60))}`
    const de = t.marca === 'diagnostico' ? `${pad(1 + Math.floor(r() * 12))}/2020` : undefined
    const ate = de ? `${pad(1 + Math.floor(r() * 12))}/2025` : undefined
    return {
      data, hora: `${hora}h`, grupo: e.grupo, empresa: e.empresa, cnpj: e.cnpj, de, ate,
      tipo: t.tipo, chips: t.chips, status: s.status, cor: s.cor, marca: t.marca,
      detalhe: {
        tipo: t.tipo, empresa: e.empresa, cnpj: e.cnpj, parceiro: e.parceiro,
        uf: e.uf, municipio: e.municipio, ie: e.ie, filiais: String(e.filiais),
        regime: e.regime, cnae: e.cnae,
        solicitado: `${data} - ${hora}`,
        periodo: de ? `De ${de} à ${ate}` : 'De 01/2021 à 12/2025',
        periodoDisp: de ? `${de} à ${ate}` : '01/2021 à 12/2025',
        ...DIAGS[i],
      },
    }
  })
}

function contagem(chave: (e: Empresa) => string): Array<[string, number]> {
  const mapa = new Map<string, number>()
  EMPRESAS.forEach((e) => mapa.set(chave(e), (mapa.get(chave(e)) || 0) + 1))
  return [...mapa.entries()].sort((a, b) => b[1] - a[1])
}


function fatiasPizza(pares: Array<[string, number]>): Array<[string, number, string]> {
  const CORES = ['#56c2e0', '#8ed4e6', '#33454e', '#5d7c88', '#84979f', '#a9c0c9', '#037b9b', '#002e43', '#e2edf0']
  const total = pares.reduce((s, [, n]) => s + n, 0)
  let resto = 100
  return pares.map(([rotulo, n], i) => {
    const pct = i === pares.length - 1 ? Math.round(resto * 10) / 10 : Math.round((n / total) * 1000) / 10
    resto -= pct
    return [rotulo, pct, CORES[i % CORES.length]]
  })
}

function somaProcessosPorParceiro(): Array<[string, number]> {
  const mapa = new Map<string, number>()
  EMPRESAS.forEach((e) => mapa.set(e.parceiro, (mapa.get(e.parceiro) || 0) + e.processos))
  return [...mapa.entries()].sort((a, b) => b[1] - a[1])
}


function geraDiag(e: Empresa, i: number): Record<string, string> {
  const DARF_BASES = [
    3678101.55, 1401374.21, 539686.1, 441763.69, 216541.57, 177967.71, 172306.04, 148688.22, 133927.09,
    132329.76, 94754.39, 89292.65, 68773.94, 61421.42, 53590.83, 48101.3, 40293.39, 28877.78,
  ]
  const r = rng(1000 + i * 17)
  const f = 0.35 + r() * 1.5
  const moeda = (n: number) => `R$ ${n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  const d: Record<string, string> = {}
  // ordena para o ranking continuar decrescente como no app real
  const darfs = DARF_BASES.map((b) => b * f * (0.7 + r() * 0.6)).sort((a, b) => b - a)
  darfs.forEach((v, j) => {
    d[`darfV${j}`] = moeda(v)
    d[`darfT${j}`] = `${DARF_ROTULOS[j]}|${moeda(v)}`
    d[`darfE${j}`] = `width:${Math.max(1, (v / darfs[0]) * 100).toFixed(1)}%`
  })
  ;[1, 2, 3].forEach((m, j) => { d[`eixoD${j}`] = String(Math.round((m * 1e6 * f) / 1e4) * 1e4) })
  const teto = 8e6 * f
  const vR = 7601774.21 * f * (0.85 + r() * 0.2)
  const vC = 7720351.66 * f * (0.85 + r() * 0.2)
  d.receitasT = `Receitas|${moeda(vR)}`
  d.comprasT = `Compras|${moeda(vC)}`
  d.receitasE = `height:${((vR / teto) * 100).toFixed(1)}%`
  d.comprasE = `height:${((vC / teto) * 100).toFixed(1)}%`
  ;[8, 6, 4, 2, 0].forEach((m, j) => { d[`eixoRC${j}`] = String(Math.round((m * 1e6 * f) / 1e4) * 1e4) })
  d.kpiReceitas = moeda(846760091.44 * f)
  const totalDarfs = darfs.reduce((s, v) => s + v, 0)
  d.kpiDarfs = moeda(totalDarfs)
  // no app real Recolhimentos INSS = total dos DARFs (sem prefixo R$)
  d.inss = totalDarfs.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  d.kpiIcms = moeda(13092934.26 * f)
  d.cnpjRaiz = e.cnpj.replace(/\D/g, '').slice(0, 8)
  d.cnaePrep = e.cnae.replace(/\D/g, '').slice(0, 7)
  d.posReforma = Math.round(2656449180094248 * f).toLocaleString('pt-BR')
  d.icmsPrev1 = moeda(1166816.94 * f)
  d.icmsPrev2 = moeda(1186514.97 * f)
  d.ipiComp = moeda(3825.92 * f)
  d.pcPrev = moeda(248417.4 * f)
  d.cnpjNum = e.cnpj.replace(/\D/g, '')
  return d
}

function geraProcessosMes(seed = 11): Array<[string, number]> {
  const r = rng(seed)
  return ['fev de 2026', 'mar de 2026', 'abr de 2026', 'mai de 2026', 'jun de 2026', 'jul de 2026'].map(
    (mes) => [mes, 35 + Math.floor(r() * 21)],
  )
}

//Fim do sistema de SEED's =)
