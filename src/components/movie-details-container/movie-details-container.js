import React from 'react';
import { connect } from "react-redux";
import { withLastLocation } from 'react-router-last-location';

import MovieDetails from '../movie-details';

const MovieDetailsContainer = ({movies, favorites, lastLocation}) => {

    const mvs = lastLocation.pathname === '/' ? movies : favorites;
    
    return(
        <MovieDetails  movies={mvs}  />
    );
}

const mapStateToProps = ({ movies, favorites }) => ({
    movies,
    favorites,
  });

export default withLastLocation(connect(mapStateToProps)(MovieDetailsContainer));