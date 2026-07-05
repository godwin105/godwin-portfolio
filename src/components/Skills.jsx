import styles from './Skills.module.css'

const groups = [
  {
    title: 'Data Analysis & Statistics',
    chips: ['Python', 'NumPy', 'R', 'Stata', 'Statistical Analysis', 'Data Cleaning'],
    core: true,
  },
  {
    title: 'Data Visualisation',
    chips: ['Power BI', 'Excel Charts & Dashboards', 'Reporting', 'Storytelling with Data'],
    core: true,
  },
  {
    title: 'Databases & Querying',
    chips: ['SQL', 'MySQL', 'Database Management', 'Data Entry'],
    core: true,
  },
  {
    title: 'Spreadsheets',
    chips: ['Excel', 'Pivot Tables', 'Data Analysis ToolPak', 'Google Sheets'],
    core: true,
  },
  {
    title: 'Design & Development',
    chips: ['Figma (UI/UX)', 'React', 'TypeScript', 'HTML / CSS', 'Tailwind CSS', 'QA & Testing', 'Bug Reporting'],
    core: true,
  },
  {
    title: 'Auditing & Compliance',
    chips: ['KYC Verification', 'Data Validation', 'CRM Systems', 'Compliance Documentation', 'Data Quality Management'],
    core: true,
  },
  {
    title: 'Soft Skills',
    chips: ['Communication', 'Problem Solving', 'Teamwork', 'Time Management', 'Leadership'],
    core: true,
  },
]

const proficiency = [
  { label: 'Microsoft Excel', level: 'Expert', pct: 92 },
  { label: 'Power BI', level: 'Advanced', pct: 85 },
  { label: 'SQL / MySQL', level: 'Proficient', pct: 78 },
  { label: 'Python (Pandas, NumPy)', level: 'Proficient', pct: 75 },
  { label: 'Figma', level: 'Advanced', pct: 82 },
  { label: 'R', level: 'Familiar', pct: 60 },
  { label: 'Stata', level: 'Familiar', pct: 55 },
]

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <p className="section-label">Technical skills</p>
      
      <h2 className="section-title">My toolkit — data, dev & audit.</h2>

      <div className={styles.layout}>
        {/* Skill chips */}
        <div className={styles.chipCols}>
          {groups.map(g => (
            <div key={g.title} className={styles.group}>
              <p className={styles.groupTitle}>{g.title}</p>
              <div className={styles.chips}>
                {g.chips.map(c => (
                  <span key={c} className={`${styles.chip} ${g.core ? styles.core : ''}`}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className={styles.profCol}>
          <p className={styles.groupTitle}>Tool proficiency</p>
          <div className={styles.bars}>
            {proficiency.map(p => (
              <div key={p.label} className={styles.barRow}>
                <div className={styles.barMeta}>
                  <span className={styles.barLabel}>{p.label}</span>
                  <span className={styles.barLevel}>{p.level}</span>
                </div>
                <div className={styles.track}>
                  <div className={styles.fill} style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
