# ZENE - Estetica Avancada

Landing page premium para clinica de estetica, desenvolvida para transmitir autoridade e aumentar conversao em agendamento.

## Escopo do projeto

A pagina e estruturada em secoes de alta intencao comercial:

- Hero com proposta de valor e CTA principal
- Procedimentos (Botox, Preenchimento, Laser)
- Secao institucional da clinica
- Footer com CTA final e canais de contato

Arquitetura de componentes em `src/components`:

- `Navbar.tsx`
- `Hero.tsx`
- `Procedimentos.tsx`
- `Clinica.tsx`
- `Footer.tsx`

## Decisoes de design

- tipografia editorial com Cormorant + Inter
- paleta customizada em `src/app/globals.css` (silk/champagne/mist/ink)
- microinteracoes e entradas com Framer Motion
- layout mobile-first com foco em leitura e CTA

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Scripts

```bash
npm run dev     # localhost:3333
npm run build   # build de producao
npm run start   # start da build
npm run lint    # analise estaticA
```

## Deploy

`next.config.ts` esta configurado com:

- `output: "export"`
- `basePath: "/zene/out"`

Isso indica estrategia de publicacao estatica para subcaminho. Ajuste o `basePath` se publicar em dominio/raiz diferente.

## Objetivo de negocio

Este projeto foi pensado como pagina de captura e autoridade:

- aumentar taxa de clique em "Agendar"
- valorizar servicos premium
- reduzir friccao no primeiro contato

Nao e um template de estudo: e uma base de entrega real para cliente.