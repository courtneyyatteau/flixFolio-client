import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <Card id="movie-card">
          <Link to={`/movies/${movie._id}`}>
            <HoverVideoPlayer
              videoSrc="https://yatteauphotoz.imgix.net/DJANGO%20UNCHAINED%20-%20Official%20International%20Trailer.mp4"
              muted={false}
              volume={0.5}
              pausedOverlay={
                <img
                  id="movie-img"
                  variant="top"
                  src={movie.ImagePath}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    margin: "0 20px",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </Link>
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
    //Actors: PropTypes.array.isRequired,
  }),
};
