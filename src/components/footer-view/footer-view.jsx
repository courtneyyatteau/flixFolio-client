import React from "react";
import "./footer-view.scss";
import { Nav, Navbar } from "react-bootstrap";

export function FooterView() {
  return (
    <Nav id="footer">
      <Nav.Item>
        <Nav.Link
          id="link"
          href="https://github.com/courtneyyatteau/flixFolio-client"
          target="_blank"
        >
          Github (Client)
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="link" href="/">
          Github (API)
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="link" href="/">
          API Documentation
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
