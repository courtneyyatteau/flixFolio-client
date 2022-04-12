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
    <div>
      <Row>
        <Form className="d-flex" id="formSearch" onSubmit={onFormSubmit}>
          <Form.Control
            placeholder="Search by title"
            id="searchBar"
            type="search"
            onChange={(e) => setMovie(e.target.value)}
          />
          <Button id="btnType" type="submit" onClick={onFormSubmit}>
            Search
          </Button>
        </Form>
      </Row>
      <Container fluid className="container-list">
        <h1>Featured Flix</h1>
        <Row>
          {filteredMovies.map((m) => (
            <Col xs={6} sm={6} md={4} lg={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
          ))}
        </Row>
        <h1>Force Flix (Action)</h1>
        <Row>
          {filteredAction.map((m) => (
            <Col xs={6} sm={6} md={4} lg={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MoviesList;
