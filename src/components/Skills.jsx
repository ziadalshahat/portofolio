import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
    FaGithub, FaFigma
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPostman } from 'react-icons/si';
import { BiLogoGit } from 'react-icons/bi';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend', items: [
                { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
                { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
                { name: 'JavaScript', icon: <IoLogoJavascript color="#F7DF1E" /> },
                { name: 'React', icon: <FaReact color="#61DAFB" /> }
            ]
        },
        {
            category: 'Backend', items: [
                { name: 'Node.js (Learning)', icon: <FaNodeJs color="#339933" /> }
            ]
        },
        {
            category: 'Tools', items: [
                { name: 'Git', icon: <BiLogoGit color="#F05032" /> },
                { name: 'GitHub', icon: <FaGithub className='GitHub' /> },
                { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
                { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        My <span className="highlight">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="section-subtitle"
                    >
                        The main technologies and tools I use to build seamless applications.
                    </motion.p>
                </div>

                <div className="skills-container">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                        >
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <div className="skills-grid">
                                {skillGroup.items.map((skill) => (
                                    <div key={skill.name} className="skill-card glass">
                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
