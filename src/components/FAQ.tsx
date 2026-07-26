import { useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'

export function FAQ() {
  const { t } = useLocale()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="section__head">
        <h2>{t.faq.title}</h2>
      </div>

      <ul className="faq-list">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <li key={item.q} className={isOpen ? 'is-open' : undefined}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-q__icon" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div className="faq-a" hidden={!isOpen}>
                <p>{item.a}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
