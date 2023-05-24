import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 100px 0;
  padding: 20px 0;
  position: relative;
  background: #44a08d;

  @media (min-width: 576px) and (max-width: 768px) {
    margin: 20px 0px;
    padding: 10px 50px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 20px 10px;
    padding: 10px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #fff;
  padding: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0;
  }
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  padding: 30px;

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0px;
    flex-direction: column;
  }
`;
export const DotContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
export const Dots = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin: 0 5px;
  background: #44a08d;

  &:active {
    background: rgb(32, 32, 32);
  }
`;
export const Div = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0;
  }
`;
export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 70px;
`;
export const Desc = styled.p`
  width: 500px;
  margin: 0px auto 60px;
  font-weight: normal;
  font-size: 16px;
  color: gray;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`;
export const H1 = styled.h1`
  margin: 20px 0;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 3px;
  &:after {
    content: "";
    position: absolute;
    width: 100px;
    top: 80px;
    left: 50%;
    right: 0%;
    transform: translateX(-50%);
    bottom: -10px;
    text-align: center;
    height: 4px;
    background-color: #fff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #333;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 30px;
    font-weight: 500;
    color: green;
  }
`;
export const Icon = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  cursor: pointer;
  color: green;
`;
export const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #44a08d;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0 20px;
  color: #5f6368;
  gap: 30px 0px;
  border-left: 2px solid lightgray;
  height: 300px;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 30px;
  }
  p {
    @media (min-width: 320px) and (max-width: 480px) {
      text-align: center;
    }
  }
  span {
    text-align: center;
    display: flex;
    gap: 10px;

    @media (min-width: 481px) and (max-width: 767px) {
      gap: 0px;
      line-height: 18px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      text-align: center;
      gap: 0px;
      line-height: 15px;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
    gap: 5px;
  }
`;
