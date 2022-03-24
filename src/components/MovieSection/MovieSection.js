import { useState, useEffect } from 'react';
import axios from 'axios';
import MoviePoster from '../MoviePoster/MoviePoster';

function MovieSection() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        

        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promisse.then((response, index) => {
            setItems(response.data);
        });
    }, []);

    return (
        <main>
            {items.map((object) => {
                const {posterURL, id} = object
                return(<MoviePoster link={posterURL} key={id} />)})}

        </main>
    );
}

export default MovieSection;