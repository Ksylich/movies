import React, {Fragment} from 'react';
import Header from '../header';

import { Route, Switch } from 'react-router-dom';
import { MovieDetailsPage, MainPage, FavoritesPage } from '../pages';

import './app.css';

const App = () => {

    return (
        <Fragment>

            <Header/>

            <Switch>
            
            <Route
                path='/'
                component={MainPage}
                exact />

            <Route
                path='/movie-details-page'
                component={MovieDetailsPage}
            />

            <Route
                path='/favorites-page'
                component={FavoritesPage}
            />

        </Switch>
        </Fragment>
        


    );
}

export default App;