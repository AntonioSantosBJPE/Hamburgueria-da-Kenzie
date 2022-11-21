import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
  height: fit-content;

  @media (max-width: 1439px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 570px) {
    width: 100%;
    flex-wrap: initial;
    flex-direction: row;
    justify-content: initial;
    height: 375px;
    overflow-x: auto;
  }
`;

export const StyledContainerList = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 1439px) {
    width: 55%;
  }

  @media (max-width: 1150px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StyledBoxResults = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    color: #333333;
  }
  h2 > span {
    color: #828282;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
