import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src, onComplete, autoPlay = true, loop = false, className = '', id = '' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Handle video completion
      const handleVideoEnd = () => {
        console.log('Video ended event fired');
        if (onComplete) {
          onComplete();
        }
      };

      // Add event listener
      video.addEventListener('ended', handleVideoEnd);

      // Autoplay when component mounts
      if (autoPlay) {
        console.log('Attempting to autoplay video');
        video.play().catch(error => {
          console.error('Error playing video:', error);
        });
      }

      return () => {
        // Clean up event listener
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [autoPlay, onComplete]);

  return (
    <video
      ref={videoRef}
      className={`w-full h-auto ${className}`}
      playsInline
      muted
      autoPlay={autoPlay}
      loop={loop}
      id={id}
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
