import { useState } from 'react'
import styles from './Contact.module.css'

const socialLinks = [
  { icon: 'in', label: 'LinkedIn — Godwin Tairo', href: 'https://www.linkedin.com/in/godwin-tairo-4977a727b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: '⌥', label: 'GitHub — godwin105', href: 'https://github.com/godwin105' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mvzjblpv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>

        {/* Left — headline + links */}
        <div className={styles.left}>
          <p className="section-label">Contact</p>
          <div className="section-divider" />
          <h2 className={styles.title}>Let's work<br />together.</h2>
          <p className={styles.desc}>
            Need a data analyst, a developer, or someone who can do both?
            I'm open to internships, freelance projects and full-time roles.
            Send a message and I'll get back to you.
          </p>

          <div className={styles.socials}>
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <div className={styles.icon}>{s.icon}</div>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'sent' && (
              <p className={styles.success}>Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.error}>Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
