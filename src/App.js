import { AppState, ScentProvider, useScentContext } from './context/ScentContext';
import SwipeInterface from './components/SwipeInterface';
import AnalyzingScreen from './components/AnalyzingScreen';
import ResultsScreen from './components/ResultsScreen';
import GenderSelectionScreen from './components/GenderSelectionScreen';
import './App.css';

const AppContent = () => {
  const { appState } = useScentContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
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
