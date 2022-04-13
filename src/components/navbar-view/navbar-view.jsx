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
  MenuItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavigationView extends React.Component {
  render() {
    const { user, onLoggedOut } = this.props;

    return (
      <Navbar expand="lg" id="nav-bar">
        <Nav className="nav-stuff" />

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
          title={<Image className="userIcon" src={image} rounded width={30} />}
          id="nav-link"
          className="user-logo"
        >
          <Link to={`/profile`} className="nav-item-logo">
            Profile
          </Link>
          <br />
          <Link
            to="#"
            className="nav-item-logo"
            onClick={() => {
              onLoggedOut();
            }}
          >
            {" "}
            Sign out
          </Link>
        </NavDropdown>
        <Navbar.Brand href="/" id="logo" className="brand ml-auto">
          FlixFolio
        </Navbar.Brand>
      </Navbar>
    );
  }
}
