# Estudo da plataforma LaraTAX (app.laratax.com.br)

> Base para a futura seção do site que replica a plataforma com dados fictícios/bloqueados.
> Fonte: screenshots enviados pelo Rafael em 07/08/2026 + tentativa de fetch do app
> (SPA fechada por login — título "LarataxApp", client-rendered, nada indexável).
> As telas de funcionalidade chegam depois; este doc registra o que já se sabe.

## 1. Mapa geral do produto

A plataforma gira em torno de **projetos** executados para **clientes** (empresas), pagos
com **tokens** (créditos pré-pagos por tipo). Cinco tipos de projeto no wizard:

1. **Diagnóstico tributário** — analisa dados fiscais (baixados ou enviados) e gera
   relatórios de oportunidades. Variantes: Completo / Fiscal / Previdenciário
   (Completo aparece com cadeado quando o plano não cobre).
2. **Baixa automática de documentos e obrigações acessórias** — download direto de
   órgãos oficiais (Receita BX, e-CAC, e-Social, notas fiscais), sem certificado digital
   em alguns fluxos.
3. **Reforma tributária** — simulação dos impactos (IVA Dual + IS) com dados reais de
   2024/2025. É um módulo inteiro com navegação própria (ver §4).
4. **Controle de PER/DCOMP** — sincroniza extrato do crédito com a secretaria da fazenda
   (saldo, consumo, transmissões).
5. **Apuração Assistida** — controle de débitos/créditos e fechamentos.

## 2. Arquitetura de navegação

**Sidebar principal (clara):** logo LaraTAX → busca (Ctrl+K) → botão "Iniciar novo projeto"
→ Início · Projetos · Controle PER/DCOMP · Clientes · Configurações · Faturamento ·
Treinamentos · Ajuda. No rodapé: card escuro **"Meus tokens"** (Recarregar +
saldo por tipo: diagnóstico / baixa / reforma) e o usuário logado.

**Módulo Reforma Tributária:** ganha uma **segunda sidebar escura** (ink/navy) colada à
principal (que colapsa para ícones): Visão Geral · Impacto Vendas · Impacto Compras ·
Outros Créditos/Débitos · Transição · Apuração Assistida · Memória de cálculo.
O item ativo tem realce + seta ciana. Esse padrão de "app dentro do app" é o mais
característico visualmente (e o que mais casa com o tema escuro do nosso site).

## 3. Fluxo de criação de projeto (wizard)

Padrão consistente em todos os tipos:

- **Passo 1** — "Selecione o tipo de projeto": cards com radio à direita, ícone ciano,
  descrição. Rodapé: "Sair da criação" / "Avançar".
- **Passo 2** — "Configure …": formulário à esquerda + **rail direito "Resumo do projeto"**
  que começa vazio ("Selecione o tipo de projeto e configurações." com ícone de toque)
  e vai se preenchendo: tipo + custo em tokens, meses, chips das baixas incluídas
  (EFD-C, EFD-F, ECD, DCTF, DCTFWeb, PER/DCOMP, DIRF, Fontes pagadoras, e-Processos,
  Pagamentos, MIT, e-Social), e por fim **"Custo do projeto"**.
- Campos comuns: Cliente (select + "Criar cliente"), Competência inicial/final (mm/aaaa),
  Disponibilização dos arquivos (**Baixa automática** com robôs × **Upload manual**),
  Credenciais de acesso (Certificado digital select + "Enviar certificado") com alerta
  amarelo quando o certificado difere do CNPJ do cliente (procuração eletrônica).
- Baixa de obrigações: grupos com checkbox (SPED do Receita BX, e-Social) e grupos
  bloqueados por plano ("e-CAC — Atualize seu plano", "Simples Nacional — Atualize seu plano").
- Fluxo XML de notas: upload de planilhas de chaves (csv/xlsx/xls, limite 1 milhão de
  linhas/arquivo, botão escuro "Baixar modelo") ou "Digite as chaves"; opção de gerar
  relatórios (Sim/Não); "Integrar em projeto existente" (Cliente + Projeto);
  precificação **R$ 0,10/nota** com total em R$ no rail ("Total de cobrança direta").
- **Confirmação**: modal "Confirmar criação de projeto" (⚠ X competências, consumirá
  N tokens, não reembolsável — Corrigir/Confirmar) → tela de sucesso com
  "Total consumido" e CTA "Ir para projetos".

## 4. Telas principais

- **Visão geral (dashboard)**: boas-vindas, Ações rápidas (Projetos/Clientes/Faturamento/
  Usuários), gráficos: Processos por mês (barras), Distribuição por UF (barras horizontais
  — PR lidera com 269 de 686), Segmentos CNAE, Regime tributário. Chat Intercom no canto.
- **Projetos (lista)**: tabs Todos · Pendências (badge laranja) · Processando · Concluídos ·
  Recorrentes (badge ciano); busca, ordenação, filtro; linhas com ícone do tipo, data/hora
  de solicitação, chip do grupo + razão social + CNPJ, período De/Até, tipo + chips,
  avatar do solicitante e **status**: Concluído (verde), Aguardando arquivos (laranja),
  Processando… (neutro), Procuração inválida (vermelho), Falha no processamento (vermelho).
