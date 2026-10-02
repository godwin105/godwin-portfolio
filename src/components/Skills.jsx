import { skillGroups, softSkills } from '../data'
import SectionHead from './SectionHead'
import styles from './Skills.module.css'

const total = skillGroups.reduce((s, g) => s + g.chips.length, 0)

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <SectionHead
          index="04"
          label="Toolkit"
          title={<>Data, dev, audit <em>&amp; ops.</em></>}
          intro="Tools and practices I use at work, and have used in internships, coursework and my own projects."
          aside={<p className={styles.total}><span>{total}</span>skills across {skillGroups.length} domains</p>}
        />

        <ul className={styles.rows}>
          {skillGroups.map((g, i) => (
            <li key={g.title} className={`${styles.row} reveal`} style={{ '--delay': `${i * 50}ms` }}>
              <div className={styles.head}>
                <span className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={g.icon} />
                  </svg>
                </span>
                <h3 className={styles.title}>{g.title}</h3>
                <span className={styles.count}>{String(g.chips.length).padStart(2, '0')}</span>
              </div>
              <ul className={styles.chips}>
                {g.chips.map(c => <li key={c} className="chip">{c}</li>)}
              </ul>
            </li>
          ))}
          <li className={`${styles.row} ${styles.soft} reveal`}>
            <div className={styles.head}>
              <span className={`${styles.icon} ${styles.iconSoft}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3 className={styles.title}>Soft skills</h3>
              <span className={styles.count}>{String(softSkills.length).padStart(2, '0')}</span>
            </div>
            <ul className={styles.chips}>
              {softSkills.map(s => <li key={s} className="chip">{s}</li>)}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
