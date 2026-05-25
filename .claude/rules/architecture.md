# Arquitetura & Decisões

**Stack:**
- Next.js 15 App Router (nunca Pages Router)
- TypeScript estrito (`strict: true`, sem `any` sem justificativa em comentário)
- Tailwind CSS (sem CSS modules, sem styled-components)
- Prisma + Postgres (Supabase)
- NextAuth.js v5 com Google provider apenas
- Zod para validação em toda fronteira (input de API, parsing de env, forms)

**Decisões deliberadas (não mude sem conversar):**
- Monolito Next.js — server actions em vez de API routes separadas quando possível
- Postgres em dev e prod — Prisma abstrai a diferença
- Server components por padrão. `"use client"` só quando há interatividade real
- Sem gerenciador de estado global (Redux, Zustand, Jotai, Recoil são proibidos)
- Sem bibliotecas de UI component (Chakra, MUI, shadcn/ui são proibidos)
- Auth apenas Google — não adicione outro provider sem justificativa explícita
- Sempre criar componentes, hooks e utilitários genéricos em `src/lib` para reuso

**O que NÃO vai entrar:**
- Websockets / realtime
- Notificações push
- Sharing / colaboração
- Temas customizáveis (apenas light/dark)
- Analytics de terceiros
- Integrações externas (Google Calendar, Notion, etc)
- Nunca criar tudo em um arquivo só (ex: `app/page.tsx` não deve conter mais que 300 linhas, evitar código duplicado. Crie compinentes)
