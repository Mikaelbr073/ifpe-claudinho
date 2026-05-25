# Comandos & Permissões

**Desenvolvimento:**
```bash
npm run dev       # Next em modo dev, porta 3000
npm run build     # Build de produção
npm run start     # Servir build de produção
```

**Qualidade:**
```bash
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint, --max-warnings 0
npm run format     # Prettier em todo o projeto
```

**Banco:**
```bash
npx prisma migrate dev --name <descricao>  # Cria e aplica migração
npx prisma studio                          # GUI do banco em localhost:5555
npx prisma generate                        # Regera client após schema changes
npm run db:seed                            # Popula banco com dados de dev
npm run db:reset                           # Dropa tudo e recomeça (APENAS DEV)
```

**Pode rodar sem pedir:**
- `npm run typecheck`, `npm run lint`, `npm run format`
- `npx prisma generate`
- `git status`, `git diff`, `git log`, `git branch`
- Leituras de arquivo e listagens de diretório

**Sempre pede confirmação:**
- `git commit`, `git push`, `git checkout` em outro branch
- `npx prisma migrate dev`
- `npm run db:reset`, `npm run db:seed`
- `npm install` de qualquer pacote novo
- Alterações em `.env*`, `next.config.ts`, `prisma/schema.prisma`
