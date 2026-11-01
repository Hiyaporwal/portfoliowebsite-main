import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const education = [
    {
      icon: <FaGraduationCap />,
      title: 'Int Mtech in computational Data Science',
      institution: 'VIT BHOPAL UNIVERSITY, SEHORE',
      year: '2028',
    },
    
  ]

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Aspiring Data Scientist | AI/ML Enthusiast |  ',
      description: 'Passionate about leveraging data and technology to drive insights and create impactful solutions',
    },
    {
      icon: <FaRocket />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices in software development',
    },
  ]

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-card">
              <h3>Background</h3>
              <p>
               I'm a passionate and driven individual with a strong background in computer science and engineering.
               I have a keen interest in Artificial Intelligence, Data Science, and web development, and I enjoy building innovative solutions that solve real-world problems through technology and data-driven insights.

              </p>
            </div>

            <div className="about-card">
              <h3>Interests</h3>
              <p>
              I am passionate about Artificial Intelligence, Data Science, research, and building innovative technology solutions that create real-world impact.
              I believe in continuous learning and am always exploring new technologies and best practicesand keep myself updated
              </p>
            </div>

            <div className="about-card">
              <h3>Currently Learning</h3>
              <p>
              I am currently learning Artificial Intelligence, Data Science, AI automation, and advanced problem-solving through real-world projects and research.

              </p>
            </div>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="education-section" variants={itemVariants}>
            <h3 className="education-title">Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="education-icon">{edu.icon}</div>
                  <div className="education-content">
                    <h4>{edu.title}</h4>
                    <p>{edu.institution}</p>
                    <span className="education-year">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
