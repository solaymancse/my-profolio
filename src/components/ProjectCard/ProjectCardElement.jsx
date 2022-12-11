import styled from "styled-components";
import Card from "@mui/material/Card";

export const CardBox = styled(Card)`
  flex: 1;
`;
export const Media = styled.div`
  background-image: url(${(props) => props.background});
  background-position: top;
  background-size: cover;
  height: 400px;
transition: ease-in-out 8s;
cursor: scroll;
  &:hover{
    background-position: bottom;
    cursor: scroll;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`;
export const Code = styled.div`
  display: flex;
  justify-content: center;
`;
export const Desc = styled.p`
  font-size: 14px;
  border: 0.5px solid #fff;
  padding: 5px;
  margin-right: 5px;
  border-radius: 20px;
  text-transform: uppercase;
  color: #fff;
`;
export const Links = styled.a`
  border: none;
  padding: 5px 10px;
  background-color: #009572;
  color: #fff;
  text-decoration: none;
  border-radius: 15px;
  display: flex;
  align-items: center;
font-size: 14px;
transition: .25s ease-in-out;
  &:hover{
    background-color:#fff;
    color:gray;
  }

  &::nth-child-last(1){
    cursor: pointer;
  }
`;
