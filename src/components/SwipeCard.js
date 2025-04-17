import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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

  // Use the image path from the scent object
  // For debugging
  console.log('Scent image path:', scent.image);

  // Fallback to placeholder if image not found
  const imageUrl = scent.image || `https://via.placeholder.com/300x400?text=${scent.name}`;

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
        className="w-[300px] h-[400px] rounded-2xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-24 w-full p-5 bg-gradient-to-t from-black/80 to-transparent rounded-2xl text-white text-center mx-auto max-w-[90%] left-0 right-0">
          <h2 className="text-2xl font-bold mb-1">{t(`scents.${scent.id}.name`)}</h2>
          <p className="text-sm opacity-90">{t(`scents.${scent.id}.description`)}</p>
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
