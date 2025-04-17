import React, { useEffect } from 'react';
import { scents } from '../data/scents';

const ImagePreloader = () => {
  useEffect(() => {
    // Preload all scent images
    scents.forEach(scent => {
      const img = new Image();
      img.src = scent.image;
    });
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
