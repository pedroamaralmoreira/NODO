import React from 'react';

const Logo = ({ size = 40, color = 'var(--color-primary)' }) => {
  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: size * 0.6, color: 'var(--color-text-main)', letterSpacing: '-0.05em' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Node connections (Architecture of Decision) */}
        <path d="M25 50L50 25L75 50L50 75L25 50Z" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 25V75" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 50H75" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Nodes */}
        <circle cx="50" cy="25" r="10" fill="var(--color-decision)" />
        <circle cx="75" cy="50" r="10" fill="var(--color-success)" />
        <circle cx="50" cy="75" r="10" fill="var(--color-pattern)" />
        <circle cx="25" cy="50" r="10" fill={color} />
        <circle cx="50" cy="50" r="8" fill="white" stroke={color} strokeWidth="4"/>
      </svg>
      NODO
    </div>
  );
};

export default Logo;
