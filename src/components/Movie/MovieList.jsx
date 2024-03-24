import React, { useState, useRef, useEffect } from 'react';
import {connect, useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import InfiniteScroll from "react-infinite-scroller";
import {MOVIES} from '../../movies';
import  {fetchMoviesRequest}  from '../../store/actions'
import {fetchMovies} from '../../store/actions';
function MovieList(props) {
    
    const [movies, setMovies] = useState(MOVIES);
    const itemsPerPage = 10;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

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
          <Movie key={movies[i].title} title={movies[i].title } subtitle={movies[i].title } image={movies[i].image }/>
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
        <div>NO MOVIES</div>
        }
      
      </>
    );

  }

  export default MovieList;