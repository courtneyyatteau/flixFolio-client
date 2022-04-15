import React from "react";
import { Col, Row, Container, Form, Button, Card } from "react-bootstrap";
import "./favorites-view.scss";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";


function FavoritesView(props) {
  const { FavoriteMovies, movies, onFavRemove } = props;

  return (
    <Container className="favs">
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
                <Col sm={6} md={6} lg={3} xl={2} key={movie._id}>
                  <Card className="fav-movie">
                    <MovieCard movie={movie} />
                    <Card.Body>
                      <Button
                        id="btn2"
                        value={movie._id}
                        onClick={(e) => onFavRemove(e, movie)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
}

export default FavoritesView;
