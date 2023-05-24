import React from "react";
import { Title } from "../About/AboutElement";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Wrapper, Links } from "./ProjectsElements";
import { NavLink } from "react-router-dom";
import { projectData } from "../../Data";

export const Projects = () => {
  return (
    <>
      <Title>Feature Projects</Title>
      <Wrapper data-aos="zoom-in">
        {projectData.map((data,index)=>(
          <ProjectCard data={data} key={index}/>
        ))}
      </Wrapper>
      <Links><NavLink to="/all-projects">See All</NavLink></Links>
      
    </>
  );
};
