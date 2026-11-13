import React from "react";
import scrollRollTop from "../../assets/pirate_theme/scroll_roll_top_clean.png";
import scrollRollBottom from "../../assets/pirate_theme/scroll_roll_bottom_clean.png";
import parchmentTexture from "../../assets/pirate_theme/parchment_body_texture.jpg";

/**
 * Authentic Antique Rolled Parchment Scroll Card.
 * Uses high-resolution photographic textures from the antique rolled scroll.
 */
export const ScrollCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`group relative flex flex-col items-center w-full transition-all duration-300 ease-out hover:-translate-y-1.5 drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)] hover:drop-shadow-[0_22px_40px_rgba(0,0,0,0.95)] ${className}`}
    >
      {/* Top Roll Cylinder */}
      <div className="w-full relative z-20 flex flex-col items-center select-none pointer-events-none flex-shrink-0">
        <img
          src={scrollRollTop}
          alt=""
          className="w-full h-8 sm:h-12 object-fill drop-shadow-md select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>

      {/* Main Parchment Paper Body */}
      <div
        className="w-[96%] sm:w-[97%] relative -mt-1.5 -mb-1.5 px-2 xs:px-3 sm:px-6 py-3 sm:py-5 text-[#24160a] transition-all duration-300 z-10 flex-1 flex flex-col justify-between items-center w-full overflow-hidden"
        style={{
          backgroundImage: `url(${parchmentTexture})`,
          backgroundSize: "cover",
          backgroundColor: "#ecd6a4",
          boxShadow:
            "inset 12px 0 18px -10px rgba(105, 68, 28, 0.4), inset -12px 0 18px -10px rgba(105, 68, 28, 0.4)",
        }}
      >
        <div className="relative z-10 text-[#221408] w-full flex flex-col items-center text-center h-full justify-between overflow-hidden">
          {children}
        </div>
      </div>

      {/* Bottom Roll Cylinder */}
      <div className="w-full relative z-20 flex flex-col items-center select-none pointer-events-none flex-shrink-0">
        <img
          src={scrollRollBottom}
          alt=""
          className="w-full h-9 sm:h-13 object-fill drop-shadow-md select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>
    </div>
  );
};

export default ScrollCard;
