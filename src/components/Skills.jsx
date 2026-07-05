import styles from './Skills.module.css'

const groups = [
  {
    title: 'Data Analysis & Statistics',
    chips: ['Python', 'NumPy', 'R', 'Stata', 'Statistical Analysis', 'Data Cleaning'],
  },
  {
    title: 'Data Visualisation',
    chips: ['Power BI', 'Excel Charts & Dashboards', 'Reporting', 'Storytelling with Data'],
  },
  {
    title: 'Databases & Querying',
    chips: ['SQL', 'MySQL', 'Database Management', 'Data Entry'],
  },
  {
    title: 'Spreadsheets',
    chips: ['Excel', 'Pivot Tables', 'Data Analysis ToolPak', 'Google Sheets'],
  },
  {
    title: 'Design & Development',
    chips: ['Figma (UI/UX)', 'React', 'TypeScript', 'HTML / CSS', 'Tailwind CSS', 'QA & Testing', 'Bug Reporting'],
  },
  {
    title: 'Auditing & Compliance',
    chips: ['KYC Verification', 'Data Validation', 'CRM Systems', 'Compliance Documentation', 'Data Quality Management'],
  },
  {
    title: 'Soft Skills',
    chips: ['Communication', 'Problem Solving', 'Teamwork', 'Time Management', 'Leadership'],
    full: true,
  },
]

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <p className="section-label">Technical skills</p>
      <h2 className="section-title">My toolkit — data, dev &amp; audit.</h2>

      <div className={styles.grid}>
        {groups.map(g => (
          <div key={g.title} className={`${styles.group} ${g.full ? styles.full : ''}`}>
            <p className={styles.groupTitle}>{g.title}</p>
            <div className={styles.chips}>
              {g.chips.map(c => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
