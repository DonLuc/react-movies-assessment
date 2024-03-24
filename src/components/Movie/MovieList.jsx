import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import InfiniteScroll from "react-infinite-scroller";
import {MOVIES} from '../../movies';
import {fetchMovies} from '../../store/actions';
import MovieDetails from './MovieDetails';


function MovieList(props) {
    
    const [movies, setMovies] = useState(MOVIES);
    const itemsPerPage = 10;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

    const selectedMovieSlice = useSelector(state => state.selectedMovie);
    const moviesSlice = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchMovies())
    }, []);

    const showMovieListItems = (movies) => {
      console.log(JSON.stringify(movies))
      var items = [];
      for (var i = 0; i < moviesSlice.movies.length; i++) {
        items.push(
          <Movie key={movies[i].title} movie={movies[i]} />
        );
      }
      return items;
    };
    
    const loadMore = () => {
      if (records === moviesSlice.movies.length) {
        setHasMore(false);
      } else {
        setTimeout(() => {
          setrecords(moviesSlice.movies.length);
        }, 2000);
      }
    };

    const renderMovieList = () => {
      return (
        <>
        {moviesSlice.movies.length > 0 ? 
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<h4 className="loader">Loading...</h4>}
          useWindow={false}>
          {showMovieListItems(moviesSlice.movies)}
        </InfiniteScroll>
        : 
        <div className="noMovies">NO MOVIES</div>
        }
      
      </>

      );
    }

    const renderMovieDetail = () => {
      return (
        <MovieDetails></MovieDetails>
      )

    }

    const renderSection = () => {
      if (selectedMovieSlice.selectedMovie !== null 
        ) {
          console.log('DETAILS::: ' + selectedMovieSlice.selectedMovie);
        return renderMovieDetail();
      }
      return renderMovieList();
    }

    return (
      <>
        {renderSection()}
      
      </>
    );

  }

  export default MovieList;