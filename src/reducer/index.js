//! Reducers are pure funciton takese two arguements
// ! 1) state
// ! 2) actions

export default function movies(state = [], action) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
