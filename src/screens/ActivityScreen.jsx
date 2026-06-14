import React, { useState } from 'react';

const ActivityScreen = ({ setScreen, activity }) => {
  const [selected, setSelected] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [currentErrorOption, setCurrentErrorOption] = useState(null);

  const handleVerify = () => {
    if (!selected) return;
    
    const selectedOption = activity.options.find(opt => opt.id === selected);
    if (selectedOption.isCorrect) {
      setScreen('feedback');
    } else {
      setErrorCount(prev => prev + 1);
      setCurrentErrorOption(selectedOption);
    }
  };

  const handleTryAgain = () => {
    setCurrentErrorOption(null);
    setSelected(null);
  };

  return (
    <div className="flex-col animate-slide-up" style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{ filter: currentErrorOption ? 'blur(4px)' : 'none', transition: 'filter 0.3s' }} className="flex-col h-full">
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <button onClick={() => setScreen('map')} className="text-muted p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div style={{ flex: 1, margin: '0 16px', height: '12px', backgroundColor: 'var(--color-border)', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', backgroundColor: 'var(--color-success)', borderRadius: '6px' }}></div>
          </div>
        </div>

        <div className="flex-1 p-6 flex-col">
          <h2 className="text-2xl font-bold text-main mb-6">{activity.title}</h2>
          
          <div className="mb-6">
            <div className="text-xs font-bold text-muted mb-2 uppercase tracking-wider">Cenário</div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              <p className="text-base text-main font-medium" style={{ whiteSpace: 'pre-line' }}>
                {activity.scenario}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-xs font-bold text-decision mb-2 uppercase tracking-wider">Problema</div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-decision-light)', color: 'white', border: '1px solid var(--color-decision-dark)', boxShadow: '0 4px 0 var(--color-decision-dark)' }}>
              <p className="text-lg font-bold">
                {activity.problem}
              </p>
            </div>
          </div>

          <div className="flex-col gap-3 mt-auto mb-8">
            {activity.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`p-4 rounded-xl text-left transition-all ${selected === opt.id ? 'active' : ''}`}
                style={{
                  border: selected === opt.id ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                  backgroundColor: selected === opt.id ? 'var(--color-primary-light)' : 'white',
                  color: selected === opt.id ? 'white' : 'var(--color-text-main)',
                  boxShadow: selected === opt.id ? '0 4px 0 var(--color-primary-dark)' : '0 4px 0 var(--color-border)',
                  transform: selected === opt.id ? 'translateY(2px)' : 'none',
                  fontWeight: '600',
                  fontSize: '15px'
                }}
              >
                <span style={{ fontWeight: 'bold', marginRight: '8px', opacity: 0.8 }}>{opt.id})</span>
                {opt.text}
              </button>
            ))}
          </div>

          <button 
            className={`btn ${selected ? 'btn-success' : 'btn-outline'}`}
            style={{ 
              opacity: selected ? 1 : 0.5, 
              pointerEvents: selected ? 'auto' : 'none',
              padding: '16px',
              fontSize: '18px'
            }}
            onClick={handleVerify}
          >
            Verificar Resposta
          </button>
        </div>
      </div>

      {/* Error Feedback Bottom Sheet */}
      {currentErrorOption && (
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#FEF2F2', // Light red
            borderTopLeftRadius: 'var(--radius-2xl)',
            borderTopRightRadius: 'var(--radius-2xl)',
            padding: '32px 24px',
            boxShadow: '0 -10px 40px rgba(220, 38, 38, 0.3)',
            maxHeight: '90vh',
            overflowY: 'auto',
            zIndex: 100
          }}
          className="animate-slide-up"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center" style={{ color: '#DC2626', boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold" style={{ color: '#991B1B', textShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>Resposta incorreta</h2>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl mb-4" style={{ border: '2px solid #FECACA' }}>
            <p className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: '#DC2626' }}>Por que essa opção não funciona?</p>
            <p className="text-base font-semibold text-main">{currentErrorOption.feedbackIncorrect}</p>
          </div>

          <div className="bg-white p-4 rounded-xl mb-4" style={{ backgroundColor: '#FEE2E2' }}>
            <div className="flex items-center gap-2 mb-2" style={{ color: '#991B1B' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <p className="font-bold text-sm uppercase tracking-wider">A Consequência Visual</p>
            </div>
            <p className="text-base font-medium" style={{ color: '#7F1D1D' }}>{currentErrorOption.visualConsequence}</p>
          </div>

          {errorCount >= 3 ? (
            <div className="bg-white p-4 rounded-xl mb-8" style={{ border: '2px solid var(--color-decision)' }}>
              <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--color-decision-dark)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <p className="font-bold text-sm uppercase tracking-wider">Explicação Guiada</p>
              </div>
              <p className="text-base font-medium text-main">{activity.guidedExplanation}</p>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-xl mb-8" style={{ border: '1px solid var(--color-border)' }}>
              <p className="font-bold text-sm uppercase tracking-wider mb-1 text-muted">Dica de Raciocínio</p>
              <p className="text-base font-medium text-main">{activity.hint}</p>
            </div>
          )}

          <button 
            className="btn" 
            style={{ 
              backgroundColor: '#DC2626', 
              color: 'white', 
              boxShadow: '0 4px 0 #991B1B',
              padding: '16px',
              fontSize: '18px',
              width: '100%'
            }}
            onClick={handleTryAgain}
          >
            Tentar Novamente
          </button>
        </div>
      )}

    </div>
  );
};

export default ActivityScreen;
