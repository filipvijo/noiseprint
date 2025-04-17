import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageModal = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('languageSelected', 'true');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
              Select Your Language
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choose your preferred language to continue
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => selectLanguage('en')}
                className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-4 rounded-xl transition-all border border-blue-200"
              >
                <span className="font-medium text-gray-800">English</span>
                <span className="text-blue-500">🇬🇧</span>
              </button>
              
              <button
                onClick={() => selectLanguage('fr')}
                className="flex items-center justify-between bg-gradient-to-r from-red-50 to-blue-50 hover:from-red-100 hover:to-blue-100 p-4 rounded-xl transition-all border border-blue-200"
              >
                <span className="font-medium text-gray-800">Français</span>
                <span className="text-blue-500">🇫🇷</span>
              </button>
              
              <button
                onClick={() => selectLanguage('sr')}
                className="flex items-center justify-between bg-gradient-to-r from-red-50 to-blue-50 hover:from-red-100 hover:to-blue-100 p-4 rounded-xl transition-all border border-blue-200"
              >
                <span className="font-medium text-gray-800">Српски</span>
                <span className="text-blue-500">🇷🇸</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageModal;
