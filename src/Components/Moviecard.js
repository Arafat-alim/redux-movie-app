import React, { Component } from "react";

class Moviecard extends Component {
  render() {
    // console.log(this.props);
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            <button className="favourite-btn">Add to Favourite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
