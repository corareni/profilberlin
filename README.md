# Profil Vermögensmanagement GmbH

Production-ready website for Profil Vermögensmanagement GmbH — independent wealth management in Berlin.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Formspree (contact form)
- Vercel Analytics

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint URL |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |

## Deployment

Deploy to Vercel and add the environment variables from `.env.example`.

Connect domain `profilberlin.de`:
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`
