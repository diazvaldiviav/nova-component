/**
 * @fileoverview NovaLink Component
 * A customizable navigation list item component
 * 
 * Features:
 * - Custom styling with hover effects
 * - Active state support
 * - Optional icon support
 * - Customizable through props
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Styles/NovaStyles.css';

/**
 * NovaLink Component
 * Returns a navigation list with a single item
 * 
 * @param {Object} props
 * @param {string} props.href - URL for the link
 * @param {string} props.label - Text to display
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {boolean} props.isActive - Whether the link is active
 * @param {string} props.className - Additional CSS classes
 * @param {function} props.onClick - Click handler
 */
const NovaLink = ({
  href,
  label,
  icon,
  isActive = false,
  className = '',
  onClick,
}) => {
  return (
    <ul className="nova-link-list">
      <li className="nova-link-item">
        <a
          href={href}
          className={`nova-link ${isActive ? 'active' : ''} ${className}`}
          onClick={onClick}
        >
          {icon && <span className="nova-link-icon">{icon}</span>}
          <span className="nova-link-label">{label}</span>
        </a>
      </li>
    </ul>
  );
};

NovaLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default NovaLink;