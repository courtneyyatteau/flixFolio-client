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
    if (foundMovieObject.length === 0) {
      alert("No such movie found! Please try again.");
    } else {
      foundMovieId = foundMovieObject[0]._id;
      handleClick();
    }
  };

  const handleClick = () => {
    history.push(`/movies/${foundMovieId}`);
  };

  return (
    <>
      <div className="movies-list">
        <Row id="formSearch">
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
        <br />
        <Container fluid className="container-list">
          <div className="stuff">
            <h1 className="header">Featured Flix</h1>
            <Row className="featured-rows">
              {filteredMovies.map((m) => (
                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                  key={m._id}
                  className="featured"
                >
                  <MovieCard movie={m} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default MoviesList;
