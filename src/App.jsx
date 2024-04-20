import { ChakraProvider, FormErrorMessage } from "@chakra-ui/react";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { CartContextProvider } from "./context/CartContext";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from './components/checkout/Checkout';

const App = () => {
  return (
    <ChakraProvider>
      <CartContextProvider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path='/checkout' element={<Checkout />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
};


export default App;
