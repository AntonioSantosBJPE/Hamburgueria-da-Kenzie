import { StyledBoxCart, StyledEmptyCart, StyledListCart } from "./styled";
import { TotalCart } from "./TotalCart";
import { Card } from "./Card";

import { toast } from "react-toastify";

export function Cart({ listCart, setListCart }) {
  function removeItemCart(item) {
    const arrayTemp = listCart.filter((arr) => {
      return arr !== item;
    });
    setListCart(arrayTemp);
    toast.success("Produto removido do carrinho com sucesso !");
  }

  function removeAllItemsCart() {
    setListCart([]);
    toast.success("Todos os produto foram removidos do carrinho com sucesso !");
  }

  const totalCart = listCart.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  return (
    <StyledBoxCart>
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
