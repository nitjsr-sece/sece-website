import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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

  return (
    <Drawer anchor="left" open={open} onClose={onClose} >
      <div className="drawer-content">
        <List>
          {menuItems.map((item, index) => (
            <ListItem className="menu-item" button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavDrawer;
