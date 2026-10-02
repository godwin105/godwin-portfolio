import { socials, ArrowUp } from './icons'
import { useClock } from '../hooks'
import styles from './Footer.module.css'

export default function Footer() {
  const time = useClock('Africa/Dar_es_Salaam')
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer} data-print="hide">
      <div className="container">
        <div className={styles.top}>
          <p className={styles.note}>
            Designed &amp; built by Godwin Tairo.
          </p>
          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.wordmark} aria-hidden="true">Godwin Tairo</p>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Godwin Innocent Tairo</span>
          <span>Dar es Salaam · {time} EAT</span>
          <button className={styles.top_btn} onClick={scrollTop}>
            Back to top <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
