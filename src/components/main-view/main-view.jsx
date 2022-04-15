import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./main-view.scss";

import { LoginView } from "../login-view/login-view";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationView } from "../navbar-view/navbar-view";
import { Row, Col, Container } from "react-bootstrap";
import { FooterView } from "../footer-view/footer-view";
import { setMovies, setUser } from "../../actions/actions";
import MoviesList from "../movies-list/movies-list";
import ActionView from "../genre-views/action-view";
import AdventureView from "../genre-views/adventure-view";
import ComedyView from "../genre-views/comedy-view";
import DocumentaryView from "../genre-views/documentary-view";
import DramaView from "../genre-views/drama-view";
import FamilyView from "../genre-views/family-view";
import FantasyView from "../genre-views/fantasy-flix";
import HorrorView from "../genre-views/horror-view";
import MusicalView from "../genre-views/musical-view";
import MysteryView from "../genre-views/mystery-view";
import RomanceView from "../genre-views/romance-view";
import SciFiView from "../genre-views/scifi-view";
import WesternView from "../genre-views/western-view";
import { FrontOverlay } from "../front-overlay-view/front-overlay-view";
import Loader from "../loader/loader";
import FavoritesView from "../favorites-view/favorites-view";

class MainView extends React.Component {
  state = { loading: false };
  getMovies(token) {
    
    axios
      .get("https://flixfolio.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({ loading: false });
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.props.setUser(localStorage.getItem("user"));
      this.setState({ loading: true });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    this.props.setUser(authData.user.Username);
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.props.setUser(null);
    this.setState({ loading: false });
  }

  render() {
    let { movies, user } = this.props;
    if (this.state.loading) return <Loader />;

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
                  <Container fluid>
                    <NavigationView
                      user={user}
                      onLoggedOut={() => this.onLoggedOut()}
                    />
                    <FrontOverlay />
                    <MoviesList movies={movies} />
                    <FooterView />
                  </Container>
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
                    <Col>
                      <MovieView
                        user={user}
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
            <Route path="/profile">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <ProfileView user={user} movies={movies} />
              </>
            </Route>
            <Route path="/action">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <ActionView movies={movies} />
              </>
            </Route>
            <Route path="/adventure">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <AdventureView movies={movies} />
              </>
            </Route>
            <Route path="/comedy">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <ComedyView movies={movies} />
              </>
            </Route>
            <Route path="/documentary">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <DocumentaryView movies={movies} />
              </>
            </Route>
            <Route path="/drama">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <DramaView movies={movies} />
              </>
            </Route>
            <Route path="/family">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <FamilyView movies={movies} />
              </>
            </Route>
            <Route path="/fantasy">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <FantasyView movies={movies} />
              </>
            </Route>
            <Route path="/horror">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <HorrorView movies={movies} />
              </>
            </Route>
            <Route path="/musical">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <MusicalView movies={movies} />
              </>
            </Route>
            <Route path="/mystery">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <MysteryView movies={movies} />
              </>
            </Route>
            <Route path="/romance">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <RomanceView movies={movies} />
              </>
            </Route>
            <Route path="/scifi">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <SciFiView movies={movies} />
              </>
            </Route>
            <Route path="/western">
              <>
                <NavigationView
                  user={user}
                  onLoggedOut={() => {
                    localStorage.clear();
                    window.open("/", "_self");
                  }}
                />
                <WesternView movies={movies} />
              </>
            </Route>
          </Row>
        </Router>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user,
  };
};

export default connect(mapStateToProps, { setMovies, setUser })(MainView);
