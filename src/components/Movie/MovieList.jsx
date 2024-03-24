import React, { useState, useRef, useEffect } from 'react';
import {connect, useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import InfiniteScroll from "react-infinite-scroller";
import {MOVIES} from '../../movies';
import  fetchMovies  from '../../store/actions/moviesAction'

function MovieList(props) {
    
    const [movies, setMovies] = useState(MOVIES);
    const itemsPerPage = 10;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

    const moviesSlice = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const searchMovies = (searchKeyword) => {
        if (searchKeyword === '') {
            setMovies(MOVIES);
            setrecords(itemsPerPage)
        } else {
            const returnedSearch = MOVIES.filter(movie => movie.title.toLowerCase().includes(searchKeyword.toLowerCase()));
            setrecords(returnedSearch.length);
            setMovies(returnedSearch);
        }
    } 
    useEffect(() => {
        searchMovies(props.searchEntry);
        console.log('SEARCH ENTYR IN LIST::: ' + JSON.stringify(props.searchEntry) );
    }, [props.searchEntry]);



    const showItems = (movies) => {
      var items = [];
      console.log('RECORDS ' + records);
      for (var i = 0; i < records; i++) {
        items.push(
          <Movie key={movies[i].title} title={movies[i].title} subtitle={movies[i].subtitle} image={movies[i].image}/>
        );
      }
      return items;
    };
    
    const loadMore = () => {
      if (records === movies.length) {
        setHasMore(false);
        //console.log('Records::: ' + records);

      } else {
        //console.log('Setting records::: ' + (records + itemsPerPage) );
        setTimeout(() => {
          setrecords(records + itemsPerPage);
        }, 2000);
      }
    };
    return (
      <>
        <div>
          {moviesSlice.movies.length}
          <button onClick={() => dispatch(fetchMovies()) }>MOVIES</button>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<h4 className="loader">Loading...</h4>}
          useWindow={false}>
          {showItems(movies)}
        </InfiniteScroll>
      
      
      </>
    );

  }

  export default MovieList;