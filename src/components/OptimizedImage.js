import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, style, placeholder }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Reset states when src changes
    setLoaded(false);
    setError(false);
    
    // Create new image object to preload
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
      console.error(`Failed to load image: ${src}`);
    };
    
    return () => {
      // Clean up
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  // Determine which image to show
  const imageSrc = error ? placeholder : src;
  
  return (
    <div className={`relative ${className || ''}`} style={style}>
      {/* Show loading spinner while image is loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="w-12 h-12 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Show image with fade-in effect when loaded */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ display: loaded || error ? 'block' : 'none' }}
      />
    </div>
  );
};

export default OptimizedImage;
