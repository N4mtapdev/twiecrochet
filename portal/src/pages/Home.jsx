import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CAI_DAT, STATS, THON, BAI_VIET } from '../data.js'
import { LogoImg } from '../components/Logo.jsx'
import BannerSlider from '../components/BannerSlider.jsx'
import { useReveal } from '../components/ui.jsx'

export default function Home() {
  useReveal()
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  const goSearch = () => {
    navigate('/thon-public' + (q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ''))
  }

  const news = useMemo(() => BAI_VIET.slice(0, 3), [])

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <LogoImg size={100} />
          <h1 className="hero-title">Cổng Theo Dõi Tin Tức<br />&amp; Tra Cứu Thông Tin</h1>
          <div className="hero-sub">{CAI_DAT.tenCong} — tỉnh Vĩnh Long</div>
          <p className="hero-desc">{CAI_DAT.heroDesc}</p>
          <div className="search-box">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && goSearch()}
              placeholder="Tìm kiếm tên ấp, cán bộ, dịch vụ..."
              aria-label="Tìm kiếm"
            />
            <button className="search-btn" onClick={goSearch}>🔍 Tìm kiếm →</button>
          </div>
        </div>
      </header>

      <div className="stats-wrap reveal">
        <div className="stats-grid">
          {STATS.map(s => (
            <div className="stat-card" key={s.label}>
              <div className="icon-box" style={{ background: s.bg }}>{s.icon}</div>
              <div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BannerSlider />

      <section id="thon">
        <div className="sec-container">
          <div className="sec-header reveal">
            <div className="title-group">
              <span className="icon-badge">📍</span>
              <div>
                <h2 className="sec-title">Tra cứu thông tin Thôn</h2>
                <p className="sec-sub">Danh sách {THON.length} ấp trực thuộc xã Tập Ngãi, tỉnh Vĩnh Long</p>
              </div>
            </div>
          </div>
          <div className="cards-grid">
            {THON.slice(0, 4).map((t, i) => (
              <div className="thon-card" key={t.slug}>
                <div className="card-header" style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}>
                  <span className="emoji">{t.ubnd ? '🏛️' : '🏘️'}</span>
                  <div className="card-overlay" />
                  <div className="header-content">
                    <h3 className="thon-title">{t.ten}</h3>
                    <span className="thon-sub">{t.ubnd ? '★ Trụ sở UBND xã Tập Ngãi' : 'Ấp trực thuộc xã Tập Ngãi'}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="nv-row">📍 {t.nhaVanHoa}</div>
                  <div className="card-footer">
                    <button className="detail-btn" onClick={() => navigate(`/thon-public/${t.slug}`)}>Xem chi tiết →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button className="btn-mini primary" onClick={() => navigate('/thon-public')}>Xem tất cả {THON.length} ấp →</button>
          </div>
        </div>
      </section>

      <section id="tintuc" style={{ background: 'linear-gradient(180deg,#eef2fb,#f8fafc)', padding: '64px 0 56px', marginTop: 56 }}>
        <div className="sec-container">
          <div className="sec-header reveal">
            <div className="title-group">
              <span className="icon-badge">📰</span>
              <div>
                <h2 className="sec-title">Tin tức và bài viết chia sẻ</h2>
                <p className="sec-sub">Cập nhật những thông tin, chỉ đạo và hoạt động chuyển đổi số mới nhất của Đoàn xã Tập Ngãi</p>
              </div>
            </div>
          </div>
          <div className="cards-grid cols-3">
            {news.map(n => (
              <div className="thon-card" key={n.slug}>
                <div className="card-header" style={{ background: n.g }}>
                  <span className="emoji">{n.emoji}</span>
                  <div className="card-overlay" />
                  <div className="news-date"><b>{n.ngay.slice(0, 2)}</b><span>tháng {n.ngay.slice(3, 5)}</span></div>
                  <div className="header-content">
                    <h3 className="thon-title" style={{ fontSize: 16 }}>{n.tieuDe}</h3>
                  </div>
                </div>
                <div className="card-body">
                  <span className="news-tag">{n.chuyenMuc}</span>
                  <p className="news-desc">{n.moTa}</p>
                  <div className="card-footer">
                    <button className="detail-btn" onClick={() => navigate(`/bai-viet/${n.slug}`)}>Đọc tiếp →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
