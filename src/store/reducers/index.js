import { combineReducers } from 'redux'
import {moviesReducer} from './moviesReducer';

const appReducer = combineReducers({movies: moviesReducer});
export default appReducer;