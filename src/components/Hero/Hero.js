import React from 'react';
import './Hero.css';


const scrollToProjects = (e) => {
  e.preventDefault();
  const target = document.getElementById('projects');
  if (!target) return;
  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const duration = 400;
  let start;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    window.scrollTo(0, startY + (endY - startY) * progress);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
};

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="hero-bg" />
    <div className="hero-content">
      <h1 className="hero-title">DevOps Engineer &amp; <br />Frontend Developer</h1>
      <p className="hero-subtitle">
        Building scalable infrastructure and beautiful user experiences with modern technologies
      </p>
      <div className="hero-actions">
        <a href="#projects" className="hero-btn" onClick={scrollToProjects}>View My Work <span className="arrow">↓</span></a>
        <a href="https://github.com/yourusername" className="hero-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#a78bfa" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
        </a>
        <a href="https://linkedin.com/in/yourusername" className="hero-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#a78bfa" strokeWidth="1.7">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#a78bfa" fill="none"/>
            <rect x="6" y="9.5" width="3" height="7.5" rx="1.2" stroke="#a78bfa" fill="none"/>
            <circle cx="7.5" cy="7.5" r="1.5" stroke="#a78bfa" fill="none"/>
            <rect x="11" y="9.5" width="3" height="7.5" rx="1.2" stroke="#a78bfa" fill="none"/>
            <path d="M14 13c0-1.5 2.5-2 2.5 0v4" stroke="#a78bfa" fill="none"/>
          </svg>
        </a>
        <a href="mailto:your@email.com" className="hero-icon" aria-label="Email">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#a78bfa" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
