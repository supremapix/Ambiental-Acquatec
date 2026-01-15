import React from 'react';
import { Head } from 'vite-react-ssg';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string;
  schemas?: object[];
  pageType?: 'website' | 'article' | 'product' | 'service' | 'local_business';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png',
  keywords,
  schemas = [],
  pageType = 'website',
  publishedTime,
  modifiedTime,
  author = 'Acquatec Calhas e Telhados',
  section
}) => {
  const siteUrl = 'https://www.acquateccalhas.com.br';
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'Acquatec Calhas e Telhados',
    alternateName: 'Acquatec',
    url: siteUrl,
    logo: `${siteUrl}/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png`,
    image: `${siteUrl}/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png`,
    description: 'Especialistas em calhas e telhados há 25 anos em Curitiba e Região Metropolitana.',
    telephone: '+55 41 3053-5740',
    email: 'contato@acquateccalhas.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Curitiba',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '80000-000',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.4284,
      longitude: -49.2733
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -25.4284,
        longitude: -49.2733
      },
      geoRadius: '100000'
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/acquateccalhas',
      'https://www.instagram.com/acquateccalhas'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: fullOgImage
    },
    datePublished: publishedTime || '2024-01-01',
    dateModified: modifiedTime || new Date().toISOString().split('T')[0],
    inLanguage: 'pt-BR'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Acquatec Calhas e Telhados',
    description: 'Especialistas em instalação e manutenção de calhas e telhados em Curitiba',
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/busca?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'pt-BR'
  };

  const allSchemas = [organizationSchema, websiteSchema, webPageSchema, ...schemas];

  return (
    <Head>
      <title>{title}</title>
      
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta name="author" content={author} />
      <meta name="publisher" content="Acquatec Calhas e Telhados" />
      <meta name="copyright" content="Acquatec Calhas e Telhados" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      <link rel="canonical" href={canonical} />
      
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Acquatec Calhas e Telhados" />
      <meta property="og:locale" content="pt_BR" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />
      
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Acquatec" />
      
      <meta name="theme-color" content="#003D82" />
      <meta name="msapplication-TileColor" content="#003D82" />
      
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
};

export default EnhancedSEO;
