import { Link, Navigate, useParams } from 'react-router-dom'
import { BAI_VIET } from '../data.js'
import { useReveal } from '../components/ui.jsx'

export default function BaiViet() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
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
          {BAI_VIET.map(n => (
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
                  <Link className="detail-btn" to={`/bai-viet/${n.slug}`}>Đọc tiếp →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BaiVietDetail() {
  useReveal()
  const { slug } = useParams()
  const n = BAI_VIET.find(x => x.slug === slug)
  if (!n) return <Navigate to="/bai-viet" replace />
  const [d, m, y] = n.ngay.split('/')
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <Link className="back-link" to="/bai-viet">← Quay lại tin tức</Link>
        <div className="article-body">
          <div style={{ margin: '-36px -36px 24px', borderRadius: '20px 20px 0 0', background: n.g, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <span style={{ fontSize: 64 }}>{n.emoji}</span>
            <div className="card-overlay" />
          </div>
          <h1>{n.tieuDe}</h1>
          <div className="article-meta">
            <span className="news-tag">{n.chuyenMuc}</span>
            <span>🗓️ {d}/{m}/{y}</span>
            <span>✍️ Ban biên tập cổng</span>
          </div>
          <div className="article-content">
            <p><b>{n.moTa}</b></p>
            <p style={{ marginTop: 14 }}>{n.noiDung}</p>
            <p style={{ marginTop: 14, color: 'var(--muted)', fontSize: 13.5 }}>
              ℹ️ Nội dung chi tiết sẽ được cập nhật bởi Ban biên tập cổng thông tin Đoàn xã.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
