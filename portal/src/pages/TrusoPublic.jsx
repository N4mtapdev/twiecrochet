import { Link, Navigate, useParams } from 'react-router-dom'
import { TRU_SO } from '../data.js'
import { useReveal } from '../components/ui.jsx'

export default function TrusoPublic() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div>
            <span className="sec-kicker">🏛️ Cơ quan đơn vị</span>
            <h2 className="sec-title">Trụ sở hành chính xã Tập Ngãi</h2>
            <p className="sec-sub">Vị trí các cơ quan của xã trên bản đồ.</p>
          </div>
        </div>
        <div className="truso-grid">
          {TRU_SO.map(t => (
            <div className="truso-card" key={t.ten}>
              <div className="truso-icon" style={{ background: t.bg }}>{t.icon}</div>
              <div style={{ flex: 1 }}>
                <b>{t.ten}</b>
                <p>📍 {t.diaChi}<br />🧭 <a style={{ display: 'inline' }} href={t.map} target="_blank" rel="noopener">Xem trên Google Maps</a></p>
                <div className="truso-actions">
                  <a className="btn-mini primary" href={t.map} target="_blank" rel="noopener">🧭 Chỉ đường</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="panel reveal" style={{ marginTop: 24 }}>
          <h3>🗺️ Bản đồ địa bàn xã Tập Ngãi</h3>
          <p className="sub">Tọa độ tâm: 9°49′22″B — 106°14′39″Đ</p>
          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--line)' }}>
            <iframe title="Bản đồ xã Tập Ngãi" loading="lazy" allowfullscreen
              style={{ width: '100%', height: 340, border: 0, display: 'block' }}
              src="https://www.google.com/maps?q=9.82278,106.24417&z=12&hl=vi&output=embed" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrusoDetail() {
  useReveal()
  const { slug } = useParams()
  const t = TRU_SO.find(x =>
    x.ten.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-') === slug)
  if (!t) return <Navigate to="/tru-so-public" replace />
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <Link className="back-link" to="/tru-so-public">← Quay lại danh sách trụ sở</Link>
        <div className="article-body">
          <h1>{t.icon} {t.ten}</h1>
          <div className="article-meta"><span>📍 {t.diaChi}</span></div>
          <div className="article-content">
            <p>Địa điểm làm việc của cơ quan nhà nước cấp xã, phục vụ người dân xử lý thủ tục hành chính trong giờ hành chính (thứ 2 — thứ 6, sáng 7h30–11h30, chiều 13h30–17h).</p>
          </div>
          <div style={{ marginTop: 20 }}>
            <a className="btn-mini primary" href={t.map} target="_blank" rel="noopener">🧭 Mở Google Maps chỉ đường</a>
          </div>
        </div>
      </div>
    </section>
  )
}
