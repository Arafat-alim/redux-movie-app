//! Reducers are pure funciton takese two arguements
// ! 1) state
// ! 2) actions
import { ADD_MOVIES } from "../actions/index";

const initialMoviesState = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    // return action.movies; current state is an array
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
