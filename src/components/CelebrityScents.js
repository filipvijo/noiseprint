import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CelebrityScents = ({ dominantFamily, secondaryFamily }) => {
  const { t } = useTranslation();

  // Celebrity scent preferences database
  const celebrityScents = {
    Citrus: [
      { name: 'Jennifer Aniston', image: 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY209_CR3,0,140,209_AL_.jpg', description: t('celebrities.jenniferAniston') },
      { name: 'Leonardo DiCaprio', image: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg', description: t('celebrities.leonardoDiCaprio') },
      { name: 'Gisele Bündchen', image: 'https://m.media-amazon.com/images/M/MV5BMTc4MDM0ODQzOF5BMl5BanBnXkFtZTcwODkzMDI1OA@@._V1_UY209_CR14,0,140,209_AL_.jpg', description: t('celebrities.giseleBundchen') },
    ],
    Floral: [
      { name: 'Taylor Swift', image: 'https://m.media-amazon.com/images/M/MV5BMTM3NjcxMDg3MV5BMl5BanBnXkFtZTcwMjk1MzA2OA@@._V1_UY209_CR8,0,140,209_AL_.jpg', description: t('celebrities.taylorSwift') },
      { name: 'Natalie Portman', image: 'https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR13,0,140,209_AL_.jpg', description: t('celebrities.nataliePortman') },
      { name: 'Emma Watson', image: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY209_CR14,0,140,209_AL_.jpg', description: t('celebrities.emmaWatson') },
    ],
    Woody: [
      { name: 'Idris Elba', image: 'https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_UY209_CR8,0,140,209_AL_.jpg', description: t('celebrities.idrisElba') },
      { name: 'George Clooney', image: 'https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY209_CR7,0,140,209_AL_.jpg', description: t('celebrities.georgeClooney') },
      { name: 'Angelina Jolie', image: 'https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY209_CR15,0,140,209_AL_.jpg', description: t('celebrities.angelinaJolie') },
    ],
    Oriental: [
      { name: 'Tom Ford', image: 'https://m.media-amazon.com/images/M/MV5BMTUxMzk4NDgyNl5BMl5BanBnXkFtZTcwOTI0NzQwMw@@._V1_UY209_CR14,0,140,209_AL_.jpg', description: t('celebrities.tomFord') },
      { name: 'Rihanna', image: 'https://m.media-amazon.com/images/M/MV5BYjZlYmJjYWYtZDM0NS00YmZlLWIzNGQtOGY3YTQyZjc3NTFiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR13,0,140,209_AL_.jpg', description: t('celebrities.rihanna') },
      { name: 'Johnny Depp', image: 'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY209_CR3,0,140,209_AL_.jpg', description: t('celebrities.johnnyDepp') },
    ],
    Fresh: [
      { name: 'Matthew McConaughey', image: 'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UY209_CR8,0,140,209_AL_.jpg', description: t('celebrities.matthewMcConaughey') },
      { name: 'Kate Middleton', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Catherine%2C_Princess_of_Wales_in_2023.jpg/440px-Catherine%2C_Princess_of_Wales_in_2023.jpg', description: t('celebrities.kateMiddleton') },
      { name: 'Chris Hemsworth', image: 'https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_UY209_CR3,0,140,209_AL_.jpg', description: t('celebrities.chrisHemsworth') },
    ],
  };

  // Get celebrities for dominant and secondary families
  const primaryCelebs = celebrityScents[dominantFamily] || [];
  const secondaryCelebs = secondaryFamily ? (celebrityScents[secondaryFamily] || []) : [];
  
  // Combine and limit to 3 celebrities
  const celebrities = [...primaryCelebs, ...secondaryCelebs].slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-12 w-full mb-12"
    >
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-center">{t('results.celebrities')}</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <p className="text-gray-700 mb-6">{t('results.celebritiesDesc')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {celebrities.map((celebrity, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md">
                <img 
                  src={celebrity.image} 
                  alt={celebrity.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{celebrity.name}</h3>
              <p className="text-sm text-gray-600 text-center">{celebrity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CelebrityScents;
