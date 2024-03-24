import {connect, useSelector, useDispatch } from 'react-redux';
import './SearchBar.css';
import {searchMovies} from '../../store/actions';
export default function SearchBar(props) {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        const searchEntry = e.target.searchInput.value;
        dispatch(searchMovies(searchEntry))
        props.parentCallback(searchEntry);
    }

    return (
        <div className="search-container">
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="searchInput"  placeholder="Search..." className="search-bar" />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
}