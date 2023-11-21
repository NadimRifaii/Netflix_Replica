import React from "react";
import './image-card.styles.css'

const ImageCard = ({ imageUrl }) => {
    console.log(imageUrl)
    return (
        <div className="image-card">
            <a href='#'>
                <div className="image-holder">
                    <img src={`https://image.tmdb.org/t/p/w1280${imageUrl}`} alt="" />
                </div>
            </a>
        </div>

    )
}

export default ImageCard;