import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    selectedMovie: null
}


export const selectMovieReducer = (state = initialState, action) => { 
    switch(action.type) {
        case ACTION_TYPES.SELECT_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload  
            }
        case ACTION_TYPES.SELECT_MOVIE_RESET:
            return {
                ...state,
                selectedMovie: null  
            }
        default: return state
    }
}

export default selectMovieReducer;