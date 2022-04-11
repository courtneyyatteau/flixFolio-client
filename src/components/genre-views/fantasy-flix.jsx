import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./genres-view.scss";
import { Link } from "react-router-dom";

export class FantasyView extends React.Component {
  render() {
    const { movies } = this.props;
    const filteredMovies = movies.filter((m) => m.Genre.Name === "Fantasy");
    return (
      <Container className="fantasy-view">
        <h1>Fantasy</h1>
        <h2>Fantastical Flix</h2>
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
