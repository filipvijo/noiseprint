import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // For testing purposes, always show the intro
    // Remove the localStorage check to always see the animation

    // Set a listener for the video completion
    const videoElement = document.querySelector('#intro-video');

    if (videoElement) {
      videoElement.addEventListener('ended', () => {
        // When video ends, hide the intro
        setIsVisible(false);
        // localStorage.setItem('hasSeenIntro', 'true'); // Uncomment for production
        onComplete();
      });
    } else {
      // Fallback if video element isn't found
      const timer = setTimeout(() => {
        setIsVisible(false);
        // localStorage.setItem('hasSeenIntro', 'true'); // Uncomment for production
        onComplete();
      }, 6000); // Slightly longer than video duration

      return () => clearTimeout(timer);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', () => {});
      }
    };
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
              {/* After Effects animation */}
              <div className="w-64 h-64 mx-auto">
                <VideoPlayer
                  src="/assets/videos/intro.webm"
                  autoPlay={true}
                  loop={false}
                  className="w-full h-full object-contain"
                  id="intro-video"
                />
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
