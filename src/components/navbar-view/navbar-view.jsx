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
      <Navbar expand="lg" id="nav-bar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="nav-stuff mr-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link id="nav-link" href="/" className="nav-stuff-1">
              Home
            </Nav.Link>
            <NavDropdown title="Genres" id="nav-link" className="nav-stuff-2">
              <Link to={`/action`} className="nav-item">
                Action
              </Link>
              <br />
              <Link to={`/adventure`} className="nav-item">
                Adventure
              </Link>
              <br />
              <Link to={`/comedy`} className="nav-item">
                Comedy
              </Link>
              <br />
              <Link to={`/documentary`} className="nav-item">
                Documentary
              </Link>
              <br />
              <Link to={`/drama`} className="nav-item">
                Drama
              </Link>
              <br />
              <Link to={`/family`} className="nav-item">
                Family
              </Link>
              <br />
              <Link to={`/fantasy`} className="nav-item">
                Fantasy
              </Link>
              <br />
              <Link to={`/horror`} className="nav-item">
                Horror
              </Link>
              <br />
              <Link to={`/musical`} className="nav-item">
                Musical
              </Link>
              <br />
              <Link to={`/mystery`} className="nav-item">
                Mystery
              </Link>
              <br />
              <Link to={`/romance`} className="nav-item">
                Romance
              </Link>
              <br />
              <Link to={`/scifi`} className="nav-item">
                Sci-Fi
              </Link>
              <br />
              <Link to={`/western`} className="nav-item">
                Western
              </Link>
              <br />
            </NavDropdown>
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
          </Navbar.Collapse>
        </Nav>
        <Navbar.Brand href="/" id="logo" className="brand">
          FlixFolio
        </Navbar.Brand>
      </Navbar>
    );
  }
}
