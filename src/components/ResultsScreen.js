import { useScentContext } from '../context/ScentContext';
import { ScentFamily } from '../data/scents';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import ColorPaletteRecommendation from './ColorPaletteRecommendation';
import CelebrityScents from './CelebrityScents';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ResultsScreen = () => {
  const { t } = useTranslation();
  const {
    scentProfile,
    profileDescription,
    recommendations,
    resetApp
  } = useScentContext();

  if (!scentProfile) {
    return <div>No profile data available</div>;
  }

  // Prepare data for radar chart
  const radarData = {
    labels: Object.keys(scentProfile),
    datasets: [
      {
        label: t('results.title'),
        data: Object.values(scentProfile),
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(147, 51, 234, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(147, 51, 234, 1)',
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.2,
          showLabelBackdrop: false,
          color: 'rgba(0, 0, 0, 0.5)',
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: 'rgba(0, 0, 0, 0.7)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Find dominant scent family
  const dominantFamily = Object.entries(scentProfile).reduce(
    (max, [family, value]) => (value > max.value ? { family, value } : max),
    { family: '', value: 0 }
  ).family;

  // Find secondary scent family
  const secondaryFamily = Object.entries(scentProfile)
    .filter(([family]) => family !== dominantFamily)
    .sort(([, valueA], [, valueB]) => valueB - valueA)[0]?.[0];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 w-full"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 px-4 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('results.title')}</h1>
          <p className="text-white/80">
            {t('results.subtitle')}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-purple-100"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-800">{t('results.radar')}</h2>
          <div className="w-full h-64">
            <Radar data={radarData} options={radarOptions} />
          </div>
          <div className="mt-4 bg-white p-3 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">
              {t('results.dominantFamily')} <span className="font-semibold text-purple-700">{t(`families.${dominantFamily}`)}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl shadow-lg p-6 border border-pink-100"
        >
          <h2 className="text-xl font-semibold mb-4 text-pink-800">{t('results.story')}</h2>
          <div className="prose bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              {profileDescription}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Color Palette Recommendations */}
      <ColorPaletteRecommendation dominantFamily={dominantFamily} />

      {/* Celebrity Scent Twins */}
      <CelebrityScents dominantFamily={dominantFamily} secondaryFamily={secondaryFamily} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 w-full"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-center">{t('results.recommendations')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((perfume) => (
            <motion.div
              key={perfume.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${perfume.imageUrl})` }}
              ></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{perfume.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{perfume.brand}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">{perfume.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-semibold">{perfume.price}</span>
                  <a
                    href={perfume.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all"
                  >
                    {t('results.shopNow')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={resetApp}
        className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        {t('results.startOver')}
      </motion.button>
    </div>
  );
};

export default ResultsScreen;
