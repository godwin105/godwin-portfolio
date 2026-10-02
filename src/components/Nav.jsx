import { useState, useEffect } from 'react'
import { useActiveSection, useTheme } from '../hooks'
import { SunIcon, MoonIcon, ArrowUpRight } from './icons'
import styles from './Nav.module.css'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]
const ids = links.map(l => l.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleTheme = useTheme()
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll behind the full-screen menu; close it on Escape or when widening.
  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = e => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth > 900 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const go = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`)
  }

  const themeLabel = 'Toggle light and dark theme'

  return (
    <header data-print="hide" className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.bar}>
        <a href="#home" className={styles.logo} onClick={e => go(e, 'home')}>
          <span className={styles.mark} aria-hidden="true"><i /><i /><i /></span>
          <span className={styles.logoText}>Godwin <span>Tairo</span><span className="sr-only">, back to top</span></span>
        </a>

        <nav aria-label="Primary" className={styles.center}>
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={e => go(e, l.id)}
                  className={active === l.id ? styles.active : ''}
                  aria-current={active === l.id ? 'true' : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <button className={styles.search} onClick={() => window.dispatchEvent(new Event('open-palette'))} aria-label="Search the site" title="Search (Ctrl K)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <kbd>Ctrl K</kbd>
          </button>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            <span className={styles.sun}><SunIcon /></span>
            <span className={styles.moon}><MoonIcon /></span>
          </button>
          <a href="#contact" className={styles.cta} onClick={e => go(e, 'contact')}>
            Let's talk
          </a>
          <button
            className={`${styles.iconBtn} ${styles.burger}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span />
          </button>
        </div>

        <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </div>

      <div id="mobile-menu" className={styles.sheet} hidden={!menuOpen}>
        <ul>
          {links.map((l, i) => (
            <li key={l.id} style={{ '--i': i }}>
              <a href={`#${l.id}`} onClick={e => go(e, l.id)} className={active === l.id ? styles.active : ''}>
                <span className={styles.sheetNum}>0{i + 1}</span>
                {l.label}
                <ArrowUpRight size={20} />
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.sheetFoot}>Dar es Salaam, Tanzania</p>
      </div>
    </header>
  )
}
