import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./NavDrawer.css";

const NavDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  // Menu items without the Calendar
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, route: "/" },
    { text: "Events", icon: <EmojiEventsIcon />, route: "/events" },
    { text: "Nexus", icon: <MemoryIcon />, route: "/nexus" },
    { text: "Team", icon: <GroupsIcon />, route: "/team" },
    { text:"Placement Masterclass", icon: <WorkIcon />, route:"/placement_masterclass"}
  ];

  const drawerVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const handleNavigation = (route) => {
    navigate(route);
    onClose(); // Close the drawer after navigating
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
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
              <ListItem
                button
                className="group cursor-pointer"
                onClick={() => handleNavigation(item.route)} // Navigate on click
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className="transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:text-gray-300 navbar-contents"
                  style={{ padding: "0.2rem" }}
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
