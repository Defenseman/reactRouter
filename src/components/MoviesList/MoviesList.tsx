import React from 'react';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

interface IMovies {
  title: string;
  id: string;
  poster_path: string;
};

interface MoviesProps {
  movies: IMovies[]
}

export const MoviesList = ({ movies }: MoviesProps) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`${BASE_IMG}${movie.poster_path}`} alt="" />
          </li>
        );
      })}
    </ul>
  );
};
