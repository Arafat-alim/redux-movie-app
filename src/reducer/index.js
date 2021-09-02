//! Reducers are pure funciton takese two arguements
// ! 1) state
// ! 2) actions
import { ADD_MOVIES, ADD_FAVOURITE } from "../actions/index";

const initialMoviesState = {
  list: [],
  favourites: [],
};
// export default function movies(state = initialMoviesState, action) {
//   if (action.type === ADD_MOVIES) {
//     // return action.movies; current state is an array
//     return {
//       ...state,
//       list: action.movies,
//     };
//   }
//   return state;
// }
export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    default:
      return {
        ...state,
      };
  }
}
