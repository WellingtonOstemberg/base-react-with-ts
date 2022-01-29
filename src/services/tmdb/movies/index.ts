import { MoviePopularResponseType, MovieTopRatedResponseType } from "../../../ts/movies";
import { api_key, language } from "../../api";

export const getMoviesTopRated = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=${page}`)
    const response: MovieTopRatedResponseType = await request.json()
    return response
}
export const getMoviesPopular = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
    const response: MoviePopularResponseType = await request.json()
    return response
}
