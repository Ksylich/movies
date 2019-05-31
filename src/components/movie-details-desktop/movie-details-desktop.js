import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import left from "../../assets/icons/left-round-16.png";
import right from "../../assets/icons/right-round-16.png";
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";
import star from "../../assets/icons/US_Army_Star.png";

import "./movie-details-desktop.css";

class DesktopMovieDetails extends Component {
  renderNav() {
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
  }

  renderMovieInformation(movie) {
    return (
      <div className="container">
        <div className="desk">
          <div className="image">
            <img src={movie.posterPath} alt="Smiley face" />
          </div>
          <div className="info">
            <div className="row top">
              <button type="button" className="btn btn-default">
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
  }

  renderMobNav() {
    return (
      <div className="nav-bar-m">
        <div className="left-m">
          <div>
            <img src={left_arrow} alt="Smiley face" height={40} width={40} />
          </div>
          <div className="text">Back</div>
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
  }

  renderMobMovieInformation(movie) {
    return (
      <div classNam="desk-m">
        <div className="deck-top">
          <div className="image">
            <img src={movie.posterPath} alt="Smiley face" />
          </div>
          <div className="info-mob">
            <div className="info-top">
              <div className="score-mob">
                <div className="txt">Score:</div>
                <div className="txt-data">{movie.score}</div>
              </div>
              <div className="icon">
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
  }

  render() {
    const { currentMovieId, movies } = this.props;
    const movie = movies.find(movie => movie.id === currentMovieId);
    const windowSize = window.innerHeight - 75;

    const sectionStyle = {
      backgroundImage: `url(${movie.posterPath})`,
      height: `${windowSize}px`
    };
    const clsStyle = {
      height: `${windowSize}px`
    };

    if (
      /Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return (
        <Fragment>
          <div className="wrapper">
            <div className="section" style={sectionStyle} />
            <div className="cls" style={clsStyle} />
            <div className="content">
              {this.renderMobNav()}
              {this.renderMobMovieInformation(movie)}
            </div>
          </div>
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
          <div className="wrapper">
            <div className="section" style={sectionStyle} />
            <div className="cls" style={clsStyle} />
            <div className="content">
              {this.renderNav()}
              {this.renderMovieInformation(movie)}
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = ({ currentMovieId, movies }) => ({
  currentMovieId,
  movies
});

export default connect(mapStateToProps)(DesktopMovieDetails);
