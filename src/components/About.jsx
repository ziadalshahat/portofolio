import React from 'react';
import '../styles/About.css';
import meImage from '../assets/me.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title animate-slide-up">
                    About <span className="highlight">Me</span>
                </h2>

                <div className="about-content">
                    <div className="about-text-wrapper animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                    </div>

                    <div className="about-image-wrapper animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="image-placeholder glass">
                            <img src={meImage} alt="My portrait" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
