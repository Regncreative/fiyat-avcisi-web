import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden />
      <div className="hero__content">
        <div className="hero__mark">
          <img
            src="/logos/fiyatavcisi_logo_sembol.svg"
            alt=""
            width={88}
            height={88}
          />
        </div>

        <h1 className="hero__brand">{t.hero.brand}</h1>
        <p className="hero__tagline">{t.hero.tagline}</p>

        <ul className="badges" aria-label="Project badges">
          <li className="badge badge--dark">
            <span className="badge__dot" />
            {t.badges.openSource}
          </li>
          <li className="badge badge--blue">
            <span className="badge__label">TS</span>
            {t.badges.typescript}
          </li>
          <li className="badge badge--green">
            <span className="badge__label">MIT</span>
            {t.badges.license}
          </li>
          <li className="badge badge--slate">{t.badges.stack}</li>
          <li className="badge badge--slate">{t.badges.queue}</li>
        </ul>

        <div className="hero__ctas">
          <a
            className="btn btn--primary"
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href={config.demoUrl}>
            {t.hero.ctaSecondary}
          </a>
        </div>

        <p className="hero__hint">{t.hero.hint}</p>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}
