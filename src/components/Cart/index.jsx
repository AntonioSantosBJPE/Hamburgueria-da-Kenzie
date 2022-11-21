import { StyledBoxCart, StyledEmptyCart, StyledListCart } from "./styled";
import { TotalCart } from "./TotalCart";
import { Card } from "./Card";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Cart({ listCart, setListCart }) {
  function showToastSuccessMessage(text) {
    toast.success(text, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function removeItemCart(item) {
    const arrayTemp = listCart.filter((arr) => {
      return arr !== item;
    });
    setListCart(arrayTemp);
    showToastSuccessMessage("Produto removido do carrinho com sucesso !");
  }

  function removeAllItemsCart() {
    setListCart([]);
    showToastSuccessMessage(
      "Todos os produto foram removidos do carrinho com sucesso !"
    );
  }

  const totalCart = listCart.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  return (
    <StyledBoxCart>
      <ToastContainer />
      <h2>Carrinho de compras</h2>

      {listCart.length === 0 ? (
        <StyledEmptyCart>
          <h3>Seu carrinho está vazio</h3>
        </StyledEmptyCart>
      ) : (
        <>
          <StyledListCart>
            {listCart.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  removeItemCart={removeItemCart}
                />
              );
            })}
          </StyledListCart>
          <TotalCart
            totalCart={totalCart}
            removeAllItemsCart={removeAllItemsCart}
          />
        </>
      )}
    </StyledBoxCart>
  );
}
