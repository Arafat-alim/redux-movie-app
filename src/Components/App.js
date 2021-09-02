import { data } from "../data"; //directily fetching using componentDidMount
import React from "react";
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { addMovies, setShowFavourites } from "../actions";

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
  // checking is my movie is present in favourite or not
  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found a movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies } = this.props.store.getState(); // {movies: {}, search: {}}
    const { list, favourites, showFavourites } = movies; //{list, favourite}

    // display movies
    const displayMovies = showFavourites ? favourites : list;

    console.log("Render - ", this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourite
            </div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <Moviecard
                  movie={movie}
                  key={`movies=${index}`}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFav(movie)}
                />
              );
            })}
          </div>

          {
            // console.log(displayMovies.length === 0)
            displayMovies.length === 0 ? (
              <div className="no-movies">No Movies to show</div>
            ) : (
              ""
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
