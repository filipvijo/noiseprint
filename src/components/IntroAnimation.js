import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // For testing purposes, always show the intro
    // Remove the localStorage check to always see the animation

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            // localStorage.setItem('hasSeenIntro', 'true'); // Uncomment for production
            onComplete();
          }, 500); // Short delay after reaching 100%
          return 100;
        }
        return prev + 2; // Increment by 2% each time
      });
    }, 60); // Update every 60ms for a total of ~3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-purple-300"
        >
          {/* Loading circle with logo */}
          <div className="flex flex-col items-center">
            <div className="relative w-72 h-72 mb-8">
              {/* Circular progress bar */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-300"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-purple-600"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                  style={{
                    strokeDasharray: 264,
                    strokeDashoffset: 264 - (progress / 100) * 264,
                    transition: 'stroke-dashoffset 0.5s ease 0s'
                  }}
                />
              </svg>

              {/* Logo in the center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="NosePrint Logo"
                  className="w-60 h-60 object-contain"
                />
              </div>
            </div>

            {/* Progress text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-xl font-light"
            >
              Discover Your Scent Profile
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
