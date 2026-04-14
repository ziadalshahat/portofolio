import React from 'react';
import { motion } from 'framer-motion';
import { MdEmojiEvents } from 'react-icons/md';
import '../styles/Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="section-title"
        >
          Achievements
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass achievement-card"
        >
          <div className="ach-icon"><MdEmojiEvents /></div>
          <h3>AWS Certified Developer</h3>
          <p>Achieved May 2023</p>
        </motion.div>
      </div>
    </section>
  );
};
export default Achievements;
