
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
import FooterRestaurant from "./Footer";




const NavBarRestaurant = () => {
  return (
    <>
    <div className="contenedor justify-content-between">
    
      <Navbar className="navBar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >
             <img alt="logo"src='./images/logo-restaurant.jpg' className="imagenLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold fs-5">
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

      <FooterRestaurant/>
      
    </div>
    </>
  );
}

export default NavBarRestaurant;