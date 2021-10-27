import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Film() {
  const { id } = useParams();
  const oneFilm = useSelector((state) => state.oneFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=784670b75891833569bbe2ab5bd3808c`
    )
      .then((response) => response.json())
      .then((film) => dispatch({ type: "showOneFilm", payload: film }));
  }, [dispatch, id]);

  return (
    <div>
      <>
        <img
          src={`https://image.tmdb.org/t/p/w154/${oneFilm.poster_path}`}
          alt="movie-poster"
        />{" "}
        <span>{oneFilm.title}</span>
        <br />
        <span>{oneFilm.overview}</span>
        <Link to="/">
          {" "}
          <button>Go back</button>
        </Link>
      </>
    </div>
  );
}
