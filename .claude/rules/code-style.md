# Estilo de Código

**Nomes:**
- Componentes: `PascalCase`, arquivo casa com nome (`PomodoroTimer.tsx` exporta `PomodoroTimer`)
- Hooks: `useCamelCase` — prefixo `use` obrigatório
- Utils e helpers: `camelCase`
- Constantes de módulo: `UPPER_SNAKE_CASE`
- Server actions: verbos no nome (`createTask`, `completeSession`)

**Imports:**
- Ordem: React → libs externas → `@/` aliases → relativos → estilos
- Sem imports relativos que sobem mais de 2 níveis (`../../../` proibido, use `@/`)
- Imports não usados são erro (`@typescript-eslint/no-unused-vars: error`)

**Componentes:**
- Props sempre tipadas em interface nomeada acima do componente (não inline)
- Early return pra loading/empty/error — nunca ternários aninhados no JSX
- Extraia componente quando o arquivo passar de ~150 linhas
- Não use `React.FC`. Use `function Nome(props: Props) {}`

**Tailwind:**
- Sem `@apply` em CSS — se está repetindo muita classe, crie um componente
- Ordem de classes: layout → box model → typography → colors → states
- Use variáveis de tema Tailwind (`bg-background`, `text-foreground`), não hex literal
- Breakpoints: mobile-first. `md:` e `lg:` adicionam, nunca sobrescrevem completamente

**Async:**
- `async/await` sempre. Nunca `.then()` encadeado em código novo
- Todo `fetch` ou chamada externa tem timeout explícito
- Erros de rede viram `Result<T, E>` em server actions, nunca throw que sobe pro React
