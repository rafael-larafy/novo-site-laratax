import { css } from "remix/ui";

import {
  COLORS,
  FONT_MONO,
  btnGhost,
  btnPrimary,
  container,
} from "../../ui/tokens.ts";

const IN_BEAMS = [
  "M150,62 C230,62 260,214 292,218",
  "M150,172 C230,172 260,222 292,226",
  "M150,282 C230,282 260,238 292,234",
  "M150,392 C230,392 260,246 292,242",
];

const OUT_BEAMS = [
  "M368,218 C400,214 430,62 510,62",
  "M368,226 C400,222 430,172 510,172",
  "M368,234 C400,238 430,282 510,282",
  "M368,242 C400,246 430,392 510,392",
];

const PILLARS = ["SPED", "e-CAC", "e-Social", "Notas Fiscais"];
const OUTPUTS = [
  "Diagnóstico",
  "74 dashboards",
  "Retificação",
  "Reforma IBS/CBS",
];

const NODE_YS = [40, 150, 260, 370];

export function Hero() {
  return () => (
    <section
      id="inicio"
      mix={css({
        position: "relative",
        // -64px: encosta a faixa de clientes no hero sem perder o ar de tela cheia
        minHeight: "calc(100vh - 64px)",
        // svh: em mobile, 100vh esconde os CTAs atrás da toolbar do browser
        "@supports (min-height: 100svh)": { minHeight: "calc(100svh - 64px)" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        // Wash ciano no topo fica na section; os dots vão pro ::before com fade nas bordas.
        backgroundImage: `radial-gradient(ellipse 90% 60% at 50% -20%, rgba(0, 194, 239,0.22), transparent 70%)`,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--text) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black, transparent 75%)",
        },
      })}
    >
      <style>{`
        @keyframes beam-travel { to { stroke-dashoffset: -100; } }
        [data-beam] {
          stroke-dasharray: 16 84;
          animation: beam-travel 3.2s linear infinite;
        }
        @keyframes core-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(0, 194, 239,0.45)); }
          50% { filter: drop-shadow(0 0 16px rgba(0, 194, 239,0.75)); }
        }
        [data-core] { animation: core-pulse 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          [data-beam], [data-core] { animation: none; }
        }
      `}</style>
      <div
        mix={[
          container,
          css({
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "48px",
            alignItems: "center",
            paddingTop: "140px",
            paddingBottom: "48px",
            "@media (max-width: 960px)": {
              gridTemplateColumns: "1fr",
              alignItems: "start",
              paddingBottom: "40px",
            },
          }),
        ]}
      >
        <div>
          <p
            data-scramble="LaraTAX — Central de comando do tributarista"
            mix={css({
              margin: "0 0 24px",
              fontFamily: FONT_MONO,
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.143em",
              textTransform: "uppercase",
              color: "var(--accent)",
            })}
          >
            LaraTAX — Central de comando do tributarista
          </p>
          {/* eyebrow fica fora do reveal (já tem o scramble); h1 + sub + CTAs entram juntos da esquerda */}
          <div data-reveal-left="">
            <h1
              mix={css({
                margin: "0 0 24px",
                // h1 do site atual: 64px, peso 500, tracking -0.05em, lh 1.0
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                color: "var(--text)",
              })}
            >
              Automatize a recuperação{" "}
              <span mix={css({ color: "var(--accent)" })}>de tributos</span>
            </h1>
            <p
              mix={css({
                margin: "0 0 40px",
                fontSize: "18px",
                lineHeight: 1.65,
                color: "var(--muted)",
                maxWidth: "32em",
              })}
            >
              A LaraTAX cruza milhões de dados fiscais e entrega um diagnóstico
              de oportunidades dos últimos 5 anos em menos de 40 minutos — da
              baixa automática à retificação.
            </p>
            <div mix={css({ display: "flex", gap: "16px", flexWrap: "wrap" })}>
              <a href="#contato" mix={btnPrimary}>
                Agendar apresentação
              </a>
              <a
                href="#plataforma"
                mix={[
                  btnGhost,
                  css({
                    "& [data-arrow]": {
                      display: "inline-block",
                      transition: "transform 150ms ease",
                    },
                    "&:hover [data-arrow]": { transform: "translateY(2px)" },
                  }),
                ]}
              >
                Conhecer a plataforma{" "}
                <span data-arrow="" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
          <p
            mix={css({
              margin: "40px 0 0",
              fontFamily: FONT_MONO,
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "var(--muted)",
            })}
          >
            SPED · e-CAC · e-Social · NF-e — baixados e cruzados automaticamente
          </p>
        </div>
        <BeamDiagram />
      </div>
    </section>
  );
}

