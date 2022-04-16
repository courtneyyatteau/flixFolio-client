import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./genres-view.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

export class DramaView extends React.Component {
  render() {
    const { movies, visibilityFilter } = this.props;
    let dramaMovies = movies.filter((m) => m.Genre.Name === "Drama");
    let filteredMovies = dramaMovies;

    if (visibilityFilter !== "") {
      filteredMovies = dramaMovies.filter((m) =>
        m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
      );
    }

    return (
      <Container className="drama-view">
        <Row>
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Row>
        <h1>Drama</h1>
        <h2>Fascinating Flix</h2>
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
export default connect(mapStateToProps)(DramaView);
