# SisVagas UBS

Sistema web de gestão e agendamento de vagas para Unidades Básicas de Saúde (UBS), desenvolvido como projeto demonstrativo na palestra do **IFPE (Instituto Federal de Pernambuco)** sobre desenvolvimento de software com inteligência artificial.

---

## Sobre o Projeto

O **SisVagas UBS** é uma aplicação que visa centralizar e otimizar a distribuição de vagas de atendimento em UBSs — consultas médicas, exames e retornos —, reduzindo filas físicas, absenteísmo e ociosidade nas agendas dos profissionais de saúde.

O sistema é dividido em três módulos:

- **Cidadão** — agendamento e cancelamento online de consultas
- **Recepção / Profissionais de Saúde** — painel de check-in, agenda do dia e bloqueio de horários
- **Gestão / Regulação** — grade de vagas, lista de espera inteligente e relatórios de ocupação

Para detalhes completos de requisitos, personas e KPIs, consulte o [PRD.md](./PRD.md).

---

## Palestra IFPE — Claude Code na Prática

Este repositório foi utilizado ao vivo na palestra ministrada no IFPE para demonstrar como o **Claude Code** — a CLI de IA da Anthropic — pode ser integrado ao ciclo de desenvolvimento real de um produto de software.

Durante a apresentação foram mostrados, na prática:

- Geração e refinamento de requisitos (PRD) assistidos por IA
- Scaffolding de projeto Next.js com arquitetura definida em `CLAUDE.md`
- Criação de regras de código, segurança e workflow lidas automaticamente pelo agente
- Desenvolvimento de features com revisão de código via subagente (`code-reviewer`)
- Commits com mensagens em Conventional Commits geradas pela skill `/commit`

> O objetivo foi evidenciar que a IA não substitui o desenvolvedor, mas atua como um colaborador que conhece o projeto, segue as regras do time e aumenta a produtividade em tarefas repetitivas.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS |
| Banco de dados | PostgreSQL via Prisma |
| Autenticação | NextAuth.js v5 (Google) |
| Validação | Zod |
| Deploy | Vercel |

---

## Como Rodar

### Pré-requisitos

- Node.js 20+
- PostgreSQL (local ou Supabase)
- Conta Google para OAuth (NextAuth)

### 1. Clone e instale as dependências

```bash
git clone https://github.com/Mikaelbr073/ifpe-claudinho.git
cd ifpe-claudinho
npm install
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Preencha o `.env.local` com suas credenciais:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/sisvagas
NEXTAUTH_SECRET=sua-chave-secreta
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=seu-client-id
GOOGLE_CLIENT_SECRET=seu-client-secret
```

### 3. Rode as migrations e o servidor

```bash
npx prisma migrate dev
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento (porta 3000)
npm run build      # Build de produção
npm run start      # Servir build de produção
npm run typecheck  # Verificação de tipos (tsc --noEmit)
npm run lint       # ESLint com zero warnings tolerados
npm run format     # Prettier em todo o projeto
```

```bash
npx prisma studio          # GUI do banco em localhost:5555
npx prisma migrate dev     # Cria e aplica nova migration
npm run db:seed            # Popula banco com dados de desenvolvimento
```
