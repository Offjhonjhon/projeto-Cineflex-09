import {Link} from 'react-router-dom'
import './movie-poster.css'
function MoviePoster({url, id}) {
    
    return (
        <Link to={`/movieSchedule/${id}`}>
            <div className="poster">
                <img src={url}></img>
            </div>
        </Link>
    );
}

export default MoviePoster;