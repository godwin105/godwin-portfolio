import { useState } from 'react'
import { socials, ArrowRight, ArrowUpRight } from './icons'
import styles from './Contact.module.css'

const empty = { name: '', email: '', message: '', _gotcha: '' }

const services = ['Data analysis', 'Software development', 'IT systems & support', 'Audit & compliance']

export default function Contact() {
  const [form, setForm] = useState(empty)
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
        body: JSON.stringify({ ...form, _subject: `Portfolio message from ${form.name}` }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm(empty)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={`section ${styles.contact}`} id="contact" data-print="hide">
      <div className="container">
        <p className="eyebrow reveal"><b>05</b>Contact</p>
        <h2 className={`${styles.title} reveal`}>
          Let's work <br /><em>together.</em>
        </h2>

        <ul className={`${styles.services} reveal`} aria-label="What I can help with">
          {services.map(s => <li key={s}>{s}</li>)}
        </ul>

        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <p className={styles.desc}>
              Whether you need data analysed, a web app built, IT systems and networks
              set up, or records checked for accuracy and compliance, I'm open to
              full-time roles, internships and freelance projects. Send a message and
              I'll get back to you.
            </p>

            <ul className={styles.socials}>
              {socials.map(({ label, handle, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <span className={styles.icon}><Icon size={17} /></span>
                    <span className={styles.linkLabel}>{label}</span>
                    <span className={styles.linkHandle}>{handle}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className={`${styles.form} reveal`} style={{ '--delay': '120ms' }} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your name"
                  value={form.name} onChange={handleChange} required />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com"
                  value={form.email} onChange={handleChange} required />
              </label>
            </div>
            <label className={styles.field}>
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Tell me about your project or opportunity…"
                value={form.message} onChange={handleChange} required />
            </label>

            {/* Honeypot — hidden from people, filled by bots */}
            <input type="text" name="_gotcha" value={form._gotcha} onChange={handleChange}
              className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className={styles.formFoot}>
              <div aria-live="polite" className={styles.statusSlot}>
                {status === 'sent' && <p className={styles.success}>Message sent. Thanks! I'll be in touch soon.</p>}
                {status === 'error' && <p className={styles.error}>Something went wrong. Please try again, or reach me on LinkedIn.</p>}
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send message <ArrowRight /></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
