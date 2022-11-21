import { CardProducts } from "./CardProducts";
import { Button } from "../Button";
import { StyledList, StyledContainerList, StyledBoxResults } from "./styled";

export function ListProducts({
  arrayRender,
  setListCart,
  listCart,
  search,
  setSearch,
}) {
  return (
    <StyledContainerList>
      {search !== "all" && (
        <StyledBoxResults>
          <h2>
            Resultados para: <span>{search}</span>
          </h2>
          <Button
            functionClick={() => {
              setSearch("all");
            }}
            name="Limpar busca"
            color="green"
          />
        </StyledBoxResults>
      )}
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
    </StyledContainerList>
  );
}
