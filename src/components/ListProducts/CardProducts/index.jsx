import { StyledCard, StyledBoxImg, StyledBoxInfos } from "./styled";
import { Button } from "../../Button";

export function CardProducts({ product, addItemCart }) {
  const { id, name, category, price, img } = product;

  return (
    <StyledCard>
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
