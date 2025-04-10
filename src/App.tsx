import { Routes, Route } from 'react-router';
import './App.css';
import { Cast } from './components/Cast/Cast';
import { lazy } from 'react';

const LazySharedLayout = lazy(() => import('./pages/SharedLayout'));
const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazySearchMovies = lazy(() => import('./pages/SearchMovie'));
const LazyMovieDetails = lazy(() => import('./pages/MovieDetails'));

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LazySharedLayout />}>
          <Route index element={<LazyHomePage />} />
          <Route path='/search' element={<LazySearchMovies />} />
          <Route path='/search/:id' element={<LazyMovieDetails />} >
            <Route path='/search/:id/cast' element={<Cast/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
};

export default App;