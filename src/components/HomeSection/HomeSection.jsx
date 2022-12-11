import "./home.css";

import CV from "../../assets/Md_Solayman_Resume.pdf";
import { Wrapper,Div,Icons,Icon } from "./HomeSectionELement";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillGithub,AiFillYoutube,AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const HomeSection = () => {
  return (
    <Wrapper>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span data-aos="zoom-in">Hello I'm a</span>
        <br />
        <span data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500">
          <Typewriter
            words={["MERN Developer.", "Web Designer.", "Programmer."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
       
      </div>
        <Div data-aos="fade-left">
      <NavLink to={CV} download>
        Download CV
      </NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
      </Div>
   
    <Icons>
       <Icon target="_blank" href="https://github.com/solaymancse"> <AiFillGithub/></Icon>
       <Icon target="_blank" href="https://www.facebook.com/SolaymanMuhammad1">  <FaFacebook/></Icon>
       <Icon target="_blank" href="https://www.youtube.com/channel/UC-dummRPZ2jjHyN-LSlJdJg"> <AiFillYoutube/></Icon>
       <Icon target="_blank" href="https://www.linkedin.com/in/md-solayman-686600157/"> <AiFillLinkedin/></Icon>
       <Icon target="_blank" href="https://www.gmail.com"> <SiGmail/></Icon>

        </Icons> 

 
      
 
    
    </Wrapper>
  );
};
