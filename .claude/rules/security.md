# Regras de Segurança

- `NEXTAUTH_SECRET` nunca no código — sempre em `.env.local` (gitignored)
- `.env*` NUNCA entra em commit. Só `.env.example` com placeholders
- Toda server action que modifica dados valida sessão primeiro:
  ```ts
  const session = await auth()
  if (!session?.user) return { error: "unauthorized" }
  ```
- Toda query Prisma de dados de usuário filtra por `userId: session.user.id` — nunca confiar em ID vindo do client
- Zod valida TODO input de server action / API route, sem exceção
- Erros de auth NUNCA expõem se o email existe — mensagem genérica sempre
- Cookies de sessão: `httpOnly: true`, `sameSite: "lax"`, `secure: true` em prod
- Rate limit em endpoint público (login, signup): 5 tentativas/min por IP
