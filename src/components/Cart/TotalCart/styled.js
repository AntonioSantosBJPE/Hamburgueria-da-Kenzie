import styled from "styled-components";

export const StyledTotalCart = styled.div`
  width: 100%;
  height: 135px;

  border-top: 2px solid #e0e0e0;
  border-radius: 0 0 8px 8px;
  padding: 20px;

  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 100%;
    height: 60px;

    font-size: 18px;
    font-weight: 600;
  }
`;
