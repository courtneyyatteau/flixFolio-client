import React from "react";
import { Col, Row, Container, Form, Button, Card } from "react-bootstrap";
import "./favorites-view.scss";
import { MovieCard } from "../movie-card/movie-card";
import { Link } from "react-router-dom";

function FavoritesView(props) {
  const { FavoriteMovies, movies, onFavRemove } = props;

  return (
    <Container fluid className="favs">
      {FavoriteMovies.length === 0 && (
        <div className="text-center">No Favorite Movies</div>
      )}
      <Row className="favorite-container">
        {FavoriteMovies.length > 0 &&
          movies.map((movie) => {
            if (
              movie._id ===
              FavoriteMovies.find((favorite) => favorite === movie._id)
            ) {
              return (
                <Col
                  id="fav-movie"
                  xs={6}
                  md={6}
                  lg={3}
                  key={movie._id}
                  className="column"
                >
                  <div id="fav-movie">
                    <Link to={`/movies/${movie._id}`}>
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
                          margin: "10px",
                        }}
                      />{" "}
                    </Link>{" "}
                    <Button
                      id="fav-btn2"
                      onClick={(e) => onFavRemove(e, movie)}
                    >
                      Remove
                    </Button>
                  </div>
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
}

export default FavoritesView;
