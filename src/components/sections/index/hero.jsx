import React, { useState, useEffect } from 'react';
import Section from '../../structure/section';
import Image from 'next/image';
import hero from '../../../styles/scss/sections/index/hero.module.scss';

export default function Hero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Start transition effect
      setIsTransitioning(true);

      // After the transition effect ends, change the image
      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setIsTransitioning(false);
      }, 1400); // Matches the CSS transition duration (2 seconds)
    }, 4000); // Duration between image changes

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // Render the background image with dissolve and zoom effect
  const renderBackground = () => {
    const currentBackground = backgrounds[backgroundIndex];
    return (
      <div className={hero.heroBackgroundWrapper}>
        <Image
          src={currentBackground}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={backgroundIndex === 0}
          alt="background"
          key={currentBackground}
          className={`${hero.heroBackground} ${isTransitioning ? hero.transitionEffect : hero.activeImage}`}
        />
      </div>
    );
  };

  return (
    <Section classProp={hero.section}>
      <div className={hero.heroBackgroundContainer}>{renderBackground()}</div>
      <div className={hero.contentWrapper}>
        <h1 className={hero.title}>Welcome to Square Space</h1>
        <p className={hero.subtitle}>Architectural Innovation for a Better Tomorrow</p>
        <button className={hero.ctaButton} onClick={() => window.location.href = 'http://square-space.in/signin'}>
          Get in Touch
        </button>
      </div>
    </Section>
  );
}
