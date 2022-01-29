export type MovieMoviesTopRatedParams = {
    api_key: string
    language?: string
    page?: number
    region?: string
}

export type MovieResultMovieType = {
    poster_path?: string | null
    adult?: boolean
    overview?: string
    release_date?: string
    genre_ids?: number[] // [1,2,3]
    id?: number
    original_title?: string
    original_language?: string
    title?: string
    name?: string
    backdrop_path?: string | null
    popularity?: number
    vote_count?: number
    video?: boolean
    vote_average?: number
}

export type MovieTopRatedResponseType = {
    page?: number
    results?: MovieResultMovieType[]
    total_results?: number
    total_pages?: number
}
export type MoviePopularResponseType = {
    page?: number
    results?: MovieResultMovieType[]
    total_results?: number
    total_pages?: number
}