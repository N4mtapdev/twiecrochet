import { Link } from 'react-router-dom'
import { CAI_DAT } from '../data.js'
import { LogoImg } from './Logo.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="foot-main">
        <div>
          <div className="foot-brand">
            <LogoImg size={44} />
            <span>
              <b>{CAI_DAT.tenCong}</b>
              <small>{CAI_DAT.tenDonVi}</small>
            </span>
          </div>
          <p>Cổng thông tin theo dõi tin tức, tra cứu thông tin ấp, phục vụ người dân và cán bộ địa phương tra cứu nhanh chóng, chính xác.</p>
          <p className="slogan">{CAI_DAT.slogan}</p>
        </div>
        <div className="foot-col">
          <h4>Liên kết nhanh</h4>
          <Link to="/thon-public">📍 Tra cứu thông tin ấp</Link>
          <Link to="/bai-viet">📰 Tin tức &amp; hoạt động</Link>
          <Link to="/dich-vu-cong">🛠️ Dịch vụ công trực tuyến</Link>
          <Link to="/tru-so-public">🏛️ Trụ sở hành chính</Link>
          <Link to="/gioi-thieu-doan-xa">🤝 Giới thiệu Đoàn xã</Link>
        </div>
        <div className="foot-col">
          <h4>Liên hệ hỗ trợ Công tác Đoàn</h4>
          <a className="hotline-pill" href={`tel:${CAI_DAT.hotline.replace(/\s/g, '')}`}>☎️ {CAI_DAT.hotline}</a>
          <p>📧 <a style={{ display: 'inline' }} href={`mailto:${CAI_DAT.email}`}>{CAI_DAT.email}</a></p>
          <p>📍 {CAI_DAT.diaChi}</p>
          <p>🔢 Mã hành chính xã: <b style={{ color: '#cbd5e1' }}>29365</b></p>
        </div>
      </div>
      <div className="copyright">
        © {CAI_DAT.namCapNhat} <b>{CAI_DAT.tenCong}</b> — Dữ liệu hành chính tham khảo theo Nghị quyết 1687/NQ-UBTVQH15
      </div>
    </footer>
  )
}
