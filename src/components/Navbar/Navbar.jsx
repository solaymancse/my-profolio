import {
  Wrapper,
  Left,
  Center,
  Right,
  H1,
  Links,
  ToogleBar,
} from "./NavbarELements";
import CV from "../../assets/Md_Solayman_Resume.pdf";
import { Toggle } from "../ToggleBar/Toggle";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Left>
          <H1>Solayman.</H1>
        </Left>
        <Center>
          <Links to="/">Home</Links>
          <Links to="/about">About</Links>
          <Links to="/services">Services</Links>
          <Links to="/contact">Contact</Links>
          <Links to="/all-projects">Project</Links>
        </Center>
        <Right>
          <a href={CV} download>
            DOWNLOAD CV
          </a>
        </Right>
        <ToogleBar>
        <FaBars onClick={()=> setIsDrawerOpen(true)}/>
        <Toggle open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}/>
        </ToogleBar>
      </Wrapper>
    </>
  );
};
