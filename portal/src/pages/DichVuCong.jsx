import { DICH_VU, THU_TUC } from '../data.js'
import { useReveal } from '../components/ui.jsx'

export default function DichVuCong() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">🛠️</span>
            <div>
              <h2 className="sec-title">Danh mục các dịch vụ công trực tuyến</h2>
              <p className="sec-sub">Tra cứu và thực hiện thủ tục hành chính, dịch vụ công trực tuyến nhanh chóng, tiện lợi</p>
            </div>
          </div>
        </div>
        <div className="svc-grid">
          {DICH_VU.map(s => (
            <div className="svc-card" key={s.ten}>
              <div className="svc-icon" style={{ background: s.bg }}>{s.icon}</div>
              <b>{s.ten}</b>
              <p>{s.moTa}</p>
              <a className="svc-link" href={s.link} target="_blank" rel="noopener">Truy cập dịch vụ →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ThuTucHanhChinh() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">📱</span>
            <div>
              <h2 className="sec-title">App hữu ích dành cho ĐVTN và Nhân dân</h2>
              <p className="sec-sub">Giới thiệu, Hướng dẫn các App, ứng dụng hữu ích.</p>
            </div>
          </div>
        </div>
        <div className="svc-grid">
          {THU_TUC.map(s => (
            <div className="svc-card" key={s.ten}>
              <div className="svc-icon" style={{ background: s.bg }}>{s.icon}</div>
              <b>{s.ten}</b>
              <p>{s.moTa}</p>
              <a className="svc-link" href={s.link} target="_blank" rel="noopener">Xem hướng dẫn →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
