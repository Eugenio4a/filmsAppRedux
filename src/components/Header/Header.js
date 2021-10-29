import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  console.log(search);
  return (
    <>
      <Link to="/favorites">
        {" "}
        <div>FavoriteFilms</div>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            dispatch({
              type: "filmSearch",
              payload: `${e.target.value.toLocaleLowerCase()}`,
            });
          }}
        ></input>
      </div>
    </>
  );
}
