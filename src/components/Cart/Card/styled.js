import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  min-height: 80px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  button {
    cursor: pointer;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    background-color: transparent;
    color: #bdbdbd;
    border: none;
    transition: 0.4s;
  }
  button:hover {
    text-decoration-line: underline;
    color: #333333;
  }
`;

export const StyledBoxLeft = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 80px;
    height: 80px;
    background-color: #e0e0e0;
  }
`;

export const StyledBoxInfox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px 0;

  h4 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  h5 {
    color: #828282;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;
