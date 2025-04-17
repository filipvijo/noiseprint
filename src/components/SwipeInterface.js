import { useMemo } from 'react';
import { useScentContext } from '../context/ScentContext';
import { scents } from '../data/scents';
import SwipeCard from './SwipeCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SwipeInterface = () => {
  const { t } = useTranslation();
  const {
    currentScentIndex,
    handleLike,
    handleDislike,
    finishSwiping,
    likedScents,
    dislikedScents
  } = useScentContext();

  const remainingScents = useMemo(() => {
    return scents.filter(
      scent =>
        !likedScents.some(liked => liked.id === scent.id) &&
        !dislikedScents.some(disliked => disliked.id === scent.id)
    );
  }, [likedScents, dislikedScents]);

  const currentScent = remainingScents[0];
  const isFinished = remainingScents.length === 0;
  const progress = ((scents.length - remainingScents.length) / scents.length) * 100;

  const handleSwipe = (direction, scent) => {
    if (direction === 'right') {
      handleLike(scent);
    } else if (direction === 'left') {
      handleDislike(scent);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full pt-8"> {/* Changed to justify-start and added top padding */}
      <div className="mb-4 text-center">
        <div className="w-72 h-72 mx-auto mb-6">
          <img
            src="/images/logo.png"
            alt="NosePrint Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-gray-600 mb-4">{t('app.subtitle')}</p>
      </div>

      <div className="relative w-[340px] h-[450px] mb-8">
        {!isFinished ? (
          <SwipeCard
            key={currentScent.id}
            scent={currentScent}
            onSwipe={(direction) => handleSwipe(direction, currentScent)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-white rounded-2xl shadow-md p-8">
            <p className="text-xl mb-4">{t('swipe.allSwiped')}</p>
            <button
              onClick={finishSwiping}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {t('swipe.analyze')}
            </button>
          </div>
        )}
      </div>

      {!isFinished && (
        <div className="flex gap-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            onClick={() => handleDislike(currentScent)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md"
            onClick={() => handleLike(currentScent)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
        </div>
      )}

      <div className="w-full max-w-md mt-8">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>{scents.length - remainingScents.length} / {scents.length}</span>
          <span>{Math.round(progress)}% {t('swipe.complete')}</span>
        </div>
      </div>
    </div>
  );
};

export default SwipeInterface;
