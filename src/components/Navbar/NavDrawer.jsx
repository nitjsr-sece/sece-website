import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import "./NavDrawer.css";

const NavDrawer = ({ open, onClose }) => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Events", icon: <EmojiEventsIcon /> },
    { text: "Nexus", icon: <MemoryIcon /> },
    { text: "Calendar", icon: <CalendarMonthIcon /> },
    { text: "Team", icon: <GroupsIcon /> },
  ];

  const drawerVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ 
        '& .MuiDrawer-paper': {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }
      }}
    >
      <motion.div
        className="drawer-content"
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={drawerVariants}
        transition={{ duration: 0.3 }}
      >
        <List>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
               <ListItem button className="group cursor-pointer">
               <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText 
                  primary={item.text} 
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:text-gray-300"
                  />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </motion.div>
    </Drawer>
  );
};

export default NavDrawer;
