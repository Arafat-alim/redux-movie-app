import { data } from "../data"; //directily fetching using componentDidMount
import React from "react";
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { addMovies } from "../actions";

class App extends React.Component {
  //Componentdidmount for fetching movies
  componentDidMount() {
    const { store } = this.props;
    // subscribe function
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate(); //!usually we wont do this
    });
    //make api call
    //dispatch my store
    store.dispatch(addMovies(data));
    console.log("STATE - ", this.props.store.getState());
  }
  render() {
    const { list } = this.props.store.getState(); //{list, favourite}
    console.log("Render - ", this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>

          <div className="list">
            {list.map((movie, index) => {
              return <Moviecard movie={movie} key={`movies=${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
