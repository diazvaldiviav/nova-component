/**
 * @fileoverview NovaNavHeaderMinimal Component
 * A responsive navigation header component that accepts children for content
 * 
 * Features:
 * - Responsive design (mobile & desktop)
 * - Flexible content through children
 * - Hamburger menu for mobile
 * - Customizable styles through props
 * 
 * @component
 * @example
 * // Basic usage
 * <NovaNavHeaderMinimal>
 *   <div className="logo">
 *     <img src="/logo.png" alt="Logo" />
 *   </div>
 *   <nav>
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *     <a href="/contact">Contact</a>
 *   </nav>
 * </NovaNavHeaderMinimal>
 */

import React, { useState } from 'react';
import "./Styles/NovaStyles.css";

/**
 * NovaNavHeaderMinimal Component
 * A flexible navigation header that renders children content
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {React.ReactNode} props.children - Header content
 */
const NovaNavHeaderMinimal = ({ 
  className = '',
  style = {},
  children
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${className}`} style={style}>
    <div className="header-container">
      {/* Desktop menu */}
      <div className="header-content desktop-menu">
        {children}
      </div>
      
      {/* Hamburger button for mobile */}
      <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile menu wrapper */}
      <div className={`nav-menu mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  </header>
  );
};

export default NovaNavHeaderMinimal;