import React from 'react';
import './Navigation.css';


const Navigation = ({ links }) => (
  <nav className="navigation">
    <div className="nav-content">
      <div className="nav-logo">
        <a href="#home">
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" height="40" />
        </a>
      </div>
      <ul className="nav-links">
        {links.map((link, idx) => (
          <li key={idx}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navigation;
