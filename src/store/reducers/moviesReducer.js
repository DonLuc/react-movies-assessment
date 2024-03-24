import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    loading: false,
    movies: [],
    error: ''
}

export const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_MOVIES_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case ACTION_TYPES.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case ACTION_TYPES.FETCH_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default moviesReducer;