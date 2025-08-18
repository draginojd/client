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
    tech: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Tailwind CSS', 'Node.js'],
    code: '#',
    demo: '#',
    filter: ['frontend'],
  },
  {
    title: 'Cinema Booking System',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    description: 'Cinema/movie booking website with seat selection, showtimes, payment integration, and an admin dashboard. Built as a full-stack app with a React frontend and Express/Node backend.',
    tags: ['Frontend', 'Full Stack'],
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
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
                <a href={p.code} className="project-action-btn code" target="_blank" rel="noopener noreferrer">Code</a>
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
