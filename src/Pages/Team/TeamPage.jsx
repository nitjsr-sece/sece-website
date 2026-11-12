import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import ScrollCard from "../../components/PirateTheme/ScrollCard";
import { Batch2K22, Batch2K23, Batch2K24 } from "./index";
import faculty_image from "../../assets/Member/dr-surajit-kundu.jpg";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
  const batches = {
    "Batch 2K23-2K27": Batch2K23,
    "Batch 2K24-2K28": Batch2K24,
    "Batch 2K22-2K26": Batch2K22,
  };

  const [selectedBatchKey, setSelectedBatchKey] = useState("Batch 2K23-2K27");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentMembers = batches[selectedBatchKey] || Batch2K23;

  // Batch Selector Dropdown (Centered)
  const batchDropdown = (
    <div className="relative inline-block z-40">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-3 px-6 py-2 rounded-full border-2 border-[#8a6839] bg-[#160f08] text-[#f5ca73] text-sm font-cinzel font-semibold hover:border-[#d4af37] hover:bg-[#22160b] transition-all shadow-xl"
      >
        <span>{selectedBatchKey}</span>
        <span className="text-xs text-[#d4af37]">▼</span>
      </button>

      {dropdownOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-lg bg-[#16100a] border-2 border-[#8a6839] shadow-2xl py-1 z-50 animate-in fade-in duration-150">
          {Object.keys(batches).map((batch) => (
            <button
              key={batch}
              onClick={() => {
                setSelectedBatchKey(batch);
                setDropdownOpen(false);
              }}
              className={`w-full text-center px-4 py-2 text-xs font-cinzel transition-colors ${
                selectedBatchKey === batch
                  ? "bg-[#2c1d0e] text-[#f5ca73] font-bold"
                  : "text-[#cbb89b] hover:bg-[#22160b] hover:text-[#f0cf85]"
              }`}
            >
              {batch}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <PirateLayout activeNav="Team">
      <div className="max-w-6xl mx-auto py-2">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center relative z-30">
          <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#f3ca76] tracking-wider drop-shadow-md">
            Our Crew & Leadership
          </h1>
          <p className="text-xs sm:text-sm font-serif text-[#ab9475] italic mt-1">
            Society of Electronics and Communication • NIT Jamshedpur
          </p>

          {/* Centered Batch Button */}
          <div className="mt-4 relative z-40">
            {batchDropdown}
          </div>
        </div>

        {/* Faculty Mentor Spotlight */}
        <div className="max-w-md mx-auto mb-10 relative z-10">
          <ParchmentScroll>
            <div className="flex flex-col items-center text-center">
              <div className="group w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#735227] shadow-md mb-3 bg-[#1a1209]">
                <img
                  src={faculty_image}
                  alt="Dr. Surajit Kundu"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-[#1a1005] tracking-wide">
                Dr. Surajit Kundu
              </h3>
              <p className="text-sm sm:text-base font-serif italic text-[#543b22] font-semibold mt-0.5">
                Faculty Mentor
              </p>
              <p className="text-xs sm:text-sm text-[#3d240d] mt-1 max-w-sm font-sans font-medium">
                Department of Electronics and Communication Engineering
              </p>
              <div className="flex gap-3.5 mt-4">
                <a
                  href="mailto:surajitkundu.ece@nitjsr.ac.in"
                  className="w-8 h-8 rounded-full bg-[#1b1208] text-[#f0cf85] flex items-center justify-center hover:bg-[#8a6839] hover:text-[#1b1208] transition-colors shadow-md"
                  title="Email"
                >
                  <FaEnvelope size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/surajit-kundu-9ba194143/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#1b1208] text-[#f0cf85] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors shadow-md"
                  title="LinkedIn"
                >
                  <FaLinkedin size={15} />
                </a>
              </div>
            </div>
          </ParchmentScroll>
        </div>

        {/* Members Grid (3 cards per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentMembers.map((member, index) => {
            const name = member.name || member.Name;
            const por = member.post || member.POR || "Core Team";
            const photo = member.Img || member.img;
            const email = member.email || member.Email;
            const linkedin = member.linkedin || member.LinkedIn;

            return (
              <ScrollCard key={index} className="h-full">
                {/* Member Avatar */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 sm:border-[3px] border-[#735227] shadow-md mb-4 bg-[#1b1208] flex-shrink-0">
                  {photo ? (
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl text-[#d4af37]">
                      ⚓
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <h4 className="font-cinzel font-bold text-base sm:text-lg text-[#180f05] leading-snug tracking-wider uppercase line-clamp-1">
                  {name}
                </h4>
                <p className="text-sm sm:text-base font-serif italic text-[#543b22] font-semibold mt-1 line-clamp-1">
                  {por}
                </p>

                {/* Contact links */}
                <div className="flex gap-3.5 mt-4">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="w-8 h-8 rounded-full bg-[#1c1209] text-[#ecd8b0] flex items-center justify-center hover:bg-[#8a6839] hover:text-[#1c1209] transition-colors shadow-md"
                      title={email}
                    >
                      <FaEnvelope size={13} />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1c1209] text-[#ecd8b0] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors shadow-md"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={14} />
                    </a>
                  )}
                </div>
              </ScrollCard>
            );
          })}
        </div>
      </div>
    </PirateLayout>
  );
};

export default TeamPage;
