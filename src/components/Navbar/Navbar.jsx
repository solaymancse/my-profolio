import {
  Wrapper,
  Center,
  H1,
  Links,
  ToogleBar,
} from "./NavbarELements";
import { Toggle } from "../ToggleBar/Toggle";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Container } from "react-bootstrap";

export const Navbar = () => {
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
          <H1>Solayman.</H1>
        <Center>
          <Links to="/">Home</Links>
          <Links to="/about">About</Links>
          <Links to="/services">Services</Links>
          <Links to="/contact">Contact</Links>
          <Links to="/all-projects">Project</Links>
        </Center>
     
        <ToogleBar>
        <FaBars onClick={()=> setIsDrawerOpen(true)}/>
        <Toggle open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}/>
        </ToogleBar>
      </Wrapper>
    </Container>
  );
};
