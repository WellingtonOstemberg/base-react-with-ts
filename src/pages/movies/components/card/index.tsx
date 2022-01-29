import { getImage } from "../../../../services/api";
import { MovieResultMovieType } from "../../../../ts/movies";

export const MoviesCard = ({
  results,
  title,
}: {
  results: MovieResultMovieType[];
  title: string;
}) => {
  return (
    <>
      <h6>{title}</h6>
      <div className="row">
        {results?.map((movie) => {
          return (
            <div className="card col-4" key={movie.id}>
              <h1>{movie.name}</h1>
              <img
                src={getImage(movie.poster_path)}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
