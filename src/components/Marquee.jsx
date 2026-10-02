import { marqueeTools } from '../data'
import styles from './Marquee.module.css'

export default function Marquee() {
  const row = marqueeTools.map(t => (
    <li key={t}>
      <span>{t}</span>
      <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0l1.6 4.4L12 6l-4.4 1.6L6 12 4.4 7.6 0 6l4.4-1.6z" /></svg>
    </li>
  ))
  return (
    <section className={styles.band} aria-label="Tools I work with" data-print="hide">
      <div className={styles.track}>
        <ul>{row}</ul>
        <ul aria-hidden="true">{row}</ul>
      </div>
    </section>
  )
}
