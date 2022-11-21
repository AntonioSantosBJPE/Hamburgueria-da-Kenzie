import styled from "styled-components";

export const StyledBoxCart = styled.div`
  width: 30%;
  max-width: 380px;
  height: fit-content;

  h2 {
    width: 100%;
    height: 65px;

    border-radius: 8px 8px 0 0;
    padding: 15px;
    text-align: center;

    background: #27ae60;
    color: white;
  }
  @media (max-width: 1439px) {
    width: 40%;
  }
  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const StyledEmptyCart = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f5f5f5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListCart = styled.ul`
  width: 100%;
  height: fit-content;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
