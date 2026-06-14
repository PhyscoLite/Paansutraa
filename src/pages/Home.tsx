import { Hero } from '../components/Hero';
import { BrandVideo } from '../components/BrandVideo';
import { Features } from '../components/Features';
import { ProductShowcase } from '../components/ProductShowcase';
import { WhoWeServe } from '../components/WhoWeServe';
import { ServiceHighlights } from '../components/ServiceHighlights';
import { SocialProof } from '../components/SocialProof';
import { BrandStory } from '../components/BrandStory';
import { ContactForm } from '../components/ContactForm';
import { ValueProps } from '../components/ValueProps';
import { InstagramFeed } from '../components/InstagramFeed';
import { SEO } from '../components/SEO';

export function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Paansutraa",
    "url": "https://www.paansutraa.com",
    "logo": "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781452071/paansutraa_logo_cj3lgx.png"
  };

  return (
    <main>
      <SEO 
        title="Paansutraa | India's Premium Artisanal Luxury Paan"
        description="Experience the royalty of after-meal moments. Paansutraa offers premium, handcrafted luxury paan for weddings, hotels, corporate gifting, and fine dining."
        canonical="/"
        schema={schema}
      />
      <Hero />
      <BrandVideo />
      <Features />
      <ProductShowcase />
      <WhoWeServe />
      <ServiceHighlights />
      <SocialProof />
      <BrandStory />
      <ContactForm />
      <ValueProps />
      <InstagramFeed />
    </main>
  );
}
