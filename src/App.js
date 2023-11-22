import './App.css'
import MoviePage from './routes/MoviePage/movie-details.component';
import Home from './routes/Home/home.component';
import GenrePage from './routes/GenrePage/genre-page.component.jsx'
import { Routes, Route } from 'react-router-dom';
import Header1 from './components/Header1Components/Header1.jsx';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/genres' element={<GenrePage />} />
        <Route path='/movie' element={<Header1 />} >
          <Route path='/movie/:id' element={<MoviePage />} />
        </Route>
      </Routes>
    </>
  );
}

