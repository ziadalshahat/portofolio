import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background"></div>

            <div className="container hero-container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hero-badge"
                    >
                        <span className="pulse"></span>
                        Available for new opportunities
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hero-title"
                    >
                        Hi, I'm <span className="highlight">Ziad Alshahat</span><br />
                        Frontend React Developer.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="hero-tagline"
                    >
                        Building modern web applications with clean UI and powerful functionality.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="hero-actions"
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects <FiArrowRight className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="hero-socials"
                    >
                        <a href="https://github.com/ziadalshahat" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiGithub size={22} />
                        </a>
                        <a href="www.linkedin.com/in/ziadalshahat-01395a380" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiLinkedin size={22} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
