import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:category" element={ <ItemListContainer /> } />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;