import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./Components/App";
import movies from "./reducer/index";

//creating a store
const store = createStore(movies);
console.log("store", store);
console.log("Before Dispatch State", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "Superman" }],
});

console.log("After Dispatch the store - ", store.getState());
