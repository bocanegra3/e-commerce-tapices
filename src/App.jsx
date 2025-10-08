import NavbarBS from "./components/NavbarBS"
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
    <>
    <NavbarBS/>
    <ItemListContainer saludo = 'Bienvenidos a Tapices "Grafica Intuitiva"'/>
     </>
  )
}

export default App
