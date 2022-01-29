import { useState, useEffect } from "react";
import { MovieTopRatedResponseType } from "../../ts/movies";
import {getMoviesTopRated} from '../../services/tmdb'
import { MoviesCard } from "./components/card";

export const MoviesTopRated = () => {
    const [moviesTopRated, setMoviesTopRated] = useState<MovieTopRatedResponseType>();
    useEffect(() => {
        const fillTopRate = async () => {
            const response = await getMoviesTopRated()
            setMoviesTopRated(response)
        }
        fillTopRate()
    }, [])
    

    return (
        <>
            {moviesTopRated && moviesTopRated.results && <MoviesCard title="Top Rated" results={moviesTopRated.results} />}
        </>
    )
}
