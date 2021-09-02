//! Reducers are pure funciton takese two arguements
// ! 1) state
// ! 2) actions
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITE,
} from "../actions/index";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
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
    case REMOVE_FAVOURITE:
      const filteredArr = state.favourites.filter((movie) => {
        return movie.Title !== action.movie.Title;
      });
      return {
        ...state,
        favourites: filteredArr,
      };
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return {
        ...state,
      };
  }
}
