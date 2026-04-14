import React from 'react';
import { motion } from 'framer-motion';
import { MdWeb, MdApi, MdDesignServices, MdOutlineSpeed } from 'react-icons/md';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive and performant websites.',
      icon: <MdWeb />
    },
    {
      id: 2,
      title: 'Backend (Node.js APIs)',
      description: 'Developing fast and secure Node.js APIs for modern web applications.',
      icon: <MdApi />
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Designing user-friendly and aesthetically pleasing interfaces.',
      icon: <MdDesignServices />
    },
    {
      id: 4,
      title: 'Performance Optimization',
      description: 'Improving application speed, responsiveness, and overall user experience.',
      icon: <MdOutlineSpeed />
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Services
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
