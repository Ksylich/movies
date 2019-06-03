import React, { Component} from "react";
import { connect } from "react-redux";

import "./movie-details.css";

import {DecktopNav, DecktopMovieInformation} from '../movie-details-desktop';
import { MobNav, MobMovieInformation } from '../movie-details-mb';



class MovieDetails extends Component {
  

  

  

  render() {
    const { currentMovieId, movies } = this.props;
    const movie = movies.find(movie => movie.id === currentMovieId);

    const sectionStyle = {
      backgroundImage: `url(${movie.posterPath})`
    };

    
  

  
      return (
       
          <div className="wrapper">
            <div className="section" style={sectionStyle} />
            <div className="cls"/>
            <div className="content"> 
              <MobNav/>
              <MobMovieInformation movie={movie}/>
              <DecktopNav/>
              <DecktopMovieInformation movie={movie}/>
            </div>
          </div>

      );
    }
}

const mapStateToProps = ({ currentMovieId, movies }) => ({
  currentMovieId,
  movies
});

export default connect(mapStateToProps)(MovieDetails);
