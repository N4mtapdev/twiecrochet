import { Link } from 'react-router-dom'
import { useReveal } from '../components/ui.jsx'

export default function NotFound() {
  useReveal()
  return (
    <div className="notfound">
      <div className="big">🧭</div>
      <h2 style={{ fontFamily: 'Quicksand' }}>Không tìm thấy trang</h2>
      <p style={{ color: 'var(--muted)', maxWidth: 420 }}>
        Địa chỉ bạn truy cập không tồn tại hoặc đã được di chuyển. Thử quay lại trang chủ để tiếp tục tra cứu nha!
      </p>
      <Link className="btn-mini primary" to="/">← Về trang chủ</Link>
    </div>
  )
}
