import { CardProducts } from "./CardProducts";
import { Button } from "../Button";
import { StyledList, StyledContainerList, StyledBoxResults } from "./styled";
import { toast } from "react-toastify";

export function ListProducts({
  arrayRender,
  setListCart,
  listCart,
  search,
  setSearch,
}) {
  function addItemCart(product) {
    const contains = listCart.includes(product);

    if (!contains) {
      setListCart((previousProduct) => {
        return [...previousProduct, product];
      });

      toast.success("Produto adicionado ao carrinho com sucesso !");
    } else {
      toast.error(
        "Não é possível adicionar o mesmo produto mais de uma vez no carrinho !"
      );
    }
  }

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
              addItemCart={addItemCart}
            />
          );
        })}
      </StyledList>
    </StyledContainerList>
  );
}
