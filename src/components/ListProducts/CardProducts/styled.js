import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  max-width: 250px;
  height: 350px;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  &:hover {
    border: 2px solid #333333;
    border-radius: 5px;
  }

  @media (max-width: 570px) {
    min-width: 250px;
  }
`;

export const StyledBoxImg = styled.div`
  width: 100%;
  height: 150px;

  background-color: #f5f5f5;

  border-radius: 5px 5px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: fit-content;
    height: 100%;
  }
`;

export const StyledBoxInfos = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    height: 38px;
    line-height: 24px;
  }
  span {
    color: #828282;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  h3 {
    color: #27ae60;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
`;
