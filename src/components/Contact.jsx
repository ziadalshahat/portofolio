import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitMessage('Please fill all fields');
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitMessage(''), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="contact-content"
                >
                    <div className="contact-info">
                        <h2 className="section-title">
                            Let's <span className="highlight">Connect</span>
                        </h2>
                        <p className="contact-description">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:ziadalshahat9@gmail.com" className="contact-item">
                                <div className="contact-icon glass"><FiMail /></div>
                                <span>CLICK HERE TO EMAIL ME</span>
                            </a>
                            <a href="https://github.com/ziadalshahat" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon glass"><FiGithub /></div>
                                <span>CLICK ME TO OPEN GITHUB</span>
                            </a>
                            <a href="https://www.linkedin.com/in/ziad-alshahat-01395a380" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon glass"><FiLinkedin /></div>
                                <span>CLILCK ME TO OPEN LINKEDIN</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form glass" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="5"
                                className="form-input"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend className="btn-icon" />
                        </button>

                        {submitMessage && (
                            <p className={`submit-status ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
