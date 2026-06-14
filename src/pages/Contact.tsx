import { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';

export function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="pt-24 min-h-screen">
      <SEO 
        title="Contact Us | Paansutraa"
        description="Get in touch with Paansutraa for general inquiries, wholesale partnerships, or event catering."
        canonical="/contact"
      />
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto text-center mb-12">
        <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-6">Contact Us</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We would love to hear from you. Discover how Paansutraa can elevate your next event or business offering.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
