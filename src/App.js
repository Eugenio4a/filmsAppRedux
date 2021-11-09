import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmList from './components/FilmList';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch({});
  const filmsList = useSelector((state) => state.films);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=784670b75891833569bbe2ab5bd3808c',
    )
      .then((response) => response.json())
      .then((filmsInfo) =>
        dispatch({ type: 'updateFilms', payload: filmsInfo.results }),
      )
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(
      localStorage.getItem('favoritesList'),
    );
    if (favoritesFromLocalStorage) {
      dispatch({
        type: 'updateFavoriteFilms',
        payload: favoritesFromLocalStorage,
      });
    }
  }, [dispatch]);

  const cardProps = { cardStyle: styles, cardSize: 'small' };
  return <FilmList filmsList={filmsList} cardProps={cardProps} />;
}

export default App;
