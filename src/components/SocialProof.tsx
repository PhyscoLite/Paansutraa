export function SocialProof() {
  const reviews = [
    {
      text: `"Paansutraa has completely transformed our guest's post-dining experience. The quality is unparalleled."`,
      author: "F&B Director, The Oberoi"
    },
    {
      text: `"The perfect blend of tradition and modernity. Our wedding clients absolutely love the bespoke packaging."`,
      author: "Lead Planner, Wedding Design Hub"
    },
    {
      text: `"Finally, a hygienic and premium paan experience that fits our brand's global standards."`,
      author: "Managing Director, Taj Group"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-surface-container-lowest">
      <div className="px-5 md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-md text-center text-secondary mb-12 md:mb-20">Trusted by Hospitality Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-6 md:p-8 border border-secondary/10 bg-background italic">
              <p className="mb-6 text-on-surface-variant text-body-md">{review.text}</p>
              <div className="text-label-md text-secondary">— {review.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
