import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const Wrapper = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`;
export const H1 = styled.h1`
  margin-top: 150px;
  color: #fff;
  font-size: 20px;
  margin-bottom: 50px;
`;
export const H2 = styled.h2`
  margin-top: 100px;
  color: #fff;
  font-size: 20px;
  margin-bottom: 50px;
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    padding: 5px 15px;
    border: 0.5px solid #fff;
    border-radius: 15px;
  }
  a:hover {
    background-color: #009572;
    border-color: #009572;
    transition: 0.5s;
  }
`;
export const Header = styled(Modal.Header)`
  background-color: #009572;
`;

export const Top = styled.div`
  display: flex;
  color: #333;
`;

export const Bottom = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
