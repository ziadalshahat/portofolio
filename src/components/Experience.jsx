import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Experience
        </motion.h2>
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass experience-card"
        >
          <h3>Software Engineer Intern</h3>
          <p className="company">Tech Corp</p>
          <p className="duration">Summer 2023</p>
          <ul className="responsibilities">
            <li>Developed new features using React and Node.js.</li>
            <li>Collaborated with the design team to improve UI/UX.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export default Experience;
