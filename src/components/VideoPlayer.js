import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src, onComplete, autoPlay = true, loop = false, className = '', id = '' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Handle video completion
      if (onComplete) {
        video.addEventListener('ended', onComplete);
      }

      // Autoplay when component mounts
      if (autoPlay) {
        video.play().catch(error => {
          console.error('Error playing video:', error);
        });
      }
    }

    return () => {
      if (video && onComplete) {
        video.removeEventListener('ended', onComplete);
      }
    };
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
