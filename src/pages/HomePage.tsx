import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/moviesApi';
import { MoviesList } from '../components/MoviesList/MoviesList';

interface IMovies {
  title: string;
  id: string;
  poster_path: string;
};

export const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    getPopularMovies().then((movies) => setPopularMovies(movies))
  }, []);
  
  return (
    <div>
        <h1>HomePage</h1>
        <MoviesList movies={popularMovies}/>
    </div>
  );
};
