import { css } from "remix/ui";

import {
  FONT_MONO,
  btnGhost,
  btnPrimary,
  container,
} from "../../ui/tokens.ts";
import { TelaDiagnosticoVisao } from "./plataforma-app.tsx";

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
      {/* prévia do app no hero: força a tela (escondida por padrão no CSS da réplica) a aparecer */}
      <style>{`[data-hero-app] [data-app-screen] { display: flex; }`}</style>
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
            data-scramble="LaraTAX | A Central de comando do tributarista"
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
            LaraTAX | A Central de comando do tributarista
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
              Sua operação tributária. De ponta a ponta. Da baixa automática
              das obrigações à retificação e ao PER/DCOMP. Tudo centralizado,
              rastreável e pronto para escalar.
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
            SPED · e-CAC · e-Social · NF-e: baixados e cruzados automaticamente
          </p>
        </div>
        <PreviewPlataforma />
      </div>
    </section>
  );
}

// Prévia real da réplica (tela Visão Geral do diagnóstico), emoldurada e
// decorativa; o clique leva à demonstração interativa da seção 02.
function PreviewPlataforma() {
  return () => (
    <a
      href="#plataforma"
      data-reveal-right=""
      aria-label="Explorar a demonstração interativa da plataforma"
      mix={css({
        position: "relative",
        display: "block",
        width: "100%",
        maxWidth: "640px",
        margin: "0 auto",
        textDecoration: "none",
        "@media (max-width: 560px)": { display: "none" },
      })}
    >
      <div data-parallax="-8">
        <div
          mix={css({
            height: "440px",
            overflow: "hidden",
            borderRadius: "16px",
            border: "1px solid var(--line)",
            background: "#f8fbfc",
            boxShadow: "0 24px 64px rgba(2, 17, 24, 0.18)",
          })}
        >
          <div
            data-hero-app=""
            aria-hidden="true"
            style={{ zoom: "0.44" }}
            mix={css({ width: "1440px", pointerEvents: "none", userSelect: "none" })}
          >
            {TelaDiagnosticoVisao()}
          </div>
        </div>
        <span
          mix={[
            btnPrimary,
            css({
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "18px",
              margin: "0 auto",
              width: "fit-content",
              padding: "11px 20px",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }),
          ]}
        >
          Explorar a demonstração interativa ↓
        </span>
      </div>
    </a>
  );
}
