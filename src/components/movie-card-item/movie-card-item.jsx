import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './movie-card-item.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';
import MoviePropTypes from '../../prop-type-values/movie-prop-types';


const MovieCardItem = ({ movie, idx, onHandleChooseMovie }) => {
  const { title, posterPath } = movie;

  const style = classNames(`crd crd-${idx}`);

  const poster = !posterPath.includes('null') ? posterPath : NoPoster;

  const memoizedCallback = useCallback(
    () => {
      onHandleChooseMovie(movie.id);
    },
    [movie.id],
  );

  return (
    <div className={style} data-title={title} role="presentation" onClick={memoizedCallback}>
      <Link className="lnk" to="/movie-details-page">
        <img src={poster} alt="" className="card-img-top" />
      </Link>
    </div>
  );
};

MovieCardItem.propTypes = {
  movie: MoviePropTypes.isRequired,
  idx: PropTypes.number.isRequired,
  onHandleChooseMovie: PropTypes.func.isRequired,
};

export default MovieCardItem;
