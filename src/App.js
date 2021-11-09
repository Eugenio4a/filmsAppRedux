import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmItem from './components/FIlmItem/FilmItem';

function App() {
  const filmsList = useSelector((state) => state.films);
  const dispatch = useDispatch({});
  const search = useSelector((state) => state.search);

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

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filmsList
          .filter((film) => film.title.toLowerCase().includes(search))
          .map((film) => (
            <FilmItem film={film} />
          ))}
      </div>
    </>
  );
}

export default App;
