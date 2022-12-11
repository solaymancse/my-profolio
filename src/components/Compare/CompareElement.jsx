import styled from "styled-components";
export const Wrapper = styled.div`
  margin: 150px 0;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e3d67;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
    margin: 50px 0;
  }
`;
export const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    position: relative;
  }
`;
export const Div = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
`;
export const Icon = styled.div`
  font-size: 65px;
  color: #fff;

  @media (min-width: 320px) and (max-width: 991px) {
    font-size: 35px;
  }
`;
export const Title = styled.h1`
  font-size: 16px;
  color: gray;
  font-weight: normal;
`;
export const Desc = styled.div`
  font-size: 65px;
  font-weight: 500;
  color: #fff;
  @media (min-width: 320px) and (max-width: 991px) {
    font-size: 35px;
  }
`;
