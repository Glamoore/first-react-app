import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

import { MenuContext } from "./../contexts/menu.context";

const OCMenu = (props) => {
  const { isOpen, toggle } = useContext(MenuContext);
  return (
    <Drawer open={isOpen} onClose={toggle}>
      <Box role="presentation" onClick={toggle} onKeyDown={toggle}>
        <List>
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <NavLink to="/">Home</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton>
              <NavLink to="/about">About</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key={3} disablePadding>
            <ListItemButton>
              <NavLink to="/contact">Contact</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem key={4} disablePadding>
            <ListItemButton>
              <NavLink to="/people/add">Add Person</NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default OCMenu;
