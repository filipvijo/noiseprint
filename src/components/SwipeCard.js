import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getPlaceholder } from '../utils/imageOptimizer';

const SwipeCard = ({ scent, onSwipe }) => {
  const { t } = useTranslation();
  const [exitX, setExitX] = useState(0);

  // Motion values for drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform values for rotation and opacity
  const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Handle drag end
  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) {
      setExitX(200);
      onSwipe('right', scent);
    } else if (info.offset.x < -100) {
      setExitX(-200);
      onSwipe('left', scent);
    }
  };

  // Get placeholder for fallback
  const placeholder = getPlaceholder(scent.name);

  return (
    <motion.div
      className="absolute cursor-grab"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      style={{ x, y, rotate, opacity }}
      animate={{ x: exitX }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-[400px] h-[530px] rounded-2xl shadow-lg overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundColor: '#f0f0f0' }}>
          <img
            src={scent.image}
            alt={scent.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholder;
            }}
          />
        </div>
        <div className="absolute bottom-32 w-full p-6 bg-gradient-to-t from-black/80 to-transparent rounded-2xl text-white text-center mx-auto max-w-[90%] left-0 right-0">
          <h2 className="text-3xl font-bold mb-2">{t(`scents.${scent.id}.name`)}</h2>
          <p className="text-base opacity-90">{t(`scents.${scent.id}.description`)}</p>
          <div className="mt-3 text-xs opacity-70 flex justify-center">
            <span className="bg-white/20 px-2 py-1 rounded-full">
              {t(`families.${scent.family}`)}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SwipeCard;
