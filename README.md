# Teste Front-End — Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End** na [Econverse](https://www.econverse.com.br/).

O objetivo é reproduzir o layout proposto no Figma, consumindo uma API JSON de produtos e implementando as interações solicitadas.

---

## 🚀 Tecnologias utilizadas

- **React** com **TypeScript**
- **Vite** (build tool)
- **Sass (SCSS)** como pré-processador CSS
- **Fetch API** para consumo de dados
- Sem bibliotecas de UI (Bootstrap, Material UI, etc.)

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## 🔧 Instalação e execução

### 1. Clone o repositório

    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio

### 2. Instale as dependências

    npm install

ou

    yarn install

### 3. Configure o proxy (importante)

A API de produtos da Econverse **não possui CORS habilitado**, então é necessário configurar um proxy no Vite para contornar o bloqueio do navegador.

No arquivo `vite.config.ts` na raiz do projeto, adicione:

    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          "/api": {
            target: "https://app.econverse.com.br",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
    });

### 4. Rode o projeto em modo de desenvolvimento

    npm run dev

ou

    yarn dev

O projeto estará disponível em `http://localhost:5173`.

### 5. Build para produção

    npm run build

ou

    yarn build

Os arquivos otimizados serão gerados na pasta `dist/`.

Para pré-visualizar a build de produção:

    npm run preview

---

## 📁 Estrutura do projeto

```text
public/
├── *.svg          # Ícones e logos (favicon, Logo, instagram, facebook, linkedin, etc.)
└── *.png          # Imagens das seções (parceiros, categorias, backgrounds, etc.)

src/
├── components/
│   ├── Brands/
│   │   ├── Brands.scss
│   │   └── Brands.tsx
│   ├── Categories/
│   │   ├── Categories.scss
│   │   └── Categories.tsx
│   ├── Footer/
│   │   ├── Footer.scss
│   │   └── Footer.tsx
│   ├── Newsletter/
│   │   ├── Newsletter.scss
│   │   └── Newsletter.tsx
│   ├── Partners/
│   │   ├── Partners.scss
│   │   └── Partners.tsx
│   ├── ProductCard/
│   │   ├── ProductCard.scss
│   │   └── ProductCard.tsx
│   └── RelatedProducts/
│       ├── RelatedProducts.scss
│       └── RelatedProducts.tsx
├── styles/
│   └── _variables.scss
├── App.tsx
├── main.tsx
└── index.scss
```

> **Observação:** todos os assets (ícones SVG e imagens PNG) ficam na pasta `public/` na raiz do projeto e são referenciados diretamente via caminhos absolutos (ex: `/Logo.svg`, `/parceiros.png`). Não há pasta `src/assets`.

---

## 🧩 Componentes principais

### RelatedProducts

Vitrine de produtos relacionados que consome a API JSON e renderiza um carrossel com 4 cards visíveis por vez.

Suporta duas variantes controladas pela prop `variant`:

- **`tabs`** (padrão): exibe abas de categorias (Celular, Acessórios, Tablets, etc.)
- **`see-all`**: exibe um link "Ver todos" abaixo do título

Exemplo de uso:

    <RelatedProducts variant="tabs" />
    <RelatedProducts variant="see-all" />

### ProductCard

Card individual de produto. Recebe um objeto `Product` com nome, descrição, imagem, preço e preço antigo (opcional).

### Newsletter

Seção de captura de leads com formulário de nome, e-mail, botão de inscrição e checkbox de aceite dos termos.

### Footer

Rodapé com logo, descrição, redes sociais, colunas de links institucionais e copyright.

### Partners e Brands

Seções institucionais com cards de parceiros e círculos de marcas, respectivamente.

---

## 🌐 Consumo da API

A lista de produtos é consumida da seguinte URL:

    https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

O formato esperado da resposta é:

    {
      "success": true,
      "products": [
        {
          "productName": "iPhone 13 Pro",
          "descriptionShort": "Lorem ipsum dolor sit amet",
          "photo": "https://...",
          "price": 28.9,
          "oldPrice": 30.9
        }
      ]
    }

---

## ♿ Acessibilidade e HTML semântico

O projeto utiliza:

- Tags semânticas (`<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<ul>`, `<li>`)
- Atributos ARIA (`aria-label`, `aria-labelledby`, `aria-selected`, `aria-hidden`, `role`)
- Hierarquia correta de headings (`<h1>`, `<h2>`, `<h3>`)
- Botões reais (`<button>`) para ações e links reais (`<a>`) para navegação
- Formulário com `<label>` associado aos inputs
- Foco visível e navegação por teclado nos elementos interativos

---

## 🔍 SEO

O `index.html` inclui:

- `<title>` descritivo e otimizado
- `<meta name="description">` com palavras-chave relevantes
- `<meta name="keywords">` com termos relacionados ao e-commerce de tecnologia
- `<meta name="author">` e `<meta name="theme-color">`
- `<link rel="canonical">` para evitar conteúdo duplicado

---

## 🎨 Estilo e layout

- Layout reproduzido **pixel a pixel** com base no Figma
- Pré-processador: **Sass (SCSS)** com variáveis globais
- Cores, tipografia e espaçamentos definidos em variáveis reutilizáveis em `src/styles/_variables.scss`

---

## 📌 Observações

- O projeto **não utiliza bibliotecas de UI** (Bootstrap, Material UI, etc.), conforme solicitado.
- O proxy do Vite é essencial para contornar o bloqueio de CORS da API de teste.
- A responsividade é focada em desktop, conforme o layout proposto.

---

## 👤 Autor

Desenvolvido por **Gabriel Vignoli** como parte do processo seletivo da Econverse.

- E-mail: [pessoalvignoli123@gmail.com](mailto:pessoalvignoli123@gmail.com)
- LinkedIn: [gabriel-vignoli](https://www.linkedin.com/in/gabriel-vignoli)

---

## 📄 Licença

Este projeto é de uso exclusivo para fins de avaliação técnica no processo seletivo da Econverse.