import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Square Space - Architects and Consulting Engineers</title>
                <meta
                    name="description"
                    content="Square Space - Experts in architecture, legal consulting, structured planning, interior designing, NOC, and building permissions. Discover our projects and services."
                />

                {/* PWA Meta Tags */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Square Space" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#ffffff" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <link rel="canonical" href="https://www.square-space.in/" />
                <meta name="license" content="MIT License" />
                <meta httpEquiv="content-language" content="en-us" />

                <link rel="preconnect" href="https://www.square-space.in/" />
                <link rel="dns-prefetch" href="https://www.square-space.in/" />

                <meta name="author" content="Square Space" />

                <link rel="alternate" hrefLang="en" href="https://www.square-space.in/" />

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />

                <link rel="apple-touch-icon" href="/img/logo_rounded.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
                <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <link rel="manifest" href="/manifest.json" />

                <meta
                    property="og:title"
                    content="Square Space - Architects and Consulting Engineers"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Square Space - Experts in architecture, legal consulting, structured planning, interior designing, NOC, and building permissions. Discover our projects and services."
                />
                <meta
                    property="og:image"
                    content="https://www.square-space.in/img/logo_rounded.png"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://www.square-space.in/img/logo_rounded.png"
                />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:alt" content="Square Space" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:url" content="https://www.square-space.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Square Space" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="https://twitter.com/square_space_in" />
                <meta
                    name="twitter:title"
                    content="Square Space - Architects and Consulting Engineers"
                />
                <meta
                    name="twitter:description"
                    content="Square Space - Experts in architecture, legal consulting, structured planning, interior designing, NOC, and building permissions. Discover our projects and services."
                />
                <meta
                    name="twitter:image"
                    content="https://www.square-space.in/img/logo_rounded.png"
                />
                <meta name="twitter:creator" content="https://twitter.com/square_space_in" />
                <meta name="twitter:domain" content="https://www.square-space.in/" />

                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="2048x2732"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="1668x2224"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="1536x2048"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="1125x2436"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="1242x2208"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="750x1334"
                />
                <link
                    rel="apple-touch-startup-image"
                    href="/img/logo_rounded.png"
                    sizes="640x1136"
                />

                <meta
                    name="keywords"
                    content="
    Square Space, Architects, Consulting Engineers, Structured Planning, Interior Designing, 
    NOC, Building Permissions, Legal Consulting, Project Management, Architecture, Construction, 
    Square Space Portfolio, Engineering Services, Civil Engineering, Building Design, Urban Planning, 
    Residential Projects, Commercial Projects, Construction Consulting, Real Estate, Infrastructure 
    Development, Square Space Projects, Engineering Consulting, Architectural Design, 
    Construction Services, Bhiwandi Architecture, Maharashtra Engineering, Indian Real Estate,
    Urban Development, Building Planning, Structural Engineering, Infrastructure Projects"
                />

                <meta name="google-adsense-account" content="" />
                <Script
                    async
                    src={``}
                    strategy="lazyOnload"
                    crossOrigin="anonymous"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Square Space",
          "url": "https://www.square-space.in/",
          "logo": "https://www.square-space.in/img/logo_rounded.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9324555058",
            "contactType": "Customer Service"
          },
          "sameAs": [
            "https://www.facebook.com/square-space.in",
            "https://www.linkedin.com/company/square-space-in",
            "https://twitter.com/square_space_in"
          ]
        }`
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Square Space provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Square Space offers architectural design, legal consulting, structured planning, interior designing, NOC, and building permissions."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Square Space located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Square Space is located in Bhiwandi, Maharashtra, India."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact Square Space?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact Square Space at +91-9324555058 or via email at info@square-space.in."
                }
              }
            ]
          }
        `,
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.square-space.in/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://www.square-space.in/about"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Services",
              "item": "https://www.square-space.in/services"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://www.square-space.in/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Contact",
              "item": "https://www.square-space.in/contact"
            }]
          }
        `,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
