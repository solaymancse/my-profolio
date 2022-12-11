import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 870px;
  background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
  


  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    position: relative; 
    gap: 30px;
    margin-bottom: 30px;
    
  }
`;

export const H1 = styled.h1`
    font-size: 65px;
    color: grey;
`;
export const H2 = styled.h2``;
export const Span = styled.span`
  font-size: 65px;
  line-height: 170px;
  color: #009572;

  
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
    line-height: 70px;
  }
`;

export const Links = styled(NavLink)``;
export const Icons = styled.div`
position: absolute;
display: flex;
gap: 20px;
justify-content: center;
    bottom: 20%;
    left: 0;
    right: 0;
    text-align: center;
    margin-top: -60px;
    padding-left: 10px;
`;
export const Icon = styled.a`
text-decoration:none;
font-weight: 500;
font-size: 25px;
color: #414A4C;
transition: 0.3s ease;
cursor: pointer;
&:hover{
  color: #fff;
}
`;

export const Div = styled.div`
 position: absolute;
    top: 55%;
    left: 0;
    right: 0;
    text-align: center;
    margin-top: -60px;
    padding-left: 10px;
 
     @media (min-width: 320px) and (max-width: 480px) {
     
      top: 45%;
    }
  a {
    font-family: "lato", sans-serif;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    padding: 15px 20px;
    background-color: #009572;
    margin-right: 15px;
   
    &:nth-child(1){
      background-color: #fff;
      color: #333;

      &:hover{
        background-color: #009572;
      }
    }

    &:hover{
      background-color: #fff;
      transition: 0.5s ease-in-out;
      color: #333;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 10px;
     
    }
  }

 
`;
