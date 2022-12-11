import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { Navbar } from "../Navbar/Navbar";
import { Wrapper } from "./StickyNavbarElement";

export const StickyNavbar = () => {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      {show && (
        <Wrapper>
          <Container>
            <Navbar />
          </Container>
        </Wrapper>
      )}
    </>
  );
};
