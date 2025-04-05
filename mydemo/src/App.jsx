import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css'
import About from "./About";


function App() {
  return(
    <React.Fragment>
    <Navbar className='navbar' expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Service</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <About />
  </React.Fragment>
  );
}

<About />

export default App
