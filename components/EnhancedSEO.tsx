import React from 'react';
import { Head } from 'vite-react-ssg';
import { BUSINESS, SITE_URL } from '../site-config.js';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string;
  /** Grafo JSON-LD já montado (utils/seo-schemas -> buildGraph). */
  graph?: object;
  pageType?: 'website' | 'article';
  noindex?: boolean;
  modifiedTime?: string;
}

/**
 * Meta tags e JSON-LD de cada página.
 * Um único bloco <script type="application/ld+json"> com @graph — sem
 * schemas repetidos entre componentes.
 */
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  ogImage = BUSINESS.defaultImage,
  keywords,
  graph,
  pageType = 'website',
  noindex = false,
  modifiedTime
}) => {
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const robots = noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content={BUSINESS.name} />
      <meta name="publisher" content={BUSINESS.name} />
      <meta name="copyright" content={BUSINESS.name} />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="pt_BR" />
      {modifiedTime && <meta property="og:updated_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />

      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-title" content={BUSINESS.alternateName} />
      <meta name="theme-color" content="#003D82" />

      {graph && (
        <script type="application/ld+json">{JSON.stringify(graph)}</script>
      )}
    </Head>
  );
};

export default EnhancedSEO;
