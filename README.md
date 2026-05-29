# Fantini Engenharia e Tecnologia — Website Oficial

> Esqueleto de alta performance e autoridade visual para a Landing Page institucional da Fantini Engenharia e Tecnologia. Desenvolvido com base no Design System Infranex SaaS Template em paleta purista monocromática.

---

## 🛡️ Sobre o Projeto

Este repositório contém a estrutura base, o design system integrado e os artefatos de governança para o novo website institucional da **Fantini Engenharia e Tecnologia**. O projeto foi desenhado sob medida para posicionar a Fantini como referência em engenharia de acesso físico e lógico para infraestruturas críticas (fábricas, grandes plantas industriais, centros logísticos e estacionamentos comerciais).

A interface destaca o portfólio de alta tecnologia da empresa: leitores faciais 3D com validação liveness em 0.2s, torniquetes de alto ciclo em aço inoxidável 304, cancelas ultrarrápidas de ciclo contínuo e integrações automatizadas via APIs.

---

## 🎨 DNA Visual (Design System Infranex)

O layout segue o DNA visual do conceituado **Infranex SaaS Template**, totalmente refinado para a identidade monocromática da Fantini (Preto Infranex, Branco e Cinza Sólido):

*   **Tipografia Purista:** Estrutura baseada na família tipográfica **Inter** (Display para títulos imponentes com tracking reduzido e Standard para corpo de texto altamente legível).
*   **Empilhamento de Camadas (Visual Layering Stack):** Profundidade premium gerada por 3 camadas vetoriais sobrepostas em elementos interativos e cards glassmorphic:
    1.  `.bg-color`: Gradiente de face profundo cobrindo superfícies.
    2.  `.bg-stroke`: Bordas com traçado vetorial sutil translúcido.
    3.  `.bg-daimond-16`: Textura geométrica volumétrica com máscara de diamond grid.
*   **Micro-interações de Elite:** Efeito **kinetic double-text roll-up** em todos os botões (`.button-01` e `.button-01-sm`) acionado puramente em CSS (`cubic-bezier(0.16, 1, 0.3, 1)`) com proteção de largura (`white-space: nowrap`), gerando transições fluidas e idênticas às do Webflow original.
*   **Infinite Brand Marquee:** Carrossel infinito de prova social acelerado por hardware para rolagem suave de marcas.

---

## 📂 Arquitetura de Pastas e Componentes

```bash
📂 FANTINI_ENGENHARIA_TECNOLOGIA/
├── 📂 assets/                      # Recursos visuais (logotipo vetorizado SVG, diamond grid texture)
├── 📂 css/
│   └── 📄 style.css                # Variáveis HSL, tokens de borda, grid técnico e animações
├── 📂 js/
│   └── 📄 app.js                   # Lógica do Simulador Interativo de Acesso e cabeçalho dinâmico
├── 📄 index.html                   # Estrutura HTML5 semântica e acessível (SEO Otimizado)
├── 📄 .gitignore                   # Exclusão de arquivos de sistema e metadados de IDE
├── 📄 README.md                    # Manual técnico do repositório
│
└── 📂 [DOCUMENTAÇÃO - GOVERNANÇA]* # Contratos, briefing, atas e offboarding regulamentares da agência
```
*\*Os arquivos Markdown de governança de projetos e handoffs da Awwwards Squad servem como guias e documentação viva de handoff técnico na esteira linear da agência.*

---

## 🚀 Como Executar Localmente

Como o projeto é construído em tecnologia nativa com foco em performance extrema e conformidade com o Google Core Web Vitals (Zero JS Bloqueante), não há necessidade de compiladores ou empacotadores de dependências:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Para desenvolvimento ágil e visualização ao vivo, utilize a extensão **Live Server** ou servidor estático simples como `npx serve .`.

---

## 👥 Equipe Técnica & Handoff
*   **Direção de Arte / UI Design:** Awwwards & Aura Build Squad
*   **Desenvolvimento Frontend:** Aura Code Factory Engine
*   **Padrão de Governança:** Esteira Linear de Elite (Obsidian OS)
