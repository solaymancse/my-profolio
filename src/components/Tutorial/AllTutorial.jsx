import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "./../Navbar/Navbar";
import { Footer } from "./../Footer/Footer";
import { Wrapper } from "./../Projects/ProjectsElements";
import { Tutorial } from "./Tutorial";

export const AllTutorial = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Tutorial />
      </Wrapper>
      <Footer />
    </Container>
  );
};
