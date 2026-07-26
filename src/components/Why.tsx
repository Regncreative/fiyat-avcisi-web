import { useLocale } from '../i18n/LocaleContext'

export function Why() {
  const { t } = useLocale()

  return (
    <section className="section section--tint" id="why">
      <div className="section__head">
        <h2>{t.why.title}</h2>
        <p>{t.why.subtitle}</p>
      </div>

      <ul className="why-grid">
        {t.why.items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
