import { useRef } from 'react'
import { useScrollProgress } from '../hooks'
import { education, interests, currentRole } from '../data'
import SectionHead from './SectionHead'
import styles from './About.module.css'

const statement =
  "I'm a data analyst and software developer from Dar es Salaam. I clean, move and model data, build the tools that make it useful, and keep the systems behind them running. Today that means healthcare data operations and IT. Before that, four internships across FinTech, software and financial services."

// Words from the statement that get the serif-italic accent treatment.
const accentWords = new Set(['useful,', 'running.'])

const info = [
  { key: 'Current role', val: `${currentRole.role}, ${currentRole.org}` },
  { key: 'Based in', val: 'Dar es Salaam, Tanzania' },
  { key: 'Languages', val: 'English & Swahili' },
  { key: 'Focus', val: 'Data analysis · Software development · Auditing' },
  { key: 'Availability', val: 'Open to full-time & internship roles' },
]

const pillars = [
  {
    num: '01',
    title: 'Analyse',
    text: 'Power BI, Excel, Python, SQL, R and Stata to turn messy data into clear reporting.',
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
  },
  {
    num: '02',
    title: 'Build',
    text: 'React, TypeScript, FastAPI and PostgreSQL for full-stack products people actually use.',
    icon: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
  },
  {
    num: '03',
    title: 'Verify',
    text: 'KYC, data validation, CRM auditing and data migration that keep records accurate.',
    icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4',
  },
]

function ScrollStatement() {
  const ref = useRef(null)
  const p = useScrollProgress(ref)
  const words = statement.split(' ')
  const lit = Math.round(p * words.length * 1.15)
  return (
    <p ref={ref} className={styles.statement}>
      <span className="sr-only">{statement}</span>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`${i < lit ? styles.lit : ''} ${accentWords.has(w) ? styles.accentWord : ''}`}
        >
          {w}{' '}
        </span>
      ))}
    </p>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index="01" label="About" title={<>Data, code <em>&amp; systems.</em></>} />

        <div className={styles.grid}>
          <div className={styles.photoMobile} data-print="hide">
            <picture>
              <source type="image/webp" srcSet="/profile-480.webp 480w, /profile-960.webp 960w" sizes="260px" />
              <img src="/profile.jpeg" alt="Portrait of Godwin Tairo" width="960" height="1280" loading="lazy" />
            </picture>
          </div>
          <ScrollStatement />
        </div>

        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <article key={p.num} className={`${styles.pillar} reveal`} style={{ '--delay': `${i * 90}ms` }}>
              <div className={styles.pillarTop}>
                <span className={styles.pillarIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={p.icon} />
                  </svg>
                </span>
                <span className={styles.pillarNum}>{p.num}</span>
              </div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarText}>{p.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.lower}>
          <div className="reveal">
            <h3 className={styles.subhead}>At a glance</h3>
            <dl className={styles.info}>
              {info.map(({ key, val }) => (
                <div key={key} className={styles.infoRow}>
                  <dt>{key}</dt>
                  <dd>{val}</dd>
                </div>
              ))}
            </dl>

            <h3 className={`${styles.subhead} ${styles.subheadGap}`}>Beyond work</h3>
            <ul className={styles.interests}>
              {interests.map(i => <li key={i} className="chip">{i}</li>)}
            </ul>
          </div>

          <div className="reveal" style={{ '--delay': '100ms' }}>
            <h3 className={styles.subhead}>Education</h3>
            <ol className={styles.edu}>
              {education.map(e => (
                <li key={e.school} className={e.current ? styles.eduCurrent : ''}>
                  <span className={styles.eduYear}>{e.year}</span>
                  <div>
                    <p className={styles.eduSchool}>{e.school}</p>
                    <p className={styles.eduDegree}>{e.degree}</p>
                  </div>
                  <span className={styles.eduNote}>{e.note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
