import { useParams, Link, Navigate } from 'react-router-dom'
import { THON, GRADS, CAI_DAT } from '../data.js'
import { useReveal } from '../components/ui.jsx'

export default function ThonDetail() {
  useReveal()
  const { slug } = useParams()
  const idx = THON.findIndex(t => t.slug === slug)
  if (idx === -1) return <Navigate to="/thon-public" replace />
  const t = THON[idx]
  const g = GRADS[idx % GRADS.length]

  return (
    <section style={{ paddingTop: 40 }}>
      <div className="sec-container">
        <Link className="back-link" to="/thon-public">← Quay lại tra cứu ấp</Link>
        <div className="article-body">
          <div style={{ margin: '-36px -36px 24px', borderRadius: '20px 20px 0 0', background: g, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <span style={{ fontSize: 64, filter: 'drop-shadow(0 6px 14px rgba(0,0,0,.3))' }}>{t.ubnd ? '🏛️' : '🏘️'}</span>
            <div className="card-overlay" />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 28px', color: '#fff', zIndex: 2 }}>
              <h1 style={{ fontFamily: 'Quicksand', fontSize: 24, textShadow: '0 2px 6px rgba(0,0,0,.35)' }}>{t.ten}</h1>
              <span style={{ fontSize: 13, opacity: .85 }}>{t.ubnd ? '★ Trụ sở UBND xã Tập Ngãi' : 'Ấp trực thuộc xã Tập Ngãi'}</span>
            </div>
          </div>
          <div className="article-meta">
            <span>🏘️ Ấp thuộc xã Tập Ngãi, tỉnh Vĩnh Long</span>
            <span>📞 Hotline: {CAI_DAT.hotline}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
            <div className="panel" style={{ padding: 16, textAlign: 'center' }}><b style={{ fontFamily: 'Quicksand', fontSize: 18, color: 'var(--blue-deep)' }}>{t.soHoDan ?? '—'}</b><div style={{ fontSize: 12, color: 'var(--muted)' }}>Số hộ dân</div></div>
            <div className="panel" style={{ padding: 16, textAlign: 'center' }}><b style={{ fontFamily: 'Quicksand', fontSize: 18, color: 'var(--blue-deep)' }}>{t.danSo ?? '—'}</b><div style={{ fontSize: 12, color: 'var(--muted)' }}>Nhân khẩu</div></div>
            <div className="panel" style={{ padding: 16, textAlign: 'center' }}><b style={{ fontFamily: 'Quicksand', fontSize: 18, color: 'var(--blue-deep)' }}>—</b><div style={{ fontSize: 12, color: 'var(--muted)' }}>Cự ly trung tâm</div></div>
          </div>
          <div className="article-content">
            <p><b>{t.ten}</b> là một trong {THON.length} ấp trực thuộc xã Tập Ngãi, tỉnh Vĩnh Long{t.ubnd ? ' — đồng thời là nơi đặt trụ sở làm việc của UBND xã.' : '.'}</p>
            <p style={{ marginTop: 12 }}>📍 Điểm sinh hoạt cộng đồng: {t.nhaVanHoa}.</p>
            <p style={{ marginTop: 12 }}>Sau Nghị quyết 1687/NQ-UBTVQH15 hiệu lực từ 1/7/2025, xã Tập Ngãi được thành lập trên cơ sở hợp nhất xã Tập Ngãi và xã Hiếu Tử (huyện Tiểu Cần, tỉnh Trà Vinh cũ), diện tích tự nhiên 58,77 km², dân số 31.825 người.</p>
            <p style={{ marginTop: 12, color: 'var(--muted)', fontSize: 13.5 }}>ℹ️ Số liệu chi tiết của ấp sẽ được Ban biên tập cổng cập nhật khi có thông tin chính thức từ UBND xã.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
