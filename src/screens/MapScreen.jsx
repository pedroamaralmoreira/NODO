import React from 'react';

const MapScreen = ({ setScreen, currentActivityIndex, moduleData, resetModule }) => {
  const activities = moduleData.activities;
  const total = activities.length;
  const progressPercent = Math.round((currentActivityIndex / total) * 100);

  // Hardcoded node positions for visual trail (5 nodes total)
  const layout = [
    { x: 50 },
    { x: 20 },
    { x: 80 },
    { x: 30 },
    { x: 50 },
  ];

  return (
    <div className="animate-fade-in flex-col" style={{ minHeight: '100%', paddingBottom: '40px' }}>
      <div className="p-6 sticky top-0 bg-surface flex justify-between items-center" style={{ zIndex: 10, borderBottom: '2px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
        <h2 className="text-xl font-bold">{moduleData.name}</h2>
        <div className="font-bold text-primary">{progressPercent}%</div>
      </div>

      <div className="flex-1 relative mt-8" style={{ height: '700px' }}>
        {/* Connection lines (SVG background) */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          {/* Node 0 to 1 */}
          <path d="M 50% 100px C 50% 160px, 20% 160px, 20% 220px" fill="none" stroke={currentActivityIndex > 0 ? "var(--color-primary)" : "var(--color-border)"} strokeWidth="8" strokeLinecap="round" strokeDasharray={currentActivityIndex > 0 ? "none" : "12, 12"} />
          
          {/* Node 1 to 2 */}
          <path d="M 20% 220px C 20% 280px, 80% 280px, 80% 340px" fill="none" stroke={currentActivityIndex > 1 ? "var(--color-primary)" : "var(--color-border)"} strokeWidth="8" strokeLinecap="round" strokeDasharray={currentActivityIndex > 1 ? "none" : "12, 12"} />

          {/* Node 2 to 3 */}
          <path d="M 80% 340px C 80% 400px, 30% 400px, 30% 460px" fill="none" stroke={currentActivityIndex > 2 ? "var(--color-primary)" : "var(--color-border)"} strokeWidth="8" strokeLinecap="round" strokeDasharray={currentActivityIndex > 2 ? "none" : "12, 12"} />

          {/* Node 3 to 4 */}
          <path d="M 30% 460px C 30% 520px, 50% 520px, 50% 580px" fill="none" stroke={currentActivityIndex > 3 ? "var(--color-primary)" : "var(--color-border)"} strokeWidth="8" strokeLinecap="round" strokeDasharray={currentActivityIndex > 3 ? "none" : "12, 12"} />
        </svg>

        {/* Nodes */}
        {activities.map((act, i) => {
          const isCompleted = i < currentActivityIndex;
          const isCurrent = i === currentActivityIndex;
          const isLocked = i > currentActivityIndex;

          const color = isCompleted ? 'var(--color-success)' : isCurrent ? 'var(--color-primary)' : 'var(--color-border)';
          
          return (
            <div 
              key={act.id}
              style={{
                position: 'absolute',
                top: `${(i * 120) + 100}px`,
                left: `${layout[i].x}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                cursor: isCurrent ? 'pointer' : 'default'
              }}
              onClick={() => {
                if (isCurrent) {
                  setScreen('activity');
                }
              }}
            >
              {isCurrent && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'white',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    color: color,
                    border: `2px solid ${color}`,
                    whiteSpace: 'nowrap',
                    animation: 'bounce 2s infinite'
                  }}
                >
                  Iniciar
                </div>
              )}
              
              <div 
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: isLocked ? 'var(--color-surface)' : color,
                  border: isLocked ? `4px solid ${color}` : `none`,
                  boxShadow: isCurrent ? `0 8px 0 var(--color-primary-dark)` : isCompleted ? `0 8px 0 var(--color-success-dark)` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s'
                }}
                className={isCurrent ? 'animate-pulse' : ''}
              >
                <div>
                  {isCompleted && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                  {isCurrent && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                  {isLocked && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-border)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center mt-12" style={{ paddingBottom: '100px', position: 'relative', zIndex: 50 }}>
        <button 
          className="btn btn-outline"
          onClick={() => {
            console.log("Reiniciar clicado!");
            resetModule();
          }}
          style={{ width: 'auto', color: 'var(--color-decision)', borderColor: 'var(--color-decision)', backgroundColor: 'var(--color-surface)' }}
        >
          Reiniciar Módulo
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -5px); }
        }
      `}</style>
    </div>
  );
};

export default MapScreen;
