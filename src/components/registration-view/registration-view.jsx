import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./registration-view.scss";
import { Button, Form, Navbar, Container, Row, Col } from "react-bootstrap";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [birthdayErr, setBirthdayErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username is required");
      isReq = false;
    } else if (username.length < 4) {
      setUsernameErr("Username must be at least 4 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password is required");
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must be at least 6 charcaters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Email is required");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("Email address doesn't contain an @ symbol");
      isReq = false;
    }
    if (!birthday) {
      setBirthdayErr("Birthday is required");
      isReq = false;
    }

    return isReq;
  };

  const onLogin = () => {
    window.open("/login", "_self");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post("https://flixFolio.herokuapp.com/users", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          window.open("/", "_self");
        })
        .catch((e) => {
          console.log("error registering the user");
        });
    }
  };

  return (
    <>
      <Container className="register">
        <form className="form">
          <div className="form-box">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* code added here to display validation error */}
            {usernameErr && <p>{usernameErr}</p>}
          </div>
          <div className="form-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* code added here to display validation error */}
            {passwordErr && <p>{passwordErr}</p>}
          </div>
          <div className="form-box">
            <label>Birthday:</label>
            <input type="date" onChange={(e) => setBirthday(e.target.value)} />
            {/* code added here to display validation error */}
            {birthdayErr && <p>{birthdayErr}</p>}
          </div>
          <div className="form-box">
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            {/* code added here to display validation error */}
            {emailErr && <p>{emailErr}</p>}
          </div>
          <Button
            id="reg-btn"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <br />
          <br /> 
          <br /> 
          <br />
          <Row>
            <p className="acct">
              Already have an account?
              <Button
                id="btn-2"
                onClick={() => {
                  onLogin();
                }}
              >
                Login Here
              </Button>
            </p>
          </Row>
        </form>
      </Container>
    </>
  );
}

RegistrationView.PropTypes = {
  onRegistration: PropTypes.func.isRequired,
};
