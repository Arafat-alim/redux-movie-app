import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./Components/App";
// import movies from "./reducer/index";
import rootReducer from "./reducer/index";

// creating a middleware named  logger
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware codes
//       console.log("ACTION_TYPES - ", action.type);
//       next(action); //! Important to call next, warna yehi pe stuck hojyga code
//     };
//   };
// };

//! Modifying Middlware
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code
    console.log("ACTION_TYPES: ", action.type);
    next(action);
  };
//creating a store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store);
// console.log("Before Dispatch State", store.getState());

// DISPATCH
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log("After Dispatch the store - ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
