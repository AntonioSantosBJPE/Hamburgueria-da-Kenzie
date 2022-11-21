import { StyledTotalCart } from "./styled";
import { Button } from "../../Button";

export function TotalCart({ totalCart, removeAllItemsCart }) {
  return (
    <StyledTotalCart>
      <div>
        <h3>Total</h3>
        <h4>
          {totalCart.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
      </div>

      <Button
        functionClick={removeAllItemsCart}
        name="Remover Todos"
        defaultColor="grey"
      ></Button>
    </StyledTotalCart>
  );
}
