// import FavoritesFilms from './FavoriteFilms';
import FilmList from '../FilmList';
import useFavorites from '../hooks/useFavorites';
import { Link } from 'react-router-dom';
import styles from './FavoriteFilms.module.css';

function FavoritesFilms() {
  const { favoriteFilms } = useFavorites();
  return (
    <>
      <Link to="/">Go back</Link>
      <FilmList filmsList={favoriteFilms} cardStyle={styles} />
    </>
  );
}
export default FavoritesFilms;
