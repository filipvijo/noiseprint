import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const AnalysisAnimation = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-white bg-opacity-90"
    >
      <div className="max-w-md w-full">
        <VideoPlayer
          src="/assets/videos/after_analyzing.webm"
          onComplete={onComplete}
          autoPlay={true}
          loop={false}
          id="analysis-video"
        />
      </div>
    </motion.div>
  );
};

export default AnalysisAnimation;
