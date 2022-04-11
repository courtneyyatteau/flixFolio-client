import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./genres-view.scss";
import { Link } from "react-router-dom";

export class MusicalView extends React.Component {
  render() {
    const { movies } = this.props;
    const filteredMovies = movies.filter((m) => m.Genre.Name === "Musical");
    return (
      <Container className="musical-view">
        <h1>Musical</h1>
        <h2>Flowy Flix</h2>
        <Row>
          {filteredMovies.map((m) => (
            <Col xs={6} md={4} lg={3} key={m._id}>
              <Link to={`/movies/${m._id}`}>
                <img className="movie-image" src={m.ImagePath}></img>
              </Link>{" "}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
