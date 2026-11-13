import React, { useState } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import { PMCData } from "./PMCData.js";
import { WaxSealStamp } from "../../components/PirateTheme/PirateIcons";
import { ScrollCard } from "../../components/PirateTheme/ScrollCard";
import { FaTimes } from "react-icons/fa";

const HorizontalScrollCard = ({ member, onOpenModal }) => {
  return (
    <ScrollCard className="w-full">
      <div className="flex flex-row items-center justify-between gap-2.5 xs:gap-4 w-full px-1.5 xs:px-3 sm:px-6 py-1 relative">
        {/* Left Side: Photo + Name + Read More Button */}
        <div className="flex items-center gap-2.5 xs:gap-4 sm:gap-6 z-10 flex-1 min-w-0">
          {/* Member Photo */}
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-[#8f6d3a] bg-[#1a1209] shadow-inner flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>

          {/* Name & Read More */}
          <div className="flex flex-col min-w-0 pr-1">
            <h3 className="font-cinzel font-bold text-xs xs:text-sm sm:text-lg md:text-xl text-[#1b1006] tracking-wide leading-tight truncate">
              {member.name}
            </h3>

            <button
              onClick={() => onOpenModal(member)}
              className="mt-2 self-start px-3 xs:px-4 py-1.5 min-h-[36px] rounded-lg border border-[#6b4c23] bg-[#ddbe8a] hover:bg-[#c9a76d] text-[#1a1005] font-cinzel font-bold text-[11px] xs:text-xs sm:text-sm tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Right Side: Company Logo */}
        <div className="flex items-center justify-end z-10 max-w-[70px] xs:max-w-[95px] sm:max-w-[160px] max-h-10 sm:max-h-14 flex-shrink-0 pr-1 sm:pr-4">
          {member.logo && (
            <img
              src={member.logo}
              alt="Company Logo"
              className="max-h-8 xs:max-h-9 sm:max-h-12 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          )}
        </div>

        {/* Wax Seal Stamp (subtly placed) */}
        <div className="hidden xs:block absolute right-20 sm:right-40 -bottom-1 z-20 pointer-events-none opacity-80">
          <WaxSealStamp className="w-7 h-8 sm:w-9 sm:h-10" />
        </div>
      </div>
    </ScrollCard>
  );
};

const Masterclass = () => {
  const [selectedBatch, setSelectedBatch] = useState(24);
  const [modalMember, setModalMember] = useState(null);
  const [batchDropdownOpen, setBatchDropdownOpen] = useState(false);

  const batches = {
    "Batch 2k21-2k25": 25,
    "Batch 2k20-2k24": 24,
    "Batch 2k19-2k23": 23,
  };

  const getBatchLabel = (batchNum) => {
    return Object.keys(batches).find((key) => batches[key] === batchNum) || "Batch 2k20-2k24";
  };

  const filteredMembers = PMCData.filter((item) => item.batch === selectedBatch);

  // Batch Selector Dropdown (Centered)
  const batchDropdown = (
    <div className="relative inline-block z-40">
      <button
        onClick={() => setBatchDropdownOpen(!batchDropdownOpen)}
        className="flex items-center gap-2.5 xs:gap-3 px-4 xs:px-6 py-2.5 rounded-full border-2 border-[#8a6839] bg-[#160f08] text-[#f5ca73] text-xs xs:text-sm font-cinzel font-semibold hover:border-[#d4af37] hover:bg-[#22160b] transition-all shadow-xl min-h-[44px] cursor-pointer"
        aria-label="Select batch"
      >
        <span>{getBatchLabel(selectedBatch)}</span>
        <span className="text-[10px] xs:text-xs text-[#d4af37]">▼</span>
      </button>

      {batchDropdownOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-lg bg-[#16100a] border-2 border-[#8a6839] shadow-2xl py-1 z-50 animate-in fade-in duration-150">
          {Object.keys(batches).map((label) => (
            <button
              key={label}
              onClick={() => {
                setSelectedBatch(batches[label]);
                setBatchDropdownOpen(false);
              }}
              className={`w-full text-center px-4 py-2.5 text-xs font-cinzel transition-colors cursor-pointer ${
                selectedBatch === batches[label]
                  ? "bg-[#2c1d0e] text-[#f5ca73] font-bold"
                  : "text-[#cbb89b] hover:bg-[#22160b] hover:text-[#f0cf85]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <PirateLayout activeNav="Placement Masterclass">
      <div className="max-w-5xl mx-auto py-1 px-1 xs:px-2 sm:px-4 w-full">
        {/* Wooden Board Container */}
        <div
          className="relative rounded-xl p-3 xs:p-4 sm:p-7 border-2 border-[#543b20] shadow-[0_16px_36px_rgba(0,0,0,0.9)]"
          style={{
            background:
              "linear-gradient(180deg, #181008 0%, #20150b 50%, #150d06 100%)",
          }}
        >
          {/* Subtle wood plank horizontal grain lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a67c38_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-xl" />

          {/* Header Section (Centered Title & Centered Batch Button with high z-index) */}
          <div className="text-center mb-8 sm:mb-12 relative z-30 flex flex-col items-center">
            <h1 className="font-cinzel text-2xl xs:text-3xl sm:text-5xl font-extrabold text-[#f3ca76] tracking-wider drop-shadow-md">
              Placement Masterclass
            </h1>
            <p className="font-cinzel text-[11px] xs:text-xs sm:text-sm font-semibold text-[#c89d55] tracking-widest uppercase mt-1">
              BY SECE
            </p>

            {/* Batch Selector Button in Center */}
            <div className="mt-4 relative z-40">
              {batchDropdown}
            </div>
          </div>

          {/* 1-Column Grid (1 card per row) */}
          <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl mx-auto relative z-10 w-full">
            {filteredMembers.map((member, idx) => (
              <HorizontalScrollCard
                key={idx}
                member={member}
                onOpenModal={setModalMember}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Large Banner Popup Modal for Read More */}
      {modalMember && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-3 xs:p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalMember(null)}
        >
          <div
            className="relative max-w-3xl max-h-[92vh] w-full bg-[#120d08] border-2 border-[#a67c38] rounded-xl p-3 sm:p-4 shadow-2xl overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalMember(null)}
              className="absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-[#20150c] border border-[#a67c38] text-[#f3ca76] flex items-center justify-center hover:bg-[#a67c38] hover:text-[#120d08] transition-colors z-20 cursor-pointer focus:outline-none"
              title="Close"
              aria-label="Close modal"
            >
              <FaTimes size={15} />
            </button>

            <div className="w-full overflow-y-auto rounded-lg max-h-[75vh] flex items-center justify-center">
              <img
                src={modalMember.pmc}
                alt={`${modalMember.name} Placement Masterclass`}
                className="w-full h-auto max-h-[74vh] object-contain rounded"
              />
            </div>

            <div className="mt-3 flex items-center justify-between w-full px-2 text-xs font-cinzel text-[#d4af37]">
              <span className="font-bold">{modalMember.name}</span>
              <span className="hidden sm:inline">Society of Electronics and Communication</span>
            </div>
          </div>
        </div>
      )}
    </PirateLayout>
  );
};

export default Masterclass;