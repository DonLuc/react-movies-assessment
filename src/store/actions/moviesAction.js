import ACTION_TYPES from './actionTypes';

const fetchMovies = () => {
    return {
        type: ACTION_TYPES.FETCH_MOVIES,
        payload: ['A','B','C']
    }
}

export default fetchMovies;