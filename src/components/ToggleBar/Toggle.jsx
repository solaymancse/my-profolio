import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { BiHomeCircle,BiInfoCircle } from "react-icons/bi";
import { GiClockwork } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
import { CgYoutube } from "react-icons/cg";

import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { CloseIcon,Menu } from "./ToggleElement";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export const Toggle = ({ open, onClose }) => {
  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <Box p={2} width="220px" role="presentation">
          <CloseIcon>
            <GrFormClose onClick={onClose} />
          </CloseIcon>
          <Menu>
            <NavLink to="/"><BiHomeCircle/> Home</NavLink>
            <NavLink to="/about"><BiInfoCircle/>About</NavLink>
            <NavLink to="/home"><GiClockwork/>Services</NavLink>
            <NavLink to="/all-projects"><RiProjectorFill/>Projects</NavLink>
            <NavLink to="/contact"><MdOutlineConnectWithoutContact/>Contact</NavLink>
            <NavLink to="/all-tutorial"><CgYoutube/>Tutorial</NavLink>
          </Menu>
        </Box>
      </Drawer>
    </>
  );
};
