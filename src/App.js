import { AppState, ScentProvider, useScentContext } from './context/ScentContext';
import SwipeInterface from './components/SwipeInterface';
import AnalyzingScreen from './components/AnalyzingScreen';
import ResultsScreen from './components/ResultsScreen';
import GenderSelectionScreen from './components/GenderSelectionScreen';
import LanguageSelector from './components/LanguageSelector';
import BackgroundVisual from './components/BackgroundVisual';
import { useTranslation } from 'react-i18next';
import './App.css';

const AppContent = () => {
  const { appState } = useScentContext();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <BackgroundVisual />
      <LanguageSelector />
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
