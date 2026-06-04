/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandVideo } from './components/BrandVideo';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { HoReCaTeaser } from './components/HoReCaTeaser';
import { WeddingTeaser } from './components/WeddingTeaser';
import { CorporateGifting } from './components/CorporateGifting';
import { SocialProof } from './components/SocialProof';
import { BrandStory } from './components/BrandStory';
import { ValueProps } from './components/ValueProps';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandVideo />
        <Features />
        <ProductShowcase />
        <HoReCaTeaser />
        <WeddingTeaser />
        <CorporateGifting />
        <SocialProof />
        <BrandStory />
        <ValueProps />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
