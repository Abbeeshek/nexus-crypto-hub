import BlockchainLogo from "@/components/BlockchainLogo";
import HeroSection from "@/components/HeroSection";
import TitleSection from "@/components/TitleSection";
import OverviewSection from "@/components/OverviewSection";
import OfferingsSection from "@/components/OfferingsSection";
import AudienceSection from "@/components/AudienceSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, hsl(220 15% 6%) 0%, hsl(220 15% 6% / 0.8) 50%, transparent 100%)"
          }}
        />
        <div className="relative">
          <BlockchainLogo />
        </div>
      </header>

      {/* Main content */}
      <main>
        <HeroSection />
        <TitleSection />
        <OverviewSection />
        <OfferingsSection />
        <AudienceSection />
        <MissionSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Crypto & Blockchain Association — Network Global
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
