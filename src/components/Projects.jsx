import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'MedScope',
            description: 'Medical web platform with authentication and robust API integration for seamless healthcare experiences.',
            tech: ['React', 'REST API', ".Net Core"],
            github: 'https://github.com/ziadalshahat/medscopeV3.git',
            demo: 'https://medscope-v3.vercel.app/'
        },
        {
            title: 'Popcorn',
            description: 'A movie streaming platform with a modern interface and seamless user experience.',
            tech: ['React', 'REST API', "Node.js"],
            github: 'https://github.com/ziadalshahat/POPCORN',
            demo: 'https://popcorn-gamma-bice.vercel.app/'
        },
        {
            title: 'Nimbus',
            description: 'Weather application with a modern interface and seamless user experience.',
            tech: ['React', 'REST API', "Node.js"],
            github: 'https://github.com/ziadalshahat/NIMBUS',
            demo: 'https://nimbus-nine-neon.vercel.app/'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        Featured <span className="highlight">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-subtitle"
                    >
                        Some of the impactful solutions I have built recently.
                    </motion.p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            className="project-card glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
                        >
                            <div className="project-image-placeholder">
                                <span className="project-watermark">{project.title.substring(0, 2).toUpperCase()}</span>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="project-link" aria-label="GitHub Repository">
                                            <FiGithub size={20} />
                                        </a>
                                        <a href={project.demo} className="project-link" aria-label="Live Demo">
                                            <FiExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
