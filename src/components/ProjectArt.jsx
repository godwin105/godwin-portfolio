import styles from './ProjectArt.module.css'

// Small deterministic PRNG so each project's art is stable between renders.
function rng(seedText) {
  let h = 2166136261
  for (const c of seedText) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const W = 400, H = 225

function Bars({ r }) {
  const n = 14
  const bw = 16, gap = (W - 60 - n * bw) / (n - 1)
  const hs = Array.from({ length: n }, (_, i) => 40 + i * 7 + r() * 45)
  const tops = hs.map((h, i) => [30 + i * (bw + gap) + bw / 2, 190 - h])
  return (
    <g>
      <line x1="30" x2={W - 30} y1="190" y2="190" className={styles.stroke} />
      {hs.map((h, i) => (
        <rect key={i} x={30 + i * (bw + gap)} y={190 - h} width={bw} height={h} rx="3"
          className={`${styles.bar} ${i % 4 === 3 ? styles.fillB : styles.fillA}`} style={{ '--i': i }} />
      ))}
      <polyline points={tops.map(p => p.join(',')).join(' ')} className={styles.trend} />
    </g>
  )
}

function Chain({ r }) {
  const blocks = 5
  return (
    <g>
      {Array.from({ length: blocks }, (_, i) => {
        const x = 26 + i * 72, y = 70 + (i % 2) * 24
        const filled = r() > 0.5 || i === blocks - 1
        return (
          <g key={i} className={styles.block} style={{ '--i': i }}>
            {i > 0 && <line x1={x - 16} y1={70 + ((i - 1) % 2) * 24 + 32} x2={x} y2={y + 32} className={styles.link} />}
            <rect x={x} y={y} width="56" height="64" rx="8" className={filled ? styles.blockOn : styles.blockOff} />
            {[0, 1, 2].map(k => (
              <rect key={k} x={x + 10} y={y + 14 + k * 13} width={36 - k * 8 - r() * 8} height="5" rx="2.5"
                className={filled ? styles.blockLineOn : styles.fillFaint} />
            ))}
          </g>
        )
      })}
    </g>
  )
}

function HashRow({ y, chars, hot }) {
  if (!hot) return <text x="28" y={y}>{chars}</text>
  return (
    <text x="28" y={y}>
      {chars.slice(0, 4)}<tspan className={styles.hashHot}>{chars.slice(4, 16)}</tspan>{chars.slice(16)}
    </text>
  )
}

function Hash({ r }) {
  const hex = '0123456789abcdef'
  const rows = 7, cols = 22
  return (
    <g className={styles.hash}>
      {Array.from({ length: rows }, (_, y) => (
        <HashRow key={y} y={46 + y * 22} chars={Array.from({ length: cols }, () => hex[Math.floor(r() * 16)]).join('')} hot={y === 3} />
      ))}
      <circle cx="330" cy="160" r="34" className={styles.stamp} />
      <circle cx="330" cy="160" r="26" className={styles.stampInner} />
      <path d="M318 160l8 8 16-16" className={styles.check} />
    </g>
  )
}

function Radar({ r }) {
  const cx = W / 2, cy = H / 2 + 6
  const dots = Array.from({ length: 9 }, () => {
    const a = r() * Math.PI * 2, d = 20 + r() * 72
    return [cx + Math.cos(a) * d, cy + Math.sin(a) * d]
  })
  return (
    <g>
      {[30, 60, 90].map(rad => <circle key={rad} cx={cx} cy={cy} r={rad} className={styles.stroke} />)}
      <line x1={cx - 100} x2={cx + 100} y1={cy} y2={cy} className={styles.stroke} />
      <line x1={cx} x2={cx} y1={cy - 100} y2={cy + 100} className={styles.stroke} />
      <g className={styles.sweep} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <path d={`M${cx},${cy} L${cx + 90},${cy} A90,90 0 0,0 ${cx + 90 * Math.cos(-0.9)},${cy + 90 * Math.sin(-0.9)} Z`} className={styles.sweepFill} />
      </g>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} className={i % 3 === 0 ? styles.fillB : styles.fillA} />
      ))}
    </g>
  )
}

function Scatter({ r }) {
  const pts = Array.from({ length: 46 }, () => {
    const x = 30 + r() * 340, y = 22 + r() * 180
    const bad = y < 0.55 * x - 40 + (r() - 0.5) * 30
    return [x, y, bad]
  })
  return (
    <g>
      <line x1="60" y1="0" x2="400" y2="190" className={styles.boundary} />
      {pts.map(([x, y, bad], i) => (
        <circle key={i} cx={x} cy={y} r="4" className={bad ? styles.dotB : styles.dotA} style={{ '--i': i }} />
      ))}
    </g>
  )
}

function Window() {
  return (
    <g>
      <rect x="40" y="24" width="320" height="185" rx="10" className={styles.frame} />
      <line x1="40" x2="360" y1="46" y2="46" className={styles.stroke} />
      {[0, 1, 2].map(i => <circle key={i} cx={56 + i * 12} cy="35" r="3.5" className={styles.fillFaint} />)}
      <rect x="60" y="64" width="120" height="16" rx="4" className={styles.fillA} />
      <rect x="60" y="88" width="90" height="16" rx="4" className={styles.fillText} />
      <rect x="60" y="116" width="150" height="5" rx="2.5" className={styles.fillFaint} />
      <rect x="60" y="127" width="120" height="5" rx="2.5" className={styles.fillFaint} />
      <rect x="236" y="64" width="104" height="70" rx="8" className={styles.fillFaint} />
      <polyline points="246,122 266,108 286,114 306,94 330,84" className={styles.trend} />
      {[0, 1, 2].map(i => (
        <rect key={i} x={60 + i * 96} y="150" width="88" height="42" rx="6" className={styles.card} />
      ))}
    </g>
  )
}

const variants = { bars: Bars, chain: Chain, hash: Hash, radar: Radar, scatter: Scatter, window: Window }

export default function ProjectArt({ kind, seed }) {
  const Art = variants[kind] ?? Bars
  const r = rng(seed)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={styles.art} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <Art r={r} />
    </svg>
  )
}
