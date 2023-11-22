import Header1 from '../../components/Header1Components/Header1.jsx'
import MovieDetails from '../../components/MovieDetails/movieDetails.component.jsx'
import CommingSoonContainer from '../../components/ComingSoonContainer/coming-soon-container.component.jsx'
import ImageContainer from '../../components/ImagesContainer/images-container.component.jsx'
import Footer2 from '../../components/Footer2Components/Footer2.jsx'
import { useParams, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
const MoviePage = () => {
  const { id } = useParams()
  return (
    <div className="movie-page">
      <MovieDetails id={id} />
      <ImageContainer id={id} />
      <CommingSoonContainer />
      <Footer2 />
    </div>
  )
}
export default MoviePage