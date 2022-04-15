import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./genres-view.scss";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

export class AdventureView extends React.Component {
  render() {
    const { movies, visibilityFilter } = this.props;
    let adventureMovies = movies.filter((m) => m.Genre.Name === "Adventure");
    let filteredMovies = adventureMovies;

    if (visibilityFilter !== "") {
      filteredMovies = adventureMovies.filter((m) =>
        m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    }

    return (
      <Container className="adventure-view">
        <Row>
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Row>
        <h1>Adventure</h1>
        <h2>Feat Flix</h2>
        <Row>
          {filteredMovies.map((m) => (
            <Col id="fav-movie" xs={6} md={6} lg={4} key={m._id}>
              <Link to={`/movies/${m._id}`}>
                <MovieCard movie={m} className="movie-card" />
              </Link>{" "}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
};
export default connect(mapStateToProps)(AdventureView);
