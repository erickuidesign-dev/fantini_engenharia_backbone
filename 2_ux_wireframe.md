# 🗺️ Handoff 2 — Wireframe de Usabilidade & Especificações de Grids

*   **Cliente:** Fantini Engenharia e Tecnologia
*   **Especialista Responsável:** UX Designer & Arquiteto de Interação (Awwwards Squad)
*   **Data de Criação:** 29 de Maio de 2026
*   **Insumo de Entrada:** `1_direcao_criativa.md`

---

## 📐 1. BLUEPRINT DO WIREFRAME (Estrutura de Bento Grid por Seção)

### 📌 Seção 1: Hero / Topo do Site
*   **Arquitetura do Grid:** Layout de 12 colunas assimétrico com alinhamento à esquerda.
*   **Bloco 1.1 (8 Colunas):** Logo SVG em tamanho preciso + Menu flutuante minimalista com borda fina e links.
*   **Bloco 1.2 (12 Colunas):** Título principal (H1) Outfit gigante + Subtexto de valor em duas linhas + Duplo CTA (Botão Branco Puro e Botão Contorno Cinza).
*   **Bloco 1.3 (12 Colunas):** Fundo interativo com linhas de grid em cinza escuro HSL(0, 0%, 15%) sobre fundo preto absoluto.

### 📌 Seção 2: Bento Grid de Diferenciais e Equipamentos (As Soluções)
*   **Arquitetura do Grid:** Bento Grid assimétrico de `4 colunas x 2 linhas`.
    *   **Card 1 (Retângulo Vertical - Colunas 1 e 2, Linhas 1 e 2):** **Leitura Facial Biométrica 3D**. Foco em alta segurança e velocidade.
    *   **Card 2 (Retângulo Horizontal - Colunas 3 e 4, Linha 1):** **Catracas e Torniquetes Industriais**. Foco em aço inox 304 e fluxo de alto ciclo.
    *   **Card 3 (Quadrado Regular - Coluna 3, Linha 2):** **Cancelas de Alta Velocidade**. Foco em abertura rápida e LPR (leitura de placas).
    *   **Card 4 (Quadrado Regular - Coluna 4, Linha 2):** **Painel de Monitoramento Cloud**. Foco em APIs abertas e RH/Ponto.

### 📌 Seção 3: Simulador de Acesso Interativo
*   **Arquitetura do Grid:** 2 Colunas.
    *   **Coluna Esquerda (5 Colunas):** Título + Seletor de Setor (Botões grandes e planos para Indústria, Estacionamento, Condomínio Logístico, Prédio Corporativo).
    *   **Coluna Direita (7 Colunas):** Box de vidro fosco minimalista exibindo dinamicamente a recomendação do projeto (Catracas recomendadas, Leitores faciais sugeridos, software recomendado) + Ilustração técnica plana correspondente.

### 📌 Seção 4: Nosso Processo de Engenharia
*   **Arquitetura do Grid:** 4 colunas horizontais lineares representando a linha do tempo (Diagnóstico -> Projeto Layout 3D -> Implementação Limpa -> SLA & Suporte).

---

## 🔄 2. SISTEMA DE INTERAÇÕES E ROLAGEM

*   **Comportamento do Scroll:** Rolagem fluida com Lenis Scroll integrada nativamente para garantir suavidade de transição nos elementos do DOM.
*   **Efeitos de Transição de Hover:**
    *   *Bento Cards:* Borda sólida cinza que clareia de cinza escuro HSL(0, 0%, 30%) para branco brilhante HSL(0, 0%, 100%) em uma transição suave.
    *   *Botões:* Botão principal em branco preenchido com letras pretas inverte as cores ou expande a borda sutilmente no hover.
*   **Responsividade Móvel:** Em telas menores (mobile), o Bento Grid colapsa em uma pilha vertical de coluna única de alta usabilidade, mantendo o simulador perfeitamente utilizável em botões amigáveis ao toque.

---

> [!IMPORTANT]
> Todos os contêineres e Bento Cards devem possuir IDs únicos de classe e respeitar as proporções exatas de grid especificadas no CSS. A clareza geométrica é o principal fator de sofisticação visual deste layout.
