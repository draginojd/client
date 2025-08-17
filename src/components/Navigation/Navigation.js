import React from 'react';
import './Navigation.css';

const Navigation = ({ links }) => (
  <nav className="navigation">
    <ul>
      {links.map((link, idx) => (
        <li key={idx}><a href={link.href}>{link.label}</a></li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
