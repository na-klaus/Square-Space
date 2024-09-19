const withPWA = require('next-pwa')({
	disable: process.env.NODE_ENV === 'development',
	dest: 'public',
	scope: '/',
	sw: 'service-worker.js', // Service worker file name
	register: true, // Register service worker
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
	images: {
	  domains: [
		'images.unsplash.com',
		
		// Add other domains if needed
	  ],
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: '**.vercel.app',
		  pathname: '/api/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.cloudinary.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.shields.io',
		  pathname: '/badge/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.shields.io',
		  pathname: '/github/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.githubusercontent.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.medium.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: '**.dev.to',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: 'github.com',
		  pathname: '/na-klaus/square-space/**',
		},
	  ],
	},
	webpack: (config) => {
	  // Add your custom Webpack configurations here
	  return config;
	},
	reactStrictMode: true,
	env: {
	  dir: '/',
	},
	swcMinify: true,
	experimental: {
	  forceSwcTransforms: true,
	},
  };
  
  // Export the combined configuration with PWA
  module.exports = withPWA(nextConfig);
  