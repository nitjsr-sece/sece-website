import React, { useState, useRef } from "react";
import PirateLayout from "../../components/PirateTheme/PirateLayout";
import ParchmentScroll from "../../components/PirateTheme/ParchmentScroll";
import events from "./Events";
import nexusVideo from "../../assets/NexusPage/nexus-recap copy.mp4";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaUndo,
  FaRedo,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

/**
 * Individual Row-wise Event Card.
 * Displays photo on one side with circular golden navigation buttons underneath
 * to cycle through that event's specific pictures.
 * Alternates left-right orientation on alternating rows.
 */
const NexusEventCard = ({ event, index }) => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos =
    Array.isArray(event.photos) && event.photos.length > 0
      ? event.photos
      : [event.image || event.photo];

  const handlePrevPhoto = () => {
    setPhotoIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setPhotoIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Alternating layout: even index = photo left, text right; odd index = text left, photo right
  const isReverse = index % 2 === 1;

  return (
    <ParchmentScroll className="w-full">
      <div
        className={`flex flex-col ${
          isReverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 sm:gap-8 w-full py-2`}
      >
        {/* Photo Column with Navigation Arrows Below */}
        <div className="w-full md:w-1/2 flex flex-col items-center flex-shrink-0">
          <div className="group w-full h-[260px] sm:h-[320px] rounded-xl overflow-hidden border-2 border-[#7a5423] shadow-md bg-[#160f08] relative">
            <img
              src={photos[photoIdx]}
              alt={`${event.name} - Photo ${photoIdx + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>

          {/* Round Golden Arrow Buttons below the photo */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={handlePrevPhoto}
              className="w-9 h-9 rounded-full bg-[#633f15] hover:bg-[#855722] text-[#fff0c8] flex items-center justify-center font-bold shadow-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
              title="Previous picture"
              aria-label="Previous picture"
            >
              <FaChevronLeft size={13} />
            </button>

            <span className="text-xs font-cinzel font-bold text-[#4a2e12]">
              {photoIdx + 1} / {photos.length}
            </span>

            <button
              onClick={handleNextPhoto}
              className="w-9 h-9 rounded-full bg-[#633f15] hover:bg-[#855722] text-[#fff0c8] flex items-center justify-center font-bold shadow-md transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
              title="Next picture"
              aria-label="Next picture"
            >
              <FaChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Content Column: Centered Title + Gold Dash Underline + Description */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center p-2 sm:p-4">
          <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#1a0f05] tracking-wide">
            {event.name}
          </h3>

          {/* Golden Dash Underline */}
          <div className="w-14 h-0.5 bg-[#7a5423] rounded-full my-3" />

          <p className="text-[#2b1a0e] text-sm sm:text-[15px] leading-relaxed text-justify font-sans font-medium mt-2">
            {event.description}
          </p>
        </div>
      </div>
    </ParchmentScroll>
  );
};

const NexusPage = () => {
  // Video Player state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Video Controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const skipTime = (seconds) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(
      0,
      Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + seconds)
    );
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <PirateLayout activeNav="Nexus">
      <div className="max-w-6xl mx-auto py-3 px-2 sm:px-4 flex flex-col space-y-8 sm:space-y-12">
        {/* ============================================================== */}
        {/* 1. NEXUS INTRO SCROLL                                           */}
        {/* ============================================================== */}
        <section className="w-full">
          <ParchmentScroll className="w-full">
            <div className="text-center px-2 sm:px-6">
              <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-[#1a0f05] tracking-wider mb-3">
                Nexus – Where Fun Meets Brilliance!
              </h2>

              <p className="text-[#2c1a0d] text-sm sm:text-base leading-relaxed text-center sm:text-justify max-w-5xl mx-auto font-sans font-medium">
                <strong>Nexus</strong> is the signature fest of the Electronics and Communication
                Engineering department at NIT Jamshedpur, celebrated with unmatched enthusiasm
                every year. This exhilarating three-day extravaganza brings the campus to life with
                a perfect blend of technical brilliance and vibrant entertainment. From coding challenges
                and robotics competitions to quirky fun games, Nexus offers something for everyone.
                Signature events like Talent Hunt, Perfect Pixel, Film Nexus, Digimon, and Codexus
                further amplify the excitement, ensuring every participant finds a platform to shine,
                ignites talent, and creates memories that last a lifetime. Be part of the magic. Be part of Nexus!
              </p>
            </div>
          </ParchmentScroll>
        </section>

        {/* ============================================================== */}
        {/* 2. NEXUS HIGHLIGHT REEL VIDEO PLAYER                            */}
        {/* ============================================================== */}
        <section className="w-full">
          <ParchmentScroll className="w-full">
            <div className="w-full max-w-4xl mx-auto py-1">
              <div className="text-center mb-4">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1b1006]">
                  Nexus Highlight Reel
                </h3>
              </div>

              {/* Video Player Screen */}
              <div className="relative rounded-xl overflow-hidden border border-[#8a6839] bg-black shadow-inner aspect-video flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={nexusVideo}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                  playsInline
                />

                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#1b120a]/80 border-2 border-[#d4af37] text-[#f7cd78] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-20 pl-1 cursor-pointer"
                    aria-label="Play video"
                  >
                    <FaPlay size={20} />
                  </button>
                )}
              </div>

              {/* Custom Nautical Video Controller Bar */}
              <div className="mt-3 bg-[#110b06] border border-[#523d26] rounded-md p-2.5 flex flex-col gap-2 shadow-lg">
                <div className="flex items-center justify-center gap-6 text-[#e8c782]">
                  <button
                    onClick={() => skipTime(-10)}
                    className="flex items-center gap-1 text-xs hover:text-[#f7cd78] transition-colors p-1 cursor-pointer"
                    title="Rewind 10 seconds"
                  >
                    <FaUndo size={12} />
                    <span className="text-[10px] font-bold">10</span>
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-full bg-[#2a1a0f] border border-[#a67c38] flex items-center justify-center text-[#f7cd78] hover:bg-[#a67c38] hover:text-[#110b06] transition-all cursor-pointer"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} className="pl-0.5" />}
                  </button>

                  <button
                    onClick={() => skipTime(10)}
                    className="flex items-center gap-1 text-xs hover:text-[#f7cd78] transition-colors p-1 cursor-pointer"
                    title="Forward 10 seconds"
                  >
                    <span className="text-[10px] font-bold">10</span>
                    <FaRedo size={12} />
                  </button>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#baa171]">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-1 bg-[#3a2919] rounded-lg appearance-none cursor-pointer accent-[#c89d55]"
                  />

                  <span className="font-mono text-[10px] text-[#ab9475]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <button
                    onClick={toggleMute}
                    className="text-[#baa171] hover:text-[#f7cd78] transition-colors cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <FaVolumeMute size={13} /> : <FaVolumeUp size={13} />}
                  </button>
                </div>
              </div>
            </div>
          </ParchmentScroll>
        </section>

        {/* ============================================================== */}
        {/* 3. SECTION HEADER: EVENTS OF NEXUS                             */}
        {/* ============================================================== */}
        <div className="text-center pt-2">
          <div className="w-16 h-1 bg-[#f5d784] rounded-full mx-auto mb-4" />
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#f3ca76] tracking-wider drop-shadow-md">
            Events of Nexus
          </h2>
          <p className="text-xs sm:text-sm font-serif text-[#ab9475] italic mt-1">
            Explore the flagship challenges, creative contests & technical battles
          </p>
        </div>

        {/* ============================================================== */}
        {/* 4. ROW-WISE EVENTS STACK (Each Event in Its Own Row)           */}
        {/* ============================================================== */}
        <section className="flex flex-col gap-8 sm:gap-10 w-full">
          {events.map((event, idx) => (
            <NexusEventCard key={event.name || idx} event={event} index={idx} />
          ))}
        </section>
      </div>
    </PirateLayout>
  );
};

export default NexusPage;
