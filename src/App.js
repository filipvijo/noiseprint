import { useState, useEffect } from 'react';
import { AppState, ScentProvider, useScentContext } from './context/ScentContext';
import SwipeInterface from './components/SwipeInterface';
import AnalyzingScreen from './components/AnalyzingScreen';
import ResultsScreen from './components/ResultsScreen';
import GenderSelectionScreen from './components/GenderSelectionScreen';
import BackgroundVisual from './components/BackgroundVisual';
import IntroAnimation from './components/IntroAnimation';
import LanguageModal from './components/LanguageModal';
import ImagePreloader from './components/ImagePreloader';
import { useTranslation } from 'react-i18next';
import './App.css';

const AppContent = () => {
  const { appState } = useScentContext();
  const { t } = useTranslation();
  const [showIntro, setShowIntro] = useState(true);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    // Check if language has been selected before
    const languageSelected = localStorage.getItem('languageSelected');
    if (!languageSelected) {
      // Will show language modal after intro
      localStorage.setItem('showLanguageModal', 'true');
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    const shouldShowLanguageModal = localStorage.getItem('showLanguageModal');
    if (shouldShowLanguageModal) {
      setShowLanguageModal(true);
    }
  };

  const handleLanguageSelected = () => {
    setShowLanguageModal(false);
    localStorage.removeItem('showLanguageModal');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <BackgroundVisual />

      {/* Preload images */}
      <ImagePreloader />

      {/* Intro Animation */}
      <IntroAnimation onComplete={handleIntroComplete} />

      {/* Language Selection Modal */}
      <LanguageModal isOpen={showLanguageModal} onClose={handleLanguageSelected} />

      <div className="w-full max-w-6xl">
        {appState === AppState.Swiping && <SwipeInterface />}
        {appState === AppState.GenderSelection && <GenderSelectionScreen />}
        {appState === AppState.Analyzing && <AnalyzingScreen />}
        {appState === AppState.Results && <ResultsScreen />}
      </div>
    </div>
  );
};

function App() {
  return (
    <ScentProvider>
      <AppContent />
    </ScentProvider>
  )
}

export default App;
