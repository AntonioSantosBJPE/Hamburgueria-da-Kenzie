import { StyledHeader, StyledContainer } from "./styled";
import { InputSearch } from "../InputSearch";

export function Header({ setSearch }) {
  return (
    <StyledHeader>
      <StyledContainer>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <InputSearch setSearch={setSearch} />
      </StyledContainer>
    </StyledHeader>
  );
}
