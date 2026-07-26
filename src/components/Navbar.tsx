import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

export function Navbar() {
  const { t, locale, setLocale } = useLocale()

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="Fiyat Avcısı">
          <img
            src="/logos/fiyatavcisi_logo_sembol.svg"
            alt=""
            width={28}
            height={28}
          />
          <span>Fiyat Avcısı</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#demo">{t.nav.demo}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#why">{t.nav.why}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>

        <div className="nav__actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : undefined}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              <FlagUK />
              EN
            </button>
            <button
              type="button"
              className={locale === 'tr' ? 'is-active' : undefined}
              onClick={() => setLocale('tr')}
              aria-pressed={locale === 'tr'}
            >
              <FlagTR />
              TR
            </button>
          </div>

          <a
            className="nav__github"
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            {t.nav.github}
          </a>

          <a
            className="btn btn--primary btn--sm"
            href={config.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}

function FlagUK() {
  return (
    <svg
      className="lang-toggle__flag"
      width="16"
      height="12"
      viewBox="0 0 60 40"
      aria-hidden
    >
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="5" />
      <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="13" />
      <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  )
}

function FlagTR() {
  return (
    <svg
      className="lang-toggle__flag"
      width="16"
      height="12"
      viewBox="0 0 60 40"
      aria-hidden
    >
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="25" cy="20" r="10" fill="#fff" />
      <circle cx="28.5" cy="20" r="8" fill="#E30A17" />
      <polygon
        fill="#fff"
        points="38,20 34.9,21.1 35.7,17.8 33.2,15.7 36.6,15.5 38,12.4 39.4,15.5 42.8,15.7 40.3,17.8 41.1,21.1"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}
