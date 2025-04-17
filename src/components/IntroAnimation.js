import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      // Skip intro if already seen
      setIsVisible(false);
      onComplete();
      return;
    }
    
    // Set timeout to hide the intro after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasSeenIntro', 'true');
      onComplete();
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', damping: 15 }}
              className="mb-4"
            >
              {/* Placeholder for your After Effects animation */}
              {/* This is where you would place your logo animation */}
              <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  NosePrint
                </h1>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-xl"
            >
              Discover Your Scent Profile
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 3 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-8 rounded-full max-w-xs mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
