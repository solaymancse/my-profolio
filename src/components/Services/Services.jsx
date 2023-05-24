import React from "react";

import { serviceData } from "../../Data";
import { ServiceCard } from "./ServiceCard";
import { Wrapper, Content, Title } from "./ServicesElements";

export const Services = () => {
  return (
    <Wrapper>
      <Title>Services</Title>
      <Content>
        {serviceData.map((data, index) => (
          <ServiceCard data={data} key={index} />
        ))}
      </Content>
    </Wrapper>
  );
};
