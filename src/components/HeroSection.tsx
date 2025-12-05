import cryptoHero from "@/assets/crypto-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, hsl(25 70% 55% / 0.08) 0%, transparent 60%)"
        }}
      />
      
      {/* Hero image container */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src={cryptoHero}
          alt="Futuristic blockchain network visualization with glowing cubes and crypto elements"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Bottom gradient fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to top, hsl(220 15% 6%) 0%, transparent 100%)"
          }}
        />
        
        {/* Side gradients */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-20 pointer-events-none"
          style={{
            background: "linear-gradient(to right, hsl(220 15% 6%) 0%, transparent 100%)"
          }}
        />
        <div 
          className="absolute top-0 bottom-0 right-0 w-20 pointer-events-none"
          style={{
            background: "linear-gradient(to left, hsl(220 15% 6%) 0%, transparent 100%)"
          }}
        />
      </div>

      {/* Floating nodes decoration */}
      <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-primary/60 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-gold/50 animate-float-delayed" />
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-accent/40 animate-float" />
    </section>
  );
};

export default HeroSection;
