export function ProductShowcase() {
  const products = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEuKoe3bBYfq6PMZ_h1BW7zU6evSYvpjw1C5CIgztt8B9YBp5TN_Qehk_Pe3TOKs3vgSq8s8Kn8TgLIY8Pnd6W6Re--zjHQtaVIr1CoyQa6Xd-TPuXgmx9Pn4OkOyyXMBNo5oIu0cJaFI8C6wp2xVULBMJgUIO4aLzN0eqs4gHGHESq1TA8qWkq6rQsf3X-qQ0ALNTnV6V1XUnp-iNNvaI1qLtLjqrrUEvXkD8BzOKRvQDcA1NoxMWXaG6U2hGubpvE2QiaatCr9Qa",
      name: "The Royal Gold Reserve",
      desc: "Infused with 24k edible gold dust and Kashmiri saffron.",
      price: "₹2,499.00"
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3eNkYnexZqz1aNNhtUNF4wZd8hmiv2LKtXYO4pJlF6ckvrXk-VIzsfIjW6wrujzL8iGMsePl7Eg5xz4gf4-W6bvq8BW2sD1V_fir5ZOT4hh7XzA2peKKS2bmaHQ1e0_J9sCBprG2dJoc-RLRFEyc-7w5EvaqHsjSMB4fUnRRH7baubQ3YEJqnrAq3teZMt1tvF7kb_6BGzx7BUYy4aRBFy_yxKuJQW_jiEZGPGXNScgNh_CowUdW6KHRQDlIImqNkIaR5K2g_0p1Z",
      name: "Heritage Emerald Blend",
      desc: "A classic recipe passed down through generations of master blenders.",
      price: "₹1,850.00"
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCD0i7htKzXTrLdLvXd96u9bJvawY8ot_Td2rjl_lb4DtDyEnRbNUPWdzrNs56nOZWwykEMAg7P3-jq91WOW9L8pJxYVI7RjGCSs-PwJ-ZDcyhsISKdZZJLfwqRtr4LFm8wGFBCTlBbMIpxogt2NjIBxtxszEwvJM_B_qfY2eFgnuCY0R0oEa90t2jiGBnmS-Zoic0RPVkMWSOt07t0WLx0hI2XBTLPEF8VwiYw2warH0cljDo1sTNuMYVyyHJyYs5ib8c73exKSaa",
      name: "Saffron Infusion Box",
      desc: "Modern pairings meet traditional aromatics in this limited edition set.",
      price: "₹2,100.00"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-surface-container-low overflow-hidden">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto flex justify-between items-end mb-8 md:mb-16">
        <h2 className="text-headline-lg text-secondary">Our Signature Collection</h2>
        <button className="hidden sm:inline-block text-secondary border-b border-secondary pb-1 text-label-md uppercase tracking-widest hover:opacity-80">
          View Full Collection
        </button>
      </div>
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-12 px-5 md:px-margin-desktop snap-x">
        {products.map((p, i) => (
          <div key={i} className="w-[180px] sm:w-[220px] md:w-[260px] snap-center shrink-0">
            <div className="aspect-[4/5] bg-surface-container-highest mb-4 overflow-hidden border border-secondary/10">
              <img 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                alt={p.name} 
                src={p.img} />
            </div>
            <h4 className="font-serif text-lg md:text-xl font-semibold text-on-surface mb-2">{p.name}</h4>
            <p className="text-on-surface-variant text-sm md:text-base mb-3 line-clamp-2 md:line-clamp-none">{p.desc}</p>
            <div className="text-secondary font-serif text-lg md:text-xl font-semibold">{p.price}</div>
          </div>
        ))}
      </div>
      <div className="px-5 sm:hidden mt-4 flex justify-center">
        <button className="inline-block text-center text-secondary border-b border-secondary pb-1 text-label-md uppercase tracking-widest hover:opacity-80">
          View Full Collection
        </button>
      </div>
    </section>
  );
}
