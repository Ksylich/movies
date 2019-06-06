import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./movie-details.css";

import { DecktopNav, DecktopMovieInformation } from "../movie-details-desktop";
import { MobNav, MobMovieInformation } from "../movie-details-mb";
import { addToFavorites } from "../../redux/actions";

const classNames = require("classnames");

const MovieDetails = ({ addToFavorites, movie, history, isFavorite, onHandleNext }) => {
  const style = classNames({ " ": isFavorite, " hidden": !isFavorite });
  const sectionStyle = {
    backgroundImage: `url(${movie.posterPath})`
  };
  return (
    <div className="wrapper">
      <div className="section" style={sectionStyle} />
      <div className="content">
        <MobNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
        <MobMovieInformation
          movie={movie}
          btnStyle={style}
          addToFavorites={() => addToFavorites(movie)}
        />
        <DecktopNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
        <DecktopMovieInformation
          movie={movie}
          btnStyle={style}
          addToFavorites={() => addToFavorites(movie)}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToFavorites
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MovieDetails)
);
