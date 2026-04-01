import styles from './Contact.module.css'

const contactLinks = [
  { icon: '✉', label: 'godwintairo0@gmail.com', href: 'mailto:godwintairo0@gmail.com' },
  { icon: '☏', label: '+255 694 007 399', href: 'tel:+255694007399' },
  { icon: '☏', label: '+255 733 879 069', href: 'tel:+255733879069' },
  { icon: 'in', label: 'LinkedIn — Godwin Tairo', href: 'https://www.linkedin.com/in/godwin-tairo-4977a727b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: '⌥', label: 'GitHub — @godwintairo', href: 'https://github.com/godwin105' },
]

const personal = [
  'Excellent written & verbal communication',
  'Fluent in English and Swahili',
  'Works independently and in teams',
  'Strong analytical & problem-solving mindset',
  'Leadership & time management',
]

const hobbies = [
  'Continuously learning new data skills',
  'Networking with professionals',
  'Football & basketball',
  'Community service',
  'Watching movies',
]

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <p className="section-label">Contact</p>
          <div className="section-divider" />
          <h2 className={styles.title}>Let's work<br />with data.</h2>
          <p className={styles.desc}>
            Looking for a data analyst who can dig into your numbers, build clear dashboards,
            and tell you what the data actually means? Let's talk.
          </p>
          <div className={styles.links}>
            {contactLinks.map((c, i) => (
              <a key={i} href={c.href} className={styles.link}>
                <div className={styles.icon}>{c.icon}</div>
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Personal skills</p>
            <div className={styles.items}>
              {personal.map(p => <p key={p} className={styles.item}>{p}</p>)}
            </div>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Interests & hobbies</p>
            <div className={styles.items}>
              {hobbies.map(h => <p key={h} className={styles.item}>{h}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
