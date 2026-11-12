import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShipWheelIcon,
  AnchorIcon,
  CrossedSwordsIcon,
} from "./PirateIcons";
import {
  FaCalendarAlt,
  FaUsers,
  FaGraduationCap,
  FaIdBadge,
  FaHome,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";

export const NAV_ITEMS = [
  { name: "Map", path: "/", icon: ShipWheelIcon },
  { name: "Events", path: "/events", icon: FaCalendarAlt },
  { name: "Team", path: "/team", icon: FaUsers },
  { name: "Placement Masterclass", path: "/placement_masterclass", icon: FaGraduationCap },
  { name: "Alumni", path: "/alumni", icon: FaIdBadge },
  { name: "Nexus", path: "/nexus", icon: CrossedSwordsIcon },
  { name: "Home", path: "/home", icon: FaHome },
];

const PirateLayout = ({ children, activeNav, topBarExtras }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine current active item
  const currentPath = location.pathname;
  const isItemActive = (item) => {
    if (activeNav) return activeNav.toLowerCase() === item.name.toLowerCase();
    if (item.path === "/" && (currentPath === "/" || currentPath === "/map")) return true;
    if (item.path === "/home" && currentPath === "/home") return true;
    if (item.path !== "/" && currentPath.startsWith(item.path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#0a0705] text-[#e0d3bf] flex flex-col font-sans overflow-x-hidden selection:bg-[#966d31] selection:text-[#0b0806]">
      {/* Top Mobile Bar - Touch Friendly & Sticky */}
      <header className="lg:hidden flex items-center justify-between px-3 xs:px-4 py-2.5 bg-[#110c08]/95 backdrop-blur-md border-b border-[#3d2c1c] z-40 sticky top-0 shadow-lg">
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none"
          onClick={() => setMobileOpen(false)}
        >
          <ShipWheelIcon className="w-7 h-7 xs:w-8 xs:h-8 animate-[spin_50s_linear_infinite]" color="#d4af37" />
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-lg xs:text-xl tracking-wider text-[#e8c782] leading-none">
              SECE
            </span>
            <span className="text-[9px] text-[#9e886d] tracking-tight leading-none">
              NIT Jamshedpur
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          {topBarExtras}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a130b] border border-[#523d26] text-[#e8c782] active:scale-95 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative overflow-hidden">
        {/* Mobile Backdrop Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Left Sidebar (Desktop persistent, Mobile sliding drawer) */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-[#0e0a07] border-r border-[#2d2116] flex flex-col justify-between py-4 px-3 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
            mobileOpen ? "translate-x-0 shadow-[0_0_50px_rgba(0,0,0,0.9)]" : "-translate-x-full lg:translate-x-0"
          } overflow-y-auto`}
        >
          {/* Top Brand Header */}
          <div>
            <div className="flex items-center justify-between px-2 py-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 flex-shrink-0 relative flex items-center justify-center">
                  <ShipWheelIcon className="w-9 h-9 animate-[spin_60s_linear_infinite]" color="#d4af37" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-cinzel font-extrabold text-2xl tracking-widest text-[#f0cb79] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      SECE
                    </span>
                    <span className="text-[#a67c38] text-sm italic font-serif">~</span>
                  </div>
                  <span className="text-[10px] text-[#ab9475] tracking-tight leading-tight font-sans">
                    Society of Electronics and Communication
                  </span>
                </div>
              </Link>

              {/* Mobile Drawer Close Button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="lg:hidden w-8 h-8 rounded-full bg-[#1a130b] border border-[#523d26] text-[#e8c782] flex items-center justify-center hover:bg-[#2e1d0f] transition-colors"
                aria-label="Close navigation"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Subtle Divider */}
            <div className="my-3 h-px bg-gradient-to-r from-transparent via-[#453422] to-transparent"></div>

            {/* Navigation Menu */}
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3.5 px-3.5 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-all duration-200 ease-out group ${
                      active
                        ? "bg-gradient-to-r from-[#2a1c10] to-[#1c1209] border border-[#a67c38] text-[#f7cd78] shadow-[0_0_15px_rgba(166,124,56,0.22)] font-semibold translate-x-1"
                        : "text-[#c2af94] hover:text-[#f3d48d] hover:bg-[#18110b] hover:translate-x-1 border border-transparent"
                    }`}
                  >
                    <span className="w-5 flex justify-center text-base transition-transform duration-200 group-hover:scale-110 flex-shrink-0">
                      {typeof Icon === "function" && Icon === ShipWheelIcon ? (
                        <Icon className="w-4 h-4" color={active ? "#f7cd78" : "#c2af94"} />
                      ) : typeof Icon === "function" && Icon === CrossedSwordsIcon ? (
                        <Icon className="w-4 h-4" color={active ? "#f7cd78" : "#c2af94"} />
                      ) : (
                        <Icon size={16} />
                      )}
                    </span>
                    <span className="tracking-wide">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Sidebar Elements */}
          <div className="pt-3 border-t border-[#261c13] mt-4">
            {/* Anchor ornament */}
            <div className="flex items-center justify-center gap-2 mb-2.5">
              <div className="h-px bg-[#3b2b1b] flex-1"></div>
              <AnchorIcon className="w-3.5 h-3.5 text-[#8a6839]" color="#8a6839" />
              <div className="h-px bg-[#3b2b1b] flex-1"></div>
            </div>

            <p className="text-center text-[10px] uppercase tracking-wider text-[#937b60] mb-2 font-cinzel">
              Follow our voyage
            </p>

            {/* Social Icons - Touch Friendly */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <a
                href="https://www.youtube.com/@sece_nitjsr"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-all hover:scale-110 active:scale-95"
                title="YouTube"
                aria-label="YouTube"
              >
                <FaYoutube size={13} />
              </a>
              <a
                href="https://www.linkedin.com/company/society-of-electronics-and-communication-engineering-nit-jamshedpur/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-all hover:scale-110 active:scale-95"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={12} />
              </a>
              <a
                href="https://www.facebook.com/sece.nitjsr/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-all hover:scale-110 active:scale-95"
                title="Facebook"
                aria-label="Facebook"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="https://www.instagram.com/sece_nitjsr/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#4a3724] bg-[#140e09] flex items-center justify-center text-[#ab9475] hover:text-[#f5c767] hover:border-[#966d31] transition-all hover:scale-110 active:scale-95"
                title="Instagram"
                aria-label="Instagram"
              >
                <FaInstagram size={13} />
              </a>
            </div>

            {/* Email link */}
            <a
              href="mailto:sece.student@nitjsr.ac.in"
              className="flex items-center justify-center gap-1.5 text-[10px] text-[#8f7960] hover:text-[#e4c278] transition-colors py-1"
            >
              <FaEnvelope size={10} />
              <span className="truncate max-w-[200px]">sece.student@nitjsr.ac.in</span>
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 min-h-[calc(100vh-56px)] lg:min-h-screen lg:h-screen overflow-y-auto relative bg-[#0b0806] scroll-smooth">
          {/* Top Bar for Desktop */}
          {topBarExtras && (
            <header className="sticky top-0 z-20 hidden lg:flex items-center justify-end px-6 py-2.5 bg-gradient-to-b from-[#0e0a07]/90 to-transparent backdrop-blur-[2px]">
              <div className="flex items-center gap-4">
                {topBarExtras}
              </div>
            </header>
          )}

          {/* Children View Content with responsive horizontal padding */}
          <div className="flex-1 px-2.5 xs:px-3 sm:px-6 pb-10 pt-2 sm:pt-4 max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PirateLayout;

