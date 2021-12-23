import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import { HashRouter as Router, Route } from "react-router-dom";
import FavoriteFilms from "./components/FavoriteFilms/FavoriteFilms";
import Film from "./components/Film/Film";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/favorites">
          <FavoriteFilms />
        </Route>
        <Route path="/film/:id">
          <Film />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
