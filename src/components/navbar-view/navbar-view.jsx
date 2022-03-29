import React from "react";
import "./navbar-view.scss";
import image from "../../../public/imgs/user.png";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";

export function NavigationView() {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };
  return (
    <Navbar bg="light" expand="lg" id="nav-bar">
      <Navbar.Brand href="/" id="logo">
        FlixFolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="nav-link" href="/">
            Home
          </Nav.Link>
          <NavDropdown title="Genres" id="nav-link">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="#">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#">Drama</NavDropdown.Item>
            <NavDropdown.Item href="#">Documentary</NavDropdown.Item>
            <NavDropdown.Item href="#">Family</NavDropdown.Item>
            <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#">Horror/Thriller</NavDropdown.Item>
            <NavDropdown.Item href="#">Musical</NavDropdown.Item>
            <NavDropdown.Item href="#">Mystery</NavDropdown.Item>
            <NavDropdown.Item href="#">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#">Sci-Fi</NavDropdown.Item>
            <NavDropdown.Item href="#">Western</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search people, title, etc."
          className="me-auto"
          id="search"
          aria-label="Search"
        />
        <Button id="btn" variant="outline-success">
          Search
        </Button>
      </Form>
      <NavDropdown
        title={<Image className="userIcon" src={image} rounded width={30} />}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#">My Favorites</NavDropdown.Item>
        <NavDropdown.Item
          onClick={() => {
            onLoggedOut();
          }}
          href="#"
        >
          Sign out
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}
