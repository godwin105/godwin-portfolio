import styles from './About.module.css'

const info = [
  { key: 'Location', val: 'Dar es Salaam, Tanzania' },
  { key: 'Email', val: 'godwintairo0@gmail.com' },
  { key: 'Phone', val: '+255 694 007 399' },
  { key: 'Languages', val: 'English & Swahili' },
  { key: 'Focus areas', val: 'Data Analysis, Auditing, Visualisation, Reporting' },
  { key: 'Availability', val: 'Open to full-time & internship roles' },
]

const education = [
  { year: '2022 – Present', school: 'University of Dar es Salaam', degree: 'BSc Computer Engineering & Information Technology' },
  { year: '2020 – 2022', school: 'Ndanda Boys High School', degree: 'Advanced Certificate of Secondary Education (ACSEE)' },
  { year: '2015 – 2019', school: 'Dar es Salaam Secondary School', degree: 'Certificate of Secondary Education (CSEE)' },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <p>About me</p>
      

      <div className={styles.grid}>
        {/* Left — bio */}
        <div>
          <h2 className="section-title">Data analyst with an<br />engineering mindset.</h2>
          <p className={styles.text}>
            I'm Godwin Innocent Tairo, a Computer Engineering and IT student at the
            University of Dar es Salaam. My focus is data analysis — collecting, cleaning,
            visualising and interpreting data to drive better decisions.
          </p>
          <p className={styles.text}>
            Through four practical training placements in FinTech, software development, and
            financial services, I've worked with real business data across Power BI, Excel,
            MySQL, Python, R and Stata. I also bring a solid foundation in UI/UX, which helps
            me present insights in polished, visual formats.
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
