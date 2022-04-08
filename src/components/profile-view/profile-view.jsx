import React from "react";
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
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
      Email: "",
      Birthday: "",
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const accessToken = localStorage.getItem("token");
    this.getUserInfo(accessToken);
  }

  componentWillUnmount() {
    this._isMounted = false;
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
        `https://flixfolio.herokuapp.com/users/${Username}`,
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
      .delete(`https://flixfolio.herokuapp.com/users/${Username}`, {
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

  onFavRemove = (e, movie) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .delete(
        `https://flixfolio.herokuapp.com/users/${Username}/${movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Favorite movie has been removed.");
        window.open(`/`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  refreshPage = () => {
    window.location.reload(false);
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
        <Tabs>
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
              <Button id="btn1" type="submit" onClick={this.onChangeUserInfo}>
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
                        <Col sm={6} md={4} lg={3} xl={2}>
                          <Card className="fav-movie" key={movie._id}>
                            <Card.Img
                              className="fav-movie-image"
                              src={movie.ImagePath}
                            />
                            <Card.Body>
                              <Button
                                id="btn2"
                                value={movie._id}
                                onClick={(e) => this.onFavRemove(e, movie)}
                              >
                                Remove
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    }
                  })}
              </Row>
            </Card.Body>
          </Tab>
          <Tab eventKey="manage-account" title="Account Management">
            <Card>
              <Button onClick={() => this.onDeleteAccount()}>
                Delete my Account
              </Button>
            </Card>
          </Tab>
        </Tabs>
      </>
    );
  }
}
