import styles from './Projects.module.css'

const projects = [
  {
    tag: 'React · Blockchain · Web3',
    name: 'Bloblytics',
    desc: 'A decentralized data analytics and file storage web application built on the Aptos blockchain using Shelby Protocol for on-chain file persistence.',
    stack: ['React 18', 'Vite', 'TanStack Query', 'Recharts', 'Aptos', 'Shelby Protocol', 'PWA'],
    link: 'https://bloblytics.vercel.app/',
    date: 'Apr 2026 – Present',
  },
  {
    tag: 'React · Blockchain · Python . Web3',
    name: 'Shelby Proof-of-Data',
    desc: 'A decentralized tool that allows users to prove a file existed at a specific time by storing it on Shelby\'s decentralized storage network and recording its cryptographic hash and timestamp on the Aptos blockchain.',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Aptos', 'Shelby SDK', 'FastAPI', 'PostgreSQL', 'Vercel'],
    link: 'https://shelby-proof-of-data.vercel.app/',
    date: 'May 2026 – Present',
  },
  {
    tag: 'React · TypeScript · DeFi',
    name: 'Concrete Vault Radar',
    desc: 'A non-wallet connection web app that helps the community discover, compare and monitor Concrete Earn vaults. Community intelligence for Earn V2 vaults.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'wagmi v2', 'viem v2', 'TanStack Query', 'Zustand'],
    link: 'https://concrete-vault-radar.vercel.app/',
    date: 'Mar 2026 – May 2026',
  },
  {
    tag: 'Python · Flask · React',
    name: 'Sales Data Analysis System',
    desc: 'A web-based system that helps small and local businesses in Tanzania record stock, sales and expenses and visualise their performance through interactive analytics replacing manual bookkeeping with simple, accessible digital workflows.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'React', 'Tailwind CSS', 'Chart.js', 'Clickpesa API'],
    link: 'https://sales-data-analysis-system-5e6bi.ondigitalocean.app/',
    date: 'Dec 2025 – Present',
  },
  {
    tag: 'Python · Machine Learning',
    name: 'AI-Powered Phishing Email Detector',
    desc: 'Machine learning-based system that detects phishing emails using NLP and logistic regression via scikit-learn, specifically tailored for government use cases. Built with Streamlit.',
    stack: ['Python', 'scikit-learn', 'Streamlit', 'NLP'],
    link: 'https://ai-powered-phishing-email-detector.streamlit.app/',
    date: 'May 2025 – Jun 2025',
  },
  {
    tag: 'React · Vite · CSS Modules',
    name: 'This Portfolio Website',
    desc: 'My personal portfolio showcasing data projects, skills and experience. Fully responsive, dark-themed, and deployed on Vercel. Built with React + Vite and CSS Modules.',
    stack: ['React', 'Vite', 'CSS Modules'],
    link: 'https://godwintairo.vercel.app',
    date: 'Mar 2026',
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
            {p.link !== '#' ? (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                View project <span className={styles.arrow}>→</span>
              </a>
            ) : (
              <span className={styles.cardLinkDisabled}>Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
