# Keploy + Go tutorial

A single-page tutorial on recording and replaying API tests with [Keploy](https://keploy.io), using the
[`fasthttp-postgres`](https://github.com/keploy/samples-go/tree/main/fasthttp-postgres) sample
(FastHttp + Postgres, run with Docker Compose on WSL2).

**Live site:** https://keploydevrel.vercel.app/

## Tech stack

Next.js (App Router, TypeScript), MDX via `@next/mdx`, Tailwind CSS + typography, shadcn/ui,
`next-themes`, `rehype-pretty-code` + Shiki, `lucide-react`.

## Local setup

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (the page is statically prerendered)
npm run lint
npm run check:content   # fails while USER:/TODO placeholders remain
```

## Structure

- `app/page.mdx` - the tutorial content
- `app/layout.tsx` - header, hero, table of contents, footer, theme
- `components/` - MDX components (Callout, Steps, CodeBlock, diagram, ...)
- `mdx-components.tsx` - maps components into MDX
- `lib/site.ts` - title, author and repo link
