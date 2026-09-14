// Logo SVG inline dùng chung
export function LogoImg({ size = 100 }) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#3b82f6'/><stop offset='1' stop-color='#1e40af'/></linearGradient></defs><circle cx='32' cy='32' r='30' fill='url(#g)' stroke='rgba(255,255,255,.6)' stroke-width='2.5'/><path d='M32 12l5.9 12 13.2 1.9-9.6 9.3 2.3 13.1L32 42.1l-11.8 6.2 2.3-13.1-9.6-9.3L26.1 24z' fill='#fbbf24'/><circle cx='47' cy='17' r='5' fill='#fbbf24' opacity='.85'/></svg>`
  return (
    <img
      className="hero-logo"
      style={{ width: size, height: size }}
      alt="Logo Đoàn xã Tập Ngãi"
      src={`data:image/svg+xml,${encodeURIComponent(svg)}`}
    />
  )
}
