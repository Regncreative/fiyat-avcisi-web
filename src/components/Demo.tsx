import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

export function Demo() {
  const { t } = useLocale()

  return (
    <section className="section" id="demo">
      <div className="section__head">
        <h2>{t.demo.title}</h2>
        <p>{t.demo.subtitle}</p>
      </div>

      <div className="demo-frame">
        <div className="demo-frame__chrome" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="demo-frame__body">
          <img
            src="/logos/fiyatavcisi_logo_sembol.svg"
            alt=""
            width={56}
            height={56}
          />
          <p>{t.demo.placeholder}</p>
          <a
            className="btn btn--primary btn--sm"
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.demo.githubCta}
          </a>
        </div>
      </div>
    </section>
  )
}
