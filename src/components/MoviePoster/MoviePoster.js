import './movie-poster.css'
function MoviePoster({link}) {
    return (
        <>
            <div className="poster">
                <img src={link}></img>
            </div>
        </>
    );
}

export default MoviePoster;