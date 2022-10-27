import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar className="bg-custom-1" collapseOnSelect expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{`<OA />`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#deets">Coding</Nav.Link>
            <Nav.Link href="#memes">Graphics</Nav.Link>
            <Nav.Link href="#memes">Resume</Nav.Link>
            <Nav.Link href="#memes">About</Nav.Link>
            <Nav.Link href="#memes">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
