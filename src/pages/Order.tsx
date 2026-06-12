import { useEffect, useState, useMemo } from 'react';
import { SendHorizontal, Minus, Plus, AlertCircle, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sada Paan",
    desc: "Classic authentic taste",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199674/traditional-indian-betel-leaf-paan-on-a-brass-plate-over-purple-velvet-fabric_cs0sam.webp",
  },
  {
    id: 2,
    name: "Meetha Paan",
    desc: "A delightful sweet blend",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/traditional-indian-meetha-paan-with-cherry-on-golden-brass-plate-over-purple-velvet-cloth_wz69ys.webp",
  },
  {
    id: 3,
    name: "Gold Paan",
    desc: "24k gold and saffron",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/luxury-betel-leaf-paan-with-gold-leaf-and-a-cherry-on-a-golden-plate_bavsa4.webp",
  },
  {
    id: 4,
    name: "Dark Chocolate Paan",
    desc: "Rich chocolate fusion",
    img: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1781199673/chocolate-dipped-meetha-paan-with-a-cherry-on-a-golden-plate-over-purple-velvet_agv9rt.webp",
  }
];

export function Order() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: 'wedding',
    message: ''
  });

  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 50,
    2: 50,
    3: 50,
    4: 50
  });

  const [submitted, setSubmitted] = useState(false);

  const totalQuantity = useMemo(() => {
    return Object.values(quantities).reduce((a, b) => a + b, 0);
  }, [quantities]);

  const isValid = totalQuantity >= 200;

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta)
    }));
  };

  const handleInputChange = (id: number, value: string) => {
    const val = parseInt(value, 10);
    setQuantities(prev => ({
      ...prev,
      [id]: isNaN(val) ? 0 : Math.max(0, val)
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    
    // Simulate form submission
    console.log('Order submitted:', { formData, quantities, totalQuantity });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        industry: 'wedding',
        message: ''
      });
      setQuantities({ 1: 50, 2: 50, 3: 50, 4: 50 });
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background text-on-surface">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-[28px] md:text-[48px] font-bold text-secondary font-serif mb-6">Bulk Event Orders</h1>
          <p className="text-body-lg text-on-surface-variant">
            Create a custom paan experience for your guests. To maintain the highest standards of artisanal craftsmanship, our minimum total order quantity is 200 items. Mix and match across all products as you please.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Products Selector */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-headline-sm text-secondary font-serif border-b border-secondary/20 pb-4 mb-6">Select Your Indulgence</h3>
            
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col sm:flex-row items-start sm:items-center p-4 rounded-xl border border-secondary/20 bg-surface-container/30 hover:border-secondary/50 transition-colors gap-5 sm:gap-6">
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto sm:flex-1">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border border-secondary/20">
                      <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-label-lg font-serif text-secondary mb-1">{product.name}</h4>
                      <p className="text-body-sm text-on-surface-variant font-sans">{product.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-center gap-3 bg-background border border-secondary/20 rounded-full p-1 w-full sm:w-auto">
                    <button 
                      type="button" 
                      onClick={() => handleQuantityChange(product.id, -10)}
                      className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-secondary/10 text-secondary transition-colors shrink-0"
                    >
                      <Minus size={16} />
                    </button>
                    <input 
                      type="number" 
                      value={quantities[product.id] || 0}
                      onChange={(e) => handleInputChange(product.id, e.target.value)}
                      className="flex-1 sm:w-16 sm:flex-none text-center bg-transparent border-none outline-none text-label-lg font-mono text-on-surface hide-arrows"
                      min="0"
                    />
                    <button 
                      type="button" 
                      onClick={() => handleQuantityChange(product.id, 10)}
                      className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-secondary/10 text-secondary transition-colors shrink-0"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-6 mt-8 rounded-xl border ${isValid ? 'border-[#C8A96A] bg-[#C8A96A]/5' : 'border-red-900/50 bg-red-900/10'} flex flex-col md:flex-row items-center justify-between gap-4 transition-colors`}>
              <div>
                <h4 className="text-label-lg uppercase tracking-widest text-on-surface-variant mb-1">Total Quantity</h4>
                <div className="text-headline-md font-mono">
                  <span className={isValid ? 'text-secondary' : 'text-red-400'}>{totalQuantity}</span>
                  <span className="text-on-surface-variant"> items</span>
                </div>
              </div>
              
              {!isValid ? (
                <div className="flex items-center gap-2 text-red-400 text-body-sm font-medium px-4 py-2 bg-red-900/20 rounded-full border border-red-900/30">
                  <AlertCircle size={16} /> Minimum 200 required
                </div>
              ) : (
                <div className="flex items-center gap-2 text-secondary text-body-sm font-medium px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <CheckCircle2 size={16} /> Requirement met
                </div>
              )}
            </div>
          </div>

          {/* Form Details */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 border border-secondary/20 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-headline-sm text-secondary font-serif mb-8 text-center md:text-left">Your Information</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/40">
                    <CheckCircle2 size={40} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-headline-sm text-secondary font-serif mb-2">Request Received</h4>
                    <p className="text-on-surface-variant max-w-sm">
                      Thank you for your interest. Our partnership team will contact you shortly to finalize your bespoke order.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left flex flex-col">
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
                      placeholder="e.g. Royal Events Ltd."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Mobile</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors"
                        placeholder="+91"
                      />
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
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Industry</label>
                    <select 
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors appearance-none"
                    >
                      <option value="wedding">Wedding / Private Events</option>
                      <option value="hotel">Hotel / Resort</option>
                      <option value="restaurant">Restaurant / Fine Dining</option>
                      <option value="cafe">Cafe / Lounge</option>
                      <option value="corporate">Corporate Gifting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Special Remarks (Optional)</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-secondary/20 rounded-none px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none"
                      placeholder="Any specific packaging or customization requirements?"
                    />
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={!isValid}
                      className={`w-full py-4 uppercase tracking-widest text-label-md transition-colors flex items-center justify-center gap-2 ${
                        isValid 
                          ? 'bg-secondary text-on-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/10' 
                          : 'bg-surface-container border border-secondary/20 text-on-surface-variant opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {isValid ? 'Send Request' : 'Minimum Request: 200'}
                      <SendHorizontal size={18} />
                    </button>
                    {!isValid && (
                      <p className="text-center text-red-400 text-body-sm mt-3">
                        Please select {200 - totalQuantity} more items to proceed.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
