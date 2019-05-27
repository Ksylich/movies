import React from 'react';
import MovieCardsContainer from '../../movie-cards';
import PaginationPanel from '../../pagination-panel';

import './main-page.css';

const MainPage = () => (
  <div className="main"> 
    <MovieCardsContainer />
    <PaginationPanel/>  
  </div>
);

export default MainPage;