- **Detalhe de projeto (modal grande)**: tabs Detalhes / Relatórios / Arquivos
  (+ Retificações no diagnóstico). Detalhes: métricas no topo (ex.: Chaves enviadas
  128.160 · incorretas 10 · notas baixadas 128.150 + CTA), dados do projeto/cliente
  (badge verde "Ativo na RFB"); diagnóstico mostra **"Valor de oportunidades encontradas"**
  (ex.: R$ 48.750.235,00) + "Baixar Diagnóstico". Relatórios: rail esquerdo por categoria,
  lista de .xls com abrir/baixar + "Baixar tudo". Arquivos: rail por tipo de documento
  (EFD-C, EFD-F, ECD, ECF, DCTF, e-Social, DIRF… por ano), tabela com chave/período,
  CNPJ, data e "Baixar .xml".
- **Módulo Reforma** (todas as telas compartilham o mesmo esqueleto):
  painel colapsável "Configuração de simulação IVA Dual + IS" (método Via SPED × Via
  notas fiscais, alíquotas IS/IBS/CBS, "Aplicar simulação") → barra Filtrar dados (badge
  de filtros) + Período + Exportar → **4 KPI cards** com expansão "Pós reforma" (valor
  verde/vermelho + seta ↑↓) → conteúdo específico:
  - *Visão Geral*: banner de divergência SPED×notas ("Baixar notas faltantes", laranja),
    diagrama **"Tributos atuais x Novos tributos"** (PIS/COFINS/IPI → CBS/IBS/Imposto
    Seletivo ← ICMS/ISS/ICMS-ST — mesma ideia do FlowPanel da seção Reforma do site!),
    gráfico Impacto Tributário (Atual/Reforma/Diferença) com insight verde
    ("Mantendo o mesmo preço, o valor dos tributos diminuirão em 55,93%"),
    Impacto nos preços de venda/compra.
  - *Impacto Vendas / Compras*: comparativo de alíquotas + tabs de tabelas
    (clientes/fornecedores, produtos, CFOPs, análise) com totalizadores.
  - *Transição*: gráfico de área 2026→2033 por tributo (extinção ICMS/ISS/PIS/COFINS/IPI
    × entrada CBS/IBS) + tabelão Atual × Pós-reforma por ano.
  - *Apuração Assistida*: apuração CBS/IBS em seções (Débitos, Pagamentos, Revisão
    apuração × XML NF-e, Créditos, "CBS a recolher").
  - *Memória de cálculo*: cruzamentos Entradas/Saídas (XML × SPED Modelo 55/57/Serviços),
    tabela chave NF-e × "Consta na EFD-C/EFD-F" × XML.
  - *Exportar diagnóstico*: modal Apresentação ("com a sua marca para seu cliente")
    × Planilha excel + checkboxes de conteúdo.
- **PER/DCOMP**: cards de saldo/consumo, gráficos de linha/barras, lista de transmissões,
  estados vazios ilustrados.

## 5. Linguagem visual do app (para a réplica)

- Tema claro: fundo off-white (família #F5FFFD/#F0F7F9), cards brancos, bordas finas,
  cantos ~12-16px, sombras suaves. Módulo Reforma introduz painéis escuros (ink/navy).
- Acento: o mesmo ciano da marca (#00C2EF/#07E0FF) em botões primários ("Avançar",
  "Aplicar simulação"), radios/checkboxes, ícones e links. Botão utilitário escuro
  ("Baixar modelo"). Tipografia Inter-like.
- Padrões recorrentes: card-com-radio (seleção), rail lateral de resumo, chips de
  documento, badges de status coloridos, KPI card com expansor "Pós reforma",
  tabelas densas com paginação « ‹ 1 2 3 › » e select de page-size, empty states
  com ícone central, avisos amarelos/laranja com CTA.
- Dados dos prints já são fictícios (Global Synergy, Dynamic Ventures, ACME LTDA,
  CNPJs 00.000.000/0001-00, "R$ 000.000.000,00") — bom modelo para a réplica
  ("dados bloqueados": manter valores fake/borrados, nunca dados reais).

## 6. Plano para a seção-réplica no site (quando as telas chegarem)

- Nova rota (ex.: `/plataforma`) no mesmo padrão da v2 (routes.ts + controller + actions/).
- Réplica **estática e navegável** em Remix v3: telas server-rendered com dados fake,
  interações mínimas (trocar tab/aba via âncoras ou o padrão data-on + landing.ts,
  como no hero-carrossel). Sem backend.
- Prioridade sugerida pela força visual: 1) Reforma/Visão Geral (KPIs + diagrama de
  tributos, já rima com a seção Reforma do site), 2) wizard de criação (3 passos),
  3) lista de Projetos com status, 4) detalhe com "Valor de oportunidades encontradas".
- Reusar tokens do site (COLORS, FONT_MONO, surfaces); o app é sempre claro — decidir
  se a réplica respeita o tema do site ou fixa o claro (recomendo respeitar o tema,
  como fizemos na faixa de clientes do hero).
- A seção "02 / A plataforma" da home fica como está (sem inflar de info) — a réplica
  é quem vai mostrar o produto de verdade.

## 7. Pendências para o Rafael

- Enviar as telas restantes em resolução legível (alguns mosaicos vieram comprimidos
  demais para ler: detalhes do diagnóstico completo e PER/DCOMP).
- Definir quais telas entram na primeira versão da réplica e o nível de interação
  (só visual navegável × simulação de fluxo).
- Confirmar rota/nome da seção e onde ela entra na navegação (dock/header).
