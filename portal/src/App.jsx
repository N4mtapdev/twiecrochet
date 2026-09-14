import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ToTop } from './components/ui.jsx'
import { TrusoDetail } from './pages/TrusoPublic.jsx'
import { BaiVietDetail } from './pages/BaiViet.jsx'
import { ThuTucHanhChinh } from './pages/DichVuCong.jsx'
import { GioiThieuDoanXa, GioiThieuLanhDao } from './pages/GioiThieu.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const ThonPublic = lazy(() => import('./pages/ThonPublic.jsx'))
const ThonDetail = lazy(() => import('./pages/ThonDetail.jsx'))
const TrusoPublic = lazy(() => import('./pages/TrusoPublic.jsx'))
const CanBoPublic = lazy(() => import('./pages/CanBoPublic.jsx'))
const BaiViet = lazy(() => import('./pages/BaiViet.jsx'))
const DichVuCong = lazy(() => import('./pages/DichVuCong.jsx'))
const GioiThieu = lazy(() => import('./pages/GioiThieu.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function Loading() {
  return <div className="loading">⏳ Đang tải…</div>
}

function Shell({ children, bare = false }) {
  return (
    <div className="app-shell">
      {!bare && <Navbar />}
      <main className="page-main">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      {!bare && <Footer />}
      <ToTop />
    </div>
  )
}

function RequireAuth({ children }) {
  const raw = sessionStorage.getItem('tn_admin')
  if (!raw) return <Navigate to="/login" replace />
  return children
}

// Admin dashboard tối giản (demo) — thay bằng module admin đầy đủ khi cần
function AdminDashboard() {
  const cards = [
    ['📊', 'Thống kê truy cập', '— lượt / tháng'],
    ['🏘️', 'Quản lý ấp', '11 ấp trực thuộc'],
    ['📰', 'Quản lý bài viết', '3 bài đã đăng'],
    ['🏛️', 'Quản lý trụ sở', '4 cơ quan đơn vị'],
    ['👤', 'Quản lý cán bộ', '6 hồ sơ nhân sự'],
    ['⚙️', 'Cài đặt hệ thống', 'Cấu hình cổng']
  ]
  return (
    <section style={{ paddingTop: 48 }}>
      <div className="sec-container">
        <div className="sec-header">
          <div>
            <span className="sec-kicker">🔐 Khu vực quản trị</span>
            <h2 className="sec-title">Bảng điều khiển</h2>
            <p className="sec-sub">Chào mừng Ban quản trị Cổng thông tin xã Tập Ngãi</p>
          </div>
          <button className="btn-mini" onClick={() => { sessionStorage.removeItem('tn_admin'); location.href = '/portal/' }}>Đăng xuất</button>
        </div>
        <div className="svc-grid">
          {cards.map(([icon, ten, moTa]) => (
            <div className="svc-card" key={ten}>
              <div className="svc-icon" style={{ background: 'linear-gradient(135deg,#dbeafe,#bfdbfe)' }}>{icon}</div>
              <b>{ten}</b><p>{moTa}</p>
              <span className="svc-link" style={{ cursor: 'pointer' }}>Mở module →</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 20, fontSize: 12.5, color: 'var(--muted)' }}>
          ℹ️ Bản demo: các module quản trị sẽ được kết nối backend thật (thêm/sửa/xóa dữ liệu ấp, bài viết, cán bộ) ở giai đoạn tiếp theo.
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Shell bare><Login /></Shell>} />
        <Route path="/admin/dashboard" element={<RequireAuth><Shell bare><AdminDashboard /></Shell></RequireAuth>} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="*" element={<Shell><Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thon-public" element={<ThonPublic />} />
          <Route path="/thon-public/:slug" element={<ThonDetail />} />
          <Route path="/tru-so-public" element={<TrusoPublic />} />
          <Route path="/tru-so-public/:slug" element={<TrusoDetail />} />
          <Route path="/can-bo-public" element={<CanBoPublic />} />
          <Route path="/bai-viet" element={<BaiViet />} />
          <Route path="/bai-viet/:slug" element={<BaiVietDetail />} />
          <Route path="/dich-vu-cong" element={<DichVuCong />} />
          <Route path="/dich-vu-cong/:slug" element={<DichVuCong />} />
          <Route path="/thu-tuc-hanh-chinh/:slug" element={<ThuTucHanhChinh />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/gioi-thieu-doan-xa" element={<GioiThieuDoanXa />} />
          <Route path="/gioi-thieu-lanh-dao" element={<GioiThieuLanhDao />} />
          <Route path="*" element={<NotFound />} />
        </Routes></Shell>} />
      </Routes>
    </BrowserRouter>
  )
}
