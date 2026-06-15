import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/Home'
import MapScreen from './screens/MapScreen'
import ActivityScreen from './screens/ActivityScreen'
import FeedbackScreen from './screens/FeedbackScreen'
import ModuleCompletionScreen from './screens/ModuleCompletionScreen'
import AboutScreen from './screens/AboutScreen'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'
import { moduleData } from './data/moduleData'

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  // State Management with localStorage
  const [currentActivityIndex, setCurrentActivityIndex] = useState(() => {
    const saved = localStorage.getItem('nodu_currentActivityIndex');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('nodu_xp');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [moduleCompleted, setModuleCompleted] = useState(() => {
    const saved = localStorage.getItem('nodu_moduleCompleted');
    return saved === 'true';
  });

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('nodu_currentActivityIndex', currentActivityIndex.toString());
    localStorage.setItem('nodu_xp', xp.toString());
    localStorage.setItem('nodu_moduleCompleted', moduleCompleted.toString());
  }, [currentActivityIndex, xp, moduleCompleted]);

  const resetModule = () => {
    setCurrentActivityIndex(0);
    setXp(0);
    setModuleCompleted(false);
    setCurrentScreen('map');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home setScreen={setCurrentScreen} xp={xp} currentActivityIndex={currentActivityIndex} />;
      case 'map':
        return (
          <MapScreen 
            setScreen={setCurrentScreen} 
            currentActivityIndex={currentActivityIndex} 
            resetModule={resetModule}
            moduleData={moduleData}
          />
        );
      case 'activity':
        return (
          <ActivityScreen 
            setScreen={setCurrentScreen} 
            activity={moduleData.activities[currentActivityIndex]}
          />
        );
      case 'feedback':
        return (
          <FeedbackScreen 
            setScreen={setCurrentScreen} 
            activity={moduleData.activities[currentActivityIndex]}
            currentActivityIndex={currentActivityIndex}
            setCurrentActivityIndex={setCurrentActivityIndex}
            setXp={setXp}
            setModuleCompleted={setModuleCompleted}
            totalActivities={moduleData.activities.length}
          />
        );
      case 'completion':
        return <ModuleCompletionScreen setScreen={setCurrentScreen} xp={xp} moduleData={moduleData} resetModule={resetModule} />;
      case 'about':
        return <AboutScreen />;
      case 'profile':
        return <div className="p-6 text-center mt-10"><h2 className="text-2xl font-bold">Perfil em Breve</h2></div>;
      default:
        return <Home setScreen={setCurrentScreen} xp={xp} currentActivityIndex={currentActivityIndex} />;
    }
  }

  return (
    <div className="app-container">
      {/* Sidebar for Navigation (Desktop) */}
      {currentScreen !== 'activity' && currentScreen !== 'feedback' && currentScreen !== 'completion' && (
        <Sidebar currentScreen={currentScreen} setScreen={setCurrentScreen} />
      )}
      
      <div className="content-area container">
        {renderScreen()}
      </div>

      {/* Bottom Nav for Navigation (Mobile) */}
      {currentScreen !== 'activity' && currentScreen !== 'feedback' && currentScreen !== 'completion' && (
        <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />
      )}
    </div>
  )
}

export default App
