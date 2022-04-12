export const SET_MOVIES = "SET_MOVIES"; //sets the list of movies
export const SET_FILTER = "SET_FILTER"; //sets search filter
export const SET_USER = "SET_USER"; //sets the user locator

export function setMovies(value) {
  return {
    type: SET_MOVIES,
    value,
  };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setUser(value) {
  return {
    type: SET_USER,
    value,
  };
}
