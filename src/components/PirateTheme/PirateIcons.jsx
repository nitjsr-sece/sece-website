import React from "react";

// Ship Wheel / Helm Logo
export const ShipWheelIcon = ({ className = "w-6 h-6", color = "#c89d55" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="32" stroke={color} strokeWidth="5" />
    <circle cx="50" cy="50" r="18" stroke={color} strokeWidth="4" />
    <circle cx="50" cy="50" r="7" fill={color} />
    {/* 8 spokes & handles */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 50 + Math.cos(rad) * 18;
      const y1 = 50 + Math.sin(rad) * 18;
      const x2 = 50 + Math.cos(rad) * 32;
      const y2 = 50 + Math.sin(rad) * 32;
      const hx1 = 50 + Math.cos(rad) * 32;
      const hy1 = 50 + Math.sin(rad) * 32;
      const hx2 = 50 + Math.cos(rad) * 44;
      const hy2 = 50 + Math.sin(rad) * 44;
      const capX = 50 + Math.cos(rad) * 46;
      const capY = 50 + Math.sin(rad) * 46;
      return (
        <g key={idx}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />
          <line x1={hx1} y1={hy1} x2={hx2} y2={hy2} stroke={color} strokeWidth="4.5" strokeLinecap="round" />
          <circle cx={capX} cy={capY} r="3" fill={color} />
        </g>
      );
    })}
    {/* Rivets on outer wheel */}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, idx) => {
      const rad = (angle * Math.PI) / 180;
      const rx = 50 + Math.cos(rad) * 32;
      const ry = 50 + Math.sin(rad) * 32;
      return <circle key={idx} cx={rx} cy={ry} r="1.8" fill="#e8c782" />;
    })}
  </svg>
);

// Anchor Icon
export const AnchorIcon = ({ className = "w-5 h-5", color = "#c89d55" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="12" r="6" stroke={color} strokeWidth="3" />
    <line x1="32" y1="18" x2="32" y2="52" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <line x1="20" y1="24" x2="44" y2="24" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path
      d="M14 36 C14 54 50 54 50 36"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    <polygon points="11,36 17,36 14,30" fill={color} />
    <polygon points="47,36 53,36 50,30" fill={color} />
    <circle cx="32" cy="52" r="3" fill={color} />
  </svg>
);

// Crossed Swords / Cutlasses Icon
export const CrossedSwordsIcon = ({ className = "w-5 h-5", color = "#c89d55" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sword 1 */}
    <path
      d="M12 12 Q28 20 52 52"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path d="M48 44 L54 50 L50 54 L44 48 Z" fill={color} />
    <circle cx="56" cy="56" r="3" fill={color} />
    {/* Sword 2 */}
    <path
      d="M52 12 Q36 20 12 52"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path d="M16 44 L10 50 L14 54 L20 48 Z" fill={color} />
    <circle cx="8" cy="56" r="3" fill={color} />
  </svg>
);

// Pirate Skull Badge for Profile
export const PirateSkullBadge = ({ className = "w-8 h-8" }) => (
  <div className={`relative flex items-center justify-center rounded-full border-2 border-[#c89d55] bg-[#1a130b] p-1 shadow-md ${className}`}>
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crossed bones background */}
      <line x1="16" y1="16" x2="48" y2="48" stroke="#c89d55" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="16" x2="16" y2="48" stroke="#c89d55" strokeWidth="3" strokeLinecap="round" />
      {/* Skull Head */}
      <path
        d="M20 28 C20 18 44 18 44 28 C44 34 38 38 38 42 L26 42 C26 38 20 34 20 28 Z"
        fill="#e8d5b5"
        stroke="#2a1f14"
        strokeWidth="1.5"
      />
      {/* Eye Sockets */}
      <circle cx="27" cy="27" r="3.5" fill="#2a1f14" />
      <circle cx="37" cy="27" r="3.5" fill="#2a1f14" />
      {/* Nose */}
      <polygon points="32,32 30.5,35 33.5,35" fill="#2a1f14" />
      {/* Teeth */}
      <line x1="28" y1="41" x2="28" y2="44" stroke="#2a1f14" strokeWidth="1.5" />
      <line x1="32" y1="41" x2="32" y2="44" stroke="#2a1f14" strokeWidth="1.5" />
      <line x1="36" y1="41" x2="36" y2="44" stroke="#2a1f14" strokeWidth="1.5" />
    </svg>
  </div>
);

