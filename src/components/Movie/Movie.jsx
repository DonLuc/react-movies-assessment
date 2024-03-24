import { useDispatch, useSelector } from 'react-redux';
import './Movie.css';
import ACTION_TYPES from '../../store/actions/actionTypes';
import MovieDetails from './MovieDetails';

export default function Movie(props) {
    const dispatch = useDispatch();
    const selectMovie = (movie) => {
        dispatch({type: ACTION_TYPES.SELECT_MOVIE ,payload: movie });        
    }
    return (
        <>
            <div className="movie-item" onClick={() => selectMovie(props.movie)}>
                <img src={props.movie.image} className="movie-image" />
                <div className="movie-details">
                    <h2 className="movie-title">{props.movie.title}</h2>
                    <p className="movie-subtitle">{props.movie.subtitle}</p>
                </div>
            </div>

        </>
    );
}