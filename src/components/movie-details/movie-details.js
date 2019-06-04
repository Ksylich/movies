import React, { Component } from "react";
import { connect } from "react-redux";

import "./movie-details.css";

import { DecktopNav, DecktopMovieInformation } from "../movie-details-desktop";
import { MobNav, MobMovieInformation } from "../movie-details-mb";
import { addToFavorites } from "../../redux/actions";

class MovieDetails extends Component {
  addToFavorites(movie) {
    const { favorites, addToFavorites } = this.props;
    if(!favorites.find((mov) => mov.id === movie.id)){
      addToFavorites(movie);
    }
  }

  render() {
    const { currentMovieId, movies } = this.props;
    const movie = movies.find(movie => movie.id === currentMovieId);

    const sectionStyle = {
      backgroundImage: `url(${movie.posterPath})`
    };
    return (
      <div className="wrapper">
        <div className="section" style={sectionStyle} />
        <div className="cls" />
        <div className="content">
          <MobNav />
          <MobMovieInformation
            movie={movie}
            addToFavorites={() => this.addToFavorites(movie)}
          />
          <DecktopNav />
          <DecktopMovieInformation
            movie={movie}
            addToFavorites={() => this.addToFavorites(movie)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentMovieId, movies, favorites }) => ({
  currentMovieId,
  movies,
  favorites
});

const mapDispatchToProps = {
  addToFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
