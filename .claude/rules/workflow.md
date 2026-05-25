# Workflow & Processos

**Antes de qualquer tarefa não-trivial:**
1. Se a tarefa mexe em ≥3 arquivos OU muda schema do Prisma OU mexe em auth → apresente plano ANTES de escrever código
2. Plano deve listar: arquivos a criar, arquivos a alterar, riscos percebidos
3. Aguarde aprovação explícita antes de executar

**Durante a execução:**
- Commits pequenos e atômicos — um conceito por commit
- Rode `npm run typecheck` antes de cada commit
- Se algo parece ambíguo, PERGUNTE em vez de chutar

**Testes:**
- Não implementar testes

**Code review:**
- Use o subagente `code-reviewer` antes de abrir PR
- Comentários de review são resolvidos, não ignorados
