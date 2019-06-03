import React from "react";

import "./movie-details-desktop.css";

import left from "../../assets/icons/left-round-16.png";
import right from "../../assets/icons/right-round-16.png";
import NoPoster from "../../assets/icons/NoPoster.jpg";

const DecktopNav = () => {
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="left">
          <div>
            <img src={left} alt="Smiley face" height={17} width={17} />
          </div>
          <div className="text">Back to list</div>
        </div>
        <div className="right">
          <div>
            <div className="text">Next movie</div>
          </div>
          <div>
            <img src={right} alt="Smiley face" height={17} width={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DecktopMovieInformation = ({ movie, addToFavorites }) => {
  const poster = !movie.posterPath.includes("null") ? movie.posterPath : NoPoster;
  return (
    <div className="container">
      <div className="desk">
        <div className="image">
          <img src={poster} alt="Smiley face" />
        </div>
        <div className="info">
          <div className="row top">
            <button onClick={addToFavorites} type="button" className="btn btn-default">
              Add to favorite
            </button>
          </div>
          <div className="movie-title">{`${movie.title}`}</div>
          <div className="about">
            <div className="score">{`Score: ${movie.score}`}</div>
            <div className="language">{`Language:  ${movie.language}`}</div>
            <div className="realise-date">
              {`Realise-Date: ${movie.realiseDate}`}
            </div>
          </div>
          <div className="overview">{`${movie.overview}`}</div>
        </div>
      </div>
    </div>
  );
};

export { DecktopNav, DecktopMovieInformation };
