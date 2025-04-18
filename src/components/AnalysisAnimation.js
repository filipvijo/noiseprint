import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AnalysisAnimation = ({ onComplete }) => {
  // Simplified animation - just wait and then complete
  useEffect(() => {
    // Wait for a moment and then complete
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Show for 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-purple-900"
    >
      <div className="flex flex-col items-center">
        <div className="mb-8">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="NosePrint Logo"
            className="w-60 h-60 object-contain"
          />
        </div>

        {/* Status text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white text-xl font-light"
        >
          Finalizing Your Scent Profile...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AnalysisAnimation;
