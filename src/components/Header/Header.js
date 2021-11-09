import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Header/Header.module.css';

export default function Header() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.header}>
        {' '}
        <Link to="/favorites">
          {' '}
          <h1>FavoriteFilms</h1>
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              dispatch({
                type: 'filmSearch',
                payload: `${e.target.value.toLocaleLowerCase()}`,
              });
            }}
          ></input>
        </div>
      </div>
    </>
  );
}
