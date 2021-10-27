import { createStore } from "redux";

function reducer(state = { films: [], oneFilm: [] }, action) {
  switch (action.type) {
    case "updateFilms": {
      return { ...state, films: action.payload };
    }
    case "showOneFilm": {
      return { ...state, oneFilm: action.payload };
    }
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
