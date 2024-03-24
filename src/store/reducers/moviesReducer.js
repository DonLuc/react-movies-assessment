import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    loading: false,
    movies: ['Testing'],
    error: 'Error'
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_MOVIES: 
            return {
                loading: true,
                movies: action.payload,
                error: 'Testing'
            }
        default: return state
    }
}

export default moviesReducer;