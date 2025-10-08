import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CartWidget'

function NavbarBS() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <img src="../logo1.png" alt="logo" style={{width:'8rem'}} />
      <Container>        
        <Navbar.Brand href="#home">Tapices</Navbar.Brand>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oferta Especiales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Personalizados
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <CardWidget/>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavbarBS;