import React, { useState } from 'react';

const FeedbackScreen = ({ setScreen, activity, currentActivityIndex, setCurrentActivityIndex, setXp, setModuleCompleted, totalActivities }) => {
  const [showCode, setShowCode] = useState(false);

  const handleContinue = () => {
    setXp(prev => prev + 10);
    
    if (currentActivityIndex + 1 < totalActivities) {
      setCurrentActivityIndex(prev => prev + 1);
      setScreen('map');
    } else {
      setCurrentActivityIndex(totalActivities);
      setModuleCompleted(true);
      setScreen('completion');
    }
  };

  return (
    <div className="flex-col animate-slide-up" style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)', position: 'relative' }}>
      
      {/* Background content (mock of activity screen behind) */}
      <div className="p-6 opacity-30 pointer-events-none" style={{ filter: 'blur(2px)' }}>
        <div className="w-full h-32 bg-border rounded-xl mb-4" style={{ backgroundColor: 'var(--color-border)' }}></div>
        <div className="w-full h-16 bg-border rounded-xl mb-4" style={{ backgroundColor: 'var(--color-border)' }}></div>
        <div className="w-full h-16 bg-border rounded-xl mb-4" style={{ backgroundColor: 'var(--color-border)' }}></div>
        <div className="w-full h-16 bg-success rounded-xl mb-4" style={{ backgroundColor: 'var(--color-success)' }}></div>
      </div>

      {/* Feedback Bottom Sheet */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-success-light)',
          borderTopLeftRadius: 'var(--radius-2xl)',
          borderTopRightRadius: 'var(--radius-2xl)',
          padding: '32px 24px',
          boxShadow: '0 -10px 40px rgba(16, 185, 129, 0.3)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        className="animate-slide-up"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center" style={{ color: 'var(--color-success)', boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Excelente!</h2>
            <p className="text-white font-medium opacity-90">+10 XP</p>
          </div>
        </div>

        {/* 1. Feedback inicial */}
        <div className="bg-white p-4 rounded-xl mb-4" style={{ color: 'var(--color-success-dark)', border: '2px solid rgba(16, 185, 129, 0.2)' }}>
          <p className="text-base font-bold">{activity.feedbackCorrect}</p>
        </div>

        {/* 2. Padrão Identificado */}
        <div className="bg-white p-4 rounded-xl mb-4" style={{ color: 'white', backgroundColor: 'var(--color-pattern-dark)' }}>
          <div className="flex items-center gap-2 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <p className="font-semibold text-sm opacity-90 uppercase tracking-wider">Padrão Identificado</p>
          </div>
          <p className="text-lg font-bold mt-1">{activity.concept}</p>
        </div>

        {/* 3. Por que funciona */}
        <div className="bg-white p-4 rounded-xl mb-4" style={{ color: 'var(--color-primary-dark)', border: '1px solid var(--color-border)' }}>
          <div className="flex items-center gap-2 mb-1 text-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p className="font-bold text-sm uppercase tracking-wider">Por que essa estratégia funciona?</p>
          </div>
          <p className="text-base mt-2 font-medium">{activity.whyItWorks}</p>
        </div>

        {/* 4. Cartão Expansível (Python) */}
        <div className="mb-8">
          <button 
            onClick={() => setShowCode(!showCode)}
            className="w-full flex items-center justify-between p-4 rounded-xl transition-all"
            style={{ backgroundColor: 'var(--color-text-main)', color: 'white' }}
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="font-bold">Como um programador faria em Python</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showCode ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {showCode && (
            <div className="p-5 rounded-b-xl animate-fade-in flex-col gap-4" style={{ backgroundColor: '#1E293B', marginTop: '-8px', paddingTop: '20px' }}>
              
              {/* Código */}
              <pre style={{ margin: 0, overflowX: 'auto', color: '#E2E8F0', fontSize: '13px', lineHeight: '1.5', padding: '12px', backgroundColor: '#0F172A', borderRadius: '8px' }}>
                <code>{activity.pythonCode}</code>
              </pre>

              {/* Relação */}
              <div style={{ borderTop: '1px solid #334155', paddingTop: '12px' }}>
                <p className="text-xs font-bold text-muted uppercase tracking-wider mb-1" style={{ color: '#94A3B8' }}>A relação</p>
                <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: '1.5' }}>
                  {activity.relation}
                </p>
              </div>

            </div>
          )}
        </div>

        <button 
          className="btn" 
          style={{ 
            backgroundColor: 'white', 
            color: 'var(--color-success-dark)', 
            boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
            padding: '16px',
            fontSize: '18px',
            width: '100%'
          }}
          onClick={handleContinue}
        >
          Continuar
        </button>
      </div>

    </div>
  );
};

export default FeedbackScreen;
