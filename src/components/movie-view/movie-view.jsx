import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-view.scss";
import axios from "axios";

export class MovieView extends React.Component {
  constructor() {
    super();
    this.state = {
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUserInfo(accessToken);
    document.addEventListener("keypress", this.keypressCallback);
  }

  getUserInfo = (token) => {
    const Username = localStorage.getItem("user");
    axios
      .get(`https://flixfolio.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  keypressCallback(event) {
    console.log(event.key);
  }

  onFavAdd = (e, movie, user) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (
      movie._id === this.state.FavoriteMovies.find((fav) => fav === movie._id)
    ) {
      alert("Movie already a favorite!");
    } else {
      axios
        .post(
          `https://flixfolio.herokuapp.com/users/${user}/movies/${movie._id}`,
          "",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          alert("Favorite movie has been added.");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  render() {
    const { user, movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Row>
          <Col sm={5}>
            <img className="movie-img" src={movie.ImagePath} />
          </Col>
          <Col className="movie-info">
            <Card.Title id="movie-title">{movie.Title}</Card.Title>
            <Card.Text className="card-info">{movie.Description}</Card.Text>
            <Card.Text className="card-info">
              Genre:{" "}
              <Link to={`/genres/${movie.Genre.Name}`}>{movie.Genre.Name}</Link>
            </Card.Text>
            <Card.Text className="card-info">
              Director:{" "}
              <Link to={`/directors/${movie.Director.Name}`}>
                {movie.Director.Name}
              </Link>
            </Card.Text>
            <Card.Text className="card-info">Year: {movie.Year}</Card.Text>
            {/*<Card.Text className="card-info">
              Actors: {movie.Actors.join(", ")}
            </Card.Text>*/}
            <Button
              id="fav-btn"
              type="submit"
              value={movie._id}
              onClick={(e) => this.onFavAdd(e, movie, user)}
            >
              Favorite ❤
            </Button>
            <Button
              id="back-btn"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

MovieView.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};
