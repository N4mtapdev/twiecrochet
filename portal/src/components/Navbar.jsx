import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CAI_DAT } from '../data.js'

const LINKS = [
  { to: '/', label: 'Trang chủ' },
  { to: '/thon-public', label: 'Tra cứu Thôn' },
  { to: '/bai-viet', label: 'Tin tức' },
  { to: '/dich-vu-cong', label: 'Dịch vụ công' },
  { to: '/tru-so-public', label: 'Trụ sở' },
  { to: '/gioi-thieu', label: 'Giới thiệu' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={() => window.scrollTo(0, 0)}>
          <LogoImg size={40} />
          <span>
            <b>{CAI_DAT.tenCong}</b>
            <small>{CAI_DAT.tenDonVi}</small>
          </span>
        </Link>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => { setOpen(false); window.scrollTo(0, 0) }}
            >
              {l.label}
            </NavLink>
          ))}
          <button className="nav-cta" onClick={() => navigate('/login')}>🔐 Đăng nhập</button>
        </div>
      </div>
    </nav>
  )
}
