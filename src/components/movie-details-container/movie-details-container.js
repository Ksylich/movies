import React, { Component } from "react";
import { connect } from "react-redux";
import { withLastLocation } from "react-router-last-location";

import MovieDetails from "../movie-details";
import { changeMovie } from "../../redux/actions";

class MovieDetailsContainer extends Component {
  onNextClick(movies) {
    const { changeMovie, currentMovieId } = this.props;

    const next = movies.findIndex(movie => movie.id === currentMovieId) + 1;

    changeMovie(next >= movies.length ? movies[0].id : movies[next].id);
  }

  render() {
    const { movies, favorites, currentMovieId, lastLocation } = this.props;
    const mvs = lastLocation.pathname === "/" ? movies : favorites;
    const movie = mvs.find(movie => movie.id === currentMovieId);
    const isFavorite = !favorites.find(mov => mov.id === movie.id);

    return (
      <MovieDetails
        movie={movie}
        isFavorite={isFavorite}
        onHandleNext={this.onNextClick.bind(this, mvs)}
      />
    );
  }
}

const mapStateToProps = ({ movies, favorites, currentMovieId }) => ({
  movies,
  favorites,
  currentMovieId
});

const mapDispatchToProps = {
  changeMovie
};

export default withLastLocation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDetailsContainer)
);
