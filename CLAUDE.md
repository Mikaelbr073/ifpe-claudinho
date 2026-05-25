# nome do projeto 


## Regras

As regras estão em `.claude/rules/`:

| Arquivo | Conteúdo |
|---|---|
| [`architecture.md`](.claude/rules/architecture.md) | Stack, decisões de design, o que não vai entrar |
| [`code-style.md`](.claude/rules/code-style.md) | Nomes, imports, componentes, Tailwind, async |
| [`workflow.md`](.claude/rules/workflow.md) | Plan mode, commits, testes, code review |
| [`security.md`](.claude/rules/security.md) | Auth, env vars, Zod, cookies, rate limit |
| [`performance.md`](.claude/rules/performance.md) | Server components, Prisma, imagens, bundle |
| [`commands.md`](.claude/rules/commands.md) | Comandos disponíveis e permissões |

## Agentes & Skills

- `.claude/agents/code-reviewer` — reviewer sênior antes do PR
- `/commit` — gera mensagem conventional commits a partir do diff
- `/pr-summary` — gera descrição de PR (O que / Por que / Como testar)
- `/audit-auth` — varredura de segurança em fluxos de autenticação
