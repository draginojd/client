import React from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'Frontend Development',
    items: [
      'React / Next.js',
      'TypeScript / JavaScript',
      'Tailwind CSS',
      'Vue.js',
      'HTML5 / CSS3',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & DevOps',
    items: [
      'Node.js / Express',
      'Python / Django',
      'Docker / Kubernetes',
      'AWS / Azure / GCP',
      'CI/CD Pipelines',
      'Infrastructure as Code',
    ],
  },
  {
    title: 'Database & Tools',
    items: [
      'PostgreSQL / MySQL',
      'MongoDB',
      'Redis',
      'Git / GitHub Actions',
      'Terraform',
      'Monitoring & Logging',
    ],
  },
];

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2 className="skills-title">Skills &amp; Technologies</h2>
    <div className="skills-cards">
      {skillsData.map((col) => (
        <div className="skills-card" key={col.title}>
          <div className="skills-card-title">{col.title}</div>
          <ul className="skills-list">
            {col.items.map((item) => (
              <li className="skills-list-item" key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="skills-note">
      Always learning and staying up-to-date with the latest technologies and industry best practices to deliver cutting-edge solutions.
    </div>
  </section>
);

export default Skills;
