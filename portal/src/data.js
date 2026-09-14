// Dữ liệu cấu hình toàn cổng — chỉnh tại đây
export const CAI_DAT = {
  tenCong: 'Đoàn TNCS Hồ Chí Minh xã Tập Ngãi',
  tenDonVi: 'Cổng Theo Dõi Tin Tức & Tra Cứu Thông Tin',
  hotline: '02910 385 xxx',
  email: 'doanxatapngai@gmail.com',
  diaChi: 'Ấp Ngãi Trung, xã Tập Ngãi, tỉnh Vĩnh Long',
  slogan: 'TIÊN PHONG • ĐOÀN KẾT • BẢN LĨNH • ĐỘT PHÁ • PHÁT TRIỂN',
  namCapNhat: '2026',
  heroDesc: 'Tra cứu thông tin nhanh chóng và chính xác.'
}

export const DIEN_TICH = '58,77 km²'
export const DAN_SO = '31.825'
export const MA_XA = '29365'
export const SO_APA = '11 ấp'

export const STATS = [
  { icon: '🗺️', bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', value: DIEN_TICH, label: 'Diện tích tự nhiên' },
  { icon: '🏘️', bg: 'linear-gradient(135deg,#fef3c7,#fde68a)', value: SO_APA, label: 'Số ấp trực thuộc' },
  { icon: '👥', bg: 'linear-gradient(135deg,#dcfce7,#bbf7d0)', value: DAN_SO, label: 'Dân số (31/12/2024)' },
  { icon: '🏛️', bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', value: MA_XA, label: 'Mã hành chính xã' }
]

export const GRADS = [
  'linear-gradient(135deg,#1d4ed8,#3b82f6)',
  'linear-gradient(135deg,#0ea5e9,#2563eb)',
  'linear-gradient(135deg,#1e40af,#6366f1)',
  'linear-gradient(135deg,#0369a1,#38bdf8)',
  'linear-gradient(135deg,#4f46e5,#818cf8)',
  'linear-gradient(135deg,#1d4ed8,#0ea5e9)',
  'linear-gradient(135deg,#0e7490,#22d3ee)',
  'linear-gradient(135deg,#3730a3,#818cf8)',
  'linear-gradient(135deg,#1e3a8a,#3b82f6)',
  'linear-gradient(135deg,#155e75,#0891b2)',
  'linear-gradient(135deg,#312e81,#6366f1)'
]

// 11 ấp trực thuộc xã Tập Ngãi (sau sắp xếp 1/7/2025)
export const THON = [
  { slug: 'ap-cay-oi', ten: 'Ấp Cây Ổi', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Cây Ổi' },
  { slug: 'ap-gioong-tranh', ten: 'Ấp Giồng Tranh', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Giồng Tranh' },
  { slug: 'ap-le-van-quoi', ten: 'Ấp Lê Văn Quới', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Lê Văn Quới' },
  { slug: 'ap-lo-ngo', ten: 'Ấp Lò Ngò', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Lò Ngò' },
  { slug: 'ap-ngai-hoa', ten: 'Ấp Ngãi Hòa', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Ngãi Hòa' },
  { slug: 'ap-ngai-trung', ten: 'Ấp Ngãi Trung', ubnd: true, soHoDan: null, danSo: null, nhaVanHoa: 'Trụ sở UBND xã Tập Ngãi' },
  { slug: 'ap-ngo-van-kiet', ten: 'Ấp Ngô Văn Kiệt', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Ngô Văn Kiệt' },
  { slug: 'ap-o-dung', ten: 'Ấp Ô Đùng', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Ô Đùng' },
  { slug: 'ap-o-trom', ten: 'Ấp Ô Trom', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Ô Trom' },
  { slug: 'ap-ong-xay', ten: 'Ấp Ông Xây', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Ông Xây' },
  { slug: 'ap-tan-dai', ten: 'Ấp Tân Đại', ubnd: false, soHoDan: null, danSo: null, nhaVanHoa: 'Nhà văn hóa ấp Tân Đại' }
]

export const BANNERS = [
  {
    slug: 'chuyen-doi-so',
    tieuDe: 'CHUYỂN ĐỔI SỐ XÃ TẬP NGÃI — NÂNG CẤP TRẢI NGHIỆM NGƯỜI DÂN',
    moTa: 'Cổng thông tin tra cứu ấp, trụ sở, cán bộ và dịch vụ công chính thức của Đoàn TNCS Hồ Chí Minh xã Tập Ngãi, tỉnh Vĩnh Long.',
    g: 'linear-gradient(135deg,#1d4ed8 0%,#1e40af 55%,#172554 100%)', emoji: '🚀'
  },
  {
    slug: 'dich-vu-cong',
    tieuDe: 'DỊCH VỤ CÔNG TRỰC TUYẾN — GIẢI QUYẾT TẬN NHÀ',
    moTa: 'Thực hiện thủ tục hành chính qua Cổng Dịch vụ công Quốc gia và VNeID: hộ tịch, đất đai, xác nhận cư trú... không cần xếp hàng.',
    g: 'linear-gradient(135deg,#0369a1 0%,#2563eb 60%,#4f46e5 100%)', emoji: '🛠️'
  },
  {
    slug: 'tinh-nguyen-2026',
    tieuDe: 'PHONG TRÀO THANH NIÊN TÌNH NGUYỆN 2026',
    moTa: 'Mùa hè xanh, hiến máu nhân đạo, bảo vệ môi trường — Đoàn xã Tập Ngãi đồng hành cùng thanh niên xây dựng quê hương.',
    g: 'linear-gradient(135deg,#4f46e5 0%,#7c3aed 60%,#1e40af 100%)', emoji: '🤝'
  }
]

export const BAI_VIET = [
  {
    slug: 'chuyen-doi-so-cong-tac-doan',
    tieuDe: 'Chuyển đổi số trong công tác Đoàn và phong trào thanh niên xã nhà',
    moTa: 'Chỉ thị của Ban Bí thư Trung ương Đoàn về đẩy mạnh chuyển đổi số trong công tác Đoàn và phong trào thanh niên giai đoạn mới.',
    chuyenMuc: 'Chuyển đổi số', ngay: '14/09/2026', g: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', emoji: '📰',
    noiDung: 'Đẩy mạnh chuyển đổi số trong công tác Đoàn và phong trào thanh niên là nhiệm vụ trọng tâm giai đoạn mới. Đoàn xã Tập Ngãi triển khai cổng thông tin tra cứu, số hóa hồ sơ hoạt động, ứng dụng nền tảng số trong quản lý đoàn viên và truyền thông phong trào.'
  },
  {
    slug: 'huong-dan-vneid-cap-2',
    tieuDe: 'Hướng dẫn cài đặt và sử dụng VNeID cấp 2 cho người dân xã Tập Ngãi',
    moTa: 'Các bước cài đặt ứng dụng định danh quốc gia, thủ tục xác thực và những quyền lợi khi sử dụng tài khoản định danh cấp 2.',
    chuyenMuc: 'Hướng dẫn', ngay: '02/09/2026', g: 'linear-gradient(135deg,#0369a1,#38bdf8)', emoji: '📱',
    noiDung: 'VNeID cấp 2 thay thế giấy tờ tùy thân: CCCD gắn chip, bằng lái xe, đăng ký xe, giấy chứng nhận bảo hiểm y tế. Người dân cài đặt ứng dụng, đăng ký tài khoản, xác thực khuôn mặt tại UBND xã hoặc qua kiểm định sinh trắc học từ xa.'
  },
  {
    slug: 'mua-he-xanh-2026',
    tieuDe: 'Mùa hè xanh 2026: chiến dịch tình nguyện hè rực rỡ của Đoàn xã',
    moTa: 'Tổng kết chuỗi hoạt động tình nguyện mùa hè: sửa đường, trao học bổng, dạy học miễn phí và chăm sóc di tích trên địa bàn xã.',
    chuyenMuc: 'Tình nguyện', ngay: '20/08/2026', g: 'linear-gradient(135deg,#4f46e5,#818cf8)', emoji: '🤝',
    noiDung: 'Chiến dịch Mùa hè xanh 2026 thu hút hàng trăm đoàn viên tham gia: làm đường nông thôn, trao tặng học bổng cho học sinh khó khăn, tổ chức lớp học tình thương, hoạt động vì biển đảo quê hương và chăm sóc nghĩa trang liệt sĩ.'
  }
]

export const DICH_VU = [
  { icon: '🏛️', bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', ten: 'Cổng Dịch vụ công Quốc gia', moTa: 'Nộp hồ sơ trực tuyến, theo dõi tiến độ xử lý thủ tục hành chính toàn quốc.', link: 'https://dichvucong.gov.vn' },
  { icon: '🪪', bg: 'linear-gradient(135deg,#dcfce7,#bbf7d0)', ten: 'VNeID — Định danh điện tử', moTa: 'Tài khoản định danh cấp 2: chứng minh CCCD trên điện thoại, khai báo cư trú.', link: 'https://vneid.gov.vn' },
  { icon: '🩺', bg: 'linear-gradient(135deg,#fee2e2,#fecaca)', ten: 'VssID — BHXH số', moTa: 'Tra cứu sổ BHXH, thẻ y tế điện tử, lịch sử đóng - hưởng bảo hiểm.', link: 'https://vssid.baohiemxahoi.gov.vn' },
  { icon: '💰', bg: 'linear-gradient(135deg,#fef3c7,#fde68a)', ten: 'Thuế điện tử eTax', moTa: 'Kê khai, nộp thuế và tra cứu nghĩa vụ thuế đối với hộ kinh doanh, cá nhân.', link: 'https://thuedientu.gdt.gov.vn' },
  { icon: '🏘️', bg: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', ten: 'Dịch vụ công tỉnh Vĩnh Long', moTa: 'Hồ sơ thủ tục hành chính thuộc thẩm quyền giải quyết của tỉnh và cấp xã.', link: 'https://dichvucong.vinhlong.gov.vn' },
  { icon: '📄', bg: 'linear-gradient(135deg,#cffafe,#a5f3fc)', ten: 'Tra cứu hộ tịch điện tử', moTa: 'Tra cứu bản sao giấy tờ, trích lục hộ tịch (khai sinh, kết hôn, tử) đã số hóa.', link: 'https://hoso.tphochi.gov.vn' }
]

export const THU_TUC = [
  { icon: '🪪', bg: 'linear-gradient(135deg,#2563eb,#1d4ed8)', ten: 'VNeID — Định danh quốc gia', moTa: 'Hướng dẫn cài đặt, đăng ký và xác thực tài khoản định danh mức 2.', link: 'https://vneid.gov.vn' },
  { icon: '📡', bg: 'linear-gradient(135deg,#ea580c,#c2410c)', ten: 'My Viettel / My VNPT', moTa: 'Quản lý tài khoản viễn thông, thanh toán cước, mua gói data internet.', link: 'https://viettel.com.vn' },
  { icon: '🚌', bg: 'linear-gradient(135deg,#16a34a,#15803d)', ten: 'Vé xe buýt điện tử', moTa: 'Mua và sử dụng vé điện tử trên tuyến xe buýt liên tỉnh, nội tỉnh.', link: 'https://vinbus.vn' },
  { icon: '🏦', bg: 'linear-gradient(135deg,#0891b2,#0e7490)', ten: 'Ngân hàng số', moTa: 'Chuyển tiền, thanh toán điện nước, học phí không cần ra quầy.', link: 'https://vietcombank.com.vn' }
]

export const TRU_SO = [
  { icon: '🏛️', bg: 'linear-gradient(135deg,#2563eb,#1d4ed8)', ten: 'UBND xã Tập Ngãi', diaChi: 'Ấp Ngãi Trung, xã Tập Ngãi, tỉnh Vĩnh Long', map: 'https://www.google.com/maps/search/UBND+xã+Tập+Ngãi+Vĩnh+Long' },
  { icon: '🚩', bg: 'linear-gradient(135deg,#dc2626,#b91c1c)', ten: 'Đảng ủy - HĐND - Ủy ban MTTQ xã', diaChi: 'Ấp Ngãi Trung, xã Tập Ngãi, tỉnh Vĩnh Long', map: 'https://www.google.com/maps/search/Đảng+ủy+xã+Tập+Ngãi+Vĩnh+Long' },
  { icon: '🛡️', bg: 'linear-gradient(135deg,#4f46e5,#3730a3)', ten: 'Công an xã Tập Ngãi', diaChi: 'Xã Tập Ngãi, tỉnh Vĩnh Long', map: 'https://www.google.com/maps/search/Công+an+xã+Tập+Ngãi+Vĩnh+Long' },
  { icon: '🤝', bg: 'linear-gradient(135deg,#0891b2,#0e7490)', ten: 'Đoàn TNCS Hồ Chí Minh xã', diaChi: 'Trụ sở UBND xã Tập Ngãi, Ấp Ngãi Trung', map: 'https://www.google.com/maps/search/UBND+xã+Tập+Ngãi+Vĩnh+Long' }
]

export const CAN_BO = [
  { hoTen: '— đang cập nhật —', chucVu: 'Bí thư Đoàn xã', sdt: '' },
  { hoTen: '— đang cập nhật —', chucVu: 'Phó Bí thư thường trực', sdt: '' },
  { hoTen: '— đang cập nhật —', chucVu: 'Ủy viên BCH · phụ trách tình nguyện', sdt: '' },
  { hoTen: '— đang cập nhật —', chucVu: 'Ủy viên BCH · phụ trách phong trào', sdt: '' },
  { hoTen: '— đang cập nhật —', chucVu: 'Chủ nhiệm Câu lạc bộ Tuổi trẻ hướng nghiệp', sdt: '' },
  { hoTen: '— đang cập nhật —', chucVu: 'Bí thư chi đoàn ấp Ngãi Trung', sdt: '' }
]

export const GIOI_THIEU_DOAN = 'Đoàn TNCS Hồ Chí Minh xã Tập Ngãi là tổ chức chính trị - xã hội của thanh niên, trực thuộc Đoàn huyện Tiểu Cần, tỉnh Vĩnh Long (sau sáp nhập tỉnh 2025). Đoàn xã quản lý 27 chi đoàn trực thuộc với hàng trăm đoàn viên, tiên phong trong các phong trào tình nguyện, bảo vệ môi trường, xây dựng nông thôn mới và chuyển đổi số địa phương.'
