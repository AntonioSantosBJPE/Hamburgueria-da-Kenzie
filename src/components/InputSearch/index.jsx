import { useState } from "react";
import { StyledBoxInputSearch } from "./styled";
import { Button } from "../Button";
export function InputSearch({ setSearch }) {
  const [inputValue, setInputValue] = useState("");

  function categorySearch() {
    setSearch(inputValue);
    setInputValue("");
  }

  return (
    <StyledBoxInputSearch>
      <div>
        <input
          type="text"
          placeholder="O que você deseja?"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button functionClick={categorySearch} name="Pesquisar" color="green" />
      </div>
    </StyledBoxInputSearch>
  );
}
