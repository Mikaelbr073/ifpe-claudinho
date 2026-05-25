---
name: commit
description: Gera mensagem de commit no padrão do time a partir do diff
---

Ao ser invocada, leia o diff staged e produza:
- type(scope): descrição curta (máximo 50 chars)
- Corpo: o que mudou e por quê (máximo 3 linhas)
- Footer: "Co-authored-by: Claude Code"
**Pull Requests:**
- Título em conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- Descrição obrigatória: O que, Por que, Como testar
- Máximo 400 linhas de diff por PR (exceto schema changes documentados)
- Sem PR sem teste, exceto refatorações puras
- Use a skill `/pr-summary` pra gerar descrição do PR


Use conventional commits. Não explique o óbvio.