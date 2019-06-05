import React from "react";

import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";
import star from "../../assets/icons/US_Army_Star.png";
import NoPoster from "../../assets/icons/NoPoster.jpg";

import './movie-details-mb.css';

const MobNav = ({onHandleBack}) => {
  return (
    <div className="nav-bar-m">
      <div className="left-m">
        <div>
          <img src={left_arrow} alt="Smiley face" height={40} width={40} />
        </div>
        <div onClick={onHandleBack} className="text">Back</div>
      </div>
      <div className="right-m">
        <div>
          <div className="text">Next</div>
        </div>
        <div>
          <img src={right_arrow} alt="Smiley face" height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

const MobMovieInformation = ({ movie, addToFavorites,btnStyle}) => {
  const poster = !movie.posterPath.includes("null") ? movie.posterPath : NoPoster;
  return (
    <div className="desk-m">
      <div className="deck-top">
        <div className="image">
          <img src={poster} alt="Smiley face" />
        </div>
        <div className="info-mob">
          <div className="info-top">
            <div className="score-mob">
              <div className="txt">Score:</div>
              <div className="txt-data">{movie.score}</div>
            </div>
            <div onClick={addToFavorites} className={`icon${btnStyle}`}>
              <img src={star} alt="Smiley face" height={150} width={150} />
            </div>
          </div>
          <div className="score-mob">
            <div className="txt">Language:</div>
            <div className="txt-data">{movie.language}</div>
          </div>
          <div className="score-mob">
            <div className="txt">Realise-Date:</div>
            <div className="txt-data">{movie.realiseDate}</div>
          </div>
        </div>
      </div>
      <div className="desk-bottom">
        <div className="mob-movie-title">{`${movie.title}`}</div>
        <div className="mob-overview">{`${movie.overview}`}</div>
      </div>
    </div>
  );
};

export { MobNav, MobMovieInformation };
