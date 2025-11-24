import './App.css';
import NavbarBS from "./components/NavbarBS"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from './context/CartContext';
import CartContainer from "./components/CartContainer";
import Checkout from './components/Checkout';





function App() {


  return (
    <BrowserRouter>
    <CartProvider>
    <NavbarBS/>     
    <Routes>
      <Route path="/" element={<ItemListContainer saludo = 'Bienvenidos a Filomena Solar'/>}/>
      <Route path="/category/:type" element={<ItemListContainer saludo = 'Estos son los tapices: '/>}/>
      <Route path="/cart" element={<CartContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </CartProvider>
    

     </BrowserRouter>
  )
}

export default App
