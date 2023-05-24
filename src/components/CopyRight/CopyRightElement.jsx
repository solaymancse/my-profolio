import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  gap: 10px;
  padding: 20px;
  background-color: #212529;
  font-size: 16px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    flex-direction: column;
  }
`;

export const Span = styled.span`
  color: #fff;
`;
