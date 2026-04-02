import styles from './Projects.module.css'

const projects = [
  
  {
    tag: 'Python · Data Analysis',
    name: 'AI-powered-phishing-email-detector',
    desc: 'AI-powered phishing email detector using Python, scikit-learn, and Streamlit.',
    stack: ['Python', 'scikit-learn', 'streamlit'],
    link: 'https://github.com/godwin105/AI-powered-phishing-email-detector',
  },
  {
    tag: 'React · Frontend',
    name: 'This Portfolio Website',
    desc: 'Designed and built this personal portfolio using React and Vite — showcasing data projects, skills and experience. Fully responsive, dark-themed, and deployed on Vercel.',
    stack: ['React', 'Vite', 'CSS Modules'],
    link: 'https://godwintairo.vercel.app',
  },
  {
    tag: 'SQL · MySQL',
    name: 'FinTech Database Queries',
    desc: 'Designed and ran complex SQL queries on a financial transactions database to surface insights on payment trends, fraud patterns, and customer segment analysis.',
    stack: ['MySQL', 'SQL', 'Excel'],
    link: '#',
  },
  {
    tag: 'Excel · Statistical Analysis',
    name: 'Student Performance Study',
    desc: 'Applied Excel\'s Data Analysis ToolPak and R to examine the relationship between study hours and exam performance across 200+ students. Presented findings as a structured report.',
    stack: ['Excel', 'R', 'Statistical Analysis'],
    link: '#',
  },
  {
    tag: 'Figma · UI/UX',
    name: 'Data Analytics Dashboard UI',
    desc: 'Designed a high-fidelity Figma prototype of a web-based analytics dashboard for a small business — focusing on clean data presentation and intuitive navigation.',
    stack: ['Figma', 'UI/UX Design', 'Prototyping'],
    link: '#',
  },
  {
    tag: 'Power BI Dashboard',
    name: 'Sales Performance Tracker',
    desc: 'An interactive Power BI dashboard analysing monthly sales trends, regional performance, and KPIs for a retail business. Includes drill-through reports and dynamic slicers.',
    stack: ['Power BI', 'Excel', 'DAX'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <p className="section-label">Projects</p>
      <div className="section-divider" />
      <h2 className="section-title">Things I've built & analysed. And still working on more.</h2>
      

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.cardTag}>{p.tag}</p>
            <h3 className={styles.cardName}>{p.name}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.stack}>
              {p.stack.map(s => <span key={s} className={styles.pill}>{s}</span>)}
            </div>
            <a href={p.link} className={styles.cardLink}>
              View project <span className={styles.arrow}>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
