const MissionSection = () => {
  return (
    <section className="relative py-16 px-6">
      {/* Background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, hsl(25 70% 55% / 0.04) 0%, transparent 50%)"
        }}
      />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="card-crypto p-8 md:p-12 border-primary/20">
          <h2 className="text-sm font-medium tracking-crypto uppercase text-primary mb-6">
            Our Mission
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
            To build a global blockchain-powered community where{" "}
            <span className="text-gradient-gold font-medium">innovation</span> and{" "}
            <span className="text-gradient-gold font-medium">financial freedom</span>{" "}
            become accessible to everyone.
          </p>
          
          {/* Decorative elements */}
          <div className="mt-8 flex items-center gap-2">
            <div className="w-8 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
