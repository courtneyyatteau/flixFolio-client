import React from "react";
import axios from "axios";
import "./main-view.scss";

import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import {
  Navbar,
  Container,
  NavDropdown,
  Button,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://flixfolio.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  onRegistration(registration) {
    this.setState({
      registration,
    });
  }

  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  render() {
    const { movies, selectedMovie, user, registration } = this.state;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        <Navbar bg="light" expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#home" className="logo">
              FlixFolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">My List</Nav.Link>
                <NavDropdown title="Genres" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Adventure
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Comedy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Drama</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Documentary
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Family</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Fantasy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Horror/Thriller
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Musical
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Mystery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Romance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Sci-Fi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Western
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-auto"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <span>Need an account? </span>
          <button>Register here!</button>
        </div>
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
