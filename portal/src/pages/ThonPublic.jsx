import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { THON, GRADS } from '../data.js'
import { useReveal } from '../components/ui.jsx'

const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd')

export default function ThonPublic() {
  useReveal()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [q, setQ] = useState(params.get('q') || '')

  useEffect(() => { setQ(params.get('q') || '') }, [params])

  const list = useMemo(() => {
    const key = norm(q.trim())
    return THON.map((t, i) => ({ ...t, g: GRADS[i % GRADS.length], i }))
      .filter(t => !key || norm(t.ten).includes(key))
  }, [q])

  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <div className="sec-header reveal">
          <div className="title-group">
            <span className="icon-badge">📍</span>
            <div>
              <h2 className="sec-title">Tra cứu thông tin Thôn</h2>
              <p className="sec-sub">
                {q ? `Tìm thấy ${list.length}/${THON.length} ấp khớp với "${q}"` : `Danh sách ${THON.length} ấp trực thuộc xã Tập Ngãi, tỉnh Vĩnh Long`}
              </p>
            </div>
          </div>
        </div>
        <div className="search-box reveal" style={{ maxWidth: 520, margin: '0 auto 30px', boxShadow: '0 8px 24px rgba(0,0,0,.1)' }}>
          <span style={{ fontSize: 17 }}>🔍</span>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Nhập tên ấp cần tra cứu… (vd: Ngãi Trung, Ô Đùng)"
            aria-label="Tìm ấp"
          />
        </div>
        {list.length === 0 ? (
          <div className="no-result" style={{ display: 'block' }}>😖 Không tìm thấy ấp nào khớp — thử tên khác nha!</div>
        ) : (
          <div className="cards-grid">
            {list.map(t => (
              <div className="thon-card" key={t.slug}>
                <div className="card-header" style={{ background: t.g }}>
                  <span className="emoji">{t.ubnd ? '🏛️' : '🏘️'}</span>
                  <div className="card-overlay" />
                  <div className="header-content">
                    <h3 className="thon-title">{t.ten}</h3>
                    <span className="thon-sub">{t.ubnd ? '★ Trụ sở UBND xã Tập Ngãi' : 'Ấp trực thuộc xã Tập Ngãi'}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <div className="info-item"><span style={{ fontSize: 17 }}>🏠</span><div><b>{t.soHoDan ?? '—'}</b><span>Số hộ dân</span></div></div>
                    <div className="info-item"><span style={{ fontSize: 17 }}>👥</span><div><b>{t.danSo ?? '—'}</b><span>Nhân khẩu</span></div></div>
                  </div>
                  <div className="nv-row"><span style={{ color: '#ef4444' }}>📍</span><span>{t.nhaVanHoa}</span></div>
                  <div className="card-footer">
                    <button className="detail-btn" onClick={() => navigate(`/thon-public/${t.slug}`)}>Xem chi tiết →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link className="btn-mini" to="/">← Về trang chủ</Link>
        </div>
      </div>
    </section>
  )
}
