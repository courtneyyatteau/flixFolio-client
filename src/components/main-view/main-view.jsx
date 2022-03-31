import React from "react";
import axios from "axios";
import "./main-view.scss";

import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationView } from "../navbar-view/navbar-view";
import { Row, Col, Container } from "react-bootstrap";
import { FooterView } from "../footer-view/footer-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
    };
  }

  getMovies(token) {
    axios
      .get("https://flixfolio.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  render() {
    const { movies, user } = this.state;

    return (
      <div className="main-view">
        <Router>
          <Row className="main-view justify-content-md-center">
            <Route
              exact
              path="/"
              render={() => {
                if (!user) {
                  return <Redirect to="/login" />;
                }

                return (
                  <>
                    <NavigationView
                      user={user}
                      onLoggedOut={() => this.onLoggedOut()}
                    />
                    <Container fluid>
                      <Row>
                        {movies.map((movie) => (
                          <Col sm={6} md={4} lg={3} xl={2} key={movie._id}>
                            <MovieCard movie={movie} onMovieClick={() => {}} />
                          </Col>
                        ))}
                      </Row>
                    </Container>
                    <FooterView />
                  </>
                );
              }}
            />
            <Route
              path="/login"
              render={() => {
                if (user) {
                  return <Redirect to="/" />;
                }

                return (
                  <LoginView
                    user={user}
                    onLoggedIn={(data) => this.onLoggedIn(data)}
                  />
                );
              }}
            />
            <Route
              path="/register"
              render={() => {
                if (user) {
                  return <Redirect to="/" />;
                }

                return (
                  <Col>
                    <RegistrationView />
                  </Col>
                );
              }}
            />
            <Route
              path="/movies/:movieId"
              render={({ match, history }) => {
                return (
                  <>
                    <NavigationView
                      user={user}
                      onLoggedOut={() => {
                        localStorage.clear();
                        window.open("/", "_self");
                      }}
                    />
                    <Col md={8}>
                      <MovieView
                        movie={movies.find(
                          (m) => m._id === match.params.movieId
                        )}
                        onBackClick={() => history.goBack()}
                      />
                    </Col>
                  </>
                );
              }}
            />
            <Route
              path="/directors/:name"
              render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <>
                    <NavigationView
                      user={user}
                      onLoggedOut={() => {
                        localStorage.clear();
                        window.open("/", "_self");
                      }}
                    />
                    <Container>
                      <Row>
                        <Col md={8}>
                          <DirectorView
                            director={
                              movies.find(
                                (m) => m.Director.Name === match.params.name
                              ).Director
                            }
                            onBackClick={() => history.goBack()}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </>
                );
              }}
            />
            <Route
              path="/genres/:name"
              render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <>
                    <NavigationView
                      user={user}
                      onLoggedOut={() => {
                        localStorage.clear();
                        window.open("/", "_self");
                      }}
                    />
                    <Col md={8}>
                      <GenreView
                        genre={
                          movies.find((m) => m.Genre.Name === match.params.name)
                            .Genre
                        }
                        onBackClick={() => history.goBack()}
                        movies={movies.filter(
                          (movie) => movie.Genre.Name === match.params.name
                        )}
                      />
                    </Col>
                  </>
                );
              }}
            />
            <Route path="/users/:user">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <ProfileView
                  user={user}
                />
              </>
            </Route>
          </Row>
        </Router>
      </div>
    );
  }
}
