import React from "react";

import { H1, Div, Content } from "./TutorialElements";
import { Links } from "../Projects/ProjectsElements";
import { NavLink } from "react-router-dom";
import { SliderData } from "../../Data";
export const Tutorial = () => {
  

  return (
    <div>
      <H1>Tutorial</H1>
      <Content>
        {SliderData.map((data, index) => (
          <Div key={index} data-aos="zoom-in">
            <img src={data.frame} alt="" />

            <p>{data.title}</p>
          </Div>
        ))}
      </Content>

      <Links>
        <NavLink to="/all-tutorial">See All</NavLink>
      </Links>
    </div>
  );
};
