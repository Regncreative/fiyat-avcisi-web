import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'
import { DemoPreview } from './DemoPreview'

export function Demo() {
  const { t } = useLocale()

  return (
    <section className="section" id="demo">
      <div className="section__head">
        <h2>{t.demo.title}</h2>
        <p>{t.demo.subtitle}</p>
      </div>

      <a
        className="demo-frame demo-frame--link"
        href={config.demoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t.demo.demoCta}
      >
        <div className="demo-frame__chrome" aria-hidden>
          <span />
          <span />
          <span />
          <div className="demo-frame__url">
            <span className="demo-frame__lock" />
            app.fiyatavcisi.com
          </div>
        </div>
        <div className="demo-frame__stage">
          <DemoPreview />
          <div className="demo-frame__hover">
            <span className="btn btn--primary btn--sm">{t.demo.demoCta}</span>
          </div>
        </div>
      </a>
    </section>
  )
}
