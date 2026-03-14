import React from 'react';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background"></div>

            <div className="container hero-container">
                <div className="hero-content animate-slide-up">
                    <div className="hero-badge">
                        <span className="pulse"></span>
                        Available for new opportunities
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Ziad Alshahat</span><br />
                        Frontend React Developer.
                    </h1>

                    <p className="hero-tagline animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Building modern web applications with clean UI and powerful functionality.
                    </p>

                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Projects <FiArrowRight className="btn-icon" />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-socials animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <a href="https://github.com/ziadalshahat" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiGithub size={22} />
                        </a>
                        <a href="www.linkedin.com/in/ziadalshahat-01395a380" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiLinkedin size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
