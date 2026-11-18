
import React, { useState, useEffect } from "react";
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
  { name: "Home", path: "/home", icon: FaHome },
  { name: "Events", path: "/events", icon: FaCalendarAlt },
  { name: "Nexus", path: "/nexus", icon: CrossedSwordsIcon },
  { name: "Team", path: "/team", icon: FaUsers },
  { name: "Placement Masterclass", path: "/placement_masterclass", icon: FaGraduationCap },
  { name: "Alumni", path: "/alumni", icon: FaIdBadge },
  { name: "Map", path: "/", icon: ShipWheelIcon },
];
const PirateLayout = ({ children, activeNav, topBarExtras }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const currentPath = location.pathname;

  const isItemActive = (item) => {
    if (activeNav) {
      return activeNav.toLowerCase() === item.name.toLowerCase();
    }
    if (item.path === "/" && (currentPath === "/" || currentPath === "/map")) return true;
    if (item.path === "/home" && currentPath === "/home") return true;
    if (item.path !== "/" && currentPath.startsWith(item.path)) return true;
    return false;
  };

  const renderNavItem = (item) => {
    const active = isItemActive(item);
    const Icon = item.icon;

    return (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setMobileOpen(false)}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all duration-200 ${
          active
            ? "bg-[#2a1c10] border border-[#a67c38] text-[#f7cd78]"
            : "border border-transparent text-[#c2af94] hover:text-[#f3d48d] hover:bg-[#18110b]"
        }`}
      >
        {Icon === ShipWheelIcon || Icon === CrossedSwordsIcon ? (
          <Icon
            className="w-4 h-4 flex-shrink-0"
            color={active ? "#f7cd78" : "#c2af94"}
          />
        ) : (
          <Icon size={15} />
        )}
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0705] text-[#e0d3bf] flex flex-col font-sans overflow-x-hidden">

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 w-full bg-[#110c08]/95 backdrop-blur-md border-b border-[#3d2c1c] shadow-lg">

        <div className="max-w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          {/* BRAND */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <ShipWheelIcon
              className="w-8 h-8"
              color="#d4af37"
            />
            <div className="flex flex-col">
              <span className="font-cinzel font-extrabold text-xl tracking-widest text-[#f0cb79] leading-none">
                SECE
              </span>
              <span className="text-[9px] text-[#ab9475] tracking-tight mt-1">
                NIT Jamshedpur
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-4">
            {NAV_ITEMS.map(renderNavItem)}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {topBarExtras}


            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a130b] border border-[#523d26] text-[#e8c782]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* TABLET NAVIGATION */}
        <nav className="hidden lg:flex xl:hidden items-center justify-center gap-3 px-4 pb-3 flex-wrap">
          {NAV_ITEMS.map(renderNavItem)}
        </nav>

        {/* MOBILE / SMALL SCREEN MENU */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-[#3d2c1c] bg-[#0e0a07] px-4 py-4">
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {NAV_ITEMS.map(renderNavItem)}
            </nav>
          </div>
        )}
      </header>

      {/* MAIN PAGE CONTENT */}
      <main className="flex-1 w-full min-w-0 bg-[#0b0806]">
        <div className="w-full px-2 xs:px-3 sm:px-6 lg:px-8 pb-12 pt-3 sm:pt-5">
          {children}
        </div>
      </main>
      
{/* FOOTER */}

<footer className="w-full bg-[#100c08] border-t border-[#6b4c27]/60 text-[#d8c5a5] px-6 sm:px-10 lg:px-16 pt-12 pb-6">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">

    {/* ABOUT SECE */}
    <div className="flex flex-col items-center">
      <h2 className="font-cinzel text-xl sm:text-2xl leading-relaxed text-[#e8c782] max-w-sm">
        Society of Electronics and Communications Engineering
      </h2>

      <a
        href="mailto:sece.student@nitjsr.ac.in"
        className="mt-4 text-sm sm:text-base text-[#b9a487] hover:text-[#f0cb79] transition-colors"
      >
        sece.student@nitjsr.ac.in
      </a>
    </div>

    {/* QUICK LINKS */}
    <div className="flex flex-col items-center">
      <h3 className="font-cinzel text-xl sm:text-2xl text-[#e8c782] mb-4">
        Quick Links
      </h3>

      <nav className="flex flex-col items-center gap-2">
        {[
          { name: "Home", path: "/home" },
          { name: "Events", path: "/events" },
          { name: "Nexus", path: "/nexus" },
          { name: "Team", path: "/team" },
          { name: "Placement Masterclass", path: "/placement_masterclass" },
          { name: "Alumni", path: "/alumni" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-sm sm:text-base text-[#c5b294] hover:text-[#f0cb79] hover:translate-x-1 transition-all duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>

    {/* FOLLOW US */}
    <div className="flex flex-col items-center">
      <h3 className="font-cinzel text-xl sm:text-2xl text-[#e8c782] mb-5">
        Follow Us
      </h3>

      <div className="flex items-center gap-6 sm:gap-7">

        <a
          href="https://www.instagram.com/secenitjsr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#c9a66b] hover:text-[#f0cb79] hover:scale-110 transition-all"
        >
          <FaInstagram size={27} />
        </a>

        <a
          href="https://www.linkedin.com/company/sece-nitjsr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#c9a66b] hover:text-[#f0cb79] hover:scale-110 transition-all"
        >
          <FaLinkedinIn size={27} />
        </a>

        <a
          href="https://www.youtube.com/@SECENITJamshedpur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-[#c9a66b] hover:text-[#f0cb79] hover:scale-110 transition-all"
        >
          <FaYoutube size={29} />
        </a>

        <a
          href="https://www.facebook.com/secenitjsr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-[#c9a66b] hover:text-[#f0cb79] hover:scale-110 transition-all"
        >
          <FaFacebookF size={27} />
        </a>

      </div>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="max-w-7xl mx-auto mt-12 pt-5 border-t border-[#49351f] text-center">
    <p className="text-sm sm:text-base text-[#a99070]">
      © {new Date().getFullYear()} SECE. All rights reserved.
    </p>
  </div>

</footer>

    </div>
  );
};

export default PirateLayout;
