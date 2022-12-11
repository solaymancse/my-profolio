import React, { useEffect, useState } from "react";

import '../App.css'
import { About } from "../components/About/About";
import { HomeSection } from "../components/HomeSection/HomeSection";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";
import { Services } from "../components/Services/Services";
import { Compare } from "./../components/Compare/Compare";
import { Tutorial } from "./../components/Tutorial/Tutorial";
import { Review } from "./../components/Review/Review";
import { GetInTouch } from "../components/GetInTouch/GetInTouch";
import { Footer } from "../components/Footer/Footer";
import { CopyRight } from "../components/CopyRight/CopyRight";
import { Container } from "react-bootstrap";
import { StickyNavbar } from "../components/StickyNavbar/StickyNavbar";
import {Title} from './PagesElements'
import ScrollBtn from "../components/ScrollBtn/ScrollBtn";



export const Home = () => {
  const [done, setDone] = useState(undefined);


  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 4000);
  }, []);
  return (
    <>
      {!done ? (
       <div>
          <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Title>"And He found you lost and guided [you]"</Title>
       </div>
      ) : (
        <div>
          <StickyNavbar />
        
          <Container>
            <Navbar />
          </Container>
            <HomeSection />
          <Container>
              <ScrollBtn/>
            <About />
            </Container>
            <Compare />
            <Container>
            <Projects />
            <Services />
            <Tutorial />
          </Container>
          <Review />
          <Container>
            <GetInTouch />
          </Container>
          <Footer />
          <CopyRight />
        </div>
      )}
    </>
  );
};
