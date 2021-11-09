import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

function getFavorites({ favorites }) {
  return favorites;
}

export default function useSetLocalStorage(film = []) {
  const dispatch = useDispatch();
  const favoriteFilms = useSelector(getFavorites);

  useEffect(() => {
    localStorage.setItem('favoritesList', JSON.stringify(favoriteFilms));
  }, [favoriteFilms]);

  const favorite = Boolean(
    favoriteFilms.find((favoriteFilm) => favoriteFilm.id === film.id),
  );

  return { favoriteFilms: favoriteFilms, dispatch: dispatch, favorite };
}
