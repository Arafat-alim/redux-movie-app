import React, { Component } from "react";
// import { data } from "../data";
import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }
  handleaddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder={"Search Here..."}
          />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
