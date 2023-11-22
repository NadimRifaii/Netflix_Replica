import React from "react";
import './image-card.styles.css'
import { Link } from "react-router-dom";
const ImageCard = ({ imageUrl, id }) => {
    return (
        <div className="image-card">
            <Link to={`/movie/${id}`}>
                <div className="image-holder">
                    <img src={`https://image.tmdb.org/t/p/w342${imageUrl}`} alt="movie image" />
                </div>
            </Link>
        </div>
    )
}

export default ImageCard;