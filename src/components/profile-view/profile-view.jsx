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
  Container,
} from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import FavoritesView from "../favorites-view/favorites-view";

import axios from "axios";
export class ProfileView extends React.Component {
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
    const accessToken = localStorage.getItem("token");
    this.getUserInfo(accessToken);
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

    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
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
          },
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
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
        window.location.reload();
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
      <Container fluid>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="tabs"
        >
          <Tab eventKey="profile" title="Profile" tabClassName="tab">
            <br />
            <br />
            <br />
            <div className="form-box">
              <form
                onSubmit={(e) =>
                  this.onChangeUserInfo(
                    e,
                    this.Username,
                    this.Password,
                    this.Email,
                    this.Birthday
                  )
                }
                className="form"
              >
                <div className="field1">
                  <label>Username:</label>
                  <input
                    type="username"
                    placeholder={Username}
                    value={Username}
                    onChange={(e) => this.setUsername(e.target.value)}
                  ></input>
                  <br />
                  <label>Password: </label>
                  <input
                    type="password"
                    placeholder=""
                    onChange={(e) => this.setPassword(e.target.value)}
                  ></input>
                  <br />
                  <label>Email: </label>
                  <input
                    type="email"
                    placeholder={Email}
                    value={Email}
                    onChange={(e) => this.setEmail(e.target.value)}
                    rows={3}
                  ></input>
                  <br />

                  <label>Birthday: </label>
                  <input
                    type="username"
                    placeholder={Birthday}
                    value={Birthday.substring(0, 10)}
                    onChange={(e) => this.setBirthday(e.target.value)}
                  ></input>
                </div>
                <br />

                <Button
                  id="btn-1"
                  type="submit"
                  onClick={this.onChangeUserInfo}
                >
                  Save Changes
                </Button>
                <br />
                <br />
                <br />
                <br />
                <Button id="btn-3" onClick={() => this.onDeleteAccount()}>
                  Delete my Account
                </Button>
              </form>
            </div>
          </Tab>
          <Tab eventKey="movie-favs" title="Favorite Movies" tabClassName="tab">
            <br />
            <br />
            <br />
            <br />
            <br />
            <FavoritesView
              FavoriteMovies={FavoriteMovies}
              movies={movies}
              onFavRemove={this.onFavRemove}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
