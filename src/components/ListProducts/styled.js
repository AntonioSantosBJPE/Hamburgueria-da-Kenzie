import styled from "styled-components";

export const StyledList = styled.ul`
  width: 65%;
  height: fit-content;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1023px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 570px) {
    width: 100%;
    flex-wrap: initial;
    flex-direction: row;
    justify-content: initial;
    overflow-x: auto;
  }
`;
