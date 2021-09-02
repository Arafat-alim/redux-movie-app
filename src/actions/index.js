// {
//   type: ADD_MOVIES,
// }

// {
//     type: DECREASE_COUNT,
// }

//creating action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";

// creating action creator (function return an object)
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    // movies: movies,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    // movies: movies,
    movie,
  };
}
export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    // movies: movies,
    movie,
  };
}
export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    // movies: movies,
    val,
  };
}
