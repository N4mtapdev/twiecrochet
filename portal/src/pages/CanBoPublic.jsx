import { Link } from 'react-router-dom'
import { CAN_BO } from '../data.js'
import { useReveal } from '../components/ui.jsx'

export default function CanBoPublic() {
  useReveal()
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">👤</span>
            <div>
              <h2 className="sec-title">Cán bộ, công chức trên địa bàn</h2>
              <p className="sec-sub">Danh bạ cán bộ Đoàn xã và công chức chuyên môn phụ trách các ấp.</p>
            </div>
          </div>
        </div>
        <div className="panel reveal" style={{ overflowX: 'auto' }}>
          <table className="cb-table">
            <thead>
              <tr><th>Cán bộ</th><th>Chức vụ</th><th>Điện thoại</th></tr>
            </thead>
            <tbody>
              {CAN_BO.map((c, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="avatar" style={{ background: 'linear-gradient(135deg,#dbeafe,#bfdbfe)' }}>👤</span>
                      <b style={{ fontFamily: 'Quicksand' }}>{c.hoTen}</b>
                    </div>
                  </td>
                  <td>{c.chucVu}</td>
                  <td>{c.sdt || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: 16, fontSize: 12.5, color: 'var(--muted)' }}>
            ℹ️ Thông tin nhân sự sẽ được Ban Thường vụ Đoàn xã / UBND xã cập nhật chính thức qua cổng này.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link className="btn-mini" to="/">← Về trang chủ</Link>
        </div>
      </div>
    </section>
  )
}
