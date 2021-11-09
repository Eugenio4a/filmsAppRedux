import React from 'react';
import { useSelector } from 'react-redux';
import FilmItem from '../FilmItem';

export default function FilmList({ filmsList, cardProps }) {
  const search = useSelector((state) => state.search);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {filmsList
        .filter((film) => film.title.toLowerCase().includes(search))
        .map((film) => (
          <FilmItem film={film} {...cardProps} />
        ))}
    </div>
  );
}
