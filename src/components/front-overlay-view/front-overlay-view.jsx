import React from "react";
import "./front-overlay-view.scss";
import { Container } from "react-bootstrap";

export class FrontOverlay extends React.Component {
  render() {
    return (
      <div className="myDiv">
        <Container>
          <h1 className="front-title">Tons of Movies to Explore Now!</h1>
        </Container>
        <div className="background"></div>
      </div>
    );
  }
}
