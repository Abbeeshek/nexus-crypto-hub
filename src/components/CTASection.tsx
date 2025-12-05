import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Background effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(25 70% 55% / 0.08) 0%, transparent 60%)"
        }}
      />
      
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Top decorative line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-2 h-2 rotate-45 border border-primary/60" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/40" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Join the Crypto & Blockchain
          <br />
          <span className="text-gradient-gold">Association</span>
        </h2>
        
        <Button 
          size="lg"
          className="group relative px-8 py-6 text-lg font-medium bg-gradient-to-r from-primary via-accent to-copper text-primary-foreground rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 glow-gold hover:glow-gold-strong"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer opacity-30" />
        </Button>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Be part of the decentralized future
        </p>
      </div>
    </section>
  );
};

export default CTASection;
