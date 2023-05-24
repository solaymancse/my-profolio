import styled from "styled-components";

export const Container = styled.div`
  background-color: #212529;
  width: 100%;
  padding: 100px 0px;

  
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 50px 0px;
  }
`;
export const Wrapper = styled.div`
  padding: 30px 0;
  margin: 0 250px;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  border-bottom: 0.5px solid #6c757d;

  @media (min-width: 576px) and (max-width: 768px){
    margin: 0 20px;
}
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 20px;
    flex-direction: column;
    gap: 30px;
  }
`;
export const H1 = styled.h1`
  font-size: 18px;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;
export const H2 = styled.h2`
  font-size: 14px;
  font-weight: normal;
  color: gray;
`;
export const H3 = styled.h3`
  color: gray;
  font-size: 14px;
  font-weight: normal;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 20px;
`;
export const Icon = styled.a`

  display: flex;
  gap: 20px;
  color: gray;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
