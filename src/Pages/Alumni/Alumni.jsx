import { useState,useRef} from "react";
import React from "react";
import Navbar2 from "../../components/Navbar2";
import MenuButton from "../../components/MenuButton/MenuButton";
import NavDrawer from "../../components/Navbar/NavDrawer.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Batch2k19, Batch2k20 , Batch2K21} from "../Team/index.js";
import "./Alumni.css"
const Alumni = () => {
    const batches = {
        'Batch 2K19-2K23': Batch2k19,
        'Batch 2K20-2K24': Batch2k20,
        'Batch 2K21-2K25': Batch2K21
      };
    const handleLinkClick = (batch) => {
        setSelectedBatch(batch);
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };
      const [selectedBatch, setSelectedBatch] = useState('Batch 2K19-2K23');
      const sectionRef = useRef(null);
    
      const handleBatchChange = (e) => {
        setSelectedBatch(e.target.value);
      };
      const [drawerOpen, setDrawerOpen] = useState(false);
      const toggleDrawer = (isOpen) => {
          setDrawerOpen(isOpen);
      };
  return (
    <>
    <Navbar2/>
    <NavDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
    <MenuButton onClick={() => toggleDrawer(true)} className="hamburger-home"/>
    <section className="text-white flex flex-col items-center">
        
        <div className="team-page__links flex space-x-6">
          <a
            href="#section1"
            className="hover:underline hover:text-sky-500 text-lg cursor-pointer"
            onClick={() => handleLinkClick('Batch 2K19-2K23')}
          >
            Batch 2K19-2k23
          </a>
          <a
            href="#section2"
            className="hover:underline hover:text-sky-500 text-lg cursor-pointer"
            onClick={() => handleLinkClick('Batch 2K20-2K24')}
          >
            Batch 2K20-2k24
          </a>
          <a
            href="#section3"
            className="hover:underline hover:text-sky-500 text-lg cursor-pointer"
            onClick={() => handleLinkClick('Batch 2K21-2K25')}
          >
            Batch 2K21-2k25
          </a>
        </div>
      </section>
      <div className="mb-6 flex justify-center items-center " style={{marginTop:"10rem"}}>
            <select
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-xl bg-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={selectedBatch}
              onChange={handleBatchChange} style={{backgroundColor:"black",color:"white",border:"solid 2px violet",boxShadow:"1px 1px 1px 1px violet"}}
            >
              {Object.keys(batches).map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg" style={{width:"60rem",margin:"auto",marginTop:"5rem",zoom:"1.0"}}>
        
    <h2 className='text-[#9375c6] text-xl font-bold tracking-wide mb-6 py-3' style={{textAlign:"center",margin:"auto"}}>Creators of Community, Architects of Tomorrow</h2>
        
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{border:"solid 2px violet",boxShadow:"10px 10px 10px"}} >
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" style={{backgroundColor:"black",color:"violet"}}>
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              POR
            </th>
          </tr>
        </thead>
        <tbody>
        {batches[selectedBatch].map((member, index) => (
          <tr 
            key={index} 
            className={`${index % 2 === 0 ? 'odd:bg-white odd:dark:bg-gray-900' : 'even:bg-gray-50 even:dark:bg-gray-800'} border-b dark:border-gray-700`}
          >
            <th 
              scope="row" 
              className="px-6 py-4 font-bold text-black-900 whitespace-nowrap dark:text-white alumni-name" 
            >
              <a href={member.linkedin}>{member.name}</a>
            </th>
            <td class="px-6 py-4" style={{backgroundColor:"black",color:"white"}} >
                    {member.post}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <div className='pt-12'>
        <Footer />
    </div>
    </>
  );
};

export default Alumni;
