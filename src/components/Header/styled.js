import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  background-color: #f5f5f5;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  @media (max-width: 570px) {
    height: 140px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0 100px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 34%;
    font-size: 24px;
    color: #333;
  }
  h1 > span {
    font-size: 18px;
    color: #eb5757;
  }

  @media (max-width: 1023px) {
    padding: 0 15px;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    justify-content: initial;
    gap: 15px;
    padding: 15px;

    h1 {
      width: 100%;
      text-align: center;
    }
  }
`;
