import React from "react";
import "./navbar-view.scss";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export function NavigationView() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="logo">
          FlixFolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Documentary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Family</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Horror/Thriller
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Musical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Western</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-auto"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
