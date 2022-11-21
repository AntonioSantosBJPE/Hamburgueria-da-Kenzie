import { StyledButton } from "./styled";

export function Button({ functionClick, name, color }) {
  return (
    <StyledButton onClick={functionClick} defaultColor={color}>
      {name}
    </StyledButton>
  );
}
