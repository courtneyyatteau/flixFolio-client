import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./genres-view.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

export class MusicalView extends React.Component {
  render() {
    const { movies, visibilityFilter } = this.props;
    let musicalMovies = movies.filter((m) => m.Genre.Name === "Musical");
    let filteredMovies = musicalMovies;

    if (visibilityFilter !== "") {
      filteredMovies = musicalMovies.filter((m) =>
        m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    }

    return (
      <Container fluid>
        <div className="stuff">
        <Row>
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Row>
        <h1>Musical</h1>
        <h2>Flowy Flix</h2>
        <Container fluid>
          <Row className="stuff">
            {filteredMovies.map((m) => (
              <Col id="fav-movie" xs={6} md={4} lg={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))}
          </Row>
        </Container>
        </div>
      </Container>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
};
export default connect(mapStateToProps)(MusicalView);
