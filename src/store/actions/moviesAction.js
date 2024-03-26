import axios from 'axios';
import ACTION_TYPES from './actionTypes';

export const fetchMoviesRequest = () => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES_REQUEST,
    }
}

export const fetchMoviesSuccess = movies => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesFailure = error => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES_FAILURE,
        payload: error
    }
}

export const selectMovie = movie => {
    return {
        type: ACTION_TYPES.SELECT_MOVIE,
        payload: movie
    }
}

export const selectMovieReset = movie => {
    return {
        type: ACTION_TYPES.SELECT_MOVIE_RESET
    }
}


const transformData = (movies = []) => {
    let transformedMovies = [];
    if (movies.length > 0) {
        movies.forEach(movie => {
            transformedMovies.push({
                title: movie["#AKA"],
                year: movie["#YEAR"],
                actors: movie["#ACTORS"],
                image: movie["#IMG_POSTER"]
                
            })

        });
    }
    return transformedMovies;
}

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest);
        axios.get('https://search.imdbot.workers.dev/?q=Niram')
            .then(response => {
                const movies = transformData(response.data.description)
                dispatch(fetchMoviesSuccess(movies));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchMoviesFailure(errorMsg));
            });
    }
}

export const searchMovies = keyword => {
    return (dispatch) => {
            dispatch(fetchMoviesRequest);
            axios.get('https://search.imdbot.workers.dev/?q=' + keyword)
                .then(response => {
                    const movies = transformData(response.data.description)
                    dispatch(fetchMoviesSuccess(movies));
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchMoviesFailure(errorMsg));
                });
        }
}
