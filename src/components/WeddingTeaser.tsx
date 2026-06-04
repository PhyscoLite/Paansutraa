export function WeddingTeaser() {
  return (
    <section className="relative h-[400px] md:h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-[0.4]" 
          alt="A grand Indian wedding banquet hall" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwx_qOC_QL7n7Gm3WZVDdVcHWkRf7NlIT51OWCtzlwvxZzBTemtEglZrLAANRgWTiaoPdVsaF9ntUJh1pfHnbNPRH3CqXVaTfmy5qqq01VFTqz-bRG0ZkRHmwPHDtYlJxIcQnya5FeMyBwngAUQi4SnEW35FUL7BcSgPh4amvTjEwH4m5bbtTNcb7HmeAJU_tQXUv6CX0JH0ZuxsA3gWkRYpempAHpU4cx3AJ3qvuiF8FlSqAniDilumKF-cnerS1QlBSV5zqdHEkc" />
      </div>
      <div className="relative z-10 px-5 md:px-margin-desktop max-w-container-max mx-auto text-center w-full">
        <h2 className="text-headline-lg text-secondary mb-8">Luxury Wedding Experiences</h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-body-lg mb-12">
          From bespoke favor boxes to live artisanal counters, add a touch of regal tradition to your most memorable day.
        </p>
        <button className="bg-secondary text-on-secondary w-full sm:w-auto px-6 py-4 md:px-10 text-label-md uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
          Explore Wedding Solutions
        </button>
      </div>
    </section>
  );
}
