import { useState } from "react";
import { StyledBoxInputSearch } from "./styled";
import { Button } from "../Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function InputSearch({ setSearch }) {
  const [inputValue, setInputValue] = useState("");

  function showToastErrorMessage() {
    toast.error("Não é possível realizar uma busca com o campo vazio!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function categorySearch() {
    if (inputValue.trim() === "") {
      showToastErrorMessage();
    } else {
      setSearch(inputValue.trim());
      setInputValue("");
    }
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
