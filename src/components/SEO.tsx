import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

export function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  const siteUrl = "https://www.paansutraa.com"; // Replace with actual URL
  const defaultImage = "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781452071/paansutraa_logo_cj3lgx.png"; // Default OG image
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* URL Slug & Canonical */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage || defaultImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Structured Data (Schema Markup) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
