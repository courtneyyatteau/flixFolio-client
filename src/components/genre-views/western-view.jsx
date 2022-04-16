import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./genres-view.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

export class WesternView extends React.Component {
  render() {
    const { movies, visibilityFilter } = this.props;
    let westernMovies = movies.filter((m) => m.Genre.Name === "Western");
    let filteredMovies = westernMovies;

    if (visibilityFilter !== "") {
      filteredMovies = westernMovies.filter((m) =>
        m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    }

    return (
      <Container className="western-view">
        <Row>
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Row>
        <h1>Western</h1>
        <h2>Force Flix</h2>
        <Row>
          {filteredMovies.map((m) => (
            <Col id="fav-movie" xs={6} md={6} lg={3} key={m._id}>
              <Link to={`/movies/${m._id}`}>
                <img
                  id="movie-img"
                  variant="top"
                  src={m.ImagePath}
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
export default connect(mapStateToProps)(WesternView);

<h2>Frontier Flix</h2>;
