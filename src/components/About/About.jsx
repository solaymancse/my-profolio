import bg2 from '../../assets/bg-2.svg'

import { Wrapper, Left, Right, H1, Span, Sign,Title,Img,Signature,Button,ImgDiv } from "./AboutElement";
import img from "../../assets/solayman.png";
import signature from "../../assets/signature.png";

export const About = () => {
  return (
    <>
      <Wrapper>
        <Left data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
         <ImgDiv>
         <img src={bg2} alt="" />
           <Img src={img} alt="img" />
         </ImgDiv>
        </Left>
        <Right data-aos="fade-left">
          <Span>Hello There !</Span>
          <H1>
            I'm Muhammad Solayman. I'm a Professional MERN Stack Web Developer.
            A Computer Science graduated with extensive Full Stack Web
            Development Experience. I have more than 2+ Years Experiences for
            building Professional,Good Looking and User-Friendly Responsive Web
            Application. I Have Strong Programming Skills.
            <br />
            <br />I am a Person Who is Puntual About My Duty. I Write Clean And
            Shortcode So That Anyone Can Review My Code. Client Satisfaction Is
            My first Priority and I Never Compromise With That.
          </H1>
          <Sign>
            <Signature src={signature} alt="/"/>
          </Sign>
          <Button to="/about">Read More...</Button>
        </Right>
      </Wrapper>
    </>
  );
};
