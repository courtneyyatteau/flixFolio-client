import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./movies-list.scss";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  let moviesFeatured = movies.filter((m) => m.Featured === true);

  if (!movies) return <div className="main-view" />;

  return (
    <Container fluid className="container-list">
      <Row>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Row>
      <h1>Featured Movies</h1>
      <Row>
        {moviesFeatured.map((m) => (
          <Col xs={6} sm={6} md={4} lg={3} key={m._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
}

export default connect(mapStateToProps)(MoviesList);