// Diagrama "pilares → LaraTAX → resultados", todo em SVG server-rendered.
// Os feixes são cometas de stroke-dash viajando pelos paths (pathLength=100).
function BeamDiagram() {
  return () => (
    <div
      data-reveal-right=""
      mix={css({
        width: "100%",
        maxWidth: "640px",
        margin: "0 auto",
        // no mobile os labels ficariam com ~6px; a linha mono acima já cobre a informação
        "@media (max-width: 560px)": { display: "none" },
      })}
    >
      {/* parallax em div filho — não pode dividir elemento com o reveal */}
      <div data-parallax="-8">
        <svg
          viewBox="0 0 660 460"
          role="img"
          aria-label="Diagrama: SPED, e-CAC, e-Social e Notas Fiscais conectados à LaraTAX, gerando diagnóstico, dashboards, retificação e análise da reforma tributária"
          mix={css({ width: "100%", height: "auto", display: "block" })}
        >
          {/* trilhos */}
          {[...IN_BEAMS, ...OUT_BEAMS].map((d) => (
            <path d={d} fill="none" stroke="var(--line)" stroke-width="1.5" />
          ))}
          {/* cometas */}
          {IN_BEAMS.map((d, i) => (
            <path
              d={d}
              data-beam=""
              fill="none"
              stroke={COLORS.cyan}
              stroke-width="2"
              stroke-linecap="round"
              pathLength={100}
              style={{ animationDelay: `${i * 0.55}s` }}
            />
          ))}
          {OUT_BEAMS.map((d, i) => (
            <path
              d={d}
              data-beam=""
              fill="none"
              stroke={COLORS.cyan}
              stroke-width="2"
              stroke-linecap="round"
              pathLength={100}
              style={{ animationDelay: `${i * 0.55 + 1.1}s` }}
            />
          ))}
          {/* pilares (entradas) */}
          {PILLARS.map((label, i) => (
            <g>
              <rect
                x="10"
                y={NODE_YS[i]}
                width="140"
                height="44"
                rx="10"
                fill="var(--surface-2)"
                stroke="var(--line)"
              />
              <text
                x="80"
                y={NODE_YS[i]! + 27}
                text-anchor="middle"
                fill="var(--text)"
                font-family={FONT_MONO}
                font-size="13"
              >
                {label}
              </text>
            </g>
          ))}
          {/* resultados (saídas) */}
          {OUTPUTS.map((label, i) => (
            <g>
              <rect
                x="510"
                y={NODE_YS[i]}
                width="140"
                height="44"
                rx="10"
                fill="var(--surface-2)"
                stroke="var(--line)"
              />
              <text
                x="580"
                y={NODE_YS[i]! + 27}
                text-anchor="middle"
                fill="var(--text)"
                font-family={FONT_MONO}
                font-size="13"
              >
                {label}
              </text>
            </g>
          ))}
          {/* núcleo LaraTAX — X oficial do wordmark (referência: public/Global Avatar.jpg) */}
          <g data-core="">
            <rect
              x="292"
              y="192"
              width="76"
              height="76"
              rx="16"
              fill={COLORS.cyanBright}
            />
            <g
              fill={COLORS.ink}
              transform="translate(36.78 209.55) scale(0.833)"
            >
              <path d="M378.07 0.54541C379.245 0.54541 379.311 1.71147 378.723 2.32861L362.211 19.9702L356.117 13.2964L366.903 1.50537C367.425 0.888393 367.948 0.54541 368.992 0.54541H378.07Z" />
              <path d="M336.664 0.54541C337.709 0.545448 338.232 0.888262 338.754 1.50537L379.637 46.7622C380.225 47.3793 380.16 48.5452 378.985 48.5454H369.515C368.47 48.5454 367.947 48.2025 367.36 47.5854L351.816 30.3052L336.207 47.5854C335.62 48.2025 335.162 48.5453 334.117 48.5454H324.974C323.798 48.5454 323.798 47.3793 324.386 46.7622L345.677 23.5171L326.476 2.32861C325.888 1.71147 325.954 0.54541 327.129 0.54541H336.664Z" />
            </g>
          </g>
          {/* legenda no rodapé do viewBox: abaixo dos nós, sem colidir com os beams */}
          <text
            x="330"
            y="448"
            text-anchor="middle"
            fill="var(--muted)"
            font-family={FONT_MONO}
            font-size="12"
          >
            2,1 bi de cenários tributários
          </text>
        </svg>
      </div>
    </div>
  );
}
