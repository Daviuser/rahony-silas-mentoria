# Rahony Silas — Landing page da mentoria

Landing page da mentoria de revenda de perfumes de **Rahony Silas**.
Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lucide React.

> Este projeto foi entregue **sem build validado**. Rode `npm run typecheck` e `npm run build` antes de publicar.

## Executar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Requer Node.js 18.17 ou superior.

## Estrutura

```text
src/
  app/                 layout, página e estilos globais
  components/
    layout/            Header, Footer
    sections/          Hero, Identification, Opportunity, Learning, Conversation, About, FinalCta
    ui/                Button, Reveal, FlickerText, ChatBubbles
  data/                site.ts (contato), content.ts (textos), chat.ts (conversa)
  lib/                 whatsapp.ts, types.ts
public/
  images/              brand-banner, perfume-bottle, monogram-rs (WebP)
  fonts/               reservado (a Manrope é carregada via next/font)
```

## Onde editar

- Contatos e links oficiais: `src/data/site.ts`
- Textos das seções: `src/data/content.ts`
- Conversa simulada e seu estilo (cores, fonte, velocidade, digitação): `src/data/chat.ts`
- Frase com efeito Flicker: `src/components/sections/Hero.tsx`

## Regras de conteúdo

Marca única: Rahony Silas. Sem depoimentos, preços, resultados ou módulos inventados. A conversa é identificada como simulação ilustrativa. O efeito Flicker Text foi escrito do zero, sem o código original do Originkit.
