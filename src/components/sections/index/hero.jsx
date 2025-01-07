import React, { useState, useEffect } from 'react';
import Section from '../../structure/section';
import hero from '../../../styles/scss/sections/index/hero.module.scss';

export default function Hero() {
  const backgrounds = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
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

  useEffect(() => {
    // Change background image every 5 seconds with a fade transition
    const intervalId = setInterval(() => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setFade(false); // Trigger fade-in after the image changes
      }, 500); // Match CSS animation duration
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Track mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (clientX - centerX) / 50; // Adjust movement intensity
    const moveY = (clientY - centerY) / 50;

    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <Section classProp={hero.section} onMouseMove={handleMouseMove}>
      {/* Background Image */}
      <div
        className={`${hero.heroBackgroundWrapper} ${fade ? hero.fade : ''}`}
        style={{
          backgroundImage: `url(${backgrounds[currentIndex]})`,
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
        <h1 className={hero.title}>Innovate Your Space</h1>
        <p className={hero.subtitle}>
          Transforming ideas into reality with architectural brilliance.
        </p>
        
      </div>
    </Section>
  );
}
