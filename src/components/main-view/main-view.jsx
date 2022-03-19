import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import dKImage from "../../imgs/darkKnight.jpg";
import screamImg from "../../imgs/scream.webp";
import hangoverImg from "../../imgs/hangover.jpg";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "Dark Knight",
          Description:
            "When half of Harvey Dent's face gets burned in an explosion, the Joker brings him over to the dark side, encouraging him to seek vengeance for Rachel's death.",
          Genre: "Action",
          Director: "Christopher Nolan",
          ImagePath: dKImage,
        },
        {
          _id: 2,
          Title: "Scream",
          Description:
            "25 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.",
          Genre: "Horror",
          Director: "Matt Bettinelli-Oplin",
          ImagePath: screamImg,
        },
        {
          _id: 3,
          Title: "The Hangover",
          Description:
            "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
          Genre: "Comedy",
          Director: "Todd Phillips",
          ImagePath: hangoverImg,
        },
      ],
      selectedMovie: null,
    };
  }
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }
  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className="main-view">No movies exist!</div>;

    return (
      <div className="main-view">
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
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
