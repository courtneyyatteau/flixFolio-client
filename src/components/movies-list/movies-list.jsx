import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./movies-list.scss";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { MovieCard } from "../movie-card/movie-card";

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
    <>
      <div>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </div>
      <Grid container justifyContent="center">
        {filteredMovies.map((m) => (
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={m._id}>
            <MovieCard movie={m} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default connect(mapStateToProps)(MoviesList);
