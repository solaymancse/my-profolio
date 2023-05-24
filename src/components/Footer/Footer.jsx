import React from "react";

import { FiMail } from 'react-icons/fi'
import { MdCall } from 'react-icons/md'
import { FaMapMarkerAlt,FaFacebook } from 'react-icons/fa'
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from 'react-icons/ai'

import { Container, Wrapper, H1, H2,H3,Icon,Social } from "./FooterElements";
export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <H1>Solayman Muhammad</H1>
          <H2>Bsc in CSE</H2>
          <H2>MERN Stack Developer</H2>
        </div>
        <div>
          <H1>Contact</H1>
          <H3><FiMail/>mdsolaymancse@gmail.com</H3>
          <H3><MdCall/>+8801864472623</H3>
          <H3><FaMapMarkerAlt/>Chittagong, Bangladesh</H3>
        </div>
        <div>
          <H1>Social</H1>
          <Social>

          <Icon target="_blank" href="https://www.facebook.com/SolaymanMuhammad1"><FaFacebook/></Icon>
          <Icon target="_blank" href="https://github.com/solaymancse"><AiFillGithub/></Icon>
          <Icon target="_blank" href="https://www.linkedin.com/in/md-solayman-686600157/"><AiFillLinkedin/></Icon>
          <Icon target="_blank" href="https://www.youtube.com/channel/UC-dummRPZ2jjHyN-LSlJdJg"><AiFillYoutube/></Icon>
          </Social>
        </div>
      </Wrapper>
    </Container>
  );
};
