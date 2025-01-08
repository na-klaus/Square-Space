/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
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
		  hostname: 'raw.githubusercontent.com',
		  pathname: '/Square-Space-Architects/square-space/**', // Updated path
		},
		{
		  protocol: 'https',
		  hostname: 'images.unsplash.com',
		  pathname: '/**', // Assuming images are under this path
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
  