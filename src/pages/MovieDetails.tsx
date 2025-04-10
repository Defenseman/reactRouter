import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { getMovieById } from '../services/moviesApi';
import Button from '@mui/material/Button';

const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const {id} = useParams();
  const [movieData, setMovieData] = useState(null);
  console.log(id)   // выведет тот параметр котрый мы задали при маршрутизации path='/search/:id' 
                            // все что после ":" (здесь это id) например {id: 2343242}
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(location.pathname);

  useEffect(() => {
    getMovieById(id).then((data) => setMovieData(data))
  }, [id])

  if(!movieData) {
    return <h1>Loading...</h1>
  }

  const handleGoBack = () => {
    console.log(location.state);
    navigate(location?.state ?? '/');  // Здесь мы в navigate прокидываем объект(предыдущей страницы)
  }

  const isCastVisible = location.pathname.endsWith('/cast')

  return (
    <div>
      <Button style={{marginTop: '20px'}} onClick={handleGoBack}>Go back</Button>
      <h1>{movieData.title}</h1>
      <img 
        src={`${BASE_IMG}${movieData.backdrop_path}`} 
        alt={`${movieData.title} poster`}
        style={{width: '800px', border: '3px solid white', borderRadius:'5px'}}
        />
      <p>{movieData.overview}</p>
      {isCastVisible ? (
        <Link to={`/search/${id}`}>Hide Cast</Link>
      ) : (
        <Link to={`${location.pathname}/cast`} state={location?.state ?? ''}>Cast</Link>
      )}
      <Outlet />
    </div>
  )
}

export default MovieDetails;