import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import mapImage from "../../assets/pirate_theme/treasure_map_cropped.jpg";
import { ShipWheelIcon } from "../../components/PirateTheme/PirateIcons";
import { FaCompass } from "react-icons/fa";

const ISLAND_PINS = [
  {
    id: "nexus",
    title: "Nexus",
    path: "/nexus",
    left: "26.5%",
    top: "31.4%",
    width: "15%",
    height: "11%",
    badge: "⚔️",
    desc: "The Annual Flagship Fest of ECE: 3 days of techno-cultural brilliance, coding battles & fun!",
  },
  {
    id: "events",
    title: "Events",
    path: "/events",
    left: "45.0%",
    top: "44.8%",
    width: "15%",
    height: "11%",
    badge: "💣",
    desc: "Coding challenges, technical workshops, robotics contests, and fun tournaments.",
  },
  {
    id: "team",
    title: "Team",
    path: "/team",
    left: "70.9%",
    top: "40.3%",
    width: "14%",
    height: "11%",
    badge: "👥",
    desc: "Meet the crew: student leaders, heads, and members driving the society forward.",
  },
  {
    id: "pmc",
    title: "Placement Masterclass",
    path: "/placement_masterclass",
    left: "87.0%",
    top: "54.7%",
    width: "17%",
    height: "13%",
    badge: "🎓",
    desc: "Alumni wisdom, placement stories, preparation roadmaps & top company interview tips.",
  },
  {
    id: "alumni",
    title: "Alumni",
    path: "/alumni",
    left: "74.1%",
    top: "77.1%",
    width: "15%",
    height: "11%",
    badge: "⚓",
    desc: "Legacy records of past batches: creators of community, architects of tomorrow.",
  },
  {
    id: "home",
    title: "Home",
    path: "/home",
    left: "17.1%",
    top: "81.5%",
    width: "15%",
    height: "11%",
    badge: "☸️",
    desc: "Society of Electronics & Communication basecamp: history, vision & community.",
  },
  {
    id: "motto",
    title: "SECE Charter",
    path: "/home",
    left: "90.0%",
    top: "12.0%",
    width: "16%",
    height: "15%",
    badge: "📜",
    desc: "Different Islands, Same Crew, Bigger Dreams: Read the society story.",
    isMotto: true,
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activeIsland, setActiveIsland] = useState(null);

  const handlePinClick = (pin) => {
    navigate(pin.path);
  };

  return (
    <PirateLayout activeNav="Map">
      <div className="max-w-7xl mx-auto py-1 flex flex-col items-center animate-fade-in-up">
        {/* Antique Nautical Header Banner */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2 px-3 py-2 mb-2 rounded-xl bg-gradient-to-r from-[#140e08]/90 via-[#1c130b]/80 to-[#140e08]/90 border border-[#4a341e]/60 shadow-lg text-xs">
          <div className="flex items-center gap-2 text-[#cbb89b]">
            <FaCompass className="text-[#d4af37] animate-[spin_30s_linear_infinite]" size={16} />
            <span className="font-cinzel text-xs font-bold text-[#f5ca73] tracking-wider uppercase">
              SECE Archipelago Navigational Chart
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-sans text-[#a89274]">
            <span className="hidden sm:inline-block font-mono text-[#d4af37]/80">
              22.7758° N, 86.1439° E
            </span>
            <span className="text-[#6d5130] hidden sm:inline">•</span>
            <span className="italic text-[#cbb89b]">
              Click any island to set sail
            </span>
          </div>
        </div>

        {/* Map Container framed in layered antique brass & timber border */}
        <div className="relative w-full p-[3px] rounded-2xl bg-gradient-to-b from-[#8a632c] via-[#2a1a0b] to-[#8a632c] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(156,115,51,0.18)] transition-all duration-300">
          <div className="relative w-full aspect-[1024/558] overflow-hidden rounded-[13px] bg-[#0c0906] select-none">
            {/* Main Map Image - Refined High-Definition Texture */}
            <img
              src={mapImage}
              alt="SECE Treasure Map - Different Islands Same Crew Bigger Dreams"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
              style={{
                imageRendering: "-webkit-optimize-contrast",
              }}
            />

            {/* Subtle Vignette & Atmospheric Ambient Lighting Overlay to eliminate box edges */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[13px] z-10"
              style={{
                boxShadow:
                  "inset 0 0 50px 14px rgba(12, 9, 6, 0.78), inset 0 0 18px 4px rgba(12, 9, 6, 0.95)",
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(245, 202, 115, 0.03) 0%, rgba(12, 9, 6, 0) 65%, rgba(12, 9, 6, 0.45) 100%)",
              }}
            />

            {/* Clickable Island Hotspots Overlay over text & banners */}
            {ISLAND_PINS.map((pin) => (
              <button
                key={pin.id}
                onClick={() => handlePinClick(pin)}
                onMouseEnter={() => setActiveIsland(pin)}
                onMouseLeave={() => setActiveIsland(null)}
                style={{
                  left: pin.left,
                  top: pin.top,
                  width: pin.width,
                  height: pin.height,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none rounded-full transition-all duration-300 ease-out hover:scale-105 hover:bg-[radial-gradient(circle,_rgba(245,202,115,0.22)_0%,_transparent_75%)] hover:shadow-[0_0_24px_rgba(245,202,115,0.35)]"
                title={`Click to sail to ${pin.title}`}
              >
                {/* Subtle red pulse ring on hover near the X mark */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#e63946]/35 animate-ping opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300" />
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e63946]/70 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-300" />

                {/* Accessible text */}
                <span className="sr-only">Go to {pin.title} page</span>

                {/* Hover Popover Tooltip Card */}
                {activeIsland?.id === pin.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 sm:w-60 p-3 rounded-xl bg-gradient-to-b from-[#18110b]/98 to-[#100b07]/98 border border-[#c89d55] shadow-[0_12px_28px_rgba(0,0,0,0.9),0_0_15px_rgba(200,157,85,0.25)] z-30 pointer-events-none text-center animate-fade-in-up">
                    <div className="flex items-center justify-center gap-1.5 border-b border-[#3d2c1c] pb-1.5 mb-1.5">
                      <span className="text-base">{pin.badge}</span>
                      <h4 className="font-cinzel font-bold text-xs sm:text-sm text-[#f5ca73] tracking-wide">
                        {pin.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#d6c4ac] leading-relaxed font-sans">
                      {pin.desc}
                    </p>
                    <div className="mt-2 pt-1.5 border-t border-[#3d2c1c]/50 text-center">
                      <span className="text-[9px] uppercase font-cinzel font-bold text-[#e5be73] tracking-widest inline-flex items-center gap-1">
                        <span>Sail to Island</span>
                        <span>➔</span>
                      </span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PirateLayout>
  );
};

export default HomePage;
