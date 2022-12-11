import React, { useState } from "react";

import { Wrapper, Div, Icon, Title, Desc, Content } from "./CompareElement";
import { compareData } from "../../Data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Container } from "react-bootstrap";

export const Compare = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <Wrapper>
      <Container>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Content>
          {compareData.map((data, index) => (
              <Div  key={index}>
                <Desc>
                  {counterOn && (
                    <CountUp start={0} end={data.end} duration={2} />
                  )}
                  +
                </Desc>
                <Title>{data.title}</Title>
                <Icon>{data.icon}</Icon>
              </Div>
          ))}
          </Content>
        </ScrollTrigger>
      </Container>
    </Wrapper>
  );
};
