import { useState } from 'react';
import { SendHorizontal, Mail, MapPin } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our team will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 md:py-32 bg-primary-container relative overflow-hidden text-center md:text-left">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-[28px] font-bold text-secondary font-serif mb-6">Let's Craft an Experience</h2>
            <p className="text-body-lg text-on-surface-variant mb-8 max-w-lg">
              Whether you're looking to elevate your restaurant's after-meal offerings, curate a luxurious wedding experience, or inquire about wholesale partnerships, our team is here to assist you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="bg-surface-container/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors text-left">
                <h4 className="text-label-lg text-on-surface uppercase tracking-widest mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" /> Contact
                </h4>
                <p className="text-on-surface-variant mb-2 text-body-md hover:text-secondary cursor-pointer transition-colors">info@paansutraa.com</p>
                <p className="text-on-surface-variant text-body-md hover:text-secondary cursor-pointer transition-colors">+91 (800) 123-4567</p>
              </div>
              <div className="bg-surface-container/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors text-left">
                <h4 className="text-label-lg text-on-surface uppercase tracking-widest mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary" /> Location
                </h4>
                <p className="text-on-surface-variant text-body-md">
                  Luxury Paan Creations Ltd.<br />
                  123 Heritage Boulevard<br />
                  New Delhi, 110001
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 border border-secondary/20 rounded-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="text-headline-sm text-secondary font-serif mb-8 text-center md:text-left">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Inquiry Type</label>
                <select 
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors appearance-none"
                >
                  <option value="general">General Question</option>
                  <option value="wedding">Wedding Orders</option>
                  <option value="horeca">HoReCa Partnership</option>
                  <option value="corporate">Corporate Gifting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-secondary text-on-secondary py-4 uppercase tracking-widest text-label-md hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <SendHorizontal size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
