import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
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
        <Card.Img className="movie-img" src={movie.ImagePath} />
        <Card.Title className="movie-title">
          <p>{movie.Title}</p>
        </Card.Title>
        <Card.Text className="movie-description">{movie.Description}</Card.Text>
        <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
        <Card.Text>Director: {movie.Director.Name}</Card.Text>
        <Card.Text>Year: {movie.Year}</Card.Text>
        <Button
          id="back-btn"
          onClick={() => {
            onBackClick();
          }}
        >
          Back
        </Button>
        <Link to={`/directors/${movie.Director.Name}`}>
          <Button id="back-btn" variant="link">
            Director
          </Button>
        </Link>

        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button id="back-btn" variant="link">
            Genre
          </Button>
        </Link>
      </Card>
    );
  }
}

MovieView.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};
