import { useState, useEffect } from "react";
import { GlobalStyle } from "./Global";
import { StyledContainer } from "./App.js";
import { Api } from "./components/Api";
import { Header } from "./components/Header";
import { ListProducts } from "./components/ListProducts/index.jsx";
import { Cart } from "./components/Cart";

export function App() {
  const [dataApi, setDataApi] = useState([]);
  const [search, setSearch] = useState("all");
  const [listCart, setListCart] = useState([]);

  function filterProduct() {
    let filterExist = false;

    dataApi.forEach((item) => {
      if (item.category.toLowerCase() === search.toLowerCase()) {
        filterExist = true;
      }
    });

    return filterExist;
  }

  const arrayRender = filterProduct()
    ? dataApi.filter((item) => {
        return item.category.toLowerCase() === search.toLowerCase();
      })
    : [...dataApi];

  useEffect(() => {
    async function getDataApi() {
      const response = await Api.get();
      setDataApi(response.data);
    }
    getDataApi();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header setSearch={setSearch} />
      <StyledContainer>
        <ListProducts
          arrayRender={arrayRender}
          listCart={listCart}
          setListCart={setListCart}
        />
        <Cart listCart={listCart} setListCart={setListCart} />
      </StyledContainer>
    </div>
  );
}
