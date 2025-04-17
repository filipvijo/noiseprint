import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const AnalysisAnimation = ({ onComplete }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  // Add extra delay after video ends
  useEffect(() => {
    if (videoEnded) {
      console.log('Video ended, waiting 2 seconds before transitioning');
      // Wait 2 more seconds after video ends before transitioning
      const timer = setTimeout(() => {
        console.log('Delay complete, transitioning to results');
        onComplete();
      }, 2000); // 2 second extra delay

      return () => clearTimeout(timer);
    }
  }, [videoEnded, onComplete]);

  // Handle video completion
  const handleVideoComplete = () => {
    console.log('Video completion event triggered');
    setVideoEnded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black"
    >
      <div className="w-full h-screen">
        <VideoPlayer
          src="/assets/videos/after_analyzing.webm"
          onComplete={handleVideoComplete}
          autoPlay={true}
          loop={false}
          id="analysis-video"
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default AnalysisAnimation;
