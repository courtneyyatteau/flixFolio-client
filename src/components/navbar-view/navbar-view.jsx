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
              <NavDropdown.Item>
                <Link to={`/action`} className="nav-item">
                  Action
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/adventure`} className="nav-item">
                  Adventure
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/comedy`} className="nav-item">
                  Comedy
                </Link>
              </NavDropdown.Item>

              <br />
              <NavDropdown.Item>
                <Link to={`/documentary`} className="nav-item">
                  Documentary
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/drama`} className="nav-item">
                  Drama
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/family`} className="nav-item">
                  Family
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/fantasy`} className="nav-item">
                  Fantasy
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/horror`} className="nav-item">
                  Horror
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/musical`} className="nav-item">
                  Musical
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/mystery`} className="nav-item">
                  Mystery
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/romance`} className="nav-item">
                  Romance
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/scifi`} className="nav-item">
                  Sci-Fi
                </Link>
              </NavDropdown.Item>
              <br />
              <NavDropdown.Item>
                <Link to={`/western`} className="nav-item">
                  Western
                </Link>
              </NavDropdown.Item>
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
              <NavDropdown.Item>
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
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
        <Nav>
          <Navbar.Brand href="/" id="logo" className="brand">
            FlixFolio
          </Navbar.Brand>
        </Nav>
      </Navbar>
    );
  }
}
