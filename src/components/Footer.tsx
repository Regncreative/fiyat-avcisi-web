import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

export function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            src="/logos/fiyatavcisi_logo_yatay_siyah.svg"
            alt="Fiyat Avcısı"
            height={28}
          />
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer__links">
          <a href={config.githubUrl} target="_blank" rel="noreferrer">
            {t.footer.github}
          </a>
          <a
            href={`${config.githubUrl}/blob/main/LICENSE`}
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.license}
          </a>
        </div>

        <p className="footer__copy">
          © {year} {t.footer.rights} · MIT
        </p>
      </div>
    </footer>
  )
}
