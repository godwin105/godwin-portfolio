// Shared content — used by several sections (and the hero dashboard).

export const skillGroups = [
  {
    title: 'Data Analysis & Statistics',
    short: 'Analysis',
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
    chips: ['Python', 'NumPy', 'R', 'Stata', 'Statistical Analysis', 'Data Cleaning'],
  },
  {
    title: 'Data Visualisation',
    short: 'Viz',
    icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    chips: ['Power BI', 'Excel Charts & Dashboards', 'Reporting', 'Storytelling with Data'],
  },
  {
    title: 'Databases & Querying',
    short: 'SQL',
    icon: 'M12 3c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3zM3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6',
    chips: ['SQL', 'MySQL', 'Database Management', 'Data Entry'],
  },
  {
    title: 'Spreadsheets',
    short: 'Sheets',
    icon: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18',
    chips: ['Excel', 'Pivot Tables', 'Data Analysis ToolPak', 'Google Sheets'],
  },
  {
    title: 'Design & Development',
    short: 'Dev',
    icon: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
    chips: ['Figma (UI/UX)', 'React', 'TypeScript', 'HTML / CSS', 'Tailwind CSS', 'QA & Testing', 'Bug Reporting'],
  },
  {
    title: 'Auditing & Compliance',
    short: 'Audit',
    icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4',
    chips: ['KYC Verification', 'Data Validation', 'CRM Systems', 'Compliance Documentation', 'Data Quality Management'],
  },
  {
    title: 'IT Systems & Operations',
    short: 'IT Ops',
    icon: 'M2 4h20v12H2zM8 20h8M12 16v4',
    chips: ['Data Migration', 'Credible', 'AKILI AGS', 'Account Administration', 'Microsoft', 'RingCentral', 'UniFi Networking', 'IT Troubleshooting'],
  },
]

export const softSkills = ['Communication', 'Problem Solving', 'Teamwork', 'Time Management', 'Leadership']

export const experiences = [
  {
    role: 'Data Operations Officer',
    type: 'job',
    start: '2026-08', end: null, // null = current role
    duration: 'Aug 2026 – Present',
    org: 'New Living HealthCare Services',
    track: 'Ops',
    tags: ['Credible', 'AKILI AGS', 'Data Migration', 'Microsoft', 'RingCentral', 'UniFi', 'Excel', 'Word'],
    bullets: [
      'Extract encounter data from Credible, clean and correct it, and import it into the AKILI AGS system so records match real-time data.',
      'Built the onboarding portal for Community Support Workers (CSWs).',
      'Create and manage employee accounts on Microsoft, RingCentral and Credible.',
      'Set up and manage the company network on UniFi.',
      'Troubleshoot IT issues affecting employees.',
      'Prepare operational documentation in Excel and Word.',
    ],
  },
  {
    role: 'CRM Intern',
    type: 'internship',
    start: '2025-11', end: '2025-12',
    duration: 'Nov 2025 – Dec 2025',
    org: 'iTrust Finance Ltd',
    track: 'Audit',
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
    type: 'internship',
    start: '2025-07', end: '2025-09',
    duration: 'Jul 2025 – Sep 2025',
    org: 'Hebet Technologies Limited',
    track: 'Data',
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
    type: 'internship',
    start: '2024-07', end: '2024-09',
    duration: 'Jul 2024 – Sep 2024',
    org: 'Hebet Technologies Limited',
    track: 'Dev',
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
    type: 'internship',
    start: '2023-07', end: '2023-09',
    duration: 'Jul 2023 – Sep 2023',
    org: 'CoICT FINHUB — UDICTI',
    orgFull: 'College of Information and Communication Technology (CoICT) FINHUB — UDICTI',
    track: 'Dev',
    tags: ['FinTech', 'React', 'JavaScript', 'HTML/CSS', 'Figma'],
    bullets: [
      'Explored FinTech problem-solving techniques, with a focus on innovation and digital financial solutions.',
      'Gained hands-on experience in developing web-based applications using JavaScript, React, HTML and CSS.',
      'Learned to design user-friendly UI/UX for mobile and web applications using Figma and other prototyping tools.',
    ],
  },
]

const now = new Date()
const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

// "YYYY-MM" end of a role; current roles end this month.
export const endOf = e => e.end ?? thisMonth

// Inclusive month count for a "YYYY-MM" range.
export const monthsBetween = (start, end) => {
  const [sy, sm] = start.split('-').map(Number)
  const [ey, em] = (end ?? thisMonth).split('-').map(Number)
  return (ey - sy) * 12 + (em - sm) + 1
}

