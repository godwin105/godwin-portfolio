import styles from './Hero.module.css'

const tools = ['Power BI', 'Python · Pandas · NumPy', 'SQL · MySQL', 'Excel', 'R · Stata', 'Figma']

const stats = [
  { num: '4', label: 'Internships' },
  { num: '32+', label: 'Weeks experience' },
  { num: '6+', label: 'Data tools' },
  { num: '2', label: 'Languages' },
]

const bars = [40, 70, 55, 90, 65, 110, 80, 130]

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      {/* Background decorations */}
      <div className={styles.bg}>
        <div className={styles.gridLines} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      {/* Decorative bar chart */}
      <div className={styles.chartDecor} aria-hidden>
        {bars.map((h, i) => (
          <div key={i} className={styles.bar} style={{ height: h }} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.status}>
          <span className={styles.statusDot} />
          Open to analyst roles
        </div>

        <h1 className={styles.name}>
          Godwin<br /><span>Tairo</span>
        </h1>

        <p className={styles.title}>
          Data Analyst · <em>Turning data into decisions</em>
        </p>

        <p className={styles.desc}>
          Computer Engineering student at the University of Dar es Salaam — specialising
          in transforming raw data into clear insights using Python, Power BI, SQL and Excel. Building data solutions that matter.
        </p>

        <div className={styles.tools}>
          {tools.map(t => <span key={t} className={styles.toolBadge}>{t}</span>)}
        </div>

        <div className={styles.actions}>
          <button className="btn-primary" onClick={() => scrollTo('#skills')}>See My Skills</button>
          <button className="btn-ghost" onClick={() => scrollTo('#contact')}>Get In Touch</button>
        </div>

        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