// Wax Seal Stamp component with ribbon
export const WaxSealStamp = ({ className = "w-9 h-10", label = "" }) => (
  <div className={`relative inline-block ${className} select-none pointer-events-none drop-shadow-md`}>
    <svg viewBox="0 0 80 90" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="waxGrad" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#c0392b" />
          <stop offset="60%" stopColor="#871f14" />
          <stop offset="100%" stopColor="#4a0e08" />
        </radialGradient>
        <radialGradient id="innerWax" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#a93226" />
          <stop offset="100%" stopColor="#641e16" />
        </radialGradient>
      </defs>
      {/* Ribbons hanging below seal */}
      <polygon points="32,55 24,85 34,78 40,84 38,55" fill="#641e16" opacity="0.9" />
      <polygon points="44,55 52,86 42,79 38,84 42,55" fill="#78281f" opacity="0.9" />
      
      {/* Irregular outer wax blob */}
      <path
        d="M40 8 C54 7 66 16 68 28 C70 38 72 48 64 56 C56 64 48 62 40 63 C30 64 22 60 16 52 C10 44 11 34 14 24 C17 14 26 9 40 8 Z"
        fill="url(#waxGrad)"
        stroke="#4a0e08"
        strokeWidth="1.5"
      />
      {/* Wax drip notches */}
      <circle cx="67" cy="40" r="5" fill="#871f14" />
      <circle cx="15" cy="38" r="4.5" fill="#78281f" />
      <circle cx="36" cy="10" r="4" fill="#a93226" />
      <circle cx="48" cy="62" r="5" fill="#641e16" />
      
      {/* Inner pressed circle */}
      <circle cx="40" cy="36" r="19" fill="url(#innerWax)" stroke="#e74c3c" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="40" cy="36" r="16" stroke="#4a0e08" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Emblem inside seal: Anchor / SECE helm */}
      <circle cx="40" cy="36" r="7" stroke="#e8c782" strokeWidth="1.2" fill="none" opacity="0.75" />
      <line x1="40" y1="26" x2="40" y2="46" stroke="#e8c782" strokeWidth="1.2" opacity="0.75" />
      <line x1="33" y1="36" x2="47" y2="36" stroke="#e8c782" strokeWidth="1.2" opacity="0.75" />
      <path d="M33 42 C36 46 44 46 47 42" stroke="#e8c782" strokeWidth="1.2" fill="none" opacity="0.75" />
    </svg>
  </div>
);

// Map Pin Marker
export const MapIslandMarker = ({ title, active, onClick, icon: Icon, flag = "skull" }) => (
  <button
    onClick={onClick}
    className={`group relative flex flex-col items-center transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer ${
      active ? "scale-105" : ""
    }`}
  >
    {/* Flag atop pole */}
    <div className="flex flex-col items-center">
      {/* The Flag banner */}
      <div className="relative mb-1 flex items-center justify-center">
        {flag === "skull" ? (
          <div className="bg-[#120d09] border border-[#a67c38] px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
            <span className="text-xs">☠️</span>
          </div>
        ) : flag === "anchor" ? (
          <div className="bg-[#120d09] border border-[#a67c38] px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
            <span className="text-xs text-[#c89d55]">⚓</span>
          </div>
        ) : (
          <div className="bg-[#120d09] border border-[#a67c38] px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
            <span className="text-xs text-[#e8c782]">👑</span>
          </div>
        )}
      </div>

      {/* Flag pole */}
      <div className="w-0.5 h-3 bg-[#543d22]"></div>

      {/* Island Label Banner */}
      <div className="px-3 py-1 bg-[#1a120a]/90 border border-[#a67c38] rounded shadow-xl text-[#f3ca76] font-cinzel font-bold text-xs tracking-wider group-hover:bg-[#a67c38] group-hover:text-[#1a120a] transition-colors">
        {title}
      </div>

      {/* Red 'X' marks the spot */}
      <div className="text-red-700 font-black text-sm tracking-tighter leading-none mt-0.5 animate-pulse drop-shadow">
        ✕
      </div>
    </div>
  </button>
);

