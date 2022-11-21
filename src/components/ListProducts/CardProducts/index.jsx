import { StyledCard, StyledBoxImg, StyledBoxInfos } from "./styled";
import { Button } from "../../Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CardProducts({ product, listCart, setListCart }) {
  const { id, name, category, price, img } = product;

  function showToastSuccessMessage() {
    toast.success("Produto adicionado ao carrinho com sucesso !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  function showToastErrorMessage() {
    toast.error(
      "Não é possível adicionar o mesmo produto mais de uma vez no carrinho !",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }

  function addItemCart(product) {
    const contains = listCart.includes(product);

    if (!contains) {
      setListCart((previousProduct) => {
        return [...previousProduct, product];
      });
      showToastSuccessMessage();
    } else {
      showToastErrorMessage();
    }
  }

  return (
    <StyledCard>
      <ToastContainer />
      <StyledBoxImg>
        <img src={img} alt={`imagem ${name}`} />
      </StyledBoxImg>

      <StyledBoxInfos>
        <h2>{name}</h2>
        <span>{category}</span>
        <h3>
          {Number(price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>

        <Button
          functionClick={() => {
            addItemCart(product);
          }}
          name="Adicionar"
          color="green"
        />
      </StyledBoxInfos>
    </StyledCard>
  );
}
