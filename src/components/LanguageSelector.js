import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-2 flex gap-2">
        <button
          className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
            i18n.language === 'en' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => changeLanguage('en')}
        >
          {t('language.en')}
        </button>
        <button
          className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
            i18n.language === 'fr' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => changeLanguage('fr')}
        >
          {t('language.fr')}
        </button>
        <button
          className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
            i18n.language === 'sr' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => changeLanguage('sr')}
        >
          {t('language.sr')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
