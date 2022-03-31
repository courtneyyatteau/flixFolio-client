import React, { useState } from "react";
import "./profile-view.scss";
import { Form, Button, Col, Row, Image, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import image from "../../../public/imgs/image-placeholder.jpg";

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: [],
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

  render() {
    const { Username, Password, Email, Birthday } = this.state;
    return (
      <>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="profile" title="Profile"></Tab>
          <Tab eventKey="movie-favs" title="Favorite Movies" disabled></Tab>
          <Tab eventKey="movie-favs" title="Account Management" disabled></Tab>
        </Tabs>
        <Form>
          <Row>
            <Col sm={5}>
              <Image className="profile-image" src={image}></Image>
            </Col>
            <Col>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="username"
                placeholder={Username}
              ></Form.Control>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
              ></Form.Control>
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder={Email}></Form.Control>
              <Form.Label>Birthday: </Form.Label>
              <Form.Control
                type="username"
                placeholder={Birthday}
              ></Form.Control>
            </Col>
          </Row>
          <Button id="btn">Save Changes</Button>
        </Form>
      </>
    );
  }
}
