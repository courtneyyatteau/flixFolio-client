import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Navbar, Container } from "react-bootstrap";
import axios from "axios";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    let isReq = true;

    if (!username) {
      setUsernameErr("Username required");
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr("Username must be at least 2 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password required");
      isReq = false;
    } else if (password.length < 6) {
      setPassword("Password must be at least 6 characters long");
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
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
    }
  };

  const onSignUp = () => {
    window.open("/register", "_self");
  };

  return (
    <>
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
          <p>Need an account? </p>
          <Button
            onClick={() => {
              onSignUp();
            }}
          >
            Sign Up Here
          </Button>
        </Form>
      </Container>
    </>
  );
}

LoginView.PropTypes = {
  onLogin: PropTypes.func.isRequired,
};
