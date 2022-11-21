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

  const arrayRender =
    search !== "all"
      ? dataApi.filter((item) => {
          return item.category.toLowerCase().includes(search.toLowerCase());
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
      <Header setSearch={setSearch} dataApi={dataApi} />
      <StyledContainer>
        <ListProducts
          arrayRender={arrayRender}
          listCart={listCart}
          setListCart={setListCart}
          search={search}
          setSearch={setSearch}
        />
        <Cart listCart={listCart} setListCart={setListCart} />
      </StyledContainer>
    </div>
  );
}
