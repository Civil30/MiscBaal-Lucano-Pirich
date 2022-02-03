import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:category" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;