import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmsList from "./components/FilmsList/FilmsList";

function App() {
  const filmsList = useSelector((state) => state.films);
  const dispatch = useDispatch({});
  const search = useSelector((state) => state.search);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=784670b75891833569bbe2ab5bd3808c"
    )
      .then((response) => response.json())
      .then((filmsInfo) =>
        dispatch({ type: "updateFilms", payload: filmsInfo.results })
      )
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filmsList
          .filter((film) => film.title.toLowerCase().includes(search))
          .map((film) => (
            <FilmsList film={film} />
          ))}
      </div>
    </>
  );
}

export default App;
