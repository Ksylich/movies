import React from 'react';
import { connect } from "react-redux";
import { withLastLocation } from 'react-router-last-location';

import MovieDetails from '../movie-details';
import { addToFavorites } from "../../redux/actions";

const MovieDetailsContainer = ({movies, favorites,currentMovieId,addToFavorites,lastLocation}) => {
    const mvs = lastLocation === '/' ? movies : favorites;

    return(
        <MovieDetails currentMovieId={currentMovieId} favorites={favorites} addToFavorites={addToFavorites} movies={mvs}  />
    );
}

const mapStateToProps = ({ movies, favorites,currentMovieId }) => ({
    currentMovieId,
    movies,
    favorites,
  });

  const mapDispatchToProps = {
    addToFavorites
  };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);