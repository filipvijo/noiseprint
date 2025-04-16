import { motion } from 'framer-motion';
import { useScentContext } from '../context/ScentContext';

const AnalyzingScreen = () => {
  const { isLoading, error } = useScentContext();

  // Animation variants for the loading dots
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -15, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Analyzing Your Scent Profile</h2>
        
        {isLoading ? (
          <>
            <p className="text-gray-600 mb-8">
              We're analyzing your preferences to create your unique scent profile...
            </p>
            
            <motion.div 
              className="flex justify-center space-x-3 my-8"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  variants={dotVariants}
                />
              ))}
            </motion.div>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Calculating scent preferences</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 animate-pulse">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Finding perfume matches</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className="text-gray-400">Generating your profile description</span>
                </div>
              </div>
            </div>
          </>
        ) : error ? (
          <div className="text-red-500 mt-4">
            <p>{error}</p>
            <button 
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
};

export default AnalyzingScreen;
