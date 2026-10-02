import { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '../data'
import { socials, ArrowRight, ArrowUpRight, DownloadIcon, SunIcon } from './icons'
import styles from './CommandPalette.module.css'

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const toggleTheme = () => {
  const root = document.documentElement
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  root.setAttribute('data-theme', next)
  try { localStorage.setItem('theme', next) } catch { /* storage blocked */ }
}

const commands = [
  ...[['About', 'about'], ['Experience', 'experience'], ['Work', 'projects'], ['Skills', 'skills'], ['Contact', 'contact']]
    .map(([label, id]) => ({ group: 'Go to', label, icon: ArrowRight, run: () => scrollTo(id) })),
  ...projects.map(p => ({ group: 'Projects', label: p.name, hint: p.tag, icon: ArrowUpRight, run: () => window.open(p.link, '_blank', 'noopener') })),
  ...socials.map(s => ({ group: 'Links', label: s.label, hint: s.handle, icon: s.Icon, run: () => window.open(s.href, '_blank', 'noopener') })),
  { group: 'Actions', label: 'Toggle light / dark theme', icon: SunIcon, run: toggleTheme },
  { group: 'Actions', label: 'Download CV (print to PDF)', icon: DownloadIcon, run: () => setTimeout(() => window.print(), 150) },
]

// Opens with Ctrl/⌘+K or a `open-palette` window event (dispatched by the nav button).
export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const returnFocus = useRef(null)

  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-palette', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      returnFocus.current = document.activeElement
      setQuery('')
      setIndex(0)
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      document.body.style.overflow = ''
      returnFocus.current?.focus?.()
    }
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(c => `${c.label} ${c.hint || ''} ${c.group}`.toLowerCase().includes(q))
  }, [query])

  useEffect(() => { setIndex(0) }, [query])
  useEffect(() => {
    listRef.current?.querySelector(`[data-i="${index}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [index])

  if (!open) return null

  const run = c => { setOpen(false); c.run() }
  const onKeyDown = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIndex(i => Math.min(i + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIndex(i => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter' && results[index]) { e.preventDefault(); run(results[index]) }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false) }
    else if (e.key === 'Tab') e.preventDefault() // keep focus inside the dialog
  }

  let lastGroup = null
  return (
    <div className={styles.overlay} onMouseDown={e => e.target === e.currentTarget && setOpen(false)} data-print="hide">
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Command palette">
        <div className={styles.searchRow}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Jump to a section, project or link…"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[index] ? `palette-${index}` : undefined}
            aria-autocomplete="list"
          />
          <kbd>Esc</kbd>
        </div>

        <ul id="palette-list" ref={listRef} className={styles.list} role="listbox" aria-label="Results">
          {results.length === 0 && <li className={styles.empty}>No results for “{query}”</li>}
          {results.map((c, i) => {
            const header = c.group !== lastGroup ? c.group : null
            lastGroup = c.group
            const Icon = c.icon
            return [
              header && <li key={`g-${header}`} className={styles.group} role="presentation">{header}</li>,
              <li
                key={c.group + c.label}
                id={`palette-${i}`}
                data-i={i}
                role="option"
                aria-selected={i === index}
                className={`${styles.item} ${i === index ? styles.active : ''}`}
                onMouseMove={() => setIndex(i)}
                onClick={() => run(c)}
              >
                <span className={styles.icon}><Icon size={15} /></span>
                <span className={styles.label}>{c.label}</span>
                {c.hint && <span className={styles.hint}>{c.hint}</span>}
              </li>,
            ]
          })}
        </ul>

        <div className={styles.foot}>
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>Ctrl</kbd><kbd>K</kbd> toggle</span>
        </div>
      </div>
    </div>
  )
}
