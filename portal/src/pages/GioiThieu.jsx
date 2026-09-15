import { Link } from 'react-router-dom'
import { CAI_DAT, CAN_BO, GIOI_THIEU_DOAN } from '../data.js'
import { useReveal } from '../components/ui.jsx'

function PanelDoan() {
  return (
    <div className="panel">
      <h3>🤝 Ban Chấp hành Đoàn xã</h3>
      <p className="sub">{CAI_DAT.tenCong}</p>
      {CAN_BO.slice(0, 4).map(c => (
        <div className="role-row" key={c.chucVu}><span>{c.chucVu}</span><span className="who">{c.hoTen}</span></div>
      ))}
      <p style={{ marginTop: 16, fontSize: 12.5, color: 'var(--muted)' }}>
        ℹ️ Thông tin nhân sự sẽ được Ban Thường vụ Đoàn xã cập nhật chính thức qua cổng này.
      </p>
    </div>
  )
}

const TIMELINE = [
  ['11/03/1977', 'Sáp nhập vào huyện Trà Cú theo Quyết định 59-CP.'],
  ['15/09/1981', 'Tách một phần đất thành lập xã Ngãi Hùng (QĐ 69-HĐBT).'],
  ['29/09/1981', 'Chuyển về huyện Tiểu Cần vừa tái lập (QĐ 98-HĐBT).'],
  ['12/06/2025', 'Sáp nhập tỉnh Bến Tre, Trà Vinh vào tỉnh Vĩnh Long (NQ 202/2025/QH15).'],
  ['16/06/2025', 'Hợp nhất xã Tập Ngãi và xã Hiếu Tử thành xã Tập Ngãi, tỉnh Vĩnh Long (NQ 1687/NQ-UBTVQH15).']
]

function PanelTimeline({ title }) {
  return (
    <div className="panel">
      <h3>🕰️ {title}</h3>
      <p className="sub">Lịch sử sắp xếp đơn vị hành chính xã Tập Ngãi</p>
      <div className="timeline">
        {TIMELINE.map(([d, txt]) => (
          <div className="tl-item" key={d}><b>{d}</b><p>{txt}</p></div>
        ))}
      </div>
    </div>
  )
}

export function GioiThieu() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">🏛️</span>
            <div>
              <h2 className="sec-title">Giới thiệu chung</h2>
              <p className="sec-sub">Địa lý, lịch sử và đơn vị hành chính xã Tập Ngãi, tỉnh Vĩnh Long</p>
            </div>
          </div>
        </div>
        <div className="two-col">
          <PanelTimeline title="Các mốc hành chính" />
          <div className="panel">
            <h3>🗺️ Vị trí địa lý</h3>
            <p className="sub">Diện tích 58,77 km² · Dân số 31.825 người · 11 ấp</p>
            <div className="article-content">
              <p>Xã Tập Ngãi nằm ở phía nam tỉnh Vĩnh Long (vùng ĐBSCL), giáp các xã Châu Thành, Song Lộc (đông), Tiểu Cần (tây), Hùng Hòa (nam) và Tân An (bắc). Tâm hành chính xã tại ấp Ngãi Trung, nơi đặt trụ sở UBND xã.</p>
              <p style={{ marginTop: 10 }}>Kinh tế chủ đạo: nông nghiệp lúa nước, cây ăn trái và thủy sản nước ngọt. Hệ thống giao thông liên xã kết nối nhanh với trung tâm huyện Tiểu Cần và TP. Trà Vinh cũ.</p>
            </div>
            <div style={{ marginTop: 18 }}>
              <Link className="btn-mini primary" to="/tru-so-public">🏛️ Xem trụ sở hành chính</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GioiThieuDoanXa() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">🤝</span>
            <div>
              <h2 className="sec-title">Giới thiệu Đoàn xã</h2>
              <p className="sec-sub">{CAI_DAT.tenCong}</p>
            </div>
          </div>
        </div>
        <div className="two-col">
          <div className="panel">
            <h3>📣 Đôi nét về Đoàn xã</h3>
            <p className="sub">Tổ chức của thanh niên — nơi hội tụ những người tiên phong</p>
            <div className="article-content"><p>{GIOI_THIEU_DOAN}</p></div>
          </div>
          <PanelDoan />
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link className="btn-mini" to="/can-bo-public">👤 Xem danh bạ cán bộ</Link>
        </div>
      </div>
    </section>
  )
}

export function GioiThieuLanhDao() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">👤</span>
            <div>
              <h2 className="sec-title">Giới thiệu Ban Chấp hành &amp; Bí thư Đoàn xã</h2>
              <p className="sec-sub">Đồng chí lãnh đạo đứng đầu công tác Đoàn và phong trào thanh niên xã nhà</p>
            </div>
          </div>
        </div>
        <div className="panel reveal">
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', display: 'grid', gap: 18 }}>
            {CAN_BO.slice(0, 3).map(c => (
              <div key={c.chucVu} style={{ textAlign: 'center', padding: 20, borderRadius: 16, background: '#f8fafc', border: '1px solid var(--line)' }}>
                <div className="avatar" style={{ width: 64, height: 64, fontSize: 26, margin: '0 auto 10px', background: 'linear-gradient(135deg,#dbeafe,#bfdbfe)' }}>👤</div>
                <b style={{ fontFamily: 'Quicksand', display: 'block' }}>{c.hoTen}</b>
                <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>{c.chucVu}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: 12.5, color: 'var(--muted)' }}>ℹ️ Danh sách đầy đủ sẽ được cập nhật sau Đại hội Đoàn xã khoá mới.</p>
        </div>
      </div>
    </section>
  )
}
