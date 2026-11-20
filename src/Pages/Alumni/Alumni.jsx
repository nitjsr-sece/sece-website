import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import { Batch2k19, Batch2k20, Batch2K21, Batch2K22 } from "../Team/index.js";
import { FaLinkedin } from "react-icons/fa";

const Alumni = () => {
  const batches = {
    "Batch 2022-2026": Batch2K22,
    "Batch 2021-2025": Batch2K21,
    "Batch 2020-2024": Batch2k20,
    "Batch 2019-2023": Batch2k19,
  };

  const [selectedBatchKey, setSelectedBatchKey] = useState("Batch 2022-2026");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentMembers = batches[selectedBatchKey] || Batch2K22;

  // Batch Selector Dropdown (Centered)
  const batchDropdown = (
    <div className="relative inline-block z-40">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2.5 xs:gap-3 px-4 xs:px-6 py-2.5 rounded-full border-2 border-[#8a6839] bg-[#160f08] text-[#f5ca73] text-xs xs:text-sm font-cinzel font-semibold hover:border-[#d4af37] hover:bg-[#22160b] transition-all shadow-xl min-h-[44px] cursor-pointer"
        aria-label="Select batch"
      >
        <span>{selectedBatchKey}</span>
        <span className="text-[10px] xs:text-xs text-[#d4af37]">▼</span>
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
              className={`w-full text-center px-4 py-2.5 text-xs font-cinzel transition-colors cursor-pointer ${
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
    <PirateLayout activeNav="Alumni">
      <div className="max-w-3xl mx-auto py-2 px-1 xs:px-2 sm:px-4 relative flex flex-col items-center w-full">
        {/* Centered Batch Selector Button */}
        <div className="mb-5 sm:mb-6 relative z-30">
          {batchDropdown}
        </div>

        {/* Main Ancient Scroll */}
        <ParchmentScroll className="max-w-2xl relative z-10 w-full">
          {/* Scroll Header */}
          <div className="text-center pt-1 pb-4 sm:pb-6 border-b border-[#a88247]/30">
            <h1 className="font-cinzel text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#1a1006] tracking-wide">
              Alumni
            </h1>
            <p className="text-[11px] xs:text-xs font-serif text-[#64441f] italic mt-0.5 tracking-wider">
              {selectedBatchKey} • Society of Electronics and Communication
            </p>
          </div>

          {/* Alumni Table */}
          <div className="py-3 sm:py-4 px-1 xs:px-2 sm:px-6 w-full">
            {/* Table Column Titles */}
            <div className="grid grid-cols-12 pb-2.5 sm:pb-3 border-b-2 border-[#875d27]/40 text-[#422912] font-cinzel font-bold text-[11px] xs:text-xs sm:text-sm tracking-wider uppercase">
              <div className="col-span-5 pl-1.5 xs:pl-2">NAME</div>
              <div className="col-span-5">POR</div>
              <div className="col-span-2 text-right pr-1 xs:pr-2">LINK</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#a88247]/20">
              {currentMembers.map((member, index) => {
                const por = member.post || member.POR || "Core Member";
                const linkedinUrl = member.linkedin || member.LinkedIn;

                return (
                  <div
                    key={index}
                    className="grid grid-cols-12 items-center py-2 xs:py-2.5 sm:py-3 text-[11px] xs:text-xs sm:text-sm transition-colors hover:bg-[#ebd3a0]/40 rounded px-1 xs:px-2"
                  >
                    {/* Name */}
                    <div className="col-span-5 font-semibold text-[#1a1006] truncate pr-1.5 xs:pr-2">
                      {member.name || member.Name}
                    </div>

                    {/* POR */}
                    <div className="col-span-5 text-[#2e1d0f] font-medium truncate pr-1.5 xs:pr-2">
                      {por}
                    </div>

                    {/* LinkedIn Link */}
                    <div className="col-span-2 flex justify-end">
                      {linkedinUrl ? (
                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded bg-[#1c1209] hover:bg-[#0077b5] text-[#ecd8b0] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm min-w-[32px] min-h-[32px]"
                          title={`LinkedIn profile of ${member.name || member.Name}`}
                          aria-label={`LinkedIn profile of ${member.name || member.Name}`}
                        >
                          <FaLinkedin size={14} />
                        </a>
                      ) : (
                        <div className="w-8 h-8 rounded bg-[#1c1209]/30 text-[#ecd8b0]/40 flex items-center justify-center text-[10px]">
                          -
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ParchmentScroll>
      </div>
    </PirateLayout>
  );
};

export default Alumni;