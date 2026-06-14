import React from 'react';
import Logo from '../components/Logo';

const Home = ({ setScreen, xp, currentActivityIndex }) => {
  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <Logo size={32} />
        <div className="flex gap-2 items-center">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-decision)', fontWeight: 'bold' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            12
          </div>
          <div className="w-10 h-10 rounded-full bg-border"></div>
        </div>
      </div>

      <div className="mb-8 p-6" style={{ backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-2xl)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <h2 className="text-2xl mb-2">Pronto para aprender?</h2>
        <p className="text-sm font-medium mb-6 opacity-90">Continue sua jornada na Arquitetura da Decisão.</p>
        <button 
          className="btn btn-primary" 
          style={{ backgroundColor: 'white', color: 'var(--color-primary-dark)', boxShadow: '0 4px 0 var(--color-border)' }}
          onClick={() => setScreen('map')}
        >
          {currentActivityIndex > 0 ? 'Continuar Módulo' : 'Iniciar Módulo'}
        </button>
        
        {/* Decorator */}
        <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.2 }}>
          <Logo size={150} color="white" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-4 text-main font-bold">Suas Estatísticas</h3>
        <div className="flex gap-4">
          <div className="flex-1 p-4" style={{ backgroundColor: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
            <div className="text-sm text-muted font-bold mb-1">DECISÕES</div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-decision)" stroke="none">
                <path d="M17.5 19.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zM6.5 19.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
              </svg>
              <span className="text-2xl font-extrabold text-main">{currentActivityIndex}</span>
            </div>
          </div>
          <div className="flex-1 p-4" style={{ backgroundColor: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
            <div className="text-sm text-muted font-bold mb-1">XP TOTAL</div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className="text-2xl font-extrabold text-main">{xp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
