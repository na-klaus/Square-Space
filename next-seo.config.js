const SEO = {
    title: "Square Space | Architecture & Engineering Consulting",
    description:
      "Square Space is an architecture and engineering consulting firm offering structured planning, interior design, NOC permissions, and legal consulting. Our expert services ensure quality, compliance, and innovative solutions.",
    canonical: "https://www.square-space.in/", // The URL of your website
  
    openGraph: {
      url: "https://www.square-space.in/", // Open Graph URL (usually the homepage URL)
      title: "Square Space | Architecture & Engineering Consulting",
      description:
        "Square Space offers innovative architectural and engineering consulting services, including structured planning, interior design, NOC permissions, and legal consulting.",
      images: [
        {
          url: "https://www.square-space.in/images/hero-image.jpg", // Replace with your hero image URL
          width: 1200,
          height: 630,
          alt: "Square Space Architecture",
          type: "image/jpeg", // Image type for the platform
        },
      ],
      site_name: "Square Space",
      profile: {
        username: "@square_space_in", // Instagram or LinkedIn username (if applicable)
      },
      locale: "en_US", // Language and region for the Open Graph metadata
    },
  
    twitter: {
      handle: "@square_space_in", // Twitter handle
      site: "@square_space_in", // Twitter site handle (or your business Twitter handle)
      cardType: "summary_large_image", // The type of Twitter Card to display (summary with large image)
    },
  
    // Additional Meta Tags for SEO
    additionalMetaTags: [
      {
        property: "keywords",
        content:
          "architecture, engineering, consulting, interior design, NOC permissions, structured planning, legal consulting, innovative solutions, construction, sustainable design, urban planning", // Add relevant keywords
      },
      {
        property: "robots",
        content: "index, follow", // Tells search engines to index the page
      },
      {
        property: "author",
        content: "Square Space", // Author of the website or content
      },
      {
        property: "og:image:alt",
        content: "Square Space Architecture Hero Image", // Alt text for Open Graph image
      },
      {
        property: "og:type",
        content: "website", // Can also be "article" or "business" depending on the content
      },
      {
        name: "twitter:image",
        content: "https://www.square-space.in/images/hero-image.jpg", // Image URL for Twitter card
      },
      {
        name: "twitter:description",
        content:
          "Square Space offers innovative architectural and engineering consulting services, including structured planning, interior design, NOC permissions, and legal consulting.",
      },
      {
        name: "twitter:title",
        content: "Square Space | Architecture & Engineering Consulting",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0", // Ensures the website is responsive
      },
      {
        name: "robots",
        content: "index, follow", // Tells search engines to index the page and follow links
      },
      {
        name: "language",
        content: "en-US", // Specifies the content language
      },
    ],
  
    // Additional Custom Metadata Tags
    facebook: {
      appId: "YOUR_FACEBOOK_APP_ID", // Optional: Include your Facebook App ID (for more granular analytics)
    },
  
    // Structured Data (JSON-LD for SEO)
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Square Space",
        url: "https://www.square-space.in/",
        logo: "https://www.square-space.in/logo.jpg", // Replace with your logo URL
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX", // Replace with your phone number
          contactType: "Customer Service",
          areaServed: "IN", // Area served by your organization
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.instagram.com/square_space_in/", // Instagram URL
          "https://www.linkedin.com/company/square-space-in/", // LinkedIn URL
          "https://twitter.com/square_space_in", // Twitter URL
          "https://www.facebook.com/square_space_in", // Facebook URL (optional)
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Square Space",
        url: "https://www.square-space.in/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.square-space.in/search?q={search_term_string}",
          query: "search_term_string",
        },
      },
    ],
  
    // Sitemap Configuration (optional)
    sitemap: {
      hostname: "https://www.square-space.in", // Your website's hostname
      generateRobotsTxt: true, // If true, generates a robots.txt file automatically
    },
  };
  
  module.exports = SEO;
  