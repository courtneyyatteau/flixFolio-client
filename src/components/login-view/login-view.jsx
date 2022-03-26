import React, { useState } from "react";
import { Form, Button, Navbar, Container } from "react-bootstrap";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication, then call props.onLoggedIn(username)
    props.onLoggedIn(username);
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
