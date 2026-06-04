export function CorporateGifting() {
  return (
    <section className="py-16 md:py-32">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <img 
              className="border border-secondary/10" 
              alt="An executive's office desk" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1zp3WDU8xopKMVK8xGQByCmCAYRBGZWqmixoO3qxmMcxxt6HBU17pf3Mhr9NwJVbBOdySBJCY5lRjLG11ErFyux9J3qakDLETGqlVfoxwdVJUOfz7bAlkiB5F-moKGMtHrbBv2-82-Yy-3qYz4XBF8V1dEABAFGCGV1g1pHHPqdrQcLnFkRFaH9BSjNew_KVxlyDXO7TEoS1OpbtZzfvYWei2T9qfY0WKuh9H8_zOTGzMNft4nGO_lW5cXj8pvierz1xmm2ttZc31" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-headline-lg text-secondary mb-6">Thoughtful Gifts. Lasting Impressions.</h2>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Establish prestige and build deeper connections with our executive gifting collections.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-4 py-2 bg-primary-container text-secondary text-label-md">Diwali Collections</span>
              <span className="px-4 py-2 bg-primary-container text-secondary text-label-md">Client Appreciation</span>
              <span className="px-4 py-2 bg-primary-container text-secondary text-label-md">Employee Recognition</span>
            </div>
            <button className="bg-secondary text-on-secondary w-full sm:w-auto px-6 py-4 md:px-10 text-label-md uppercase tracking-widest active:scale-95 transition-transform">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
