import './card.styles.css'
import { Link } from 'react-router-dom'
let Card = ({ movie: { original_title: title, backdrop_path: imageUrl, id } }) => {
  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        <div className="image-holder">
          <img src={`https://image.tmdb.org/t/p/w342${imageUrl}`} />
        </div>
        <div className="title">
          {title}
        </div>
      </Link>
    </div>
  )
}
export default Card