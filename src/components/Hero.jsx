import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const Hero = () => {
  const resumeUrl = '/resume.pdf'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants} 
            className="hero-icon"
          >
            <HiCode />
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="gradient-text">Hiya Porwal</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Data Science &amp; AI/ML Enthusiast
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            Integrated M.Tech Computational Data Science student at VIT Bhopal. Data Analyst intern at SVS Datalytics, Hindustan Copper Limited &amp; ParshWebCraft — passionate about building intelligent, data-driven solutions across AI/ML, GenAI, MLOps, and full-stack development.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="hero-buttons"
          >
            <motion.a
              href={resumeUrl}
              download="hiya_Resume.pdf"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hero-social"
          >
            <motion.a
              href="https://github.com/Hiyaporwal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hiya-porwal/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:hiyaporwal89@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
