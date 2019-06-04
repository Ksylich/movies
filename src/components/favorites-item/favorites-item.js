import React from 'react';

import './favorites-item.css';

import NoPoster from "../../assets/icons/NoPoster.jpg";

const FavoriteItem = ({movie,onHandleRemoveMovie, onHandleChooseMovie}) => {
    const poster = !movie.posterPath.includes("null")
    ? movie.posterPath
    : NoPoster;
    return(
        <div className="item-list">
        <div className="item">
          <div onClick={onHandleChooseMovie} className="image_fav">
            <img src={poster} alt="Smiley face" />
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
    )
}

export default FavoriteItem;