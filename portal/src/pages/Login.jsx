import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CAI_DAT } from '../data.js'
import { LOGO_SVG_SM } from '../components/ui.jsx'

export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setErr('')
    setBusy(true)
    await new Promise(r => setTimeout(r, 600))
    // Bản demo: tài khoản mẫu — bản production thay bằng auth server thật
    if (user.trim() === 'admin' && pass === 'tapngai2026') {
      sessionStorage.setItem('tn_admin', JSON.stringify({ user: 'admin', role: 'admin', at: Date.now() }))
      navigate('/admin/dashboard')
    } else {
      setErr('Đăng nhập thất bại — kiểm tra lại tên đăng nhập / mật khẩu.')
      setBusy(false)
    }
  }

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <img src={`data:image/svg+xml,${LOGO_SVG_SM}`} alt="Logo" style={{ width: 64, height: 64, borderRadius: '50%' }} />
          <h1 style={{ marginTop: 10 }}>Đăng nhập quản trị</h1>
          <p className="sub">{CAI_DAT.tenCong}</p>
        </div>
        {err && <div className="auth-err">⚠️ {err}</div>}
        <form onSubmit={submit}>
          <div className="field">
            <label>Tên đăng nhập</label>
            <input value={user} onChange={e => setUser(e.target.value)} placeholder="admin" autoFocus />
          </div>
          <div className="field">
            <label>Mật khẩu</label>
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" />
          </div>
          <button className="submit-btn" disabled={busy}>{busy ? '⏳ Đang xử lý…' : 'Đăng nhập'}</button>
        </form>
        <div className="demo-hint">🔑 Tài khoản demo: <b>admin</b> / <b>tapngai2026</b> (dành cho Ban quản trị cổng)</div>
        <p className="auth-note">Chưa có tài khoản? Liên hệ Đoàn xã để được cấp — hoặc <Link to="/" style={{ color: 'var(--blue)' }}>về trang chủ</Link></p>
      </div>
    </div>
  )
}
