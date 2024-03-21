import './Movie.css';

export default function Movie(props) {
    return (
        <div className="movie-item">
            <img src={props.image} className="movie-image" />
            <div className="movie-details">
                <h2 className="movie-title">{props.title}</h2>
                <p className="movie-subtitle">{props.subtitle}</p>
            </div>
        </div>
    );
}