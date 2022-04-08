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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="nav-stuff mr-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/" id="logo">
              FlixFolio
            </Navbar.Brand>
            <Nav.Link id="nav-link" href="/" className="nav-stuff-1">
              Home
            </Nav.Link>
            <NavDropdown title="Genres" id="nav-link" className="nav-stuff-2">
              <Link to={`/action`} className="nav-item">
                Action
              </Link>
              <Link to={`/adventure`} className="nav-item">
                Adventure
              </Link>
              <Link to={`/comedy`} className="nav-item">
                Comedy
              </Link>{" "}
              <Link to={`/documentary`} className="nav-item">
                Documentary
              </Link>{" "}
              <Link to={`/drama`} className="nav-item">
                Drama
              </Link>{" "}
              <Link to={`/family`} className="nav-item">
                Family
              </Link>{" "}
              <Link to={`/fantasy`} className="nav-item">
                Fantasy
              </Link>{" "}
              <Link to={`/horror`} className="nav-item">
                Horror
              </Link>{" "}
              <Link to={`/musical`} className="nav-item">
                Musical
              </Link>{" "}
              <Link to={`/mystery`} className="nav-item">
                Mystery
              </Link>{" "}
              <Link to={`/romance`} className="nav-item">
                Romance
              </Link>{" "}
              <Link to={`/scifi`} className="nav-item">
                Sci-Fi
              </Link>{" "}
              <Link to={`/western`} className="nav-item">
                Western
              </Link>{" "}
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
        <NavDropdown
          title={
            <Image
              className="userIcon nav-stuff-3"
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
      </Navbar>
    );
  }
}
