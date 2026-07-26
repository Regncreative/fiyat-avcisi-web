import { useLocale } from '../i18n/LocaleContext'

const STACK = [
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Vite', color: '#646cff' },
  { name: 'Express', color: '#68a063' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'BullMQ', color: '#1e3a5f' },
  { name: 'Node.js', color: '#339933' },
]

export function Stack() {
  const { t } = useLocale()

  return (
    <section className="section" id="stack">
      <div className="section__head">
        <h2>{t.stack.title}</h2>
        <p>{t.stack.subtitle}</p>
      </div>

      <ul className="stack-row">
        {STACK.map((item) => (
          <li key={item.name} className="stack-pill">
            <span
              className="stack-pill__dot"
              style={{ background: item.color }}
              aria-hidden
            />
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
