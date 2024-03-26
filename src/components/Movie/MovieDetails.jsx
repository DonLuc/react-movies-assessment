import React from 'react';
import './MovieDetails.css';
import {useDispatch, useSelector } from 'react-redux';
import ACTION_TYPES from '../../store/actions/actionTypes';


const MovieDetails = ({ movie }) => {
    const selectedMovieSlice = useSelector(state => state.selectedMovie);
    const dispatch = useDispatch();
    const onResetSelection = () => {
        dispatch({type: ACTION_TYPES.SELECT_MOVIE_RESET, payload: null});        
    }
    return (
        <>
            <div className="movie-item">
                <img src={selectedMovieSlice.selectedMovie.image} className="movie-image" />
                <div className="movie-details">
                <h2 className="movie-title">{selectedMovieSlice.selectedMovie.title}</h2>
                    <h2 className="movie-title">{selectedMovieSlice.selectedMovie.year}</h2>
                    <p className="movie-subtitle">Actors: {selectedMovieSlice.selectedMovie.actors}</p>
                </div>
            </div>
            <div className="back-container">
                <button type="submit" className="search-button" onClick={() => onResetSelection()}>BACK</button>
            </div>
        </>
    );
};

export default MovieDetails;