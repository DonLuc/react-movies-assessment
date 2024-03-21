import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import {MOVIES} from './movies';
import MovieList from './components/Movie/MovieList';

function App() {
  let searchedMovies = [];
  const [searchEntry, setsearchEntry] = useState("");
  const [moviesData, setMoviesData] = useState(MOVIES);
  function handleCallback(search) {
    setsearchEntry(search);
  };

  /*
  const didMountRef = useRef(false)
	useEffect(() => {
		if (didMountRef.current) {
          if (searchEntry !== "") {
            //searchedMovies = MOVIES.filter(movie => movie.title.toLowerCase().includes(searchEntry.toLowerCase()));
            //setMoviesData(searchedMovies);
          } else {
            //searchedMovies = MOVIES;
          }
          didMountRef.current = true;
		} else didMountRef.current = true;
	});
  */

  return (
    <div className="container">
      <Header />
      <SearchBar parentCallback={handleCallback}/>
        <MovieList searchEntry={searchEntry}/>
    </div>
  );
}

export default App;
