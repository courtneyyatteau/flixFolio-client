import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Navbar, Container } from "react-bootstrap";
import axios from "axios";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://flixfolio.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("no such user exists");
      });
  };

  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" id="logo">
          FlixFolio
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Form id="form">
          <Form.Group controlId="formUsername" id="form-field">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" id="form-field">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            id="btn"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

LoginView.PropTypes = {
  onLogin: PropTypes.func.isRequired,
};
