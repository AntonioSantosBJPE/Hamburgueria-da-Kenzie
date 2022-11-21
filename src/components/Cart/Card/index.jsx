import { StyledCard, StyledBoxInfox, StyledBoxLeft } from "./styled";

export function Card({ item, removeItemCart }) {
  const { id, name, category, price, img } = item;
  return (
    <StyledCard>
      <StyledBoxLeft>
        <img src={img} alt={name} />
        <StyledBoxInfox>
          <h4>{name}</h4>
          <h5>{category}</h5>
        </StyledBoxInfox>
      </StyledBoxLeft>

      <button
        onClick={() => {
          removeItemCart(item);
        }}
      >
        Remover
      </button>
    </StyledCard>
  );
}
