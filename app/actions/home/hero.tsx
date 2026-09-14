import { css } from "remix/ui";

import { FONT_MONO, btnPrimary, container } from "../../ui/tokens.ts";
import { DIAGS, KpiDiag, TelaDiagnosticoVisao } from "./plataforma-app.tsx";

export const CSS_CARD_SOLTO = `[data-hero-solto] [data-kpi] { color: #314e58; border-radius: 12px; box-shadow: 0 30px 64px rgba(2, 17, 24, 0.3), 0 0 0 1px rgba(2, 17, 24, 0.06); }
        [data-hero-solto] [data-kpi] strong { font-size: 23px; }`

export function Hero() {
  return () => (
    <section
      id="inicio"
      mix={css({
        position: "relative",
        minHeight: "calc(100vh - 64px)",
        "@supports (min-height: 100svh)": { minHeight: "calc(100svh - 64px)" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
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
      <style>{`[data-hero-app] [data-app-screen] { display: flex; }
        [data-hero-app] [data-kpi] { box-shadow: 0 14px 30px rgba(2, 17, 24, 0.13); }
        ${CSS_CARD_SOLTO}`}</style>
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
          <div data-reveal-left="">
            <h1
              mix={css({
                margin: "0 0 24px",
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                color: "var(--text)",
              })}
            >
              A máquina de{" "}
              <span mix={css({ color: "var(--accent)" })}>fazer dinheiro</span> do
              tributarista
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
              Encontramos em 40 minutos o dinheiro que você perdeu nos últimos 5
              anos.
            </p>
            <a href="#contato" mix={btnPrimary}>
              Agendar apresentação
            </a>
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
            contain: "content",
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
        {CardSolto(
          "Possíveis Oportunidades",
          DIAGS[0].posOp,
          "posOp",
          css({ top: "-26px", right: "-44px" }),
        )}
        {CardSolto(
          "Possibilidades a Explorar",
          DIAGS[0].posExp,
          "posExp",
          css({ bottom: "92px", left: "-52px" }),
        )}
        {CardSolto(
          "DARF's Recolhidos",
          DIAGS[0].kpiDarfs,
          "kpiDarfs",
          css({ bottom: "-78px", right: "-52px" }),
          true,
        )}
        <span
          mix={[
            btnPrimary,
            css({
              position: "absolute",
              zIndex: 50,
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

export function CardSolto(
  rotulo: string,
  valor: string,
  campo: string,
  posicao: ReturnType<typeof css>,
  compacto = false,
) {
  return (
    <div
      data-hero-solto=""
      aria-hidden="true"
      mix={[
        css({
          position: "absolute",
          zIndex: 40,
          width: "262px",
          "@media (max-width: 1100px)": { display: "none" },
        }),
        posicao,
      ]}
    >
      {KpiDiag(
        rotulo,
        valor,
        compacto ? undefined : { rotulo: "Valores Refinados", valor: "R$ 0,00", bom: true },
        false,
        campo,
      )}
    </div>
  );
}
