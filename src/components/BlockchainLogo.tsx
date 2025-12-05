const BlockchainLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse-glow"
      >
        {/* Outer hexagon frame */}
        <path
          d="M22 2L40 12V32L22 42L4 32V12L22 2Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="hsl(220 15% 8%)"
        />
        
        {/* Inner blockchain cube - front face */}
        <path
          d="M22 14L32 20V30L22 36L12 30V20L22 14Z"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="hsl(220 15% 6%)"
        />
        
        {/* Cube top face */}
        <path
          d="M22 14L32 20L22 26L12 20L22 14Z"
          fill="url(#goldGradientFill)"
          fillOpacity="0.15"
        />
        
        {/* Center vertical line */}
        <line
          x1="22"
          y1="26"
          x2="22"
          y2="36"
          stroke="url(#goldGradient)"
          strokeWidth="1"
        />
        
        {/* Connection nodes */}
        <circle cx="22" cy="14" r="2" fill="url(#goldGradientFill)" className="animate-node-pulse" />
        <circle cx="32" cy="20" r="1.5" fill="url(#goldGradientFill)" opacity="0.7" />
        <circle cx="12" cy="20" r="1.5" fill="url(#goldGradientFill)" opacity="0.7" />
        <circle cx="22" cy="36" r="1.5" fill="url(#goldGradientFill)" opacity="0.7" />
        
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25 70% 55%)" />
            <stop offset="50%" stopColor="hsl(35 80% 60%)" />
            <stop offset="100%" stopColor="hsl(20 65% 45%)" />
          </linearGradient>
          <linearGradient id="goldGradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25 70% 55%)" />
            <stop offset="100%" stopColor="hsl(35 80% 60%)" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="flex flex-col">
        <span className="text-xs tracking-crypto uppercase text-muted-foreground">
          Network Global
        </span>
        <span className="text-sm font-medium tracking-wide text-gradient-gold">
          CBA
        </span>
      </div>
    </div>
  );
};

export default BlockchainLogo;
