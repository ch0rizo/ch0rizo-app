// Navbar.tsx
import React from 'react';
import './Navbar.css';

interface NavbarProps {
  links: { icon: string; text?: string; href: string; key: string }[]; // Add text property
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.key}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon && (
                <i className={link.icon} style={{ color: '#ffffff' }}></i>
              )}{' '}
              {/* Render icon if it exists */}
              {link.text} {/* Render text if it exists */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
