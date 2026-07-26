export const config = {
  githubUrl:
    import.meta.env.VITE_GITHUB_URL ??
    'https://github.com/Regncreative/fiyat-avcisi',
  demoUrl: import.meta.env.VITE_DEMO_URL ?? 'https://app.fiyatavcisi.com',
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://fiyatavcisi.com',
} as const
