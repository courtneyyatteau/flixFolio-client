import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-view.scss";
import axios from "axios";

export class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: null,
      Password: null,
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
          Username: response.data.Username,
          Password: response.data.Password,
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

  onFavAdd = (e, movie) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .post(
        `https://flixfolio.herokuapp.com/users/${Username}/movies/${movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Favorite movie has been added.");
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Row>
          <Col sm={5}>
            <Card.Img className="movie-img" src={movie.ImagePath} />
          </Col>
          <Col className="movie-info">
            <Card.Title id="movie-title">{movie.Title}</Card.Title>
            <Card.Text className="movie-description">
              {movie.Description}
            </Card.Text>
            <Card.Text>
              Genre:{" "}
              <Link to={`/genres/${movie.Genre.Name}`}>{movie.Genre.Name}</Link>
            </Card.Text>
            <Card.Text>
              Director:{" "}
              <Link to={`/directors/${movie.Director.Name}`}>
                {movie.Director.Name}
              </Link>
            </Card.Text>
            <Card.Text>Year: {movie.Year}</Card.Text>
            <Button
              id="fav-btn"
              type="submit"
              value={movie._id}
              onClick={(e) => this.onFavAdd(e, movie)}
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
