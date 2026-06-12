import { Hero } from '../components/Hero';
import { BrandVideo } from '../components/BrandVideo';
import { Features } from '../components/Features';
import { ProductShowcase } from '../components/ProductShowcase';
import { WhoWeServe } from '../components/WhoWeServe';
import { HoReCaTeaser } from '../components/HoReCaTeaser';
import { WeddingTeaser } from '../components/WeddingTeaser';
import { SocialProof } from '../components/SocialProof';
import { BrandStory } from '../components/BrandStory';
import { ContactForm } from '../components/ContactForm';
import { ValueProps } from '../components/ValueProps';
import { InstagramFeed } from '../components/InstagramFeed';

export function Home() {
  return (
    <main>
      <Hero />
      <BrandVideo />
      <Features />
      <ProductShowcase />
      <WhoWeServe />
      <HoReCaTeaser />
      <WeddingTeaser />
      <SocialProof />
      <BrandStory />
      <ContactForm />
      <ValueProps />
      <InstagramFeed />
    </main>
  );
}
