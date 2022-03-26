import React, { useState } from "react";
import PropTypes from "prop-types";
import "./registration-view.scss";
import { Button, Form, Navbar, Container } from "react-bootstrap";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, birthday, email);
    props.onRegistration(username);
  };

  return (
    <>
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

          <Form.Group controlId="formBday" id="form-field">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" id="form-field">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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

RegistrationView.PropTypes = {
  onRegistration: PropTypes.func.isRequired,
};
