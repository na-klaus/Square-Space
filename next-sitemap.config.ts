const siteUrl = 'https://www.square-space.in'; // Replace with your website's URL

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true, // Generates a robots.txt file
    outDir: './public', // The output directory path

    // Customizing the sitemap paths
    transform: async (config: { siteUrl: any; }, path: any) => {
        return {
            loc: `${config.siteUrl}${path}`, // Full URL of the page
            lastmod: new Date().toISOString(), // Last modified date
            changefreq: 'daily', // Frequency of updates
            priority: 1.0, // Priority of the page (1.0 is highest)
        };
    },

    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*', // Applies to all user agents
                allow: '/', // Allow all pages to be indexed
            },
        ],
        additionalSitemaps: [`${siteUrl}/sitemap.xml`], // Reference to your sitemap URL
    },
};
