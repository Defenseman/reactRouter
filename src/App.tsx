import { Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './pages/HomePage';
import { SearchMovie } from './pages/SearchMovie';
import { AppBar } from './components/AppBar/AppBar';

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchMovie />} />
      </Routes>
    </div>
  )
};

export default App;