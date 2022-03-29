import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div>
        <Card id="movie-card">
          <a>
            <Card.Img
              id="movie-img"
              variant="top"
              src={movie.ImagePath}
            />
          </a>
          <Card.Body>
            <Link to={`/movies/${movie._id}`}>
              <Button id="open-btn" variant="link">
                Open
              </Button>
            </Link>
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
  }),
};
