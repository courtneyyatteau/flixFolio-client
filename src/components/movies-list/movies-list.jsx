import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./movies-list.scss";
import { MovieCard } from "../movie-card/movie-card";
import { useHistory } from "react-router-dom";

function MoviesList(props) {
  const [theMovie, setMovie] = useState("");
  let foundMovieObject = {};
  let foundMovieId = "";

  const { movies } = props;
  let moviesFeatured = movies.filter((m) => m.Featured === true);
  let filteredMovies = moviesFeatured;

  let actionMovies = movies.filter((m) => m.Genre.Name === "Action");
  let filteredAction = actionMovies;

  if (!movies) return <div className="main-view" />;

  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    foundMovieObject = movies.filter((m) =>
      m.Title.toLowerCase().includes(theMovie.toLowerCase())
    );
    console.log(foundMovieObject);
    foundMovieId = foundMovieObject[0]._id;
    handleClick();
  };

  const handleClick = () => {
    history.push(`/movies/${foundMovieId}`);
  };

  return (
    <Container fluid className="container-list">
      <Row>
        <Form className="d-flex" onSubmit={onFormSubmit}>
          <Form.Control
            placeholder="Search by title"
            className="search-bar"
            type="search"
            onChange={(e) => setMovie(e.target.value)}
          />
        </Form>
        <Button type="submit" onClick={onFormSubmit}>
          Search
        </Button>
      </Row>
      <h1>Featured Movies</h1>
      <Row>
        {filteredMovies.map((m) => (
          <Col xs={6} sm={6} md={4} lg={3} key={m._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>
      <h1>Action Movies</h1>
      <Row>
        {filteredAction.map((m) => (
          <Col xs={6} sm={6} md={4} lg={3} key={m._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MoviesList;
