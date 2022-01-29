import { useState, useEffect } from "react";
import { MoviePopularResponseType } from "../../ts/movies";
import {getMoviesPopular} from '../../services/tmdb'
import { getImage } from "../../services/api";
import { MoviesCard } from "./components/card";

export const MoviesPopular = () => {
    const [moviesPopular, setMoviesPopular] = useState<MoviePopularResponseType>();
    useEffect(() => {
        const fillTopRate = async () => {
            const response = await getMoviesPopular()
            setMoviesPopular(response)
        }
        fillTopRate()
    }, [])
    

    return (
        <>         
            {moviesPopular
            && moviesPopular.results
            && <MoviesCard title="Popular" results={moviesPopular.results}
            />}
        </>
    )
}
