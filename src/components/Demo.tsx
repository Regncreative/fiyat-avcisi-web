import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

const DASH_ROWS = [
  {
    name: 'Sony WH-1000XM5 Kablosuz Kulaklık',
    store: 'trendyol.com',
    price: '12.499 TL',
    change: '−3.9%',
    down: true,
    hue: '#94a3b8',
  },
  {
    name: 'Samsung Galaxy Watch6 44mm',
    store: 'trendyol.com',
    price: '7.499 TL',
    change: '−4.5%',
    down: true,
    hue: '#64748b',
  },
  {
    name: 'Dyson V15 Detect Absolute',
    store: 'hepsiburada.com',
    price: '28.999 TL',
    change: '+3.6%',
    down: false,
    hue: '#78716c',
  },
]

const DETAILS = [
  {
    name: 'Apple AirPods Pro (2. Nesil)',
    store: 'n11.com',
    price: '₺8.999,00',
    delta: '−₺1.000,00 (10.0%)',
    down: true,
    status: 'paused' as const,
    chart: 'M8 18 C70 22 110 70 160 95 C210 118 250 130 292 142',
    fill: 'M8 18 C70 22 110 70 160 95 C210 118 250 130 292 142 L292 160 L8 160 Z',
  },
  {
    name: 'Logitech MX Master 3S',
    store: 'amazon.com.tr',
    price: '₺3.899,00',
    delta: '+₺400,00 (11.4%)',
    down: false,
    status: 'active' as const,
    chart: 'M8 142 C60 130 110 118 160 100 C210 80 250 45 292 22',
    fill: 'M8 142 C60 130 110 118 160 100 C210 80 250 45 292 22 L292 160 L8 160 Z',
  },
  {
    name: 'Samsung Galaxy Watch6 44mm',
    store: 'trendyol.com',
    price: '₺7.499,00',
    delta: '−₺1.500,00 (16.7%)',
    down: true,
    status: 'active' as const,
    chart: 'M8 18 C55 35 95 55 140 85 C185 112 235 125 292 148',
    fill: 'M8 18 C55 35 95 55 140 85 C185 112 235 125 292 148 L292 160 L8 160 Z',
  },
]

