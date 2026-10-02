import styles from './SectionHead.module.css'

// Numbered editorial section header: "01 — About" + title + optional intro/aside.
export default function SectionHead({ index, label, title, intro, aside }) {
  return (
    <header className={styles.head}>
      <div className={styles.main}>
        <p className="eyebrow reveal"><b>{index}</b>{label}</p>
        <h2 className={`${styles.title} reveal`} style={{ '--delay': '60ms' }}>{title}</h2>
        {intro && <p className={`${styles.intro} reveal`} style={{ '--delay': '120ms' }}>{intro}</p>}
      </div>
      {aside && <div className={`${styles.aside} reveal`} style={{ '--delay': '180ms' }}>{aside}</div>}
    </header>
  )
}
