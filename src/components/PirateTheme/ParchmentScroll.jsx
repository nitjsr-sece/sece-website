import React from "react";
import scrollRollTop from "../../assets/pirate_theme/scroll_roll_top_clean.png";
import scrollRollBottom from "../../assets/pirate_theme/scroll_roll_bottom_clean.png";
import parchmentTexture from "../../assets/pirate_theme/parchment_body_texture.jpg";

/**
 * Authentic Ancient Rolled Parchment Scroll Container.
 * Directly styled using the high-resolution photo of the antique scroll:
 * - Real 3D rolled top cylinder with curled paper ends
 * - High-res aged parchment texture body with realistic side shading
 * - Real 3D rolled bottom cylinder with authentic paper folds
 */
export const ParchmentScroll = ({
  children,
  className = "",
  title,
  titleStyle = "serif", // "serif" | "cursive"
  extraHeader,
  maxHeight,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center w-full my-3 drop-shadow-[0_18px_36px_rgba(0,0,0,0.95)] ${className}`}
    >
      {/* Top Authentic Roll Cylinder */}
      <div className="w-full relative z-20 flex flex-col items-center select-none pointer-events-none">
        <img
          src={scrollRollTop}
          alt=""
          className="w-full h-10 sm:h-14 md:h-16 object-fill drop-shadow-md select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>

      {/* Main Parchment Paper Body */}
      <div
        className="w-[96%] sm:w-[97%] relative -mt-1.5 sm:-mt-2 -mb-1.5 sm:-mb-2 px-2.5 xs:px-4 sm:px-9 py-3.5 sm:py-6 text-[#24160a] transition-all duration-300 z-10"
        style={{
          backgroundImage: `url(${parchmentTexture})`,
          backgroundSize: "cover",
          backgroundColor: "#ecd6a4",
          boxShadow:
            "inset 14px 0 20px -10px rgba(105, 68, 28, 0.45), inset -14px 0 20px -10px rgba(105, 68, 28, 0.45)",
          maxHeight: maxHeight || "none",
        }}
      >
        {/* Optional Title Header */}
        {(title || extraHeader) && (
          <div className="mb-4 text-center border-b border-[#8a602a]/35 pb-2.5">
            {title && (
              <h2
                className={`font-bold tracking-wide text-[#1b0f05] ${
                  titleStyle === "cursive"
                    ? "font-fondamento italic text-2xl sm:text-3xl text-[#3d240d]"
                    : "font-cinzel text-2xl sm:text-3xl text-[#180d04]"
                }`}
              >
                {title}
              </h2>
            )}
            {extraHeader}
          </div>
        )}

        {/* Parchment Body Content */}
        <div className="relative z-10 text-[#221408]">{children}</div>
      </div>

      {/* Bottom Authentic Roll Cylinder */}
      <div className="w-full relative z-20 flex flex-col items-center select-none pointer-events-none">
        <img
          src={scrollRollBottom}
          alt=""
          className="w-full h-11 sm:h-16 md:h-18 object-fill drop-shadow-md select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>
    </div>
  );
};

export default ParchmentScroll;
