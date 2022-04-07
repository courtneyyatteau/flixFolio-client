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
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavigationView extends React.Component {
  render() {
    const { user, onLoggedOut } = this.props;

    return (
      <Navbar bg="light" expand="md" id="nav-bar">
        <Navbar.Brand href="/" id="logo">
          FlixFolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-stuff ml-auto">
            <Nav.Link id="nav-link" href="/" className="nav-stuff-1">
              Home
            </Nav.Link>
            <NavDropdown title="Genres" id="nav-link" className="nav-stuff-2">
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
              title={
                <Image
                  className="userIcon nav-stuff-4"
                  src={image}
                  rounded
                  width={30}
                />
              }
              id="basic-nav-dropdown"
            >
              <Container>
                <Row>
                  <Link to={`/profile`} className="nav-item">
                    Profile
                  </Link>
                </Row>
                <Row>
                  <Link
                    to="#"
                    className="nav-item"
                    onClick={() => {
                      onLoggedOut();
                    }}
                  >
                    {" "}
                    Sign out
                  </Link>
                </Row>
              </Container>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
