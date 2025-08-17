import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="hero-bg" />
    <div className="hero-content">
      <h1 className="hero-title">DevOps Engineer &amp; <br />Frontend Developer</h1>
      <p className="hero-subtitle">
        Building scalable infrastructure and beautiful user experiences with modern technologies
      </p>
      <div className="hero-actions">
        <a href="#projects" className="hero-btn">View My Work <span className="arrow">↓</span></a>
        <a href="https://github.com/yourusername" className="hero-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa fa-github" /></a>
        <a href="https://linkedin.com/in/yourusername" className="hero-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin" /></a>
        <a href="mailto:your@email.com" className="hero-icon" aria-label="Email"><i className="fa fa-envelope" /></a>
      </div>
    </div>
  </section>
);

export default Hero;
