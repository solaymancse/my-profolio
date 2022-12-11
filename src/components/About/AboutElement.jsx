import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  gap: 0 100px;
  background-color: #0E121A;
  position: static;
  z-index: 999;

  @media (min-width: 575px) and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

export const Content = styled.div``;
export const Top = styled.div`
  display: flex;
  gap: 0 50px;

  @media (min-width: 575px) and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;
export const Bottom = styled.div`
  margin-top: 50px;
`;
export const Left = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const Img = styled.img`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const Right = styled.div``;
export const H1 = styled.h1`
  color: grey;
  font-size: 15px;
  text-align: justify;
  font-weight: normal;
  margin-bottom: 30px;
`;
export const Span = styled.h1`
  color: grey;
`;
export const Sign = styled.div`
  border-bottom: 0.5px solid #6c757d;
  width: 300px;
  height: 120px;
  margin-bottom: 50px;
`;
export const Title = styled.h1`
  height: 10vh;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  margin-left: 10px;
`;
export const Signature = styled.img`
  width: 300px;
  height: 170px;
`;
export const Button = styled(NavLink)`
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  background-color: #009572;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #fff;
    color: #333;
    transition: 0.3s ease-in-out;
  }
`;
export const Tabs = styled.div`
  display: inline;
  padding: 10px 20px;


  &:hover {
    background-color: #fff;
    color: #333;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  
`;

