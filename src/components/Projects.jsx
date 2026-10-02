import { useState } from 'react'
import { projects } from '../data'
import SectionHead from './SectionHead'
import ProjectArt from './ProjectArt'
import { ArrowUpRight } from './icons'
import styles from './Projects.module.css'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'data', label: 'Data & ML' },
  { id: 'web3', label: 'Web3' },
  { id: 'web', label: 'Full-stack' },
]

const hostOf = url => new URL(url).hostname.replace(/^www\./, '')

// Moves the card's spotlight to follow the cursor.
const onMove = e => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function Filters({ value, onChange }) {
  return (
    <div className={styles.filters} role="group" aria-label="Filter projects" data-print="hide">
      {filters.map(f => {
        const count = f.id === 'all' ? projects.length : projects.filter(p => p.categories.includes(f.id)).length
        return (
          <button key={f.id} onClick={() => onChange(f.id)} aria-pressed={value === f.id}
            className={`${styles.filter} ${value === f.id ? styles.filterOn : ''}`}>
            {f.label}<sup>{count}</sup>
          </button>
        )
      })}
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = projects.filter(p => filter === 'all' || p.categories.includes(filter))

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          index="03"
          label="Selected work"
          title={<>Things I've built <em>&amp; analysed.</em></>}
          intro="Live products, not mock-ups. Every one is deployed and open to try."
          aside={<Filters value={filter} onChange={setFilter} />}
        />

        <div className={styles.grid}>
          {shown.map((p, i) => {
            const ongoing = p.date.includes('Present')
            const n = String(projects.indexOf(p) + 1).padStart(2, '0')
            return (
              <article key={p.name} className={styles.card} onMouseMove={onMove} style={{ '--i': i }}>
                <div className={styles.cover} data-print="hide">
                  <ProjectArt kind={p.art} seed={p.name} />
                  <span className={styles.coverNum}>{n}</span>
                  <span className={`${styles.status} ${ongoing ? styles.ongoing : ''}`}>
                    {ongoing ? 'In development' : 'Shipped'}
                  </span>
                </div>

                <div className={styles.body}>
                  <p className={styles.tag}>{p.tag}</p>
                  <h3 className={styles.name}>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.stretched}>
                      {p.name}
                    </a>
                  </h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <ul className={styles.stack} aria-label="Tech stack">
                    {p.stack.map(s => <li key={s}>{s}</li>)}
                  </ul>
                  <div className={styles.foot}>
                    <span className={styles.date}>{p.date}</span>
                    <span className={styles.visit}>
                      <span className={styles.host}>{hostOf(p.link)}</span>
                      <span className={styles.arrow}><ArrowUpRight /></span>
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className={`${styles.more} reveal`} data-print="hide">
          <p>More experiments and source code on GitHub.</p>
          <a href="https://github.com/godwin105" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            github.com/godwin105 <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
