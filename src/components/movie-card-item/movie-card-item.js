import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./movie-card-item.css";

import NoPoster from "../../assets/icons/NoPoster.jpg";
import { MoviePropTypes } from "../../prop-type-values/movie-prop-types";

const classNames = require("classnames");

const MovieCardItem = ({ movie, idx, onHandleChooseMovie }) => {
  const { title, posterPath } = movie;

  const style = classNames(`crd crd-${idx}`);

  const poster = !posterPath.includes("null") ? posterPath : NoPoster;

  return (
    <div className={style} data-title={title} onClick={onHandleChooseMovie}>
      <Link className='lnk' to="/movie-details-page">
        <img src={poster} alt="" className="card-img-top" />
      </Link>
    </div>
  );
};

MovieCardItem.propTypes = {
  movie: MoviePropTypes,
  idx: PropTypes.number.isRequired
};

export default MovieCardItem;
