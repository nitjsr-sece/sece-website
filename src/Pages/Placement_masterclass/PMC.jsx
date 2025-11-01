import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PMC.css';
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import MenuButton from "../../components/MenuButton/MenuButton";
import Navbar2 from "../../components/Navbar2";
import Footer from '../../components/Footer/Footer';
import { PMCData } from './PMCData.js';
import { SentimentDissatisfied } from '@mui/icons-material';
const MasterclassCard = ({ name, image, logo, pmc, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openImage = () => {
        setIsOpen(true);
    };

    const closeImage = () => {
        setIsOpen(false);
    };

    const animationDirection = index % 2 === 0 ? { x: 500 } : { x: -500 };

    return (
        <>
            <motion.div
                className="masterclass-card border rounded-lg flex items-center justify-between p-4 shadow-lg mb-8"
                initial={{ opacity: 0, ...animationDirection }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: index * 0.2 }}
            >
                <div className="flex items-center masterclass-wrapper">
                    <img src={image} alt={name} className="person-img" />
                    <div className="pmc-name">
                        <h3 className="text-lg font-semibold">{name}</h3>
                       
                    </div>
                    <div className="read-more">
                    <button className="mt-2 px-4 py-2 text-white rounded-3xl shadow-md hover:scale-110 transition-all ease-in duration-300" onClick={openImage}>
                            Read More
                        </button>
                        </div>
                </div>

                <img src={logo} alt="Logo" className="company-logo" />
            </motion.div>

            {isOpen && (
                <motion.div
                    className="overlay"
                >
                    <span className="close-button" onClick={closeImage}>
                        &times;
                    </span>
                    <motion.img 
                        src={pmc} 
                        alt="Large view" 
                        className="large-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </motion.div>
            )}
        </>
    );
};

const Masterclass = () => {
  
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [batch,setBatch]=useState(24);
    const batches={
        "Batch 2k20-2k24":24,
        "Batch 2k19-2k23":23
    };
    const handleBatchChange=(e)=>{
           setBatch(e.target.value);
    }
    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen);
    };
    
    return (
        <div className="masterclass-container">
            <Navbar2 />
            <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
             <MenuButton onClick={() => toggleDrawer(true)} className="hamburger-home"/>

            <motion.h1 className="pmc_heading mt-12 text-[#F2CC65] font-harry text-5xl md:text-6xl lg:text-7xl text-center font-bold"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.75 }}
            >Placement Masterclass</motion.h1>
              <motion.p className="text-center mb-12 by-sece text-[#F2CC65]"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 25 }}
            transition={{ duration: 0.5 }}
            >BY SECE</motion.p>
        <select
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-xl bg-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 pmc-select"
              value={batch}
              onChange={handleBatchChange} style={{backgroundColor:"black",color:"white",border:"solid 2px #8f7e32",boxShadow:"1px 1px 1px 1px #8f7e32"}}
            >
              {Object.keys(batches).map((bt) => (
                <option key={batches[bt]} value={batches[bt]}>
                 {bt}
                </option>
              ))}
            </select>
            {PMCData.filter((dt)=>{return dt.batch==batch}).map((data, i) => (
                
                <MasterclassCard
                    key={i}
                    index={i}
                    name={data.name}
                    image={data.image}
                    logo={data.logo}
                    pmc={data.pmc}
                />
            ))}
            <div className='pt-12'>
            <Footer />
            </div>
            
        </div>
    );
};

export default Masterclass;
