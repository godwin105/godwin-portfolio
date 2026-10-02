import { useEffect, useState } from 'react'
import { experiences, monthsBetween, endOf, currentRole, totalMonths, internshipCount, projects } from '../data'
import { useCountUp, useClock } from '../hooks'
import { ArrowRight, DownloadIcon } from './icons'
import styles from './Hero.module.css'

// Cumulative months of hands-on experience, oldest role first.
const timeline = [...experiences]
  .sort((a, b) => a.start.localeCompare(b.start))
  .reduce((acc, e) => {
    const prev = acc[acc.length - 1].total
    return [...acc, { year: endOf(e).slice(0, 4), track: e.track, total: prev + monthsBetween(e.start, e.end) }]
  }, [{ year: '', track: '', total: 0 }])

const W = 320, H = 120, PAD = 8
const pts = timeline.map((d, i) => [
  PAD + (i / (timeline.length - 1)) * (W - PAD * 2),
  H - PAD - (d.total / totalMonths) * (H - PAD * 2 - 8),
])
const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
const area = `${line} L${pts[pts.length - 1][0]},${H} L${pts[0][0]},${H} Z`

function CareerChart({ ready }) {
  return (
    <div className={`${styles.chartWrap} ${ready ? styles.ready : ''}`}>
      <svg viewBox={`0 0 ${W} ${H}`} className={styles.chart} role="img"
        aria-label={`Cumulative months of hands-on experience since 2023, now ${totalMonths} months`}>
        <defs>
          <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map(f => (
          <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} className={styles.grid} />
        ))}
        <path d={area} fill="url(#heroArea)" className={styles.area} />
        <path d={line} className={styles.line} pathLength="1" />
        {pts.slice(1).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === pts.length - 2 ? 4.5 : 3.5}
            className={`${styles.point} ${i === pts.length - 2 ? styles.pointNow : ''}`}
            style={{ '--d': `${700 + i * 160}ms` }} />
        ))}
      </svg>
      <div className={styles.axis}>
        {timeline.slice(1).map((d, i) => (
          <span key={i} style={{ left: `${(pts[i + 1][0] / W) * 100}%` }}>{d.year}<em>{d.track}</em></span>
        ))}
      </div>
    </div>
  )
}

function Stat({ value, label, ready }) {
  const v = useCountUp(value, ready)
  return (
    <div className={styles.stat}>
      <span className={styles.statNum}>{String(v).padStart(2, '0')}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function Hero() {
  const [ready, setReady] = useState(false)
  const time = useClock('Africa/Dar_es_Salaam')
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow} aria-hidden="true" data-print="hide" />
      <div className={styles.gridBg} aria-hidden="true" data-print="hide" />

      <div className="container">
        <div className={styles.top}>
          <div className={styles.intro}>
            <a href="#experience" className={`${styles.now} ${styles.in}`} style={{ '--d': '0ms' }}
              onClick={e => { e.preventDefault(); scrollTo('experience') }}>
              <span className="live-dot" />
              <span className={styles.nowLabel}>Now</span>
              <span className={styles.nowText}>{currentRole.role} · {currentRole.org}</span>
            </a>

            <h1 className={styles.name}>
              <span className={styles.mask}><span style={{ '--d': '80ms' }}>Godwin</span></span>
              <span className={styles.mask}><span style={{ '--d': '180ms' }}>Tairo<i>.</i></span></span>
            </h1>

            <p className={`${styles.tagline} ${styles.in}`} style={{ '--d': '320ms' }}>
              Data analyst &amp; software developer. <br className={styles.br} />
              I turn raw data into <em className="serif">decisions.</em>
            </p>

            <p className={`${styles.lede} ${styles.in}`} style={{ '--d': '400ms' }}>
              I clean, move and model data, then build the tools that make it useful, across
              healthcare, FinTech and financial services. Computer Engineering student at the
              University of Dar es Salaam.
            </p>

            <p className="print-only">
              godwintairo.vercel.app · linkedin.com/in/godwin-tairo-4977a727b · github.com/godwin105 · Dar es Salaam, Tanzania
            </p>

            <div className={`${styles.actions} ${styles.in}`} style={{ '--d': '480ms' }} data-print="hide">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                See my work <ArrowRight />
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>Get in touch</button>
              <button className="btn btn-ghost" onClick={() => window.print()} title="Opens the print dialog. Choose Save as PDF">
                <DownloadIcon /> Download CV
              </button>
            </div>
          </div>

          <figure className={`${styles.portrait} ${styles.in}`} style={{ '--d': '250ms' }} data-print="hide">
            <picture>
              <source type="image/webp" srcSet="/profile-480.webp 480w, /profile-960.webp 960w" sizes="(max-width: 1000px) 280px, 360px" />
              <img src="/profile.jpeg" alt="Portrait of Godwin Tairo" width="960" height="1280" fetchpriority="high" />
            </picture>
            <figcaption>
              <span>Godwin Innocent Tairo</span>
              <span>Dar es Salaam, TZ</span>
            </figcaption>
          </figure>
        </div>

        <div className={styles.bento} data-print="hide">
          <article className={`${styles.tile} ${styles.tileChart} ${styles.in}`} style={{ '--d': '560ms' }}>
            <header className={styles.tileHead}>
              <span>Hands-on experience</span>
              <span className={styles.tileMeta}>{totalMonths} months · cumulative</span>
            </header>
            <CareerChart ready={ready} />
          </article>

          <article className={`${styles.tile} ${styles.tileStats} ${styles.in}`} style={{ '--d': '640ms' }}>
            <Stat value={internshipCount} label="Internships" ready={ready} />
            <Stat value={projects.length} label="Live projects" ready={ready} />
            <Stat value={totalMonths} label="Months in the field" ready={ready} />
          </article>

          <article className={`${styles.tile} ${styles.tileClock} ${styles.in}`} style={{ '--d': '720ms' }}>
            <header className={styles.tileHead}>
              <span>Local time</span>
              <span className={styles.tileMeta}>EAT · UTC+3</span>
            </header>
            <p className={styles.clock}>{time}</p>
            <p className={styles.clockPlace}>Dar es Salaam, Tanzania</p>
            <svg className={styles.globe} viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="46" />
              <ellipse cx="50" cy="50" rx="20" ry="46" />
              <ellipse cx="50" cy="50" rx="38" ry="46" />
              <path d="M4 50h92M10 28h80M10 72h80" />
              <circle cx="62" cy="58" r="3.5" className={styles.pin} />
            </svg>
          </article>
        </div>
      </div>
    </section>
  )
}
