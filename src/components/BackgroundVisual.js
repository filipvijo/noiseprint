import React, { useEffect, useState } from 'react';
import { useScentContext } from '../context/ScentContext';

const BackgroundVisual = () => {
  const { appState, scentProfile } = useScentContext();
  const [background, setBackground] = useState('');

  useEffect(() => {
    // Set different backgrounds based on app state and scent profile
    if (appState === 'results' && scentProfile) {
      // Find dominant scent family
      const dominantFamily = Object.entries(scentProfile).reduce(
        (max, [family, value]) => (value > max.value ? { family, value } : max),
        { family: '', value: 0 }
      ).family;

      // Set background based on dominant family
      switch (dominantFamily) {
        case 'Citrus':
          setBackground('bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100');
          break;
        case 'Floral':
          setBackground('bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100');
          break;
        case 'Woody':
          setBackground('bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100');
          break;
        case 'Oriental':
          setBackground('bg-gradient-to-br from-red-50 via-amber-50 to-red-100');
          break;
        case 'Fresh':
          setBackground('bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100');
          break;
        default:
          setBackground('bg-gradient-to-br from-gray-50 to-gray-100');
      }
    } else if (appState === 'analyzing') {
      setBackground('bg-gradient-to-br from-purple-50 to-indigo-100');
    } else if (appState === 'genderSelection') {
      setBackground('bg-gradient-to-br from-purple-50 to-pink-100');
    } else if (appState === 'swiping') {
      setBackground('bg-[#FBCEB1]'); // Peach background for swiping interface
    } else {
      setBackground('bg-gradient-to-br from-gray-50 to-gray-100');
    }
  }, [appState, scentProfile]);

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-1000 ${background}`}>
      <div className="absolute inset-0 opacity-20">
        {appState === 'results' && scentProfile && (
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-300"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default BackgroundVisual;
