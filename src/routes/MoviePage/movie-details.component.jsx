import Header1 from '../../components/Header1Components/Header1.jsx'
import MovieDetails from '../../components/MovieDetails/movieDetails.component.jsx'
import CommingSoonContainer from '../../components/ComingSoonContainer/coming-soon-container.component.jsx'
import ImageContainer from '../../components/ImagesContainer/images-container.component.jsx'
import Footer2 from '../../components/Footer2Components/Footer2.jsx'
const MoviePage = () => {
  return (
    <div className="movie-page">
      <Header1 />
      <MovieDetails />
      <ImageContainer />
      <CommingSoonContainer />
      <Footer2 />
    </div>
  )
}
export default MoviePage