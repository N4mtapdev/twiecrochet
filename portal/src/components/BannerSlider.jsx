import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BANNERS } from '../data.js'

export default function BannerSlider() {
  const [cur, setCur] = useState(0)
  const timer = useRef(null)
  const navigate = useNavigate()

  const go = (i) => setCur((i + BANNERS.length) % BANNERS.length)

  useEffect(() => {
    timer.current = setInterval(() => setCur(c => (c + 1) % BANNERS.length), 5000)
    return () => clearInterval(timer.current)
  }, [])

  const reset = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => setCur(c => (c + 1) % BANNERS.length), 5000)
  }

  const move = (step) => { go(cur + step); reset() }
  const swipe = { x: null }
  const onDown = (e) => { swipe.x = e.clientX }
  const onUp = (e) => {
    if (swipe.x === null) return
    const dx = e.clientX - swipe.x
    swipe.x = null
    if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1)
  }

  return (
    <div className="slider-wrap">
      <div className="carousel" onMouseEnter={() => clearInterval(timer.current)} onMouseLeave={reset}
        onPointerDown={onDown} onPointerUp={onUp}>
        <div className="slides" style={{ transform: `translateX(-${cur * 100}%)` }}>
          {BANNERS.map(b => (
            <div className="slide" key={b.slug} onClick={() => navigate(`/dich-vu-cong/${b.slug}`)}>
              <div className="bg" style={{ background: b.g }} />
              <span className="emoji">{b.emoji}</span>
              <div className="slide-overlay">
                <div className="slide-title">{b.tieuDe}</div>
                <p className="slide-desc">{b.moTa}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow prev" onClick={() => move(-1)} aria-label="Trước">‹</button>
        <button className="nav-arrow next" onClick={() => move(1)} aria-label="Sau">›</button>
        <div className="dots">
          {BANNERS.map((b, i) => (
            <button key={b.slug} className={`dot${i === cur ? ' on' : ''}`} onClick={() => { go(i); reset() }} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
