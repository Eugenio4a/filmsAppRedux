import { React } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../FavoriteFilms/FavoriteFilms.module.css";
export default function FavoriteFilms() {
  const favoriteFilms = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className={styles.favorite}>
      <span
        style={{
          width: "100%",
          fontWeight: "700",
          fontSize: "20px",
          padding: "10px",
        }}
      >
        <Link to="/">Go back</Link>
      </span>
      {favoriteFilms.map((favoriteToShow) => {
        return (
          <>
            <div
              key={favoriteFilms.id}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "0px 10px" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w154/${favoriteToShow.poster_path}`}
                  alt="movie-poster"
                />
              </div>

              <div style={{ maxWidth: "150px", minWidth: "150px" }}>
                <span>{favoriteToShow.title}</span>
                <br />
                <span>{favoriteToShow.release_date}</span>
                <br />
                <button
                  onClick={() => {
                    dispatch({
                      type: "addAndRemoveFromFavorites",
                      payload: favoriteToShow,
                    });
                  }}
                  style={{ margin: "10px 0" }}
                >
                  Remove
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
