import React from 'react';
import styles from './FilmItem.module.css';
import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';

export default function FilmItem({ film, cardStyle = {}, cardSize, withLink }) {
  const { dispatch, favorite } = useFavorites(film);

  return (
    <div
      className={cardSize === 'small' ? cardStyle.small : cardStyle.medium}
      key={film.id}
    >
      {withLink ? (
        <Link to={`/film/${film.id}`}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w154/${film.poster_path}`}
            alt="movie-poster"
          />{' '}
        </Link>
      ) : null}
      <span className={styles.filmCardTitle}>{film.title}</span>
      <br />
      <span style={{ textAlign: 'center' }}>{film.release_date}</span>
      <button
        className={!favorite ? styles.filmCardBtn : styles.filmCardBtnAdded}
        onClick={() => {
          dispatch({
            type: 'addAndRemoveFromFavorites',
            payload: film,
          });
        }}
      >
        {!favorite ? 'Add to favorites' : 'Remove'}
      </button>
    </div>
  );
}
