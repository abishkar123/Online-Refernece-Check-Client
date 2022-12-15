import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Navigation = ()=> {
  return (
    <Navbar bg="success" expand="md" variant='dark'>
      <Container>
        <Navbar.Brand href="/">ORC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
             <Link to="/" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

