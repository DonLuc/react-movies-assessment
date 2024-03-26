import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import {MOVIES} from './movies';
import MovieList from './components/Movie/MovieList';
import { useSelector } from 'react-redux';

function App() {
  const selectedMovieSlice = useSelector(state => state.selectedMovie);
  const moviesSlice = useSelector(state => state.movies);
 
  return (
    <div className="container">
      <Header />
      { (selectedMovieSlice.selectedMovie !== null || moviesSlice.movies.error !== '')  ? 
        <></>
        :
        <SearchBar />
    }
        <MovieList />
    </div>
  );
}

export default App;
