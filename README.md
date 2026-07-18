# INDIO SPORTS

Vitrine premium de camisas de futebol tailandesas, com vendas exclusivamente via WhatsApp.
Construído em **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, pronto para deploy
na **Vercel**.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — não é preciso configurar nada.
4. Deploy.

## Estrutura do projeto

```
src/
  app/            → páginas (App Router), layout e estilos globais
  components/     → componentes de UI (Header, Hero, ProductCard, etc.)
  data/           → products.ts — catálogo completo (54 produtos)
  lib/            → helpers (link do WhatsApp, formatação de preço, utils)
  types/          → tipos TypeScript compartilhados
public/
  products/       → imagens dos produtos (já otimizadas/upscaladas)
```

## Editando o catálogo

Todo o catálogo vive em `src/data/products.ts`. Cada produto segue este formato:

```ts
{
  id: "p001",
  slug: "monaco-home",
  name: "AS Monaco Home",
  category: "clube",       // "clube" | "selecao" | "retro"
  price: 139.90,
  sizes: ["M", "G", "GG", "XG"],
  image: "/products/monaco-home.jpg",
  featured: true,           // aparece em "Destaques"
  bestSeller: true,          // aparece em "Mais Vendidos"
  bestSellerRank: 1,         // posição no ranking
  needsReview: false,        // ver seção abaixo
}
```

Para adicionar uma camisa nova: coloque a imagem em `public/products/` e adicione um
objeto novo nesse array — o site atualiza automaticamente (cards, filtros, busca).

### ⚠️ Produtos marcados com `needsReview: true`

10 produtos (principalmente clubes árabes e edições especiais, onde a resolução da foto
original ou o escudo não permitiram 100% de certeza) foram nomeados com a melhor
identificação possível a partir da imagem, mas precisam da sua confirmação antes de ir
ao ar. Busque por `needsReview: true` no arquivo `products.ts` para localizá-los
rapidamente.

## Número de WhatsApp

Configurado em `src/lib/whatsapp.ts` (`WHATSAPP_NUMBER`). Para trocar, edite essa
constante — todos os links do site (botão flutuante, cards de produto, header, rodapé)
são gerados a partir dela.

## Preços por categoria

| Categoria | Preço |
|---|---|
| Times (clubes) | R$ 139,90 |
| Retrô | R$ 144,90 |
| Seleções | R$ 159,90 |

Para alterar, edite os valores diretamente em cada produto no `products.ts`, ou ajuste
em lote com busca e substituição.
