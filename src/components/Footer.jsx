import styles from './Footer.module.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {new Date().getFullYear()} Godwin Innocent Tairo · Data Analyst · Dar es Salaam, Tanzania
      </span>
      <button className={styles.name} onClick={scrollTop} title="Back to top">GT</button>
    </footer>
  )
}
