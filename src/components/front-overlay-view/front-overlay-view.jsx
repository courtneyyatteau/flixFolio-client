import React from "react";
import "./front-overlay-view.scss";
import { Container } from "react-bootstrap";
import "animate.css";

export class FrontOverlay extends React.Component {
  render() {
    return (
      <div className="myDiv">
        <h1 className="animate__animated animate__swing animate__delay-0.5s title">
          Tons of Movies to Explore Now!
        </h1>
      </div>
    );
  }
}
