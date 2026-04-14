import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass education-card"
        >
          <h3>EELU</h3>
          <p className="degree">Bachelor of Science in Computer Science</p>
          <p className="duration">2022 - 2026</p>
        </motion.div>
      </div>
    </section>
  );
};
export default Education;
