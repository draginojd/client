import React, { useState } from 'react';
import './Projects.css';

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Full-stack e-commerce solution with microservices architecture, containerized deployment, and CI/CD pipeline. Features real-time inventory management and payment processing.',
    tags: ['DevOps', 'Frontend'],
    duration: '6 months',
    team: '5 developers',
    tech: ['React', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    code: '#',
    demo: '#',
    filter: ['devops', 'frontend', 'fullstack'],
  },
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Infrastructure as Code solution using Terraform and Ansible. Automated deployment of multi-tier applications across AWS with monitoring and alerting.',
    tags: ['DevOps'],
    duration: '4 months',
    team: '3 engineers',
    tech: ['Terraform', 'Ansible', 'AWS', 'CloudWatch', 'Python', 'Bash'],
    code: '#',
    demo: '#',
    filter: ['devops', 'fullstack'],
  },
  {
    title: 'Real-time Dashboard',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    description: 'React-based monitoring dashboard with real-time metrics visualization. Features WebSocket connections, interactive charts, and responsive design.',
    tags: ['Frontend'],
    duration: '3 months',
    team: '2 developers',
    tech: ['React', 'Javascript', 'Vite', 'Express', 'CSS', 'Node.js'],
    code: '#',
    demo: '#',
    filter: ['frontend'],
  },
  {
    title: 'Cinema Booking System',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    description: 'Cinema/movie booking website with seat selection, showtimes, payment integration, and an admin dashboard. Built as a full-stack app with a React frontend and Express/Node backend.',
    tags: ['Frontend', 'Full Stack'],
    tech: ['React', 'Javascript', 'Express', 'Node.js', 'MongoDB', "JSON"],
    code: '#',
    demo: '#',
    filter: ['frontend', 'fullstack'],
  },
];

const Projects = () => {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter(p => p.filter.includes(active));

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-desc">
        Explore my diverse portfolio spanning DevOps automation, cloud infrastructure, and modern frontend applications
      </p>
      <div className="projects-filters">
        {filters.map(f => (
          <button
            key={f.value}
            className={`projects-filter-btn${active === f.value ? ' active' : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="projects-list">
        {filtered.map((p, idx) => (
          <div className="project-card" key={p.title + idx}>
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-content">
              <div className="project-header">
                <div className="project-title">{p.title}</div>
                <div className="project-tags">
                  {p.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-desc">{p.description}</div>

              <div className="project-tech">
                {p.tech.map(tech => (
                  <span className="project-tech-item" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={p.code} className="project-action-btn code" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" style={{marginRight: '8px'}}>
                    <path fill="#a78bfa" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.42-3.88-1.42-.52-1.33-1.27-1.69-1.27-1.69-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.17 1.76 1.17 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.6.23 2.78.12 3.07.73.8 1.18 1.83 1.18 3.09 0 4.44-2.71 5.4-5.29 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                  </svg>
                  Code
                </a>
                <a href={p.demo} className="project-action-btn demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
