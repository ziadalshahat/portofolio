import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import meImage from '../assets/me.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    About <span className="highlight">Me</span>
                </motion.h2>

                <div className="about-content">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="about-text-wrapper"
                    >
                        <p className="about-text">
                            I am an IT student at Egyptian E-Learning University passionate about building modern web applications.
                            My main focus is frontend development with React.
                        </p>
                        <p className="about-text">
                            I enjoy creating clean, responsive interfaces and continuously improving my skills to deliver
                            high-quality user experiences that look great and work flawlessly.
                        </p>

                        <div className="stats-container">
                            <div className="stat-card glass">
                                <h3 className="stat-number">3+</h3>
                                <p className="stat-label">Years Learning</p>
                            </div>
                            <div className="stat-card glass">
                                <h3 className="stat-number">10+</h3>
                                <p className="stat-label">Projects Built</p>
                            </div>
                            <div className="stat-card glass">
                                <h3 className="stat-number">100%</h3>
                                <p className="stat-label">Dedication</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="about-image-wrapper"
                    >
                        <div className="image-placeholder glass">
                            <img src={meImage} alt="My portrait" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
