# R.A.V. — Site Oficial

Site institucional do Retiro R.A.V., desenvolvido para centralizar informações e fortalecer a presença digital do retiro espiritual da Comunidade Luz da Essência.

## Sobre o projeto

O R.A.V. existe desde 2007 na Paróquia Sant'Ana de Sousas, em Campinas/SP, promovendo retiros espirituais para jovens. Até então o Instagram era o único canal de divulgação — este site surge como espaço digital próprio, formal e organizado.

## Páginas

- **Home** — hero, carrossel de edições e pilares
- **Sobre** — história, missão e público-alvo
- **Contato** — informações de contato e formulário
- **Retiro** — página individual de cada edição (em desenvolvimento)

## Stack

- [Vue 3](https://vuejs.org/) + Composition API
- [Vite](https://vitejs.dev/)
- [Vue Router 4](https://router.vuejs.org/)

## Estrutura

```
src/
├── components/
│   ├── Navbar.vue
│   └── Footer.vue
├── pages/
│   ├── Home.vue
│   ├── Sobre.vue
│   ├── Contato.vue
│   └── Retiro.vue
├── data/
│   └── editions.js
├── App.vue
├── main.js
└── style.css
```

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/sobre` | Sobre o R.A.V. |
| `/contato` | Contato |
| `/retiros/:id` | Edição específica |

## Instalação

```bash
npm install
npm run dev
```

## Comunidade

Organizado pela **Comunidade Luz da Essência** na Paróquia Sant'Ana de Sousas, Campinas/SP.

> "Vem trilhar o caminho para a liberdade."
