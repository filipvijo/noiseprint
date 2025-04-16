import axios from 'axios';
import { ScentFamily } from '../data/scents';

// OpenAI API configuration
const OPENAI_API_BASE_URL = 'https://api.openai.com/v1';
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// Configure axios for OpenAI API calls
const openaiAxios = axios.create({
  baseURL: OPENAI_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Enhanced mock PerfumeAPI with more realistic data
export const getPerfumeRecommendations = async (scentProfile, genderPreference = 'Unisex', priceRange = [0, 1000]) => {
  console.log('Getting perfume recommendations for profile:', scentProfile, 'gender:', genderPreference, 'price range:', priceRange);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Parse price strings to numbers for comparison
  const parsePriceString = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''));
  };

  // Find the dominant scent family
  const dominantFamily = Object.entries(scentProfile).reduce(
    (max, [family, value]) => (value > max.value ? { family, value } : max),
    { family: '', value: 0 }
  ).family;

  // Database of perfumes by scent family and gender
  const perfumeDatabase = {
    // Men's fragrances
    [ScentFamily.Citrus]: [
      {
        id: 'c1',
        name: 'Acqua di Parma Colonia',
        brand: 'Acqua di Parma',
        description: 'A timeless Italian classic with bright citrus notes of Sicilian lemon, bergamot, and bitter orange, balanced with aromatic herbs.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1681.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Acqua-di-Parma/Acqua-di-Parma-Colonia-1681.html',
        price: '$160',
        scentProfile: {
          [ScentFamily.Citrus]: 0.7,
          [ScentFamily.Floral]: 0.1,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.1,
        },
      },
      {
        id: 'c2',
        name: 'Light Blue',
        brand: 'Dolce & Gabbana',
        description: 'A refreshing blend of Sicilian lemon, crisp apple, cedar, and white rose, evoking the Mediterranean summer.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.828.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Dolce-Gabbana/Light-Blue-485.html',
        price: '$89',
        scentProfile: {
          [ScentFamily.Citrus]: 0.5,
          [ScentFamily.Floral]: 0.2,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.2,
        },
      },
    ],
    [ScentFamily.Floral]: [
      {
        id: 'f1',
        name: 'J\'adore',
        brand: 'Dior',
        description: 'An opulent floral bouquet featuring ylang-ylang, Damascus rose, and jasmine, creating a sophisticated and feminine fragrance.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.22.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Dior/J-adore-210.html',
        price: '$135',
        scentProfile: {
          [ScentFamily.Citrus]: 0.1,
          [ScentFamily.Floral]: 0.7,
          [ScentFamily.Woody]: 0.0,
          [ScentFamily.Oriental]: 0.1,
          [ScentFamily.Fresh]: 0.1,
        },
      },
      {
        id: 'f2',
        name: 'Flowerbomb',
        brand: 'Viktor&Rolf',
        description: 'An explosive floral fragrance with notes of jasmine, rose, orchid, and freesia, wrapped in warm patchouli and vanilla.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1460.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Viktor-Rolf/Flowerbomb-1460.html',
        price: '$115',
        scentProfile: {
          [ScentFamily.Citrus]: 0.0,
          [ScentFamily.Floral]: 0.6,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.3,
          [ScentFamily.Fresh]: 0.0,
        },
      },
    ],
    [ScentFamily.Woody]: [
      {
        id: 'w1',
        name: 'Santal 33',
        brand: 'Le Labo',
        description: 'A unisex fragrance with a distinctive blend of sandalwood, cedarwood, cardamom, and leather, creating a smoky, woody signature.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.12201.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Le-Labo/Santal-33-12201.html',
        price: '$198',
        scentProfile: {
          [ScentFamily.Citrus]: 0.0,
          [ScentFamily.Floral]: 0.1,
          [ScentFamily.Woody]: 0.7,
          [ScentFamily.Oriental]: 0.1,
          [ScentFamily.Fresh]: 0.1,
        },
      },
      {
        id: 'w2',
        name: 'Oud Wood',
        brand: 'Tom Ford',
        description: 'A luxurious blend of rare oud wood, exotic spices, and rosewood, creating a sophisticated and sensual fragrance.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1826.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Tom-Ford/Oud-Wood-1826.html',
        price: '$250',
        scentProfile: {
          [ScentFamily.Citrus]: 0.0,
          [ScentFamily.Floral]: 0.0,
          [ScentFamily.Woody]: 0.6,
          [ScentFamily.Oriental]: 0.4,
          [ScentFamily.Fresh]: 0.0,
        },
      },
    ],
    [ScentFamily.Oriental]: [
      {
        id: 'o1',
        name: 'Black Opium',
        brand: 'Yves Saint Laurent',
        description: 'An addictive blend of black coffee, vanilla, white flowers, and patchouli, creating a modern, sensual oriental fragrance.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.25324.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Black-Opium-25324.html',
        price: '$130',
        scentProfile: {
          [ScentFamily.Citrus]: 0.0,
          [ScentFamily.Floral]: 0.2,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.7,
          [ScentFamily.Fresh]: 0.0,
        },
      },
      {
        id: 'o2',
        name: 'Shalimar',
        brand: 'Guerlain',
        description: 'A legendary oriental fragrance with notes of bergamot, iris, vanilla, and balsamic notes, creating a timeless, sensual aura.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.5.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Guerlain/Shalimar-53.html',
        price: '$145',
        scentProfile: {
          [ScentFamily.Citrus]: 0.1,
          [ScentFamily.Floral]: 0.1,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.7,
          [ScentFamily.Fresh]: 0.0,
        },
      },
    ],
    [ScentFamily.Fresh]: [
      {
        id: 'fr1',
        name: 'Acqua di Giò',
        brand: 'Giorgio Armani',
        description: 'A fresh, aquatic fragrance inspired by the Mediterranean sea, with notes of marine notes, bergamot, neroli, and rosemary.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.410.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Giorgio-Armani/Acqua-di-Gio-410.html',
        price: '$95',
        gender: 'Men',
        scentProfile: {
          [ScentFamily.Citrus]: 0.2,
          [ScentFamily.Floral]: 0.1,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.6,
        },
      },
      {
        id: 'fr2',
        name: 'L\'Eau d\'Issey',
        brand: 'Issey Miyake',
        description: 'A pure, aquatic fragrance with notes of lotus, freesia, cyclamen, and precious woods, evoking the scent of water on skin.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.415.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Issey-Miyake/L-Eau-d-Issey-415.html',
        price: '$106',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.1,
          [ScentFamily.Floral]: 0.2,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.6,
        },
      },
    ],

    // Women's fragrances
    'Women-Citrus': [
      {
        id: 'wc1',
        name: 'Chance Eau Fraîche',
        brand: 'Chanel',
        description: 'A fresh, sparkling floral-citrus fragrance with notes of citron, jasmine, and teak wood.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1410.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Chanel/Chance-Eau-Fraiche-1410.html',
        price: '$132',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.6,
          [ScentFamily.Floral]: 0.3,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.0,
        },
      },
      {
        id: 'wc2',
        name: 'Clinique Happy',
        brand: 'Clinique',
        description: 'A bright, energetic blend of citrus, flowers, and a hint of tropical fruit.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.373.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Clinique/Happy-373.html',
        price: '$65',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.7,
          [ScentFamily.Floral]: 0.2,
          [ScentFamily.Woody]: 0.0,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.1,
        },
      },
    ],
    'Women-Floral': [
      {
        id: 'wf1',
        name: 'Miss Dior Blooming Bouquet',
        brand: 'Dior',
        description: 'A delicate floral bouquet with notes of peony, rose, and white musk.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.24414.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Dior/Miss-Dior-Blooming-Bouquet-24414.html',
        price: '$122',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.1,
          [ScentFamily.Floral]: 0.8,
          [ScentFamily.Woody]: 0.0,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.1,
        },
      },
      {
        id: 'wf2',
        name: 'Daisy',
        brand: 'Marc Jacobs',
        description: 'A fresh, feminine fragrance with notes of wild strawberry, violet leaves, and jasmine.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.1565.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Marc-Jacobs/Daisy-1565.html',
        price: '$86',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.1,
          [ScentFamily.Floral]: 0.7,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.1,
        },
      },
    ],
    'Women-Woody': [
      {
        id: 'ww1',
        name: 'Coco Mademoiselle',
        brand: 'Chanel',
        description: 'A sexy, fresh oriental fragrance with notes of orange, jasmine, and patchouli.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.611.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Chanel/Coco-Mademoiselle-611.html',
        price: '$146',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.2,
          [ScentFamily.Floral]: 0.3,
          [ScentFamily.Woody]: 0.4,
          [ScentFamily.Oriental]: 0.1,
          [ScentFamily.Fresh]: 0.0,
        },
      },
    ],
    'Women-Oriental': [
      {
        id: 'wo1',
        name: 'Hypnotic Poison',
        brand: 'Dior',
        description: 'A mysterious, enchanting fragrance with notes of bitter almond, caraway spice, and vanilla.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.219.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Dior/Hypnotic-Poison-219.html',
        price: '$105',
        gender: 'Women',
        scentProfile: {
          [ScentFamily.Citrus]: 0.0,
          [ScentFamily.Floral]: 0.1,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.8,
          [ScentFamily.Fresh]: 0.0,
        },
      },
    ],
    'Women-Fresh': [
      {
        id: 'fr1',
        name: 'Acqua di Giò',
        brand: 'Giorgio Armani',
        description: 'A fresh, aquatic fragrance inspired by the Mediterranean sea, with notes of marine notes, bergamot, neroli, and rosemary.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.410.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Giorgio-Armani/Acqua-di-Gio-410.html',
        price: '$95',
        scentProfile: {
          [ScentFamily.Citrus]: 0.2,
          [ScentFamily.Floral]: 0.1,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.6,
        },
      },
      {
        id: 'fr2',
        name: 'L\'Eau d\'Issey',
        brand: 'Issey Miyake',
        description: 'A pure, aquatic fragrance with notes of lotus, freesia, cyclamen, and precious woods, evoking the scent of water on skin.',
        imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.415.jpg',
        purchaseUrl: 'https://www.fragrantica.com/perfume/Issey-Miyake/L-Eau-d-Issey-415.html',
        price: '$106',
        scentProfile: {
          [ScentFamily.Citrus]: 0.1,
          [ScentFamily.Floral]: 0.2,
          [ScentFamily.Woody]: 0.1,
          [ScentFamily.Oriental]: 0.0,
          [ScentFamily.Fresh]: 0.6,
        },
      },
    ],
  };

  // Get recommendations based on the dominant family, secondary preferences, and gender
  let recommendations = [];

  // Filter perfumes by gender preference and price range
  const getFilteredPerfumes = (family) => {
    // If the family exists in the database
    if (perfumeDatabase[family]) {
      // Filter by gender and price range
      return perfumeDatabase[family].filter(perfume => {
        // Gender filter
        const matchesGender = genderPreference === 'Unisex' ||
                            !perfume.gender ||
                            perfume.gender === genderPreference;

        // Price filter
        const perfumePrice = parsePriceString(perfume.price);
        const matchesPrice = perfumePrice >= priceRange[0] && perfumePrice <= priceRange[1];

        return matchesGender && matchesPrice;
      });
    }

    // Check for gender-specific family
    const genderFamily = `${genderPreference}-${family}`;
    if (perfumeDatabase[genderFamily]) {
      // Filter by price range
      return perfumeDatabase[genderFamily].filter(perfume => {
        const perfumePrice = parsePriceString(perfume.price);
        return perfumePrice >= priceRange[0] && perfumePrice <= priceRange[1];
      });
    }

    return [];
  };

  // Get perfumes from dominant family
  const dominantPerfumes = getFilteredPerfumes(dominantFamily);
  recommendations.push(...dominantPerfumes.slice(0, 2));

  // Find the second and third most dominant families
  const sortedFamilies = Object.entries(scentProfile)
    .filter(([family]) => family !== dominantFamily)
    .sort(([, valueA], [, valueB]) => valueB - valueA)
    .map(([family]) => family);

  // Add perfumes from second family
  if (sortedFamilies.length > 0) {
    const secondFamilyPerfumes = getFilteredPerfumes(sortedFamilies[0]);
    if (secondFamilyPerfumes.length > 0) {
      recommendations.push(...secondFamilyPerfumes.slice(0, 2));
    }
  }

  // Add perfumes from third family if needed to reach 6 recommendations
  if (sortedFamilies.length > 1 && recommendations.length < 6) {
    const thirdFamilyPerfumes = getFilteredPerfumes(sortedFamilies[1]);
    if (thirdFamilyPerfumes.length > 0) {
      recommendations.push(...thirdFamilyPerfumes.slice(0, 6 - recommendations.length));
    }
  }

  // If we still don't have enough recommendations, add more from any family
  if (recommendations.length < 6) {
    // Collect all perfumes matching gender preference and price range
    const allPerfumes = Object.values(perfumeDatabase)
      .flat()
      .filter(perfume => {
        // Gender filter
        const matchesGender = genderPreference === 'Unisex' ||
                            !perfume.gender ||
                            perfume.gender === genderPreference;

        // Price filter
        const perfumePrice = parsePriceString(perfume.price);
        const matchesPrice = perfumePrice >= priceRange[0] && perfumePrice <= priceRange[1];

        return matchesGender && matchesPrice;
      })
      // Filter out perfumes already in recommendations
      .filter(perfume => !recommendations.some(rec => rec.id === perfume.id));

    // Add random perfumes to fill up to 6
    recommendations.push(...allPerfumes.slice(0, 6 - recommendations.length));
  }

  return recommendations.slice(0, 6);
};

