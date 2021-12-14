// this is a test app where we tested collapsible Navbar using React-BootStrap 
import React from "react";
import "./Style.css";
import { Nav, Navbar } from "react-bootstrap"; 

export default function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">

        Tutal Test
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
