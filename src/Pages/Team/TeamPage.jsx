import React, { useState, useRef } from 'react';
import "./TeamPage.css"; 
import Footer from "../../components/Footer/Footer";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; 
import { Batch2K25, Batch2K26 } from './index';

const TeamPage = () => {
  const batches = {
    'Batch 2K21-2K25': Batch2K25,
    'Batch 2K22-2K26': Batch2K26,
  };

  const [selectedBatch, setSelectedBatch] = useState('Batch 2K21-2K25');

  const sectionRef = useRef(null);

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleLinkClick = (batch) => {
    setSelectedBatch(batch);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="team-page scroll-smooth">
      <section className="team-page__hero text-white py-20 flex flex-col items-center">
        <div className="team-page__links flex space-x-6">
          <a
            href="#section1"
            className="hover:underline hover:text-sky-500 text-lg cursor-pointer"
            onClick={() => handleLinkClick('Batch 2K21-2K25')}
          >
            Batch 2K21-2K25
          </a>
          <a
            href="#section2"
            className="hover:underline hover:text-sky-500 text-lg cursor-pointer"
            onClick={() => handleLinkClick('Batch 2K22-2K26')}
          >
            Batch 2K22-2K26
          </a>
        </div>
      </section>

      <section ref={sectionRef} className="team-page__content my-20">
        <div className="p-6 flex flex-col justify-center items-center">
          <h2 className='text-sky-500 text-5xl font-extrabold tracking-wide mb-6'>MEMBERS</h2>

          <div className="mb-6 flex justify-center items-center mt-10">
            <select
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-xl bg-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={selectedBatch}
              onChange={handleBatchChange}
            >
              {Object.keys(batches).map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-12 justify-center items-center mt-16">
            {batches[selectedBatch].map((member, index) => (
              <div
                key={index}
                className="relative h-[350px] w-[275px] flex flex-col justify-center items-center shadow-lg rounded-2xl overflow-hidden group bg-white transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-[35%] w-full bg-gradient-to-br from-gray-600 to-gray-800 flex justify-center items-center"></div>

                <div className="absolute top-8 z-10 bg-transparent">
                  <img
                    src={member.Img}
                    alt={member.Name}
                    className="object-cover object-top h-[175px] w-[175px] rounded-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="h-[65%] w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white flex flex-col items-center member-info">
                  <h2 className="font-bold mb-2 member-name">{member.Name}</h2>
                  <p className="member-por">{member.POR}</p>

                  <div className="flex gap-4 mt-2">
                    <a
                      href={`mailto:${member.Email}`}
                      className="text-white hover:text-gray-400 transition-colors"
                    >
                      <FaEnvelope className="h-6 w-6" />
                    </a>
                    <a
                      href={member.LinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400 transition-colors"
                    >
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
