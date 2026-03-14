import React from 'react';
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
                { name: 'GitHub', icon: <FaGithub color="#FAFAFA" /> },
                { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
                { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-slide-up">
                        My <span className="highlight">Skills</span>
                    </h2>
                    <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        The main technologies and tools I use to build seamless applications.
                    </p>
                </div>

                <div className="skills-container">
                    {skills.map((skillGroup, idx) => (
                        <div
                            key={skillGroup.category}
                            className="skill-category animate-slide-up"
                            style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
