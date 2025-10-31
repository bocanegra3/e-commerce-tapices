import './App.css';
import NavbarBS from "./components/NavbarBS"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";





function App() {


  return (
    <BrowserRouter>

    <NavbarBS/>
    <Routes>
      <Route path="/" element={<ItemListContainer saludo = 'Bienvenidos a TapizArte'/>}/>
      <Route path="/category/:type" element={<ItemListContainer saludo = 'Estos son los tapices: '/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    

     </BrowserRouter>
  )
}

export default App
