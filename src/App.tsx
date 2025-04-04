import { Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './pages/HomePage';
import { SearchMovie } from './pages/SearchMovie';
import { AppBar } from './components/AppBar/AppBar';
import { MovieDetails } from './pages/MovieDetails';

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchMovie />} />
        <Route path='/search/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
};

export default App;