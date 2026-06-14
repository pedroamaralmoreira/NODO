import React from 'react';
import './AboutScreen.css';

const AboutScreen = () => {
  return (
    <div className="about-container">
      
      {/* Cabeçalho Hero */}
      <div className="about-hero">
        <h1>Sobre o NODO</h1>
        <p>
          O NODO é um <strong>Objeto de Aprendizagem</strong> acadêmico focado no desenvolvimento embrionário do pensamento computacional, estruturando a lógica antes da sintaxe formal das linguagens de programação.
        </p>
      </div>

      {/* Grid de Seções Principais */}
      <div className="about-grid">
        {/* Problema Educacional */}
        <div className="about-card card-problem">
          <div className="card-problem-title">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <h2>O Problema</h2>
          </div>
          <p>
            Tradicionalmente, muitos estudantes são apresentados diretamente à <strong>sintaxe de programação</strong> sem antes compreenderem a fundação teórica e os padrões de raciocínio necessários para decompor e resolver problemas lógicos complexos.
          </p>
        </div>

        {/* Público Alvo */}
        <div className="about-card card-audience">
          <h2>Público-alvo</h2>
          <ul className="audience-list">
            {['Alunos do Ensino Médio', 'Estudantes Técnicos', 'Universitários Iniciantes'].map((item, idx) => (
              <li key={idx} className="audience-item">
                <div className="audience-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className="audience-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Objetivo & Competências */}
      <div className="about-section">
        <h2 className="section-title">Competências Desenvolvidas</h2>
        <div className="competencies-grid">
          {[
            'Pensamento Computacional',
            'Abstração',
            'Decomposição de Problemas',
            'Reconhecimento de Padrões',
            'Formulação de Algoritmos',
            'Tomada de Decisão',
            'Busca de Informações'
          ].map((comp, idx) => (
            <div key={idx} className="competency-tag">
              <span className="competency-check">✓</span> {comp}
            </div>
          ))}
        </div>
      </div>

      {/* Metodologia */}
      <div className="about-section methodology-card">
        <h2 className="methodology-title">Metodologia NODO</h2>
        
        <div className="methodology-flow">
          {[
            { title: 'Problema', color: 'var(--color-decision)', desc: 'Cenário inicial' },
            { title: 'Reflexão', color: '#64748B', desc: 'Análise mental' },
            { title: 'Tentativa', color: '#64748B', desc: 'Ação do usuário' },
            { title: 'Feedback', color: 'var(--color-success)', desc: 'Validando falhas' },
            { title: 'Conceito', color: 'var(--color-primary)', desc: 'Padrão teórico' },
            { title: 'Python', color: '#0F172A', desc: 'Sintaxe final' }
          ].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="methodology-step">
                <div 
                  className="step-box"
                  style={{ backgroundColor: step.color }}
                >
                  {idx + 1}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              
              {idx < arr.length - 1 && (
                <div className="step-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Processo de Construção (Timeline) */}
      <div className="about-section">
        <h2 className="section-title">Processo de Construção</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {[
            { phase: 'Ideação', text: 'Concepção da Arquitetura da Decisão.' },
            { phase: 'Definição do Conceito', text: 'Estabelecimento do aprendizado lógico antes da sintaxe.' },
            { phase: 'Identidade Visual', text: 'Criação do design minimalista, geométrico e paleta vibrante.' },
            { phase: 'Construção dos Módulos', text: 'Elaboração da Trilha de Decisões e árvore de nós.' },
            { phase: 'Implementação de Feedbacks', text: 'Sistema reativo de correção com justificativas ricas e direcionadas.' },
            { phase: 'Integração em Python', text: 'Tradução do raciocínio mental humano para código real em Python.' }
          ].map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div 
                className="timeline-dot"
                style={{ border: `4px solid ${idx === 5 ? 'var(--color-success)' : 'var(--color-primary)'}` }}
              ></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.phase}</h3>
                <p className="timeline-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutScreen;
