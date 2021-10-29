import React from "react";
import styles from "../FilmsList/FilmList.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function FilmsList({ film }) {
  const dispatch = useDispatch();
  const favoriteFilms = useSelector((state) => state.favorites);

  const favorite = Boolean(favoriteFilms.find((films) => films.id === film.id));
  return (
    <>
      <div className={styles.filmCard} key={film.id}>
        <Link to={`/film/${film.id}`}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
            alt="movie-poster"
          />{" "}
        </Link>
        <span>{film.title}</span>
        <br />
        <span>{film.release_date}</span>
        <button
          onClick={() => {
            dispatch({
              type: "addAndRemoveFromFavorites",
              payload: film,
            });
          }}
        >
          {!favorite ? "Add to favorites" : "Remove"}
        </button>
      </div>
    </>
  );
}
