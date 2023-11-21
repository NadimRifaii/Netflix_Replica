import React from 'react'
import ImageCard from '../ImageCard/image-card.component'
import './images-container.styles.css'

const ImagesContainer=({images}) => {
    
    return(
        <div className="images-container">
        {images.map(image=>{
            return <ImageCard image={image.src} />
        })}
        </div>
    )
}

export default ImagesContainer;