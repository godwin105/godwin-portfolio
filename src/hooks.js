import { useCallback, useEffect, useRef, useState } from 'react'

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Marks every `.reveal` element with `data-visible` once it scrolls into view.
// An attribute rather than a class: React rewrites `className` whenever a
// component's classes change, which would silently hide the element again.
// Elements added later (filters, hot reloads) are picked up by the MutationObserver.
export function useRevealOnScroll() {
  useEffect(() => {
    const show = el => el.setAttribute('data-visible', '')
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(show)
      return
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          show(e.target)
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    const watch = root => {
      const els = root.matches?.('.reveal') ? [root] : []
      root.querySelectorAll?.('.reveal').forEach(el => els.push(el))
      els.forEach(el => { if (!el.hasAttribute('data-visible')) io.observe(el) })
    }
    watch(document.body)
    const mo = new MutationObserver(records => records.forEach(r => r.addedNodes.forEach(n => n.nodeType === 1 && watch(n))))
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}

// Returns the id of the section currently under the nav.
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.35
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

// Counts from 0 to `target` once `start` becomes true.
export function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0)
  const frame = useRef()
  useEffect(() => {
    if (!start) return
    if (reducedMotion()) {
      setValue(target)
      return
    }
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, start, duration])
  return value
}

// Light / dark theme, remembered per browser. index.html applies it before paint.
// Icons for both themes are rendered and CSS shows the right one, so the
// pre-rendered HTML never disagrees with the browser.
export function useTheme() {
  const toggle = useCallback(() => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    root.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch { /* storage blocked */ }
  }, [])
  return toggle
}

// Current time in a given IANA time zone, refreshed every 15s.
export function useClock(timeZone) {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(new Date())
  // Starts as a placeholder so the pre-rendered HTML matches the first client render.
  const [time, setTime] = useState('--:--')
  useEffect(() => {
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 15000)
    return () => clearInterval(id)
  }, [timeZone]) // eslint-disable-line react-hooks/exhaustive-deps
  return time
}

// 0 → 1 as an element travels up through the viewport.
export function useScrollProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    if (reducedMotion()) { setP(1); return }
    let frame
    const update = () => {
      frame = null
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.85
      const end = vh * 0.3
      setP(Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.6))))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])
  return p
}
