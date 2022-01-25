import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" exact element={ <ItemListContainer /> } />
          
        <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;