import React from "react";
import { Navbar } from "./../Navbar/Navbar";
import { Footer } from "./../Footer/Footer";
import { Container } from "react-bootstrap";
import { ProjectCard } from "./../ProjectCard/ProjectCard";
import { Wrapper,H2 } from "./ProjectsElements";
import { projectData } from "../../Data";

export const AllProjects = () => {
  return (
    <Container>
      <Navbar />
      <H2>All Projects</H2>
      <Wrapper data-aos="zoom-in">
      {projectData.map((data,index)=>(
          <ProjectCard data={data} key={index}/>
        ))}
      </Wrapper>
      <Footer />
    </Container>
  );
};
