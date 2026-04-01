import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>GT<span className={styles.dot}>.</span></div>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={() => scrollTo('#contact')}>
        Hire me
      </button>

      {/* Mobile hamburger */}
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? styles.open : ''}></span>
        <span className={menuOpen ? styles.open : ''}></span>
        <span className={menuOpen ? styles.open : ''}></span>
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }}>
              {l.label}
            </a>
          ))}
          <button className={styles.cta} onClick={() => scrollTo('#contact')}>Hire me</button>
        </div>
      )}
    </nav>
  )
}
