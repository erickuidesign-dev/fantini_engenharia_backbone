# Fantini Engenharia e Tecnologia — Website Oficial

> Estrutura base e esqueleto inicial do projeto para o website institucional da Fantini Engenharia e Tecnologia.

---

## 🛡️ Sobre o Projeto

Este repositório contém a **fase inicial e o esqueleto de arquivos** do novo website institucional da **Fantini Engenharia e Tecnologia**. O projeto foi planejado estrategicamente para posicionar a Fantini como referência em engenharia de acesso físico e lógico para infraestruturas críticas (fábricas, grandes indústrias, centros logísticos e estacionamentos comerciais).

Esta primeira etapa estabelece a base de arquivos estáticos, o design system corporativo, os componentes de interatividade iniciais e as documentações de governança do cliente.

---

## 🎨 Especificações Técnicas & Interface

O esqueleto inicial do projeto foi estruturado com foco em máxima performance e usabilidade:

*   **Tipografia:** Baseada na família tipográfica **Inter** (Display para títulos e Standard para legibilidade de texto).
*   **Acessibilidade e Contraste:** Rígida paleta corporativa monocromática (preto, branco e cinza sólido), em conformidade com as diretrizes WCAG de acessibilidade.
*   **Micro-interações:** Botões estilizados com transição cinética de texto em duas linhas (hover roll-up) e proteção de dimensões em CSS nativo.
*   **Componentes Estáticos:** Bento grid de especialidades, simulador de acessos dinâmico inicial e formulário qualificado de contato.

---

## 📂 Arquitetura de Pastas e Componentes

```bash
📂 FANTINI_ENGENHARIA_TECNOLOGIA/
├── 📂 assets/                      # Elementos vetoriais (SVG) e imagens estruturadas do projeto
├── 📂 css/
│   └── 📄 style.css                # Tokens de design, variáveis HSL, estrutura de grid e animações
├── 📂 js/
│   └── 📄 app.js                   # Lógica dinâmica do simulador interativo de acesso e cabeçalho
├── 📄 index.html                   # Estrutura HTML5 semântica inicial
├── 📄 .gitignore                   # Exclusão de arquivos locais de sistema e metadados de IDE
├── 📄 README.md                    # Documentação técnica do repositório
│
└── 📂 [DOCUMENTAÇÃO - GOVERNANÇA]* # Arquivos regulamentares e manuais operacionais da agência
```
*\*Os arquivos Markdown de governança de projetos e handoffs sequenciais servem como guias e histórico de alinhamento técnico interno.*

---

## 🚀 Como Executar Localmente

Desenvolvido em tecnologia web padrão sem necessidade de compiladores ou dependências complexas:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Abra o arquivo `index.html` em qualquer navegador.
3. Recomendado usar a extensão **Live Server** ou rodar um servidor estático leve (`npx serve .`) para visualização ágil em tempo real.
