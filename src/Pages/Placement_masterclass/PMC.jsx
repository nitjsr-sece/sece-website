import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PMC.css';
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import MenuButton from "../../components/MenuButton/MenuButton";
import Navbar2 from "../../components/Navbar2";
import Footer from '../../components/Footer/Footer';
import ronit from '../../assets/placement_masterclass/ronit.png';
import mv from '../../assets/placement_masterclass/moneyview.png';
import ronit_mv_pmc from '../../assets/placement_masterclass/ronit-mv-pmc.jpg';
import mohit_ranjan from '../../assets/placement_masterclass/mohit-ranjan.png';
import paltech from '../../assets/placement_masterclass/paltech.png';
import mohit_ranjan_pmc from '../../assets/placement_masterclass/mohit-ranjan-pmc.jpg';
import aditya_kumar from '../../assets/placement_masterclass/aditya-kumar.png';
import adiya_kumar_pmc from '../../assets/placement_masterclass/aditya-kumar-pmc.jpg';
import intuit from '../../assets/placement_masterclass/intuit.jpg';
import yogesh_kumar from '../../assets/placement_masterclass/yogesh-kumar.png';
import yogesh_kumar_pmc from '../../assets/placement_masterclass/yogesh-kumar-pmc.jpg';
import arcesium from '../../assets/placement_masterclass/arcesium.jpg';
import rohit_kumar from '../../assets/placement_masterclass/rohit-kumar.png';
import rohit_kumar_pmc from '../../assets/placement_masterclass/rohit-kumar-pmc.jpg';
import Lowes from '../../assets/placement_masterclass/Lowes.jpg';
import ishika_kumari from '../../assets/placement_masterclass/ishika-kumari.png';
import ishika_kumari_pmc from '../../assets/placement_masterclass/ishika-kumari-pmc.jpg';
import invesco from '../../assets/placement_masterclass/Invesco.jpg';
import akanksha_priya from '../../assets/placement_masterclass/akanksha-priya.png';
import akanksha_priya_pmc from '../../assets/placement_masterclass/akanksha-priya-pmc.jpg';
import vikash_kumar from '../../assets/placement_masterclass/vikash-kumar.png';
import vikash_kumar_pmc from '../../assets/placement_masterclass/vikash-kumar-pmc.jpg';
import deshaw from '../../assets/placement_masterclass/deshaw.jpg';

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
                <div className="flex items-center">
                    <img src={image} alt={name} className="person-img" />
                    <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
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
    const PMCData = [
        {
            name: "Ronit Ranjan",
            image: ronit,
            logo: mv,
            pmc: ronit_mv_pmc
        },
        {
            name: "Mohit Ranjan",
            image: mohit_ranjan,
            logo: paltech,
            pmc: mohit_ranjan_pmc
        },
        {
            name: "Adiya Kumar",
            image: aditya_kumar,
            logo: intuit,
            pmc: adiya_kumar_pmc
        },
        {
            name: "Yogesh Kumar",
            image: yogesh_kumar,
            logo: arcesium,
            pmc: yogesh_kumar_pmc
        },
        {
            name: "Rohit Kumar",
            image: rohit_kumar,
            logo: Lowes,
            pmc: rohit_kumar_pmc
        },
        {
            name: "Ishika Kumari",
            image: ishika_kumari,
            logo: invesco,
            pmc: ishika_kumari_pmc
        },
        {
            name: "Akanksha Priya",
            image: akanksha_priya,
            logo: Lowes,
            pmc: akanksha_priya_pmc
        },
        {
            name: "Vikash Kumar",
            image: vikash_kumar,
            logo: deshaw,
            pmc: vikash_kumar_pmc
        }
    ];
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (isOpen) => {
        setDrawerOpen(isOpen);
    };

    return (
        <div className="masterclass-container">
            <Navbar2 />
            <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
             <MenuButton onClick={() => toggleDrawer(true)} className="hamburger-home"/>
            <motion.h1 className="pmc_heading"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            >Placement Masterclass</motion.h1>
            <motion.p className="text-center mb-12 by-sece"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >By SECE</motion.p>
            {PMCData.map((data, i) => (
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
