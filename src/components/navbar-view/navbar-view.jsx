import React from "react";
import "./navbar-view.scss";
import image from "../../../public/imgs/user.png";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export class NavigationView extends React.Component {
  render() {
    const { onLoggedOut } = this.props;

    return (
      <Navbar id="nav-bar">
        <Navbar.Brand href="/" id="logo" className="brand mr-auto">
          FlixFolio 🎬
        </Navbar.Brand>
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
      </Navbar>
    );
  }
}
