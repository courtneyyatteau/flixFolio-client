import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Row>
          <Col sm={5}>
            <Card.Img className="movie-img" src={movie.ImagePath} />
          </Col>
          <Col className="movie-info">
            <Card.Title id="movie-title">{movie.Title}</Card.Title>
            <Card.Text className="movie-description">
              {movie.Description}
            </Card.Text>
            <Card.Text>
              Genre:{" "}
              <Link to={`/genres/${movie.Genre.Name}`}>{movie.Genre.Name}</Link>
            </Card.Text>
            <Card.Text>
              Director:{" "}
              <Link to={`/directors/${movie.Director.Name}`}>
                {movie.Director.Name}
              </Link>
            </Card.Text>
            <Card.Text>Year: {movie.Year}</Card.Text>
            <Button
              id="back-btn"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

MovieView.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};
