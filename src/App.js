import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 30px 100px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5%;

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 20px;

    padding: 30px 15px;
    align-items: center;
  }
`;
