import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto h-full", className)}
    >
      <defs>
        <linearGradient id="goldFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2C8" />
          <stop offset="50%" stopColor="#D5A13E" />
          <stop offset="100%" stopColor="#A36F15" />
        </linearGradient>
        <linearGradient id="goldBack" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#A36F15" />
          <stop offset="100%" stopColor="#5A3A05" />
        </linearGradient>
        <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE8A1" />
          <stop offset="60%" stopColor="#D5A13E" />
          <stop offset="100%" stopColor="#8A5A0C" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#dropShadow)">
        {/* Left Vertical Bar */}
        <path d="M 20 11 L 36 19 L 36 77 L 20 85 Z" fill="url(#goldBar)" />
        
        {/* Top Loop Back */}
        <path d="M 80 31 L 36 53 L 36 41 L 68 39 Z" fill="url(#goldBack)" />
        
        {/* Top Loop Front */}
        <path d="M 36 19 L 80 31 L 68 39 L 36 31 Z" fill="url(#goldFront)" />

        {/* Bottom Loop Back */}
        <path d="M 80 55 L 36 77 L 36 65 L 68 63 Z" fill="url(#goldBack)" />
        
        {/* Bottom Loop Front */}
        <path d="M 36 43 L 80 55 L 68 63 L 36 55 Z" fill="url(#goldFront)" />
      </g>
    </svg>
  );
}
