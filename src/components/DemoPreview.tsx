import { useLocale } from '../i18n/LocaleContext'

type Row = {
  name: string
  store: string
  price: string
  change: string
  down: boolean
  hue: string
}

const ROWS: Row[] = [
  {
    name: 'Sony WH-1000XM5',
    store: 'trendyol.com',
    price: '12.499 ₺',
    change: '−3.9%',
    down: true,
    hue: '#38bdf8',
  },
  {
    name: 'Dyson V15 Detect',
    store: 'hepsiburada.com',
    price: '28.999 ₺',
    change: '+3.6%',
    down: false,
    hue: '#a78bfa',
  },
  {
    name: 'Kindle Paperwhite',
    store: 'amazon.com.tr',
    price: '4.499 ₺',
    change: '−4.3%',
    down: true,
    hue: '#34d399',
  },
  {
    name: 'Galaxy Watch6',
    store: 'trendyol.com',
    price: '7.499 ₺',
    change: '−4.5%',
    down: true,
    hue: '#fb7185',
  },
]

export function DemoPreview() {
  const { locale } = useLocale()
  const isTr = locale === 'tr'

  const kpis = isTr
    ? [
        { label: 'Toplam', value: '24', tone: 'slate' },
        { label: 'Aktif', value: '18', tone: 'emerald' },
        { label: 'Uyarı', value: '5', tone: 'amber' },
        { label: 'Düşüş', value: '3', tone: 'rose' },
      ]
    : [
        { label: 'Total', value: '24', tone: 'slate' },
        { label: 'Active', value: '18', tone: 'emerald' },
        { label: 'Alerts', value: '5', tone: 'amber' },
        { label: 'Drops', value: '3', tone: 'rose' },
      ]

  return (
    <div className="demo-preview" aria-hidden>
      <aside className="demo-preview__side">
        <div className="demo-preview__brand">
          <img src="/logos/fiyatavcisi_logo_sembol.svg" alt="" width={18} height={18} />
          <span>Fiyat Avcısı</span>
        </div>
        <div className="demo-preview__nav">
          <span className="is-active">{isTr ? 'Panel' : 'Dashboard'}</span>
          <span>{isTr ? 'Ürünler' : 'Products'}</span>
          <span>{isTr ? 'Uyarılar' : 'Alerts'}</span>
          <span>{isTr ? 'Ayarlar' : 'Settings'}</span>
        </div>
      </aside>

      <div className="demo-preview__main">
        <div className="demo-preview__hero">
          <div>
            <span className="demo-preview__pill">{isTr ? 'Panel' : 'Dashboard'}</span>
            <strong>{isTr ? 'Kontrol Paneli' : 'Control Panel'}</strong>
          </div>
          <span className="demo-preview__cta">{isTr ? '+ Ürün Ekle' : '+ Add product'}</span>
        </div>

        <div className="demo-preview__kpis">
          {kpis.map((kpi) => (
            <div key={kpi.label} className={`demo-kpi demo-kpi--${kpi.tone}`}>
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
            </div>
          ))}
        </div>

        <div className="demo-preview__list">
          <div className="demo-preview__list-head">
            {isTr ? 'Son fiyat değişimleri' : 'Recent price changes'}
          </div>
          <ul>
            {ROWS.map((row, i) => (
              <li
                key={row.name}
                className="demo-row"
                style={{ animationDelay: `${0.15 + i * 0.18}s` }}
              >
                <span
                  className="demo-row__thumb"
                  style={{ background: `linear-gradient(145deg, ${row.hue}, #e2e8f0)` }}
                />
                <div className="demo-row__meta">
                  <strong>{row.name}</strong>
                  <span>{row.store}</span>
                </div>
                <div className="demo-row__price">
                  <strong className="demo-row__amount">{row.price}</strong>
                  <span className={row.down ? 'is-down' : 'is-up'}>{row.change}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="demo-preview__chart">
          <svg viewBox="0 0 320 72" preserveAspectRatio="none">
            <defs>
              <linearGradient id="demoChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0,99,254,0.28)" />
                <stop offset="100%" stopColor="rgba(0,99,254,0)" />
              </linearGradient>
            </defs>
            <path
              className="demo-preview__chart-fill"
              d="M0 52 C40 48 55 30 90 34 C125 38 140 18 175 22 C210 26 230 40 260 28 C285 20 300 24 320 16 L320 72 L0 72 Z"
              fill="url(#demoChartFill)"
            />
            <path
              className="demo-preview__chart-line"
              d="M0 52 C40 48 55 30 90 34 C125 38 140 18 175 22 C210 26 230 40 260 28 C285 20 300 24 320 16"
              fill="none"
              stroke="#0063fe"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle className="demo-preview__chart-dot" cx="320" cy="16" r="4" fill="#0063fe" />
          </svg>
        </div>
      </div>
    </div>
  )
}
