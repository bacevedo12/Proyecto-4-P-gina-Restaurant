
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';


const NavBarRestaurant = () => {
  return (
    <div>
      <Navbar className="navBar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >
             <img src='./logo-restaurant.jpg' className="imagenLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/Reserva">Reserva</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
}

export default NavBarRestaurant;