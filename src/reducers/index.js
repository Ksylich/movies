import { createReducer } from "redux-act";

import {
    moviesError,
    moviesLoaded,
    moviesRequested,
} from '../actions'



const initialState = {
    movies: [],
    loading: true,
    error: null,
    page: 0
};


const reducer = createReducer({
    [moviesRequested]: () => {
        return {
            movies: [],
            loading: true,
            error: null
        }
    },
    [moviesLoaded]: (state, payload) => {
        return {
            movies: payload,
            loading: false,
            error: null
        }
    },
    [moviesError]: (state, payload) => {
        return {
            movies: [],
            loading: false,
            error: payload
        }
    }


}, initialState);


export default reducer;