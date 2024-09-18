import React from 'react';
import { useState } from 'react';
import './PMC.css';
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

import { MoreVert } from '@mui/icons-material';
const MasterclassCard = ({ name, image, logo ,pmc}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openImage = () => {
      setIsOpen(true);
    };
  
    const closeImage = () => {
      setIsOpen(false);
    };
  return (
    <>
    <div className="masterclass-card border rounded-lg flex items-center justify-between p-4 shadow-lg">
      <div className="flex items-center">
        <img src={image} alt={name} className="person-img" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <button className="mt-2 px-4 py-2 text-white rounded-lg shadow-md" onClick={openImage}>
            Read More
          </button>
        </div>
      </div>
      <img src={logo} alt="Logo" className="company-logo" />

    
    </div>
      {isOpen && (
        <div className="overlay">
          <span className="close-button" onClick={closeImage}>
            &times;
          </span>
          <img 
            src={pmc} 
            alt="Large view" 
            className="large-image" 
          />
        </div>
      )}
</>
  );
};

const Masterclass = () => {
    const PMCData=[
        {
            name:"Ronit Ranjan",
            image:ronit,
            logo:mv,
            pmc:ronit_mv_pmc
        },
        {
            name:"Mohit Ranjan",
            image:mohit_ranjan,
            logo:paltech,
            pmc:mohit_ranjan_pmc
        },
        {
          name:"Adiya Kumar",
          image:aditya_kumar,
          logo:intuit,
          pmc:adiya_kumar_pmc
        },
        {
          name:"Yogesh Kumar",
          image:yogesh_kumar,
          logo:arcesium,
          pmc:yogesh_kumar_pmc
        },
        {
          name:"Rohit Kumar",
          image:rohit_kumar,
          logo:Lowes,
          pmc:rohit_kumar_pmc
        },
        {
          name:"Ishika Kumari",
          image:ishika_kumari,
          logo:invesco,
          pmc:ishika_kumari_pmc
        },
        {
          name:"Akanksha Priya",
          image:akanksha_priya,
          logo:Lowes,
          pmc:akanksha_priya_pmc
        },
        {
          name:"Vikash Kumar",
          image:vikash_kumar,
          logo:deshaw,
          pmc:vikash_kumar_pmc
        }
    ]
  return (
    <div className="masterclass-container">
      <Navbar2/>
      <h1 className=" pmc_heading">Placement Masterclass</h1>
      <p className="text-center mb-8 by-sece">By SECE</p>
      { 
     PMCData.map((data,i)=>(
       <MasterclassCard
       name={data.name}
       image={data.image}
       logo={data.logo}
       pmc={data.pmc}
       />
    
      ))
    
}
<Footer/>
    </div>
   
  );
};

export default Masterclass;
