# 🎨 Handoff 4 — Design CSS Tokens & Superfícies Gráficas

*   **Cliente:** Fantini Engenharia e Tecnologia
*   **Especialista Responsável:** UI Designer & Mestre Visual (Awwwards Squad)
*   **Data de Criação:** 29 de Maio de 2026
*   **Insumo de Entrada:** `3_copywriting_web.md`

---

## 🎨 1. PALETA DE CORES TÉCNICA (Variáveis HSL Sólidas)

```css
:root {
  /* Fundo e Superfícies Primárias */
  --color-bg: hsl(0, 0%, 0%);             /* Preto Absoluto Sólido */
  
  /* Superfícies Secundárias Planas */
  --color-surface-card: hsl(0, 0%, 7%);    /* Cinza Grafite Escuro Plano */
  --color-surface-hover: hsl(0, 0%, 12%);  /* Cinza Carvão de Destaque */
  
  /* Textos */
  --color-text-primary: hsl(0, 0%, 100%);  /* Branco Puro */
  --color-text-secondary: hsl(0, 0%, 65%);/* Cinza Médio Plano */
  
  /* Divisores e Bordas Sólidas */
  --color-border-inactive: hsl(0, 0%, 20%);/* Cinza Escuro divisor */
  --color-border-active: hsl(0, 0%, 100%);  /* Branco Puro Sólido (Hover Ativo) */
  --color-sparkle-gray: hsl(0, 0%, 54%);   /* O cinza plano do brilho estelar do logo */
  
  /* Tipografia */
  --font-title: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

---

## 💎 2. REGRAS DE CONTÊINERES E BENTO CARDS

*   Neste projeto, **eliminamos qualquer efeito de glassmorphism translúcido**, degradês cromáticos ou desfoque de fundo (backdrop-filter) para respeitar rigorosamente a identidade visual plana e purista da Fantini.
*   Os contêineres e cards serão desenhados como caixas opacas sólidas com bordas finas e precisas de 1px.

```css
/* Exemplo de Card Opaque Premium Fantini */
.bento-card-premium {
  background-color: var(--color-surface-card);
  border: 1px solid var(--color-border-inactive);
  border-radius: 0px; /* Cantos retos de precisão industrial de 90 graus */
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card-premium:hover {
  background-color: var(--color-surface-hover);
  border-color: var(--color-border-active);
}
```

---

## 📐 3. ESPECIFICAÇÃO DE COMBINAÇÃO TIPOGRÁFICA

*   **Títulos Monumentais (H1, H2, H3):** `Outfit` do Google Fonts, com peso Bold (700) ou ExtraBold (800), text-transform `uppercase` e letter-spacing nítido de `0.05em`.
*   **Textos de Suporte e Parágrafos (Body):** `Inter` do Google Fonts, com peso Regular (400) ou Medium (500), line-height de `1.6` para máxima legibilidade e cor `var(--color-text-secondary)`.
