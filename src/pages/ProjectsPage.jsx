import React from "react";
import { Container } from "react-bootstrap";
import { CopyRight } from "../components/CopyRight/CopyRight";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";

export const ProjectsPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Projects />
      </Container>
      <Footer />
      <CopyRight />
    </>
  );
};
