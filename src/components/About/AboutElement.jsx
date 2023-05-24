import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  width:100%;
  height:800px;
  gap:100px;
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
flex:1;
width:100%;
height:100%;
background-color:#D6EAEF;
position:relative;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
  }



`;
export const ImgDiv = styled.div`
width:400px;
heigh:300px;
position:absolute;
top:20%;
right:-50px;
:first-child{
  top:20px;
  left:20ppx;
}
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const Img = styled.img`
width:100%;
height:100%;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
export const Right = styled.div`
flex:1;
`;
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

