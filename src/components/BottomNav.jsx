import React from 'react';
import './BottomNav.css';

const BottomNav = ({ currentScreen, setScreen }) => {
  return (
    <div className="bottom-nav">
      <button 
        className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`}
        onClick={() => setScreen('home')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Início</span>
      </button>

      <button 
        className={`nav-item ${currentScreen === 'map' ? 'active' : ''}`}
        onClick={() => setScreen('map')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
        <span>Mapa</span>
      </button>

      <button 
        className={`nav-item ${currentScreen === 'profile' ? 'active' : ''}`}
        onClick={() => setScreen('profile')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Perfil</span>
      </button>

      <button 
        className={`nav-item ${currentScreen === 'about' ? 'active' : ''}`}
        onClick={() => setScreen('about')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        <span>Sobre</span>
      </button>
    </div>
  );
};

export default BottomNav;
