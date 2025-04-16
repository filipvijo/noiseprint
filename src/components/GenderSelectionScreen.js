import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScentContext } from '../context/ScentContext';
import { GenderType } from '../context/ScentContext';
import { useTranslation } from 'react-i18next';

const GenderSelectionScreen = () => {
  const { t } = useTranslation();
  const { selectPreferences, priceRange, setPriceRange } = useScentContext();
  const [selectedGender, setSelectedGender] = useState(null);
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const index = e.target.name === 'minPrice' ? 0 : 1;
    const newRange = [...localPriceRange];
    newRange[index] = value;

    // Ensure min <= max
    if (index === 0 && value > newRange[1]) {
      newRange[1] = value;
    } else if (index === 1 && value < newRange[0]) {
      newRange[0] = value;
    }

    setLocalPriceRange(newRange);
  };

  const handleSubmit = () => {
    if (selectedGender) {
      selectPreferences(selectedGender, localPriceRange);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold mb-2 text-purple-800">{t('gender.title')}</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          {t('gender.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`bg-blue-100 rounded-xl shadow-md overflow-hidden cursor-pointer ${selectedGender === GenderType.Men ? 'ring-4 ring-blue-500' : ''}`}
          onClick={() => handleGenderSelect(GenderType.Men)}
        >
          <div className="h-48 bg-blue-200 flex items-center justify-center">
            <span className="text-6xl">👔</span>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{t('gender.men')}</h3>
            <p className="text-blue-600">
              {t('gender.menDesc')}
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`bg-pink-100 rounded-xl shadow-md overflow-hidden cursor-pointer ${selectedGender === GenderType.Women ? 'ring-4 ring-pink-500' : ''}`}
          onClick={() => handleGenderSelect(GenderType.Women)}
        >
          <div className="h-48 bg-pink-200 flex items-center justify-center">
            <span className="text-6xl">💄</span>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-pink-800 mb-2">{t('gender.women')}</h3>
            <p className="text-pink-600">
              {t('gender.womenDesc')}
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`bg-purple-100 rounded-xl shadow-md overflow-hidden cursor-pointer ${selectedGender === GenderType.Unisex ? 'ring-4 ring-purple-500' : ''}`}
          onClick={() => handleGenderSelect(GenderType.Unisex)}
        >
          <div className="h-48 bg-purple-200 flex items-center justify-center">
            <span className="text-6xl">⚭</span>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{t('gender.unisex')}</h3>
            <p className="text-purple-600">
              {t('gender.unisexDesc')}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full mb-8"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{t('gender.priceRange')}</h3>
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">${localPriceRange[0]}</span>
            <span className="text-gray-600">${localPriceRange[1]}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">{t('gender.minPrice')}</label>
              <input
                type="range"
                id="minPrice"
                name="minPrice"
                min="20"
                max="300"
                step="10"
                value={localPriceRange[0]}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">{t('gender.maxPrice')}</label>
              <input
                type="range"
                id="maxPrice"
                name="maxPrice"
                min="20"
                max="300"
                step="10"
                value={localPriceRange[1]}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={handleSubmit}
        disabled={!selectedGender}
        className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all ${!selectedGender ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
      >
        {t('gender.getRecommendations')}
      </motion.button>
    </div>
  );
};

export default GenderSelectionScreen;
