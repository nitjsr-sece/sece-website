
import React from "react";
import { Link } from "react-router-dom";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";

import aboutPhoto from "../../assets/about-photo2.png";
import nexusPhoto from "../../assets/nexus-photo2.jpg";
import eventPhoto from "../../assets/event_photos2.jpg";

const HomeView = () => {
  return (
    <PirateLayout activeNav="Home">
      <div className="max-w-6xl mx-auto py-2 space-y-6 sm:space-y-8 animate-fade-in-up w-full">

        {/* Hero Header */}
        <div className="text-center space-y-2 sm:space-y-3 px-2">

          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#8a6839] bg-[#1a1208]/90 text-[#d4af37] text-xs font-cinzel shadow-sm">
            <span>Official Flagship Basecamp</span>
          </div>

          <h1 className="font-cinzel text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3ca76] tracking-wider leading-tight drop-shadow-md break-words">
            Society of Electronics & Communication
          </h1>

          <p className="text-xs xs:text-sm sm:text-base font-serif italic text-[#cbb89b] max-w-2xl mx-auto leading-relaxed">
            Shaping Electronics • Transforming Communication • Connecting the Future
          </p>

          <p className="text-[10px] xs:text-[11px] sm:text-xs font-sans text-[#9e886d] uppercase tracking-widest">
            Department of ECE • National Institute of Technology Jamshedpur
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#20150b] border border-[#a67c38] text-[#f5ca73] hover:bg-[#8a6839] hover:text-[#140e08] font-cinzel text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 min-h-[44px]"
            >
              Explore Treasure Map
            </Link>
          </div>
        </div>

        {/* About Us Scroll */}
        <ParchmentScroll className="max-w-4xl mx-auto">
          <div className="py-2 px-2 sm:px-6">

            <div className="text-center pb-3 sm:pb-4 mb-4 border-b border-[#8a6839]/30">
              <span className="text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest text-[#735025] font-bold">
                About Our Society
              </span>

              <h2 className="font-fondamento italic text-xl xs:text-2xl sm:text-3xl font-bold text-[#1b1005] mt-0.5">
                Where Innovation Meets Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center">

              <div className="space-y-3 text-xs sm:text-sm font-serif text-[#3d2a17] leading-relaxed text-left sm:text-justify">

                <p>
                  Welcome to the <strong>Society of Electronics and Communication Engineering (SECE)</strong>,
                  where innovation meets excellence in the realm of advancing technology.
                  Our vision is to create a dynamic space where fresh ideas can be turned into reality
                  through passion, teamwork, and technical determination.
                </p>

                <p>
                  We organize a wide spectrum of events, workshops, hackathons, and webinars throughout
                  the academic year to keep students at the forefront of modern semiconductor engineering,
                  embedded systems, competitive programming, and cutting-edge software domains.
                </p>

                <p className="italic font-semibold text-[#543b22]">
                  &ldquo;Different Islands • Same Crew • Bigger Dreams&rdquo;
                </p>

              </div>

              <div className="group relative rounded-xl overflow-hidden border-2 border-[#735025] shadow-xl bg-[#1b1208]">

                <img
                  src={aboutPhoto}
                  alt="SECE Team and Department"
                  className="w-full h-48 xs:h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a06]/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                  <span className="font-cinzel text-[10px] xs:text-[11px] text-[#f5ca73] font-bold">
                    ECE Department • NIT Jamshedpur
                  </span>
                </div>

              </div>
            </div>
          </div>
        </ParchmentScroll>

        {/* Society Pillars */}
        <div className="flex flex-col gap-6 sm:gap-10 max-w-5xl mx-auto w-full">

          {/* Row 1: Nexus Fest */}
          <section className="w-full">

            <h2 className="font-cinzel text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#f3ca76] tracking-wide mb-2">
              Nexus
            </h2>

            <ParchmentScroll className="w-full">
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 py-2">

                <div className="w-full md:w-1/2 flex flex-col justify-between self-stretch">

                  <div>
                    <h3 className="font-cinzel font-bold text-lg xs:text-xl sm:text-2xl text-[#1a0f05] mb-2 sm:mb-3 border-b border-[#8a602a]/30 pb-2">
                      Nexus — Where Fun Meets Brilliance!
                    </h3>

                    <p className="text-xs xs:text-sm sm:text-[15px] leading-relaxed text-[#2b1a0e] text-left sm:text-justify font-sans font-medium">
                      Nexus is the signature fest of the ECE department at NIT Jamshedpur, celebrated
                      every year with unmatched enthusiasm. A three-day extravaganza combining robotics battles,
                      Decoduino IoT competitions, CP contests, talent hunts, and vibrant cultural nights,
                      bringing together students from all disciplines to innovate and celebrate.
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 border-t border-[#8a602a]/30 flex justify-end">

                    <Link
                      to="/nexus"
                      className="px-4 py-2 rounded-lg bg-[#20150b] border border-[#a67c38] text-[#f5ca73] hover:bg-[#8a6839] hover:text-[#140e08] font-cinzel text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95 inline-flex items-center min-h-[44px]"
                    >
                      Discover Nexus
                    </Link>

                  </div>
                </div>

                <div className="group w-full md:w-1/2 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] rounded-xl overflow-hidden border-2 border-[#7a5423] shadow-xl relative flex-shrink-0 bg-[#140e08]">

                  <img
                    src={nexusPhoto}
                    alt="Nexus Fest"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />

                </div>
              </div>
            </ParchmentScroll>
          </section>

          {/* Row 2: Events & Competitions */}
          <section className="w-full">

            <h2 className="font-cinzel text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#f3ca76] tracking-wide mb-2">
              Events
            </h2>

            <ParchmentScroll className="w-full">
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 py-2">

                <div className="w-full md:w-1/2 flex flex-col justify-between self-stretch">

                  <div>
                    <h3 className="font-cinzel font-bold text-lg xs:text-xl sm:text-2xl text-[#1a0f05] mb-2 sm:mb-3 border-b border-[#8a602a]/30 pb-2">
                      Year-Round Events & Workshops
                    </h3>

                    <p className="text-xs xs:text-sm sm:text-[15px] leading-relaxed text-[#2b1a0e] text-left sm:text-justify font-sans font-medium">
                      The Society of Electronics and Communication Engineering (SECE) conducts a series of
                      events throughout the year, offering students a platform to showcase their talents and
                      unlock their potential. We organize a variety of workshops, webinars, and competitions
                      on diverse topics ranging from electronics, coding to fun events designed to enhance
                      the technical and programming skills of students.
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 border-t border-[#8a602a]/30 flex justify-end">

                    <Link
                      to="/events"
                      className="px-4 py-2 rounded-lg bg-[#20150b] border border-[#a67c38] text-[#f5ca73] hover:bg-[#8a6839] hover:text-[#140e08] font-cinzel text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95 inline-flex items-center min-h-[44px]"
                    >
                      Explore Events
                    </Link>

                  </div>
                </div>

                <div className="group w-full md:w-1/2 h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] rounded-xl overflow-hidden border-2 border-[#7a5423] shadow-xl relative flex-shrink-0 bg-[#140e08]">

                  <img
                    src={eventPhoto}
                    alt="SECE Events"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />

                </div>
              </div>
            </ParchmentScroll>
          </section>
        </div>

        {/* Quick Island Hop Links */}
        <div className="max-w-4xl mx-auto p-3.5 sm:p-4 rounded-xl bg-[#140e08]/90 border border-[#3d2c1b] flex flex-wrap items-center justify-between gap-3 text-xs">

          <div className="flex items-center text-[#cbb89b]">
            <span className="font-cinzel text-xs font-semibold text-[#f0cb79]">
              Explore Other Destinations:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">

            <Link
              to="/"
              className="px-3 py-1.5 min-h-[38px] rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors inline-flex items-center"
            >
              Treasure Map
            </Link>

            <Link
              to="/placement_masterclass"
              className="px-3 py-1.5 min-h-[38px] rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors inline-flex items-center"
            >
              Masterclass
            </Link>

            <Link
              to="/alumni"
              className="px-3 py-1.5 min-h-[38px] rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors inline-flex items-center"
            >
              Alumni
            </Link>

            <Link
              to="/team"
              className="px-3 py-1.5 min-h-[38px] rounded bg-[#20150c] border border-[#5a4228] hover:border-[#c89d55] text-[#d6c19f] hover:text-[#f7cd78] font-cinzel text-[11px] font-medium transition-colors inline-flex items-center"
            >
              Team
            </Link>

          </div>
        </div>

      </div>
    </PirateLayout>
  );
};

export default HomeView;
