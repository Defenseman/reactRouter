import { Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './pages/HomePage';
import { SearchMovie } from './pages/SearchMovie';
import { AppBar } from './components/AppBar/AppBar';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './components/Cast/Cast';

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchMovie />} />
        <Route path='/search/:id' element={<MovieDetails />} >
          <Route path='/search/:id/cast' element={<Cast/>}/>
        </Route>
      </Routes>
    </div>
  )
};

export default App;