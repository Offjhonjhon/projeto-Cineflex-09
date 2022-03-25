import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviePoster from '../MoviePoster/MoviePoster';
import './movie-section.css'

function MovieSection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promisse.then((response) => {
            setMovies(response.data);
        });
    }, []);

    return (
        <main>
            <p className='movie-section-title'>Selecione o filme</p>
            <div className='posters'>
                {movies.map((object) => {
                    const {posterURL, id} = object;
                    return(<MoviePoster url={posterURL} key={id} id={id} />)})}
            </div>
        </main>
    );
}

export default MovieSection;