import React, { useState, useEffect } from 'react';
import Section from '../../structure/section';
import hero from '../../../styles/scss/sections/index/hero.module.scss';

export default function Hero() {
  const backgrounds = [
    '/images/photo1-low.jpg', // Low quality image
    '/images/photo2-low.jpg',
    '/images/photo3-low.jpg',
    '/images/photo4-low.jpg',
    '/images/photo5-low.jpg',
    '/images/photo6-low.jpg',
    '/images/photo7-low.jpg',
    '/images/photo8-low.jpg',
    '/images/photo9-low.jpg',
    '/images/photo10-low.jpg',
    '/images/photo11-low.jpg',
    '/images/photo12-low.jpg',
    '/images/photo13-low.jpg',
    '/images/photo14-low.jpg',
    '/images/photo15-low.jpg',
  ];

  const highQualityBackgrounds = [
    
    
    '/images/photo3.jpg',
    '/images/photo1.jpg', // High quality image
    '/images/photo2.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
    '/images/photo7.jpg',
    '/images/photo8.jpg',
    '/images/photo9.jpg',
    '/images/photo10.jpg',
    '/images/photo11.jpg',
    '/images/photo12.jpg',
    '/images/photo13.jpg',
    '/images/photo14.jpg',
    '/images/photo15.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageQuality, setImageQuality] = useState('low'); // default to low quality
  const [textVisible, setTextVisible] = useState(true); // State for text visibility

  useEffect(() => {
    // Detect user's connection quality (if supported by browser)
    if (navigator.connection) {
      const connectionType = navigator.connection.effectiveType;
      if (connectionType === '4g') {
        setImageQuality('high');
      } else {
        setImageQuality('low');
      }
    }

    // Preload images based on selected image quality
    const preloadImages = imageQuality === 'high' ? highQualityBackgrounds : backgrounds;
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    // Change background image every 5 seconds with a fade transition
    const intervalId = setInterval(() => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % preloadImages.length);
        setFade(false); // Trigger fade-in after the image changes
      }, 500); // Match CSS animation duration
    }, 5000);

    // Hide text after 4 seconds
    setTimeout(() => {
      setTextVisible(false); // Hide both the title and subtitle after 4 seconds
    }, 6000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [imageQuality]);

  // Track mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 50; // Adjust movement intensity
    const moveY = (clientY - centerY) / 50;

    setMousePosition({ x: moveX, y: moveY });
  };

  // Select image based on current index and image quality
  const currentImage =
    imageQuality === 'high'
      ? highQualityBackgrounds[currentIndex]
      : backgrounds[currentIndex];

  return (
    <Section classProp={hero.section} onMouseMove={handleMouseMove}>
      {/* Background Image */}
      <div
        className={`${hero.heroBackgroundWrapper} ${fade ? hero.fade : ''}`}
        style={{
          backgroundImage: `url(${currentImage})`,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      ></div>

      {/* Content Section */}
      <div
        className={hero.contentWrapper}
        style={{
          transform: `rotateX(${mousePosition.y / 2}deg) rotateY(${mousePosition.x / 2}deg)`,
        }}
      >
        {textVisible && (
          <>
            <h1 className={hero.title}>Innovate Your Space</h1>
            <p className={hero.subtitle}>
              Transforming ideas into reality with architectural brilliance.
            </p>
          </>
        )}
      </div>
    </Section>
  );
}
