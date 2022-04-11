import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Navbar, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

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
          <Form.Group id="form-field">
            <Form.Label id="form-label">Username:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            {usernameErr && <p>{usernameErr}</p>}
          </Form.Group>

          <Form.Group id="form-field">
            <Form.Label id="form-label">Password:</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            {passwordErr && <p>{passwordErr}</p>}
          </Form.Group>
          <Row>
            <Button
              id="bttn-1"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Row>
          <Row>
            <Col id="acctt">
              Need an account?
              <Button
                id="btn-2"
                onClick={() => {
                  onSignUp();
                }}
              >
                Sign Up Here
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

LoginView.PropTypes = {
  onLogin: PropTypes.func.isRequired,
};
