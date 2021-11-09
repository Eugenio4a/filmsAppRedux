import { createStore } from 'redux';

function reducer(
  state = { films: [], oneFilm: [], favorites: [], search: '' },
  action,
) {
  switch (action.type) {
    case 'updateFilms': {
      return { ...state, films: action.payload };
    }
    case 'showOneFilm': {
      return { ...state, oneFilm: action.payload };
    }
    case 'updateFavoriteFilms': {
      return { ...state, favorites: action.payload };
    }
    case 'addAndRemoveFromFavorites': {
      const isFavorite = Boolean(
        state.favorites.find(
          (favoriteFilm) => favoriteFilm.id === action.payload.id,
        ),
      );
      if (!isFavorite) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }

      return {
        ...state,
        favorites: state.favorites.filter(
          (film) => film.id !== action.payload.id,
        ),
      };
    }
    case 'filmSearch': {
      return { ...state, search: action.payload };
    }
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
