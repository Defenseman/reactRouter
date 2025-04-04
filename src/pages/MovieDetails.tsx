import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMovieById } from '../services/moviesApi';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState(null);
  console.log(params.id)   // выведет тот параметр котрый мы задали при маршрутизации path='/search/:id' 
                            // все что после ":" (здесь это id) например {id: 2343242}

  useEffect(() => {
    getMovieById(params.id).then((data) => setMovieData(data))
  }, [params.id])

  if(!movieData) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>{movieData.title}</h3>
      <img src={`${BASE_IMG}${movieData.backdrop_path}`} alt={`${movieData.title} poster`} />
      <p>{movieData.overview}</p>
    </div>
  )
}
