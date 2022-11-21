import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;

  height: 40px;
  padding: 0 20px;

  background-color: ${({ defaultColor }) =>
    defaultColor === "green" ? "#27ae60" : "#e0e0e0"};

  color: ${({ defaultColor }) =>
    defaultColor === "green" ? "#fff" : "#828282"};

  border: 2px solid
    ${({ defaultColor }) => (defaultColor === "green" ? "#27ae60" : "#e0e0e0")};

  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;
  &:hover {
    /* filter: brightness(1.2); */
    background-color: ${({ defaultColor }) =>
      defaultColor === "green" ? "#93D7AF" : "#828282"};

    color: ${({ defaultColor }) =>
      defaultColor === "green" ? "#fff" : "#E0E0E0"};

    border: 2px solid
      ${({ defaultColor }) =>
        defaultColor === "green" ? "#93D7AF" : "#828282"};
  }
`;
