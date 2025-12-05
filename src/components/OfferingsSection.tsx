import { BookOpen, Code2, Coins, Shield, Briefcase, Rocket } from "lucide-react";

const offerings = [
  {
    icon: BookOpen,
    title: "Crypto Education & Market Understanding",
    description: "Blockchain basics, trading, tokenomics",
  },
  {
    icon: Code2,
    title: "Blockchain Development & Smart Contracts",
    description: "DApps, Solidity, NFTs",
  },
  {
    icon: Coins,
    title: "Decentralized Finance (DeFi) Ecosystem",
    description: "Staking, liquidity pools, passive earnings",
  },
  {
    icon: Shield,
    title: "Security & Wallet Management",
    description: "Safe wallet usage and fraud prevention",
  },
  {
    icon: Briefcase,
    title: "Web3 Opportunities & Career Growth",
    description: "Jobs, DAOs, freelancing, entrepreneurship",
  },
  {
    icon: Rocket,
    title: "Project Launch & Community Building",
    description: "Token launches, utilities, and Web3 ecosystems",
  },
];

const OfferingsSection = () => {
  return (
    <section className="relative py-16 px-6">
      {/* Background accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(25 70% 55% / 0.03) 0%, transparent 50%)"
        }}
      />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium tracking-crypto uppercase text-primary mb-3">
            What We Offer
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="card-crypto p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
