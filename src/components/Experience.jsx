import styles from './Experience.module.css'

const experiences = [
  {
    role: 'CRM Intern — Data & Customer Analytics',
    duration: '5 weeks',
    org: 'iTrust Finance Ltd',
    tags: ['Excel', 'CRM', 'Data Quality', 'KYC', 'Compliance'],
    bullets: [
      'Managed, tracked and updated customer data using CRM systems and Microsoft Excel, ensuring accuracy and consistency across records.',
      'Performed KYC (Know Your Customer) verification — reviewing and validating customer information for compliance and data integrity.',
      'Identified and reported data quality issues, implementing improvements that enhanced overall data reliability.',
      'Supported compliance processes through proper documentation and systematic data validation workflows.',
    ],
  },
  {
    role: 'Practical Training III — Data Analysis & Visualisation',
    duration: '8 weeks',
    org: 'HEBET Technologies Limited',
    tags: ['Power BI', 'Excel', 'MySQL', 'R', 'Stata', 'Data Analysis'],
    bullets: [
      'Built data visualisation dashboards using Power BI and Excel, presenting findings to the team in clear, actionable formats.',
      'Performed in-depth data analysis and reporting using Microsoft Excel — including Pivot Tables, Charts and the Data Analysis ToolPak.',
      'Worked with MySQL for database querying; applied R and Stata for statistical data analysis tasks.',
      'Collected customer data via company software systems and maintained structured, clean datasets.',
      'Conducted software testing and debugging, documenting findings and reporting issues to developers.',
    ],
  },
  {
    role: 'Practical Training II — Frontend & UI/UX',
    duration: '8 weeks',
    org: 'HEBET Technologies Limited',
    tags: ['React', 'Figma', 'Tailwind CSS', 'QA', 'Testing'],
    bullets: [
      'Designed mobile and web application interfaces using Figma, applying UX principles to create user-friendly prototypes.',
      'Developed frontend components using React and Tailwind CSS.',
      'Participated in QA testing and documented test results with recommended improvements before deployment.',
      'Attended client meetings and contributed to User Requirements Document (URD) discussions and presentations.',
    ],
  },
  {
    role: 'Practical Training I — FinTech & Web Development',
    duration: '8 weeks',
    org: 'FINHUB @ CoICT — Sponsored by CRDB Bank',
    tags: ['FinTech', 'React', 'JavaScript', 'HTML/CSS', 'Figma'],
    bullets: [
      'Explored FinTech problem-solving and digital financial solution development in a CRDB Bank-sponsored programme.',
      'Gained hands-on experience building web applications using JavaScript, React, HTML and CSS.',
      'Designed user-friendly UI/UX interfaces for mobile and web applications using Figma and other prototyping tools.',
    ],
  },
]

export default function Experience() {
  return (
    <section className={styles.exp} id="experience">
      <p className="section-label">Field experience</p>
      <div className="section-divider" />
      <h2 className="section-title">Where I've applied my skills.</h2>

      <div className={styles.timeline}>
        {experiences.map((e, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.dot} />
            <div className={styles.body}>
              <div className={styles.header}>
                <span className={styles.role}>{e.role}</span>
                <span className={styles.duration}>{e.duration}</span>
              </div>
              <p className={styles.org}>{e.org}</p>
              <div className={styles.tags}>
                {e.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <ul className={styles.bullets}>
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
