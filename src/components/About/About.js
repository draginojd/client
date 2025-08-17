import React from 'react';
import './About.css';


const skills = ['React', 'TypeScript', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'];

const features = [
  {
    title: 'Infrastructure',
    description: 'Expert in cloud infrastructure, containerization, and CI/CD pipelines',
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="12" fill="#23243a" />
        <g stroke="#A78BFA" strokeWidth="2" strokeLinecap="round">
          <rect x="10" y="10" width="12" height="4" rx="2" />
          <rect x="10" y="18" width="12" height="4" rx="2" />
          <circle cx="13" cy="12" r="1" fill="#A78BFA" />
          <circle cx="13" cy="20" r="1" fill="#A78BFA" />
        </g>
      </svg>
    )
  },
  {
    title: 'Development',
    description: 'Full-stack development with modern frameworks and best practices',
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="12" fill="#23243a" />
        <g stroke="#A78BFA" strokeWidth="2" strokeLinecap="round">
          <polyline points="13,12 11,16 13,20" fill="none" />
          <polyline points="19,12 21,16 19,20" fill="none" />
        </g>
      </svg>
    )
  },
  {
    title: 'DevOps',
    description: 'Automation, monitoring, and scalable deployment strategies',
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="12" fill="#23243a" />
        <g stroke="#A78BFA" strokeWidth="2" strokeLinecap="round">
          <path d="M12 20c0-2.21 1.79-4 4-4s4 1.79 4 4" />
          <circle cx="16" cy="16" r="6" />
        </g>
      </svg>
    )
  }
];


const About = () => (
  <section className="about-section" id="about">
    <h2 className="about-title">About Me</h2>
    <div className="about-content">
      <div className="about-left">
        <p>
          I'm a passionate DevOps Engineer and Frontend Developer with expertise in building robust, scalable infrastructure and crafting exceptional user experiences. With a deep understanding of both development and operations, I bridge the gap between code and deployment.
        </p>
        <p>
          My approach combines modern development practices with reliable infrastructure solutions, ensuring applications are not only beautiful but also performant and maintainable at scale.
        </p>
        <div className="about-skills">
          {skills.map(skill => (
            <span className="about-skill" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
      <div className="about-right">
        {features.map(feature => (
          <div className="about-feature" key={feature.title}>
            <div className="about-feature-icon">{feature.icon}</div>
            <div>
              <div className="about-feature-title">{feature.title}</div>
              <div className="about-feature-desc">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
