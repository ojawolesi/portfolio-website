import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import oaLogo from "../../assets/images/OA-logo.png";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar
      className="bg-custom-1 sticky-nav"
      collapseOnSelect
      expand="md"
      variant="dark"
      position="sticky"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={oaLogo} width="40" height="40" alt="OA Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
