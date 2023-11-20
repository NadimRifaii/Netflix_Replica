import { useEffect, useState } from "react"
import CardContainer from "../CardContainer/card-container.component"
import { getMovieGenres } from '../../utiles/api.utiles'
// css imports
import './genre.styles.css'
const Genre = () => {
  const [genresArray, setGenresArray] = useState([])
  useEffect(() => {
    // async function getGenres() {
    //   try {
    //     const genres = await getMovieGenres();
    //     setGenresArray(genres.genres);
    //   } catch (error) {
    //     console.error("Error fetching genres:", error);
    //   }
    // }
    // getGenres();
    getMovieGenres().then(data => {
      setGenresArray(data.genres)
    })
  }, []);
  return (
    <div className="genres container">
      <div className="top-info">
        <h1>Movies</h1>
        <p>
          Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
        </p>
      </div>
      {
        genresArray.length && genresArray.map(genre => {
          return <CardContainer key={genre.id} genre={genre} />
        })
      }
    </div>
  )
}
export default Genre