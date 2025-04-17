// Image cache to store preloaded images
const imageCache = new Map();

// Function to preload an image and store it in cache
export const preloadImage = (src) => {
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src));
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };
    
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
  });
};

// Function to preload multiple images
export const preloadImages = (sources) => {
  return Promise.all(sources.map(src => preloadImage(src)));
};

// Function to get optimized image path
export const getOptimizedImagePath = (name) => {
  // Check if we're in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  // In production, use WebP format if available
  if (isProduction) {
    return `/assets/images/optimized/${name.toLowerCase()}.webp`;
  }
  
  // In development, use regular PNG
  return `/assets/images/${name.toLowerCase()}.png`;
};

// Function to get a placeholder for a failed image
export const getPlaceholder = (name) => {
  return `https://via.placeholder.com/300x400?text=${name}`;
};
