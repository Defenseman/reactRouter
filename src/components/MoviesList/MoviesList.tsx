import React from 'react';
import { Link, useLocation } from 'react-router';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

interface IMovies {
  title: string;
  id: string;
  poster_path: string;
  original_title: string;
  overview: string;
};

export interface MoviesProps {
  movies: IMovies[]
}

export const MoviesList = ({ movies }: MoviesProps) => {
  const location = useLocation();
  
  return (
    <ul 
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        paddingLeft: '0',
        gap: '16px'
      }}>
      {movies.map((movie) => {
        return (
          <li  
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '360px',
            padding: '8px',
            border: '2px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          key={movie.id}>
            <Link to={`/search/${movie.id}`} style={{color: 'white'}} state={location}>
              <h2>{movie.title}</h2>
              <img src={`${BASE_IMG}${movie.poster_path}`} alt={`${movie.original_title} poster`} />
              <p style={{ textAlign: 'justify'}}>{movie.overview}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
