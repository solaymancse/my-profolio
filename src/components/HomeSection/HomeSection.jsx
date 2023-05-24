import CV from "../../assets/Md_Solayman_Resume.pdf";
import {
  Wrapper,
  Div,
  Icons,
  Icon,
  Left,
  Section,
  Right,
  ImgDiv,
  H5
} from "./HomeSectionELement";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "../Navbar/Navbar";

export const HomeSection = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Section>
          <Left id="title">
            <span data-aos="zoom-in">Hello , My Name is</span>
            <div>
              <h1 data-aos="zoom-in-right" data-aos-offset="400"
     data-aos-easing="ease-in-sine">MUHAMMAD SOLAYMAN</h1>
              <h5 className="text-secondary mt-4">MERN STACK Developer</h5>
              <Div data-aos="fade-left" className="mt-5 p-0">
                <NavLink to={CV} download>
                  Download CV
                </NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
              </Div>
             
            </div>
            <Icons>
                <Icon className="d-flex gap-10 align-items-center" target="_blank" href="https://github.com/solaymancse">
                  <AiFillGithub /><span className="mb-0 fs-6">Solayman-Cse</span>
                </Icon>
                <Icon
                className="d-flex gap-10 align-items-center"
                  target="_blank"
                  href="https://www.youtube.com/channel/UC-dummRPZ2jjHyN-LSlJdJg"
                >
                
                  <AiFillYoutube /><span className="mb-0 fs-6">Learn With Solayman</span>
                </Icon>
        
              </Icons>
          </Left>
          <Right>
            <ImgDiv>
              <img src="assets/me.jpg" alt="" />
            </ImgDiv>
          </Right>
        </Section>
      </Wrapper>
    </Container>
  );
};
