import './SearchBar.css';

export default function SearchBar(props) {

    function handleSubmit(e) {
        e.preventDefault();
        const searchEntry = e.target.searchInput.value;
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