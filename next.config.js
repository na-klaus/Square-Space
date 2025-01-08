// next.config.js
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
		  hostname: '**.githubusercontent.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: 'github.com',
		  pathname: '/Square-Space-Architects/square-space/**', // Updated path
		},
	  ],
	},
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
	  forceSwcTransforms: true, // Optional, verify if necessary
	},
};

module.exports = nextConfig;