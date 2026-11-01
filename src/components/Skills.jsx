import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaJava,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaCode,
  FaDocker,
  FaBrain,
  FaFlask,
  FaGithub,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiPostman,
  SiPowerbi,
  SiTableau,
  SiMicrosoftexcel,
  SiPandas,
  SiNumpy,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiStreamlit,
  SiVercel,
  SiGithubactions,
  SiScikitlearn,
  SiKeras,
  SiSupabase,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'C++', icon: <FaCode />, color: '#00599c' },
        { name: 'SQL', icon: <FaDatabase />, color: '#336791' },
      ],
    },
    {
      title: 'AI / GenAI',
      skills: [
        { name: 'RAG', icon: <FaBrain />, color: '#8b5cf6' },
        { name: 'LangChain', icon: <FaCode />, color: '#1c7a3e' },
        { name: 'LLM Integration', icon: <FaBrain />, color: '#6366f1' },
        { name: 'Prompt Engineering', icon: <FaCode />, color: '#ec4899' },
        { name: 'ChromaDB', icon: <FaDatabase />, color: '#ff6b35' },
        { name: 'HuggingFace', icon: <FaBrain />, color: '#ffd21e' },
        { name: 'NLP', icon: <FaCode />, color: '#10b981' },
        { name: 'FinBERT', icon: <FaBrain />, color: '#3b82f6' },
        { name: 'Gemini API', icon: <FaBrain />, color: '#4285f4' },
        { name: 'Groq LLM', icon: <FaBrain />, color: '#ff4f00' },
      ],
    },
    {
      title: 'Machine Learning / Deep Learning',
      skills: [
        { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#f89820' },
        { name: 'LSTM', icon: <FaBrain />, color: '#6366f1' },
        { name: 'GRU', icon: <FaBrain />, color: '#8b5cf6' },
        { name: 'Time-Series Forecasting', icon: <FaCode />, color: '#10b981' },
        { name: 'Sentiment Analysis', icon: <FaCode />, color: '#ec4899' },
        { name: 'Anomaly Detection', icon: <FaCode />, color: '#f59e0b' },
        { name: 'Explainable AI', icon: <FaBrain />, color: '#06b6d4' },
        { name: 'Feature Engineering', icon: <FaCode />, color: '#84cc16' },
        { name: 'Predictive Modeling', icon: <FaBrain />, color: '#a855f7' },
      ],
    },
    {
      title: 'MLOps & DevOps',
      skills: [
        { name: 'MLOps', icon: <FaCode />, color: '#6366f1' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
        { name: 'Docker Compose', icon: <FaDocker />, color: '#0db7ed' },
        { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088ff' },
        { name: 'pytest', icon: <FaCode />, color: '#009fe3' },
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
        { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
      ],
    },
    {
      title: 'Backend & Web',
      skills: [
        { name: 'Flask', icon: <FaFlask />, color: '#ffffff' },
        { name: 'Streamlit', icon: <SiStreamlit />, color: '#ff4b4b' },
        { name: 'Node.js', icon: <FaNode />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        { name: 'REST APIs', icon: <FaCode />, color: '#ff6b6b' },
        { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6' },
        { name: 'Supabase', icon: <SiSupabase />, color: '#3ecf8e' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
      ],
    },
    {
      title: 'Data Analytics & BI',
      skills: [
        { name: 'Power BI', icon: <SiPowerbi />, color: '#f2c811' },
        { name: 'DAX', icon: <FaCode />, color: '#f2c811' },
        { name: 'Power Query', icon: <FaCode />, color: '#217346' },
        { name: 'Excel', icon: <SiMicrosoftexcel />, color: '#217346' },
        { name: 'EDA', icon: <FaCode />, color: '#ec4899' },
        { name: 'Data Cleaning', icon: <FaCode />, color: '#10b981' },
        { name: 'KPI Analysis', icon: <FaCode />, color: '#6366f1' },
        { name: 'Tableau', icon: <SiTableau />, color: '#e97627' },
      ],
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
        { name: 'Matplotlib', icon: <FaCode />, color: '#11557c' },
        { name: 'Seaborn', icon: <FaCode />, color: '#4c72b0' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169e1' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
        { name: 'Supabase (PG)', icon: <SiSupabase />, color: '#3ecf8e' },
        { name: 'ChromaDB', icon: <FaDatabase />, color: '#ff6b35' },
      ],
    },
  ]

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Tech Stack
        </motion.h2>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{
                      scale: 1.15,
                      y: -15,
                      rotateY: 10,
                      rotateX: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
