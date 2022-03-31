import React, { useState } from "react";
import "./profile-view.scss";
import {
  Form,
  Button,
  Col,
  Row,
  Image,
  Tabs,
  Tab,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import image from "../../../public/imgs/image-placeholder.jpg";

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUserInfo(accessToken);
  }

  getUserInfo = (token) => {
    const Username = localStorage.getItem("user");
    axios
      .get(`https://flixFolio.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onChangeUserInfo = (e) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://flixFolio.herokuapp.com/users/${Username}`,
        {
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });
        localStorage.setItem("user", this.state.Username);

        alert("User profile has been updated.");
        window.open("/profile", "_self");
      });
  };

  onDeleteAccount = () => {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .delete(`https://flixFolio.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        alert("User deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open("/", "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  setUsername(value) {
    this.setState({
      Username: value,
    });
  }

  setPassword(value) {
    this.setState({
      Password: value,
    });
  }

  setEmail(value) {
    this.setState({
      Email: value,
    });
  }

  setBirthday(value) {
    this.setState({
      Birthday: value,
    });
  }

  setFavoriteMovies(value) {
    this.setState({
      FavoriteMovies: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { Username, Password, Email, Birthday, FavoriteMovies } = this.state;
    return (
      <>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="profile" title="Profile">
            <Form
              onSubmit={(e) =>
                this.onChangeUserInfo(
                  e,
                  this.Username,
                  this.Password,
                  this.Email,
                  this.Birthday
                )
              }
            >
              <Row>
                <Col sm={5}>
                  <Image className="profile-image" src={image}></Image>
                </Col>
                <Col>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder={Username}
                    value={Username}
                    onChange={(e) => this.setUsername(e.target.value)}
                  ></Form.Control>
                  <Form.Label>Password: </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={(e) => this.setPassword(e.target.value)}
                  ></Form.Control>
                  <Form.Label>Email: </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={Email}
                    value={Email}
                    onChange={(e) => this.setEmail(e.target.value)}
                  ></Form.Control>
                  <Form.Label>Birthday: </Form.Label>
                  <Form.Control
                    type="username"
                    placeholder={Birthday}
                    value={Birthday}
                    onChange={(e) => this.setBirthday(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
              <Button id="btn" type="submit" onClick={this.onChangeUserInfo}>
                Save Changes
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="movie-favs" title="Favorite Movies">
            <Card.Body>
              {FavoriteMovies.length === 0 && (
                <div className="text-center">No Favorite Movies</div>
              )}
              <Row className="favorite-container">
                {FavoriteMovies.length > 0 &&
                  movies.map((movie) => {
                    if (
                      movie._id ===
                      FavoriteMovies.find((favorite) => favorite === movie._id)
                    ) {
                      return (
                        <Card className="fav-movie" key={movie._id}>
                          <Card.Img
                            className="fav-movie-image"
                            src={movie.ImagePath}
                          />
                          <Card.Body>
                            <Button
                              id="btn"
                              value={movie._id}
                              onClick={(e) => this.onFavRemove(e, movie)}
                            >
                              Remove
                            </Button>
                          </Card.Body>
                        </Card>
                      );
                    }
                  })}
              </Row>
            </Card.Body>
          </Tab>
          <Tab eventKey="manage-account" title="Account Management">
            <Button onClick={() => this.onDeleteAccount()}>
              Delete my Account
            </Button>
          </Tab>
        </Tabs>
      </>
    );
  }
}
