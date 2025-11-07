import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CartWidget'
import { NavLink } from 'react-router-dom';

function NavbarBS() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-dark border-bottom border-body">
        
      <Container >       
        <Navbar.Brand as={NavLink} to='/'> <img src="../logo1.png" alt="logo" style={{width:"15rem",paddingRight:"4rem"}} /></Navbar.Brand>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{gap:"1rem"}}>
            <Nav.Link as={NavLink} to='/' >Inicio</Nav.Link>
            
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item  as={NavLink} to="/category/Nuevos" href="#action/3.1">Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/Mas vendidos"  href="#action/3.2">
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/En Oferta"   href="#action/3.3">Oferta Especiales</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>            
          </Nav>
          <CardWidget/>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavbarBS;