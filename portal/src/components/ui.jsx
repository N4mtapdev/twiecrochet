import { useEffect, useState } from 'react'
import { CAI_DAT } from '../data.js'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: .1 })
    els.forEach(el => { el.classList.add('reveal'); io.observe(el) })
    return () => io.disconnect()
  }, [])
}

export function ToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return show ? (
    <button className="to-top" aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
  ) : null
}

export function Toast({ msg }) {
  if (!msg) return null
  return <div className="toast">{msg}</div>
}

export function useToast() {
  const [msg, setMsg] = useState('')
  const show = (m) => {
    setMsg(m)
    setTimeout(() => setMsg(''), 3200)
  }
  return [msg, show]
}

export const LOGO_SVG_SM = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#2563eb'/><stop offset='1' stop-color='#1e40af'/></linearGradient></defs><circle cx='32' cy='32' r='30' fill='url(#g)' stroke='rgba(255,255,255,.5)' stroke-width='2'/><path d='M32 14l5.2 10.6 11.7 1.7-8.5 8.2 2 11.6L32 40.6 21.6 46.1l2-11.6-8.5-8.2 11.7-1.7z' fill='#fbbf24'/></svg>`
)

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export { CAI_DAT }
