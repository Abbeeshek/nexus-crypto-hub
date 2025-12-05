const TitleSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 text-center">
      {/* Glow effect behind title */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, hsl(25 70% 55% / 0.06) 0%, transparent 50%)"
        }}
      />
      
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Crypto & Blockchain</span>
          <br />
          <span className="text-gradient-gold">Association</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground tracking-wide max-w-2xl mx-auto">
          Empowering the world with decentralized innovation.
        </p>
        
        {/* Decorative line */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rotate-45 bg-primary/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
