import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ColorPaletteRecommendation = ({ dominantFamily }) => {
  const { t } = useTranslation();

  // Color palette recommendations based on scent family
  const colorPalettes = {
    Citrus: {
      colors: ['#FFD700', '#FF9500', '#FFCC00', '#F5F5DC', '#FFFFFF'],
      names: ['Gold', 'Orange', 'Yellow', 'Beige', 'White'],
      description: t('colorPalettes.Citrus'),
    },
    Floral: {
      colors: ['#FFB6C1', '#FFC0CB', '#E6E6FA', '#F8F8FF', '#FFFFFF'],
      names: ['Light Pink', 'Pink', 'Lavender', 'Ghost White', 'White'],
      description: t('colorPalettes.Floral'),
    },
    Woody: {
      colors: ['#8B4513', '#A0522D', '#D2B48C', '#F5F5DC', '#FFFFFF'],
      names: ['Saddle Brown', 'Sienna', 'Tan', 'Beige', 'White'],
      description: t('colorPalettes.Woody'),
    },
    Oriental: {
      colors: ['#800020', '#8B0000', '#B8860B', '#FFD700', '#FFFFFF'],
      names: ['Burgundy', 'Dark Red', 'Dark Goldenrod', 'Gold', 'White'],
      description: t('colorPalettes.Oriental'),
    },
    Fresh: {
      colors: ['#E0FFFF', '#B0E0E6', '#87CEEB', '#F0FFFF', '#FFFFFF'],
      names: ['Light Cyan', 'Powder Blue', 'Sky Blue', 'Azure', 'White'],
      description: t('colorPalettes.Fresh'),
    },
  };

  const palette = colorPalettes[dominantFamily] || colorPalettes.Fresh;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-12 w-full"
    >
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-4 px-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-center">{t('results.colorPalette')}</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <p className="text-gray-700 mb-6">{t('results.colorPaletteDesc')}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {palette.colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-full shadow-md border border-gray-200" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm mt-2 text-gray-700">{palette.names[index]}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">{palette.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ColorPaletteRecommendation;
