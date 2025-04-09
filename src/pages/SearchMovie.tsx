import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { getMovieByQuery } from '../services/moviesApi';
import { MoviesProps } from '../components/MoviesList/MoviesList';

export const SearchMovie = () => {
  const [movies, setMovies] = useState<MoviesProps>([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value
    if(query.trim()) {
      getMovieByQuery(query).then((movies) => {
        setMovies(movies)
      })
      
    }
  }
  return (
    <div>
      <form style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
        columnGap: '5px',
      }} onSubmit={handleSubmit}>
      <TextField 
        variant='outlined' 
        InputProps={{
          style: {
            color: 'whitesmoke'
          }
        }}
        name='query'
        id='' />
      <Button type='submit' variant='contained'>Search</Button>
      </form>
      <MoviesList movies={movies} />
    </div>
  )
}
