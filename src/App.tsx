import { Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './pages/HomePage';
import { SearchMovie } from './pages/SearchMovie';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/search-movie' element={<SearchMovie />}></Route>
      </Routes>
    </div>
  )
};

export default App;