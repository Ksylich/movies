import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './favorites-item.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';

const FavoriteItem = ({ movie, onHandleRemoveMovie, onHandleChooseMovie }) => {
  const poster = !movie.posterPath.includes('null')
    ? movie.posterPath
    : NoPoster;
  return (
    <div className="item-list">
      <div className="item">
        <div onClick={onHandleChooseMovie} role="presentation" className="image_fav">
          <Link className="lnk" to="/movie-details-page">
            <img src={poster} alt="Smiley face" />
          </Link>
        </div>
        <div className="info">
          <div className="fav-info-top">
            <div className="fav-title">{movie.title}</div>
            <button onClick={onHandleRemoveMovie} type="button" className="btn btn-default">
                Unfavorite
            </button>
          </div>
          <div className="overview-fav">{`${movie.overview}`}</div>
        </div>
      </div>
    </div>
  );
};

FavoriteItem.propTypes = {
  movie: MoviePropTypes,
  onHandleChooseMovie: PropTypes.func.isRequired,
  onHandleRemoveMovie: PropTypes.func.isRequired,
};

export default FavoriteItem;
