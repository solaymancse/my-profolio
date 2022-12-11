import React, { useState } from "react";

import './about.css';
import { StickyNavbar } from "../components/StickyNavbar/StickyNavbar";
import { Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { CopyRight } from "../components/CopyRight/CopyRight";
import {
  Content,
  Top,
  Bottom,
  Left,
  Right,
  H1,
  Span,
  Img,
  Button,
  Tabs
} from "../components/About/AboutElement";
import img from "../assets//solayman.png";
import CV from "../assets/Md_Solayman_Resume.pdf";
import { Education } from "../components/Card/Education";
import { Skills } from "../components/Card/Skills";
import { Tools } from "../components/Card/Tools";

export const AboutPage = () => {
  const [action, setAction] = useState(1);

  const toggleTab = (index)=> {
    setAction(index);
  }

  return (
    <div>
      <StickyNavbar />
      <Container>
        <Navbar />
        <Content>
          <h3>About Me</h3>
          <Top>
            <Left data-aos="fade-right">
              <Img src={img} alt="img" />
            </Left>
            <Right data-aos="fade-left">
              <Span>Who Am I??</Span>
              <H1>
                I'm Muhammad Solayman. I'm a Professional MERN Stack Web
                Developer. A Computer Science graduated with extensive Full
                Stack Web Development Experience. I have more than 2+ Years
                Experiences for building Professional,Good Looking and
                User-Friendly Responsive Web Application. I Have Strong
                Programming Skills.
                <br />
                <br />I am a Person Who is Puntual About My Duty. I Write Clean
                And Shortcode So That Anyone Can Review My Code. Client
                Satisfaction Is My first Priority and I Never Compromise With
                That.
              </H1>

              <Button to={CV} download>
                Download Cv
              </Button>
            </Right>
          </Top>
          <Bottom>
            <Tabs className={action === 1 ? 'tab': 'inactive'} onClick={() => toggleTab(1)}>Education</Tabs>
            <Tabs className={action === 2 ? 'tab':'inactive'}  onClick={() => toggleTab(2)}>Skills</Tabs>
            <Tabs className={action === 3 ? 'tab':'inactive'}  onClick={() => toggleTab(3)}>Tools</Tabs>
            <div>
              {action === 1 && <Education />}
              {action === 2 && <Skills />}
              {action === 3 && <Tools />}
            </div>
          </Bottom>
        </Content>
      </Container>
      <Footer />
      <CopyRight />
    </div>
  );
};
