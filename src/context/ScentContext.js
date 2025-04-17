import { createContext, useContext, useState } from 'react';
import { scents, ScentFamily } from '../data/scents';
import { getPerfumeRecommendations, generateScentProfileDescription } from '../services/api';

export const AppState = {
  Swiping: 'swiping',
  GenderSelection: 'genderSelection',
  Analyzing: 'analyzing',
  Results: 'results',
};

export const GenderType = {
  Men: 'Men',
  Women: 'Women',
  Unisex: 'Unisex',
};

const ScentContext = createContext();

export const ScentProvider = ({ children }) => {
  const [appState, setAppState] = useState(AppState.Swiping);
  const [likedScents, setLikedScents] = useState([]);
  const [dislikedScents, setDislikedScents] = useState([]);
  const [currentScentIndex, setCurrentScentIndex] = useState(0);
  const [scentProfile, setScentProfile] = useState(null);
  const [profileDescription, setProfileDescription] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genderPreference, setGenderPreference] = useState(null);
  const [priceRange, setPriceRange] = useState([50, 200]); // Default price range $50-$200

  const defaultScentProfile = {
    [ScentFamily.Citrus]: 0,
    [ScentFamily.Floral]: 0,
    [ScentFamily.Woody]: 0,
    [ScentFamily.Oriental]: 0,
    [ScentFamily.Fresh]: 0,
  };

  const handleLike = (scent) => {
    setLikedScents([...likedScents, scent]);
    setCurrentScentIndex(currentScentIndex + 1);
  };

  const handleDislike = (scent) => {
    setDislikedScents([...dislikedScents, scent]);
    setCurrentScentIndex(currentScentIndex + 1);
  };

  const finishSwiping = () => {
    // Calculate scent profile based on liked scents
    const profile = { ...defaultScentProfile };

    likedScents.forEach(scent => {
      profile[scent.family] += 1;
    });

    // Normalize values to percentages
    const total = Object.values(profile).reduce((sum, value) => sum + value, 0);
    if (total > 0) {
      Object.keys(profile).forEach(family => {
        profile[family] = profile[family] / total;
      });
    }

    setScentProfile(profile);
    setAppState(AppState.GenderSelection);
  };

  const selectPreferences = (gender, price) => {
    setGenderPreference(gender);
    setPriceRange(price);
    analyzePreferences();
  };

  const analyzePreferences = async () => {
    setAppState(AppState.Analyzing);
    setIsLoading(true);
    setError(null);

    try {
      // Get perfume recommendations based on profile, gender preference, and price range
      const recs = await getPerfumeRecommendations(scentProfile, genderPreference, priceRange);
      setRecommendations(recs);

      // Generate profile description
      const description = await generateScentProfileDescription(scentProfile);
      setProfileDescription(description);

      // Don't automatically transition to results
      // The AnalyzingScreen will handle the transition after showing the animation
      // setAppState(AppState.Results);
    } catch (err) {
      setError('An error occurred while analyzing your preferences. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetApp = () => {
    setAppState(AppState.Swiping);
    setLikedScents([]);
    setDislikedScents([]);
    setCurrentScentIndex(0);
    setScentProfile(null);
    setProfileDescription(null);
    setRecommendations([]);
    setGenderPreference(null);
    setPriceRange([50, 200]);
    setError(null);
  };

  return (
    <ScentContext.Provider
      value={{
        appState,
        likedScents,
        dislikedScents,
        currentScentIndex,
        scentProfile,
        profileDescription,
        recommendations,
        isLoading,
        error,
        handleLike,
        handleDislike,
        finishSwiping,
        selectPreferences,
        analyzePreferences,
        resetApp,
        genderPreference,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </ScentContext.Provider>
  );
};

export const useScentContext = () => {
  const context = useContext(ScentContext);
  if (context === undefined) {
    throw new Error('useScentContext must be used within a ScentProvider');
  }
  return context;
};
