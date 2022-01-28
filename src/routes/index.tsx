import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Movies } from "../pages/movies"
import { TopRated } from "../pages/movies/topRated"
import { NotFound } from "../pages/notFound"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
            {/* filmes */}
            <Route path="movies" element={<Movies />} />
            <Route path="movies/top-rated" element={<TopRated />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
