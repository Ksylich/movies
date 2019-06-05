import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./movie-details.css";

import { DecktopNav, DecktopMovieInformation } from "../movie-details-desktop";
import { MobNav, MobMovieInformation } from "../movie-details-mb";
import { addToFavorites } from "../../redux/actions";

const classNames = require("classnames");

class MovieDetails extends Component {
  render() {
    const { currentMovieId, favorites, addToFavorites, movies, history } = this.props;
    const movie = movies.find(movie => movie.id === currentMovieId);
    const isFavorite = !favorites.find(mov => mov.id === movie.id);

    const style = classNames({ " ": isFavorite, " hidden": !isFavorite });
    const sectionStyle = {
      backgroundImage: `url(${movie.posterPath})`
    };
    return (
      <div className="wrapper">
        <div className="section" style={sectionStyle} />
        <div className="content">
          <MobNav onHandleBack={history.goBack} />
          <MobMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={() => addToFavorites(movie)}
          />
          <DecktopNav onHandleBack={history.goBack}/>
          <DecktopMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={() => addToFavorites(movie)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentMovieId, favorites }) => ({
  currentMovieId,
  favorites
});

const mapDispatchToProps = {
  addToFavorites
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDetails)
);
