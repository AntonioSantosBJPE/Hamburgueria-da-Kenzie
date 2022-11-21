import { CardProducts } from "./CardProducts";
import { StyledList } from "./styled";
export function ListProducts({ arrayRender, setListCart, listCart }) {
  return (
    <StyledList>
      {arrayRender.map((product) => {
        return (
          <CardProducts
            key={product.id}
            product={product}
            listCart={listCart}
            setListCart={setListCart}
          />
        );
      })}
    </StyledList>
  );
}
