import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Testimonials
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass testimonial-card"
        >
          <p className="quote">"Outstanding work on the frontend project. Highly recommend!"</p>
          <p className="client-name">- Dexter Morgan, Product Manager</p>
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonials;
