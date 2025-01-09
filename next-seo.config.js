const SEO = {
  title: "Square Space | Top Architects & Engineering Consultants in Bhiwandi",
  description:
    "Looking for architects in Bhiwandi? Square Space offers the best architecture and engineering consulting services in Bhiwandi, including structured planning, interior design, NOC permissions, and legal consulting.",
  canonical: "https://www.square-space.in/",

  openGraph: {
    url: "https://www.square-space.in/",
    title: "Square Space | Top Architects & Engineering Consultants in Bhiwandi",
    description:
      "Square Space specializes in architectural and engineering services in Bhiwandi, offering tailored solutions for structured planning, interior design, and legal compliance.",
    images: [
      {
        url: "https://www.square-space.in/images/logo.jpg", // Your logo path
        width: 1200,
        height: 630,
        alt: "Square Space - Top Architects in Bhiwandi",
        type: "image/jpeg",
      },
    ],
    site_name: "Square Space",
    locale: "en_US",
  },

  twitter: {
    handle: "@square_space_ar",
    site: "@square_space_ar",
    cardType: "summary_large_image",
  },

  additionalMetaTags: [
    {
      property: "keywords",
      content:
        "Square Space Architect, Square Space in Bhiwandi, architects in Bhiwandi, engineering consultants Bhiwandi, interior design Bhiwandi, NOC permissions Bhiwandi, best architecture firm Bhiwandi, Square Space services, architecture planning Bhiwandi, Bhiwandi architects and engineers",
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
      content: "Square Space - Top Architects in Bhiwandi",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:image",
      content: "https://www.square-space.in/images/logo.jpg",
    },
    {
      name: "twitter:description",
      content:
        "Square Space provides top-notch architecture and engineering consulting services in Bhiwandi, specializing in structured planning and interior design.",
    },
    {
      name: "twitter:title",
      content: "Square Space | Top Architects & Engineering Consultants in Bhiwandi",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "geo.region",
      content: "IN-MH",
    },
    {
      name: "geo.placename",
      content: "Bhiwandi",
    },
    {
      name: "geo.position",
      content: "19.2822956;73.0743314",
    },
  ],

  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Square Space",
      url: "https://www.square-space.in/",
      logo: "https://www.square-space.in/images/logo.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9324555058",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.instagram.com/square_space_architect/",
        "https://x.com/square_space_ar",
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
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Square Space",
      image: "https://www.square-space.in/images/logo.jpg",
      "@id": "https://www.square-space.in/",
      url: "https://www.square-space.in/",
      telephone: "+91-9324555058",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, LM Tower, 206/207, Bhiwandi - Murbad Rd, Vishal Wadi, Bhadwad Naka, Sonale Village",
        addressLocality: "Bhiwandi",
        addressRegion: "Maharashtra",
        postalCode: "421302",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.2822956,
        longitude: 73.0743314,
      },
      openingHours: "Mo-Fr 09:00-18:00",
      sameAs: [
        "https://www.instagram.com/square_space_architect/",
        "https://x.com/square_space_ar",
        "https://www.linkedin.com/company/square-space-1",
      ],
    },
  ],

  sitemap: {
    hostname: "https://www.square-space.in",
    generateRobotsTxt: true,
  },
};

module.exports = SEO;
