export const SET_MOVIES = "SET_MOVIES"; //sets the list of movies
export const SET_SEARCH = "SET_SEARCH"; //sets the search filter
export const SET_GENRE = "SET_GENRE"; //sets the genre filter
export const SET_USER = "SET_USER"; //sets the user locator

export function setMovies(value) {
  return {
    type: SET_MOVIES,
    value,
  };
}

export function setSearch(value) {
  return {
    type: SET_SEARCH,
    value,
  };
}

export function setGenre(value) {
  return {
    type: SET_GENRE,
    value,
  };
}

export function setUser(value) {
  return {
    type: SET_USER,
    value,
  };
}
