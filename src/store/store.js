/*
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducers/moviesReducer';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';


export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)
*/
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducers/moviesReducer';
import selectMovieReducer from './reducers/selectMovieReducer'
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


export default configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectMovieReducer
  },
  middleware: (getDefaultMiddleware) => {return getDefaultMiddleware().concat(logger).concat(thunk)}
});