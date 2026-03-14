import React from 'react';
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
            title: 'Share Your Place',
            description: 'A dedicated travel platform seamlessly connecting passionate travelers with hospitable local hosts.',
            tech: ['React', '.NET'],
            github: '#',
            demo: '#'
        },
        {
            title: 'ecomerce for cozmatics',
            description: 'E-commerce platform for cosmetics and beauty products.',
            tech: ['React', '.NET Core'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-slide-up">
                        Featured <span className="highlight">Projects</span>
                    </h2>
                    <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Some of the impactful solutions I have built recently.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="project-card glass animate-slide-up"
                            style={{ animationDelay: `${0.3 + idx * 0.2}s` }}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
