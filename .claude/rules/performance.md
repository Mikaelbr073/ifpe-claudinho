# Regras de Performance

- Server component > client component. Se puder ser server, seja server
- `revalidatePath` granular, nunca `revalidatePath('/')` desnecessário
- Imagens via `next/image` com `width`/`height` explícitos, nunca `<img>` direto
- Prisma: use `select` pra pegar só os campos necessários, evite `include` desnecessário
- Evite `useEffect` pra buscar dados — use server components ou `use` hook com promise
- Timer do Pomodoro: roda com `setInterval` de 1s em client component isolado — não propague re-render pra tree inteira
- Dep nova precisa justificar peso. Se custa >20KB gzipped, discuta antes
