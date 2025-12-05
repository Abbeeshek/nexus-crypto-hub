const audiences = [
  "Crypto beginners",
  "Blockchain developers",
  "Investors",
  "Traders",
  "Web3 learners",
  "Tech entrepreneurs",
];

const AudienceSection = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="card-crypto p-8 md:p-12">
          <h2 className="text-sm font-medium tracking-crypto uppercase text-primary mb-6">
            Who Is This For?
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {audiences.map((audience, index) => (
              <span
                key={audience}
              className="px-4 py-2 rounded-full border border-border/50 bg-secondary/50 text-secondary-foreground text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
