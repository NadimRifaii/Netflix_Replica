import './card.styles.css'
let Card = ({ movie: { original_title: title, backdrop_path: imageUrl } }) => {
  return (
    <div className="card">
      <a href="">
        <div className="image-holder">
          <img src={`https://image.tmdb.org/t/p/w342${imageUrl}`} />
        </div>
        <div className="title">
          {title}
        </div>
      </a>
    </div>
  )
}
export default Card