# Fiyat Avcısı — Landing

Marketing / portfolio site for **Fiyat Avcısı** (e-commerce price tracking).  
This repo is **not** the application — the app monorepo is:

https://github.com/Regncreative/fiyat-avcisi

## Stack

- Vite + React + TypeScript
- Static export (Vercel-ready)
- EN / TR locale toggle

## Local development

```bash
npm install
cp .env.example .env   # optional
npm run dev
```

Open http://localhost:5173

## Environment

| Variable | Purpose | Default |
|----------|---------|---------|
| `VITE_GITHUB_URL` | App monorepo | `https://github.com/Regncreative/fiyat-avcisi` |
| `VITE_DEMO_URL` | Live demo CTA | `#demo` (placeholder) |
| `VITE_SITE_URL` | Canonical site | `https://fiyatavcisi.com` |

## Deploy on Vercel

1. Import this repository in Vercel.
2. Framework preset: **Vite** (Build: `npm run build`, Output: `dist`).
3. Set env vars above if you want non-default URLs.
4. Point `fiyatavcisi.com` to the project when ready.

```bash
npm run build
npm run preview
```

## Logos

Brand assets under `public/logos/` were copied from the app monorepo  
`frontend/src/assets/fiyatavcisi_logo_*`.

## License

Site content mirrors the app’s MIT license intent. Application code license: see the monorepo `LICENSE`.
