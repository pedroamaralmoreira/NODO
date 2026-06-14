import React from 'react';

const ModuleCompletionScreen = ({ setScreen, xp, moduleData, resetModule }) => {
  return (
    <div className="flex-col animate-fade-in p-6" style={{ minHeight: '100%', backgroundColor: 'var(--color-surface)' }}>
      
      <div className="text-center mb-8 mt-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success-light text-success-dark mb-4" style={{ backgroundColor: 'var(--color-success-light)', color: 'var(--color-success-dark)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-main mb-2">Módulo Concluído!</h2>
        <p className="text-muted text-lg">{moduleData.name}</p>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="flex-1 p-4 text-center rounded-xl" style={{ backgroundColor: 'var(--color-bg)', border: '2px solid var(--color-border)' }}>
          <div className="text-xs text-muted font-bold mb-1">XP GANHO</div>
          <div className="text-2xl font-extrabold text-primary">+{moduleData.activities.length * 10}</div>
        </div>
        <div className="flex-1 p-4 text-center rounded-xl" style={{ backgroundColor: 'var(--color-bg)', border: '2px solid var(--color-border)' }}>
          <div className="text-xs text-muted font-bold mb-1">DECISÕES</div>
          <div className="text-2xl font-extrabold text-decision">{moduleData.activities.length}</div>
        </div>
      </div>

      <div className="mb-8 flex-1">
        <h3 className="text-lg font-bold text-main mb-4">Conceitos Aprendidos</h3>
        <div className="flex-col gap-3">
          {moduleData.activities.map((act, idx) => (
            <div key={idx} className="p-3 rounded-lg flex items-start gap-3" style={{ backgroundColor: 'var(--color-bg)' }}>
              <div className="mt-1" style={{ color: 'var(--color-success)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-sm font-semibold text-main">{act.concept}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex-col gap-4">
        <button 
          className="btn btn-primary"
          style={{ width: '100%', padding: '16px', fontSize: '18px' }}
          onClick={() => setScreen('home')}
        >
          Voltar ao Início
        </button>
        <button 
          className="btn btn-outline"
          style={{ width: '100%', padding: '16px', fontSize: '18px', color: 'var(--color-text-muted)' }}
          onClick={resetModule}
        >
          Refazer Módulo
        </button>
      </div>
    </div>
  );
};

export default ModuleCompletionScreen;
