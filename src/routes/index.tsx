import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Movies } from "../pages/movies"
import { MoviesPopular } from "../pages/movies/popular"
import { MoviesTopRated } from "../pages/movies/topRated"
import { NotFound } from "../pages/notFound"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
            {/* filmes */}
            <Route path="movies" element={<Movies />} />
            <Route path="movies/top-rated" element={<MoviesTopRated />} />
            <Route path="movies/popular" element={<MoviesPopular />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
