const SEO = {
  title: "Square Space | Architecture & Engineering Consulting",
  description:
    "Square Space is an architecture and engineering consulting firm offering structured planning, interior design, NOC permissions, and legal consulting. Our expert services ensure quality, compliance, and innovative solutions.",
  canonical: "https://www.square-space.in/",

  openGraph: {
    url: "https://www.square-space.in/",
    title: "Square Space | Architecture & Engineering Consulting",
    description:
      "Square Space offers innovative architectural and engineering consulting services, including structured planning, interior design, NOC permissions, and legal consulting.",
    images: [
      {
        url: "https://www.square-space.in/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Square Space Architecture",
        type: "image/jpeg",
      },
    ],
    site_name: "Square Space",
    profile: {
      username: "square_space_architect", // Updated Instagram handle
    },
    locale: "en_US",
  },

  twitter: {
    handle: "@square_space_ar", // Updated Twitter handle
    site: "@square_space_ar", // Updated Twitter site handle
    cardType: "summary_large_image",
  },

  // Additional Meta Tags for SEO
  additionalMetaTags: [
    {
      property: "keywords",
      content:
        "architecture, engineering, consulting, interior design, NOC permissions, structured planning, legal consulting, innovative solutions, construction, sustainable design, urban planning",
    },
    {
      property: "robots",
      content: "index, follow",
    },
    {
      property: "author",
      content: "Square Space",
    },
    {
      property: "og:image:alt",
      content: "Square Space Architecture Hero Image",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:image",
      content: "https://www.square-space.in/images/hero-image.jpg",
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
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "language",
      content: "en-US",
    },
  ],

  // Additional Custom Metadata Tags
  facebook: {
    appId: "", // Optional: Include your Facebook App ID (if applicable)
  },

  // Structured Data (JSON-LD for SEO)
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Square Space",
      url: "https://www.square-space.in/",
      logo: "https://www.square-space.in/logo.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9324555058",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.instagram.com/square_space_architect/", // Updated Instagram URL
        "https://x.com/square_space_ar", // Updated Twitter URL
        "https://www.linkedin.com/company/square-space-1/?viewAsMember=true",
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
    hostname: "https://www.square-space.in",
    generateRobotsTxt: true,
  },
};

module.exports = SEO;
