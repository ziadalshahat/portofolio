import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-logo">
                    ZA<span>.</span>
                </div>

                <p className="footer-copyright">
                    &copy; {currentYear} Ziad Alshahat. Built with React.
                </p>

                <div className="footer-socials">
                    <a href="https://github.com/ziadalshahat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ziad-alshahat-01395a380" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FiLinkedin size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FiTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
