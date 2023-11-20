import React from "react";
import './image-card.styles.css'

const ImageCard=({image:imageUrl}) =>{
    console.log(imageUrl)
    return(
        <div className="image-card">
            <a href='#'>
                <div className="image-holder">
                    <img src={imageUrl} alt="" />
                </div>
            </a>
        </div>

    )
}

export default ImageCard;