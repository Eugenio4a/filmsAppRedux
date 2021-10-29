import { React } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function FavoriteFilms() {
  const favoriteFilms = useSelector((state) => state.favorites);

  return (
    <div>
      <Link to="/">Go back</Link>
      {favoriteFilms.map((favoriteToShow) => {
        return (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w154/${favoriteToShow.poster_path}`}
              alt="movie-poster"
            />
            <span>{favoriteToShow.title}</span>

            <span>{favoriteToShow.release_date}</span>
          </>
        );
      })}
    </div>
  );
}
