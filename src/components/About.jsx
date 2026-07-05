import styles from './About.module.css'

const info = [
  { key: 'Location', val: 'Dar es Salaam, Tanzania' },
  { key: 'Languages', val: 'English & Swahili' },
  { key: 'Focus areas', val: 'Data Analysis · Software Development · Auditing' },
  { key: 'Availability', val: 'Open to full-time & internship roles' },
]

const education = [
  { year: '2022 – Present', school: 'University of Dar es Salaam', degree: 'BSc Computer Engineering & Information Technology · Expected Nov 2026' },
  { year: '2020 – 2022', school: 'Ndanda Boys High School', degree: 'Advanced Certificate of Secondary Education (ACSEE)' },
  { year: '2016 – 2019', school: 'Dar es Salaam Secondary School', degree: 'Certificate of Secondary Education (CSEE)' },
  { year: '2009 – 2015', school: 'Diamond Primary School', degree: 'Primary School Leaving Examination (PSLE)' },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <p className="section-label">About me</p>
      

      <div className={styles.grid}>
        {/* Left — bio */}
        <div>
          <h2 className="section-title">Analyst. Developer.<br />Audit trainee.</h2>
          <p className={styles.text}>
            I'm Godwin Innocent Tairo — a Computer Engineering and IT student at the
            University of Dar es Salaam working across three disciplines: data analysis,
            software development, and auditing. I turn raw data into decisions, build
            full-stack products, and apply compliance practices in financial services.
          </p>
          <p className={styles.text}>
            Through four practical training placements in FinTech, software development, and
            financial services, I've worked with Power BI, Excel, Python, MySQL, R and Stata
            on the data side — and React, TypeScript, Tailwind CSS, FastAPI and PostgreSQL on
            the development side. At iTrust Finance, I applied KYC verification, data
            validation and CRM-based auditing workflows.
          </p>
          <blockquote className={styles.quote}>
            "Good data tells a story. My job is to make that story impossible to ignore."
          </blockquote>
          <div className={styles.infoGrid}>
            {info.map(({ key, val }) => (
              <div key={key} className={styles.infoRow}>
                <span className={styles.infoKey}>{key}</span>
                <span className={styles.infoVal}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo + education */}
<div>
  <div className={styles.photoWrap}>
    <img src="/profile.jpeg" alt="Godwin Tairo" className={styles.photo} />
    <div className={styles.photoBadge}>
      <span className={styles.badgeDot} />
      Open to opportunities
    </div>
  </div>
  <p className="section-label" style={{ marginBottom: '1.5rem' }}>Education</p>
          {education.map(e => (
            <div key={e.year} className={styles.eduCard}>
              <p className={styles.eduYear}>{e.year}</p>
              <p className={styles.eduSchool}>{e.school}</p>
              <p className={styles.eduDegree}>{e.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