// Real OpenAI API integration for generating scent profile descriptions
export const generateScentProfileDescription = async (scentProfile) => {
  console.log('Generating description for profile:', scentProfile);

  try {
    // Find the dominant scent families
    const sortedFamilies = Object.entries(scentProfile)
      .sort(([, valueA], [, valueB]) => valueB - valueA)
      .map(([family, value]) => ({ family, percentage: Math.round(value * 100) }));

    // Create a prompt for OpenAI
    const prompt = `Generate a sophisticated, 150-word description of a person's scent preferences based on their profile:

${sortedFamilies.map(f => `- ${f.family}: ${f.percentage}%`).join('\n')}

The description should be elegant, insightful, and reveal personality traits based on these scent preferences. Use a luxurious, fashion-forward tone.`;

    // If OpenAI API key is not set, use mock data
    if (!OPENAI_API_KEY) {
      console.log('OpenAI API key not found, using mock data');
      return generateMockDescription(sortedFamilies);
    }

    // Make the API call to OpenAI using gpt-4o-mini model
    const response = await openaiAxios.post('/chat/completions', {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a luxury fragrance expert who creates elegant, insightful scent profile descriptions." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 250
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating description with OpenAI:', error);
    // Fallback to mock data if API call fails
    return generateMockDescription(scentProfile);
  }
};

// Fallback function for mock descriptions
const generateMockDescription = (scentProfile) => {
  // Find the dominant scent families (top 2)
  const sortedFamilies = Object.entries(scentProfile)
    .sort(([, valueA], [, valueB]) => valueB - valueA)
    .slice(0, 2)
    .map(([family]) => family);

  // Return a mock description based on the dominant families
  const descriptions = {
    [ScentFamily.Citrus]: "You're drawn to bright, zesty scents that evoke sunshine and energy. Citrus notes like bergamot, lemon, and grapefruit speak to your vibrant personality and love of freshness.",
    [ScentFamily.Floral]: "Your scent profile reveals a romantic soul with an appreciation for classic beauty. Floral notes like rose and jasmine reflect your elegant taste and emotional depth.",
    [ScentFamily.Woody]: "The earthy, grounding qualities of woody scents resonate with your stable and reliable nature. Notes like sandalwood and cedarwood suggest a person who values tradition and authenticity.",
    [ScentFamily.Oriental]: "Rich, exotic scents appeal to your sensual side. Your preference for oriental notes like amber, vanilla, and musk indicates a passionate personality with a taste for luxury.",
    [ScentFamily.Fresh]: "Your affinity for fresh, clean scents suggests a person who values clarity and simplicity. Notes like sea salt and lavender point to a calm, balanced approach to life.",
  };

  return `${descriptions[sortedFamilies[0]]} ${descriptions[sortedFamilies[1]]} Your unique scent profile combines these elements into a signature fragrance personality that's sophisticated and multifaceted.`;
};
