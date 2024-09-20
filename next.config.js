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
		  pathname: '/Square-Space-Architects/square-space/**', // Updated path
		},
	  ],
	},
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
	  forceSwcTransforms: true, // Ensure this is necessary
	},
	// Optional: Remove or customize if not needed
	// webpack: (config) => {
	//   return config;
	// },
	// env: {
	//   // Remove if not needed
	// },
  };
  
  module.exports = nextConfig;
  