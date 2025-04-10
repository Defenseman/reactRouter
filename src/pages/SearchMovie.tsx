import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { getMovieByQuery } from '../services/moviesApi';
import { MoviesProps } from '../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router';

export const SearchMovie = () => {
  const [movies, setMovies] = useState<MoviesProps>([]);
  const [query, setQuery] = useSearchParams();
  const [searchValue, setSearchValue] = useState('')

  console.log(query);

  useEffect(() => {
    const newQuery = query.get('query');
    console.log(newQuery);
    if(newQuery) {
      setSearchValue(newQuery);
      getMovieByQuery(newQuery).then(movies => setMovies(movies));
    }
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value;

  setQuery({
    query,
  })

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
        placeholder='Search'
        name='query'
        value={searchValue}
        onChange={({target: {value}}) => {
          setSearchValue(value);
        }}  
        id='' />
      <Button type='submit' variant='contained'>Search</Button>
      </form>
      <MoviesList movies={movies} />
    </div>
  )
}
