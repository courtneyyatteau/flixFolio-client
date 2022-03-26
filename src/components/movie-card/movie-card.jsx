import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";
import { Card, Button } from "react-bootstrap";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div>
        <Card id="movie-card">
          <a>
            <Card.Img
              className="movie-img"
              variant="top"
              src={movie.ImagePath}
            />
          </a>
          <Card.Body>
            <Card.Title>
              <p>{movie.Title}</p>
            </Card.Title>
            <Button
              id="open-btn"
              onClick={() => onMovieClick(movie)}
              variant="link"
            >
              Open
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
