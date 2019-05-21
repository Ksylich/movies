import React, { Component } from 'react';
import MovieCardItem from '../movie-card-item';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { fetchMovies } from '../../actions';
import Spinner from '../spinner';

import './movie-cards.css';

const MovieCards = ({ movies }) => {
    return (
        <div className="body">
            {
                movies.map((movie) => {
                    return (
                        <MovieCardItem key={movie.id}
                            movie={movie} idx={movies.findIndex(m => m.id === movie.id)} />
                    )
                })
            }
        </div >

    );
};


class MovieCardsContainer extends Component {

    state = {
        currentPage: 1
    }

    componentDidMount() {
        this.props.fetchMovies(this.state.currentPage);
    }

    render() {
        const { movies, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <MovieCards movies={movies} />

    }
}

const mapStateToProps = ({ movies, loading, error }) => {
    return { movies, loading, error };
};

const mapDispathToProps = {
    fetchMovies: fetchMovies
}




export default connect(mapStateToProps, mapDispathToProps)(MovieCardsContainer);
