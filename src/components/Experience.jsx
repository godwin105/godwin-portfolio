import { useState } from 'react'
import { experiences, monthsBetween, totalMonths, orgCount } from '../data'
import SectionHead from './SectionHead'
import { PlusIcon } from './icons'
import styles from './Experience.module.css'

function Summary() {
  return (
    <dl className={styles.summary}>
      <div><dt>Roles</dt><dd>{String(experiences.length).padStart(2, '0')}</dd></div>
      <div><dt>Months</dt><dd>{totalMonths}</dd></div>
      <div><dt>Organisations</dt><dd>{String(orgCount).padStart(2, '0')}</dd></div>
    </dl>
  )
}

export default function Experience() {
  // The current role starts open.
  const [open, setOpen] = useState(() => new Set([0]))
  const toggle = i => setOpen(prev => {
    const next = new Set(prev)
    next.has(i) ? next.delete(i) : next.add(i)
    return next
  })

  return (
    <section className={`section ${styles.exp}`} id="experience">
      <div className="container">
        <SectionHead
          index="02"
          label="Experience"
          title={<>Where I've done <em>the work.</em></>}
          intro="Healthcare data operations today, built on four internships across FinTech, software engineering and financial services."
          aside={<Summary />}
        />

        <ol className={styles.list}>
          {experiences.map((e, i) => {
            const isOpen = open.has(i)
            const current = e.end === null
            const id = `exp-${i}`
            return (
              <li key={`${e.role}-${e.start}`} className={`${styles.item} ${isOpen ? styles.open : ''} reveal`}
                style={{ '--delay': `${i * 60}ms` }}>
                <h3>
                  <button className={styles.row} onClick={() => toggle(i)} aria-expanded={isOpen} aria-controls={id}>
                    <span className={styles.date}>{e.duration}</span>
                    <span className={styles.titleCol}>
                      <span className={styles.role}>
                        {e.role}
                        {current && <span className={styles.current}><span className="live-dot" />Current</span>}
                      </span>
                      <span className={styles.org} title={e.orgFull}>{e.org}</span>
                    </span>
                    <span className={styles.meta}>
                      <span className={styles.track}>{e.track}</span>
                      <span className={styles.months}>{monthsBetween(e.start, e.end)} mo</span>
                    </span>
                    <span className={styles.toggle} aria-hidden="true"><PlusIcon /></span>
                  </button>
                </h3>
                <div id={id} className={styles.panel} role="region" aria-label={`${e.role} at ${e.org}`}>
                  <div className={styles.panelInner}>
                    <div className={styles.body}>
                      <ul className={styles.bullets}>
                        {e.bullets.map(b => <li key={b}>{b}</li>)}
                      </ul>
                      <ul className={styles.tags} aria-label="Tools and skills">
                        {e.tags.map(t => <li key={t} className="chip">{t}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
