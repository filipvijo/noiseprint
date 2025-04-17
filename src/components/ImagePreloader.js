import { useEffect } from 'react';
import { scents } from '../data/scents';
import { preloadImages } from '../utils/imageOptimizer';

const ImagePreloader = () => {
  useEffect(() => {
    // Extract all image paths
    const imagePaths = scents.map(scent => scent.image);

    // Prioritize the first 10 images (those that will be shown first)
    const priorityImages = imagePaths.slice(0, 10);
    const remainingImages = imagePaths.slice(10);

    // Preload priority images immediately
    preloadImages(priorityImages)
      .then(() => {
        console.log('Priority images preloaded successfully');

        // Preload remaining images after a delay
        setTimeout(() => {
          preloadImages(remainingImages)
            .then(() => console.log('All images preloaded successfully'))
            .catch(error => console.error('Error preloading remaining images:', error));
        }, 3000); // 3 second delay before loading remaining images
      })
      .catch(error => console.error('Error preloading priority images:', error));
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
