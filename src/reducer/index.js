//! Reducers are pure funciton takese two arguements
// ! 1) state
// ! 2) actions
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITE,
} from "../actions/index";

import { combineReducers } from "redux";

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
export function movies(state = initialMoviesState, action) {
  console.log("MOVIES REDUCERS");
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

// Adding Search Reducer
const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  console.log("SEARCH REDUCERS");
  return state;
}

// Adding Root Reducer
const initialRootState = {
  movies: initialMoviesState, //just defined above (Movies Reducer)
  search: initialSearchState, //just defined above (Search Reducer)
};
// export default function rootReducer(state = initialRootState, action) {
//   //combining both the reducer just it
//   return {
//     movies: movies(state.movies, action), // Already define above
//     search: search(state.search, action), // aleady define above
//   };
// }

// ! we use combineReducers for combining reducer
export default combineReducers({
  // movies: movies,
  // search: search,
  movies,
  search,
});
