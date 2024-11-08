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
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    // Automatically change background every 5 seconds
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <Section classProp={hero.section}>
      {/* Background Image with Transition */}
      <div
        className={hero.heroBackgroundWrapper}
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          transform: 'scale(1.1)',
        }}
      ></div>

      {/* Content Wrapper with Fade-In Animation */}
      <div className={hero.contentWrapper}>
        <h1 className={hero.title}>Welcome to Square Space</h1>
        <p className={hero.subtitle}>Architectural Innovation for a Better Tomorrow</p>
      </div>
    </Section>
  );
}
