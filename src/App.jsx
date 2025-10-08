import NavbarBS from "./components/NavbarBS"
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
    <>
    <NavbarBS/>
    <ItemListContainer saludo = 'Bienvenido a mi app'/>
     </>
  )
}

export default App