export function Demo() {
  const { t, locale } = useLocale()
  const tr = locale === 'tr'

  return (
    <section className="demo-section" id="demo">
      <a
        className="demo-wide"
        href={config.demoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t.demo.demoCta}
      >
        <div className="demo-wide__chrome" aria-hidden>
          <span />
          <span />
          <span />
          <div className="demo-wide__url">
            <i />
            app.fiyatavcisi.com
          </div>
        </div>

        <div className="dash" aria-hidden>
          <aside className="dash__side">
            <div className="dash__logo">
              <img src="/logos/fiyatavcisi_logo_sembol.svg" alt="" width={18} height={18} />
              <strong>Fiyat Avcısı</strong>
            </div>
            <nav className="dash__nav">
              <span className="is-active">{tr ? 'Kontrol Paneli' : 'Dashboard'}</span>
              <span>{tr ? 'Ürünler' : 'Products'}</span>
              <span>{tr ? 'Karşılaştır' : 'Compare'}</span>
              <span>{tr ? 'Alarmlar' : 'Alerts'}</span>
              <span>{tr ? 'Ayarlar' : 'Settings'}</span>
            </nav>
            <div className="dash__scan">
              <div className="dash__scan-head">
                <span>{tr ? 'Tarama Durumu' : 'Scan status'}</span>
                <i className="dash__live" />
              </div>
              <div className="dash__bar">
                <span />
              </div>
              <small>{tr ? '6 / 8 ürün aktif' : '6 / 8 products active'}</small>
            </div>
          </aside>

          <div className="dash__main">
            <header className="dash__top">
              <div>
                <span className="dash__crumb">Dashboard</span>
                <h3>{tr ? 'Kontrol Paneli' : 'Control Panel'}</h3>
                <p>
                  {tr
                    ? 'Fiyat takibindeki tüm ürünlerini tek ekranda yönet.'
                    : 'Manage every tracked product from one screen.'}
                </p>
              </div>
              <span className="dash__add">{tr ? '+ Ürün Ekle' : '+ Add product'}</span>
            </header>

            <div className="dash__kpis">
              <div className="dash-kpi dash-kpi--slate">
                <span>{tr ? 'Toplam Ürün' : 'Total'}</span>
                <strong className="dash-kpi__num" data-n="8">
                  8
                </strong>
              </div>
              <div className="dash-kpi dash-kpi--emerald">
                <span>{tr ? 'Aktif Takip' : 'Active'}</span>
                <strong className="dash-kpi__num">6</strong>
              </div>
              <div className="dash-kpi dash-kpi--amber">
                <span>{tr ? 'Duraklatılan' : 'Paused'}</span>
                <strong className="dash-kpi__num">1</strong>
              </div>
              <div className="dash-kpi dash-kpi--rose">
                <span>{tr ? 'Erişilemeyen' : 'Unavailable'}</span>
                <strong className="dash-kpi__num">1</strong>
              </div>
            </div>

            <div className="dash__compare">
              <div className="dash__compare-head">
                <span>{tr ? 'Hızlı karşılaştırma' : 'Quick compare'}</span>
              </div>
              <div className="dash__compare-body">
                <div className="dash-compare-row is-winner">
                  <em>#1</em>
                  <span>Nike Air Zoom Pegasus 41</span>
                  <strong>4.299 TL</strong>
                </div>
                <div className="dash-compare-row">
                  <span>Samsung Galaxy Watch6 44mm</span>
                  <strong>7.499 TL</strong>
                </div>
              </div>
            </div>

            <div className="dash__changes">
              <div className="dash__changes-head">
                <strong>{tr ? 'Son Fiyat Değişimleri' : 'Recent price changes'}</strong>
                <span>{tr ? 'Son güncellenen fiyatlar' : 'Latest updates'}</span>
              </div>
              <ul>
                {DASH_ROWS.map((row, i) => (
                  <li
                    key={row.name}
                    className="dash-row"
                    style={{ ['--i' as string]: String(i) }}
                  >
                    <span
                      className="dash-row__thumb"
                      style={{ background: `linear-gradient(145deg, ${row.hue}, #e2e8f0)` }}
                    />
                    <div className="dash-row__meta">
                      <strong>{row.name}</strong>
                      <span>{row.store}</span>
                    </div>
                    <div className="dash-row__price">
                      <strong>{row.price}</strong>
                      <span className={row.down ? 'is-down' : 'is-up'}>{row.change}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dash__cursor" />
          </div>
        </div>

        <div className="demo-wide__cta">
          <span className="btn btn--primary btn--sm">{t.demo.demoCta}</span>
        </div>
      </a>

      <div className="demo-details">
        <div className="section__head demo-details__head">
          <h2>{t.demo.detailsTitle}</h2>
          <p>{t.demo.detailsSubtitle}</p>
        </div>

        <div className="demo-details__grid">
          {DETAILS.map((item, i) => (
            <article
              key={item.name}
              className="detail-card"
              style={{ ['--i' as string]: String(i) }}
            >
              <header className="detail-card__head">
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.store}</span>
                </div>
                <span className="detail-card__link">{tr ? 'Ürüne Git' : 'Open product'}</span>
              </header>

              <div className="detail-card__body">
                <div
                  className="detail-card__photo"
                  style={{
                    background: `linear-gradient(145deg, ${
                      i === 0 ? '#e2e8f0' : i === 1 ? '#cbd5e1' : '#94a3b8'
                    }, #f8fafc)`,
                  }}
                />
                <div className="detail-card__info">
                  <span
                    className={`detail-card__status ${
                      item.status === 'active' ? 'is-active' : 'is-paused'
                    }`}
                  >
                    {item.status === 'active'
                      ? tr
                        ? 'Aktif'
                        : 'Active'
                      : tr
                        ? 'Duraklatıldı'
                        : 'Paused'}
                  </span>
                  <small>{tr ? 'Güncel Fiyat' : 'Current price'}</small>
                  <strong className="detail-card__price">{item.price}</strong>
                  <em className={item.down ? 'is-down' : 'is-up'}>{item.delta}</em>
                </div>
              </div>

              <div className="detail-card__chart">
                <span>{tr ? 'Fiyat Geçmişi' : 'Price history'}</span>
                <svg viewBox="0 0 300 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`fill-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(8,145,178,0.28)" />
                      <stop offset="100%" stopColor="rgba(8,145,178,0)" />
                    </linearGradient>
                  </defs>
                  <path className="detail-card__fill" d={item.fill} fill={`url(#fill-${i})`} />
                  <path
                    className="detail-card__line"
                    d={item.chart}
                    fill="none"
                    stroke="#0891b2"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle className="detail-card__dot" cx="292" cy={item.down ? 148 : 22} r="5" fill="#0891b2" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
