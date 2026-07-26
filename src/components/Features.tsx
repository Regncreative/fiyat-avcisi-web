import { useLocale } from '../i18n/LocaleContext'

const icons = [
  <TrackIcon key="track" />,
  <AlertIcon key="alert" />,
  <CrawlerIcon key="crawler" />,
  <CompareIcon key="compare" />,
  <DashIcon key="dash" />,
]

export function Features() {
  const { t } = useLocale()

  return (
    <section className="section" id="features">
      <div className="section__head">
        <h2>{t.features.title}</h2>
        <p>{t.features.subtitle}</p>
      </div>

      <ul className="feature-list">
        {t.features.items.map((item, i) => (
          <li key={item.title} className="feature-item">
            <div className="feature-item__icon" aria-hidden>
              {icons[i]}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function TrackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 19V5M4 19h16M8 15l3-4 2.5 3L18 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 9v4M12 17h.01M6.7 19h10.6a2 2 0 0 0 1.75-2.97L13.75 5a2 2 0 0 0-3.5 0L4.95 16.03A2 2 0 0 0 6.7 19Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CrawlerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 7h16M4 12h10M4 17h7M17 14l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M8 5v14M16 5v14M4 9h4M16 15h4M4 15h4M16 9h4" strokeLinecap="round" />
    </svg>
  )
}

function DashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </svg>
  )
}
