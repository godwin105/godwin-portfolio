import styles from './Experience.module.css'

const experiences = [
  {
    role: 'CRM Intern',
    duration: 'Nov 2025 – Dec 2025',
    org: 'iTrust Finance Ltd',
    tags: ['Excel', 'CRM', 'Data Quality', 'KYC', 'Compliance'],
    bullets: [
      'Performed KYC (Know Your Customer) verification, reviewing and validating customer information.',
      'Used CRM systems and Microsoft Excel to manage, track and update customer data.',
      'Assisted in customer onboarding processes, ensuring accurate data collection and entry.',
      'Checked and maintained data accuracy and consistency in customer records.',
      'Identified and reported data issues, improving overall data quality and reliability.',
      'Supported compliance processes by ensuring proper documentation and data validation.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    duration: 'Jul 2025 – Sep 2025',
    org: 'Hebet Technologies Limited',
    tags: ['Power BI', 'Excel', 'MySQL', 'R', 'Stata', 'Data Analysis'],
    bullets: [
      'Performed data entry, updating and data analysis using Microsoft Excel for database management.',
      'Gained hands-on experience with data visualisation and analysis tools including Excel, Power BI, MySQL, R and Stata.',
      'Collected data from customers using company software systems.',
      'Conducted software testing, debugging and reported identified issues to the development team.',
      'Participated in meetings and assisted in training customers on software usage.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    duration: 'Jul 2024 – Sep 2024',
    org: 'Hebet Technologies Limited',
    tags: ['React', 'Figma', 'Tailwind CSS', 'QA', 'Testing'],
    bullets: [
      'Designed mobile and web-based application interfaces (UI/UX) using Figma and other prototyping tools.',
      'Participated in testing and quality assurance of mobile and web applications before deployment, documented test results and recommended improvements.',
      'Developed frontend components using React and Tailwind CSS.',
      'Attended official client-company meetings, engaging in discussions and presentations of User Requirements Documents (URDs).',
    ],
  },
  {
    role: 'Software Engineering Intern',
    duration: 'Jul 2023 – Sep 2023',
    org: 'College of Information and Communication Technology (CoICT) FINHUB — UDICTI',
    tags: ['FinTech', 'React', 'JavaScript', 'HTML/CSS', 'Figma'],
    bullets: [
      'Explored FinTech problem-solving techniques, with a focus on innovation and digital financial solutions.',
      'Gained hands-on experience in developing web-based applications using JavaScript, React, HTML and CSS.',
      'Learned to design user-friendly UI/UX for mobile and web applications using Figma and other prototyping tools.',
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
