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
          className="fixed inset-0 z-50 bg-black"
        >
          {/* After Effects animation - Full Screen */}
          <VideoPlayer
            src="/assets/videos/intro.webm"
            autoPlay={true}
            loop={false}
            className="w-full h-full object-contain"
            id="intro-video"
          />

          {/* Optional overlay text - can be removed if not needed */}
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1, duration: 1 }}
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
