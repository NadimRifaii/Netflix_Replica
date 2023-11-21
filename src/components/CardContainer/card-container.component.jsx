import { useEffect, useState, useRef } from "react"
import Card from "../Card/card.component"
import { getMoviesByGenre } from '../../utils/api.utils'
import './card-container.styles.css'
const CardContainer = ({ genre }) => {
  const [moviesArray, setMoviesArray] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardsHolderRef = useRef(null)
  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await getMoviesByGenre(genre.id);
        setMoviesArray(movies.results);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }
    getMovies()
  }, [])
  useEffect(() => {
    if (cardsHolderRef.current) {
      cardsHolderRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);
  useEffect(() => {
    handleIncreaseClick()
  }, [])
  const handleIncreaseClick = () => {
    setScrollPosition(scrollPosition + 600);
  };
  const handleDecreaseClick = () => {
    setScrollPosition(scrollPosition - 600);
  };
  return (
    <div className="card-container">
      <span className={`before`} onClick={handleDecreaseClick}>{`<`}</span>
      <span className={`after`} onClick={handleIncreaseClick}>{`>`}</span>
      <h2>{genre.name}</h2>
      <div ref={cardsHolderRef} className="cards-holder">
        {
          moviesArray.length > 0 && moviesArray.map(movie => {
            return <Card key={movie.id} movie={movie} />
          })
        }
      </div>
    </div>
  )
}
export default CardContainer