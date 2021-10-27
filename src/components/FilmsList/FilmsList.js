import React from "react";
import styles from "../FilmsList/FilmList.module.css";
import { Link } from "react-router-dom";
export default function FilmsList({ film }) {
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
        <button>Add to favorites</button>
      </div>
    </>
  );
}
