import styled from "styled-components";


export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;

@media (min-width: 320px) and (max-width: 480px){
  margin-bottom: 50px;
}
`;
export const Content = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 70px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  @media (min-width: 576px) and (max-width: 768px){
  display: flex;
  justify-content: center;
}
`;
export const Card = styled.div`
  width: 412px;
  height:500px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-bottom:30px;
  transition: 0.5s ease-out;
  
 
`;
export const ContentDiv = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  padding:30px;
  margin-top: -10px;
  margin-bottom: 20px;
  text-align:center;
  align-items: center;
`;

export const Button = styled.button`
  color: #777777;
  font-size: 14px;
  font-weight: normal;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  border: 0.5px solid lightgray;
  position: static;
 width: 100%;

  &:hover {
    color: #fff;
    background-color: #009572;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
`;

export const Icon = styled.div`
  margin-top: 30px;
  font-size: 35px;
  text-align: center;
  color: #009572;
`;
export const H1 = styled.h1`
  color: ${props=>props.color};
  font-size: 18px;
  text-align: center;
  
`;
export const Top = styled.div`
  height:40%;
`;
export const Desc = styled.p`
  color:#777777;
`;
export const H2 = styled.h2`
  color: #777777;
  font-size: 15px;
  text-align: center;
  font-weight:600;
  font-family: 'Jost', sans-serif;

  

`;



export const ReactIcon = styled.div`
  color: #333;
  font-size: 30px;
`;
export const Title = styled.h1`
   font-weight: normal;
    margin-bottom: 30px;
`;
export const Img = styled.img`
   width:100%;
   height:100%;
   object-position: center;
   object-fit: cover;
   border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Input = styled.input`
  width:100%;
  padding:5px;
  margin-top: 10px;
  border: 0.5px solid lightgray;
  outline:none;
  &:nth-last-child(1){
    background-color: #009572;
    border: 0.5px solid green;
    color:#fff;
    font-size: 14px;
    width: 100px;
    float: right;
    margin-top: 30px;
    transition: .5s ease-in-out;

    &:hover{
      background-color: #fff;
      color:#333;
      border: 0.5px solid lightgray;
      outline: #333;
    }
  }
`;
export const ModalContainer = styled.div`
  
  
`;
export const Description = styled.p`
  color: grey;
  font-size: 15px;
  text-align: justify;
  font-weight: normal;
  
`;
