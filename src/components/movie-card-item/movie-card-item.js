import React from 'react';
import PropTypes from 'prop-types';
import './movie-card-item.css';

const classNames = require('classnames');

const MovieCardItem = ({ movie, idx }) => {
  const { title, posterPath } = movie;

  const style = classNames(`crd crd-${idx}`);

  return (
    <div className={style} data-title={title}>
      <img src={posterPath} alt="" className="card-img-top" />
    </div>
  );
};

MovieCardItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    posterPath: PropTypes.string,
  }).isRequired,
  idx: PropTypes.number.isRequired,
};

export default MovieCardItem;
