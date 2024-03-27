import { ChakraProvider, FormErrorMessage } from "@chakra-ui/react";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Cerveza Búho Artesanal" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer title="Cerveza Búho Artesanal" />}
          />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
