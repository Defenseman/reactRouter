import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { getMovieById } from '../services/moviesApi';
import Button from '@mui/material/Button';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState(null);
  console.log(params.id)   // выведет тот параметр котрый мы задали при маршрутизации path='/search/:id' 
                            // все что после ":" (здесь это id) например {id: 2343242}
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(location.pathname);

  useEffect(() => {
    getMovieById(params.id).then((data) => setMovieData(data))
  }, [params.id])

  if(!movieData) {
    return <h1>Loading...</h1>
  }

  const handleGoBack = () => {
    console.log(location.state);
    navigate(location?.state ?? '/');  // Здесь мы в navigate прокидываем объект(предыдущей страницы)
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <Button onClick={handleGoBack}>Go back</Button>
      <h3>{movieData.title}</h3>
      <img src={`${BASE_IMG}${movieData.backdrop_path}`} alt={`${movieData.title} poster`} />
      <p>{movieData.overview}</p>
      <Link to={`${location.pathname}/cast`} state={location?.state ?? ''}>Cast</Link>
      <Outlet />
    </div>
  )
}