export const currentRole = experiences.find(e => e.end === null)
export const totalMonths = experiences.reduce((s, e) => s + monthsBetween(e.start, e.end), 0)
export const internshipCount = experiences.filter(e => e.type === 'internship').length
export const orgCount = new Set(experiences.map(e => e.org)).size

// `art` picks the generated cover illustration for each card (see ProjectArt.jsx).
export const projects = [
  {
    name: 'Sales Data Analysis System',
    tag: 'Python · Flask · React',
    categories: ['data', 'web'],
    art: 'bars',
    desc: 'Helps small and local businesses in Tanzania record stock, sales and expenses and see their performance in interactive analytics. It replaces manual bookkeeping with simple digital workflows.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'React', 'Tailwind CSS', 'Chart.js', 'Clickpesa API'],
    link: 'https://sales-data-analysis-system-5e6bi.ondigitalocean.app/',
    date: 'Dec 2025 – Present',
  },
  {
    name: 'Bloblytics',
    tag: 'React · Blockchain · Web3',
    categories: ['data', 'web3'],
    art: 'chain',
    desc: 'A decentralized data analytics and file storage web application built on the Aptos blockchain, using Shelby Protocol for on-chain file persistence.',
    stack: ['React 18', 'Vite', 'TanStack Query', 'Recharts', 'Aptos', 'Shelby Protocol', 'PWA'],
    link: 'https://bloblytics.vercel.app/',
    date: 'Apr 2026 – Present',
  },
  {
    name: 'Shelby Proof-of-Data',
    tag: 'React · Python · Web3',
    categories: ['web3', 'web'],
    art: 'hash',
    desc: "Lets users prove a file existed at a specific time. It stores the file on Shelby's decentralized storage network and records its cryptographic hash and timestamp on the Aptos blockchain.",
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Aptos', 'Shelby SDK', 'FastAPI', 'PostgreSQL', 'Vercel'],
    link: 'https://shelby-proof-of-data.vercel.app/',
    date: 'May 2026 – Present',
  },
  {
    name: 'Concrete Vault Radar',
    tag: 'React · TypeScript · DeFi',
    categories: ['data', 'web3'],
    art: 'radar',
    desc: 'A web app, with no wallet connection needed, that helps the community discover, compare and monitor Concrete Earn V2 vaults.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'wagmi v2', 'viem v2', 'TanStack Query', 'Zustand'],
    link: 'https://concrete-vault-radar.vercel.app/',
    date: 'Mar 2026 – May 2026',
  },
  {
    name: 'AI-Powered Phishing Email Detector',
    tag: 'Python · Machine Learning',
    categories: ['data'],
    art: 'scatter',
    desc: 'A machine learning system that detects phishing emails using NLP and logistic regression (scikit-learn), tailored for government use cases. Built with Streamlit.',
    stack: ['Python', 'scikit-learn', 'Streamlit', 'NLP'],
    link: 'https://ai-powered-phishing-email-detector.streamlit.app/',
    date: 'May 2025 – Jun 2025',
  },
  {
    name: 'This Portfolio',
    tag: 'React · Vite · CSS Modules',
    categories: ['web'],
    art: 'window',
    desc: 'The site you are on. Responsive, accessible, light and dark themes, and charts drawn from my own career data.',
    stack: ['React', 'Vite', 'CSS Modules', 'SVG'],
    link: 'https://godwintairo.vercel.app',
    date: 'Mar 2026 – Present',
  },
]

export const education = [
  { year: '2022 – 2026', school: 'University of Dar es Salaam', degree: 'BSc Computer Engineering & Information Technology', note: 'Dar es Salaam', latest: true },
  { year: '2020 – 2022', school: 'Ndanda Boys High School', degree: 'Advanced Certificate of Secondary Education (ACSEE)', note: 'Mtwara' },
  { year: '2016 – 2019', school: 'Dar es Salaam Secondary School', degree: 'Certificate of Secondary Education (CSEE)', note: 'Dar es Salaam' },
  { year: '2009 – 2015', school: 'Diamond Primary School', degree: 'Primary School Leaving Examination (PSLE)', note: 'Dar es Salaam' },
]

export const interests = [
  'Learning new data skills', 'Networking with professionals', 'Football & basketball',
  'Community service', 'Watching movies', 'Building side projects',
]

// Scrolling band under the hero.
export const marqueeTools = [
  'Power BI', 'Python', 'SQL', 'Excel', 'React', 'TypeScript', 'MySQL', 'PostgreSQL', 'FastAPI',
  'R', 'Stata', 'Figma', 'Tailwind CSS', 'Credible', 'AKILI AGS', 'UniFi', 'scikit-learn',
]
