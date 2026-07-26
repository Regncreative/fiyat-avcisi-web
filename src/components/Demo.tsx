import { useLocale } from '../i18n/LocaleContext'
import { config } from '../config'

type DashRow = {
  name: string
  store: string
  price: string
  change: string
  down: boolean
  image: string
}

const DASH_ROWS: DashRow[] = [
  {
    name: 'Sony WH-1000XM5 Kablosuz Kulaklık',
    store: 'trendyol.com',
    price: '12.499 TL',
    change: '−3.9%',
    down: true,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=160&h=160&fit=crop',
  },
  {
    name: 'Samsung Galaxy Watch6 44mm',
    store: 'trendyol.com',
    price: '7.499 TL',
    change: '−4.5%',
    down: true,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=160&h=160&fit=crop',
  },
  {
    name: 'Dyson V15 Detect Absolute',
    store: 'hepsiburada.com',
    price: '28.999 TL',
    change: '+3.6%',
    down: false,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=160&h=160&fit=crop',
  },
  {
    name: 'Amazon Kindle Paperwhite 16GB',
    store: 'amazon.com.tr',
    price: '4.499 TL',
    change: '−4.3%',
    down: true,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=160&h=160&fit=crop',
  },
  {
    name: 'Nike Air Zoom Pegasus 41',
    store: 'trendyol.com',
    price: '4.299 TL',
    change: '−3.4%',
    down: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop',
  },
  {
    name: 'Logitech MX Master 3S',
    store: 'amazon.com.tr',
    price: '3.899 TL',
    change: '+5.4%',
    down: false,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=160&h=160&fit=crop',
  },
  {
    name: 'Apple AirPods Pro (2. Nesil)',
    store: 'n11.com',
    price: '8.999 TL',
    change: '−10.0%',
    down: true,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=160&h=160&fit=crop',
  },
  {
    name: 'LG OLED55C3 55" 4K Smart TV',
    store: 'hepsiburada.com',
    price: '42.999 TL',
    change: '−12.2%',
    down: true,
    image: 'https://images.unsplash.com/photo-1593359677879-a4b92e8b6170?w=160&h=160&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=240&h=240&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=240&h=240&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=240&h=240&fit=crop',
    chart: 'M8 18 C55 35 95 55 140 85 C185 112 235 125 292 148',
    fill: 'M8 18 C55 35 95 55 140 85 C185 112 235 125 292 148 L292 160 L8 160 Z',
  },
]

function formatRows(rows: DashRow[], keyPrefix: string) {
  return rows.map((row) => (
    <li key={`${keyPrefix}-${row.name}`} className="dash-row">
      <img className="dash-row__thumb" src={row.image} alt="" width={34} height={34} loading="lazy" />
      <div className="dash-row__meta">
        <strong>{row.name}</strong>
        <span>{row.store}</span>
      </div>
      <div className="dash-row__price">
        <strong>{row.price}</strong>
        <span className={row.down ? 'is-down' : 'is-up'}>{row.change}</span>
      </div>
    </li>
  ))
}

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
                <strong className="dash-kpi__num">8</strong>
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
              <div className="dash__marquee">
                <ul className="dash__marquee-track">
                  {formatRows(DASH_ROWS, 'a')}
                  {formatRows(DASH_ROWS, 'b')}
                </ul>
              </div>
            </div>
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
                <img
                  className="detail-card__photo"
                  src={item.image}
                  alt=""
                  width={72}
                  height={72}
                  loading="lazy"
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
                  <circle
                    className="detail-card__dot"
                    cx="292"
                    cy={item.down ? 148 : 22}
                    r="5"
                    fill="#0891b2"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
